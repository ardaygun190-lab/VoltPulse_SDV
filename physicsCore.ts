// physicsCore.ts - VoltPulse Fizik & Telemetri Çekirdeği
import { Vehicle } from './types';

// Çevresel ve Fiziksel Sabitler
export const GRAVITY = 9.81; // m/s^2 (Yer çekimi ivmesi)
export const AIR_DENSITY_SEA_LEVEL = 1.225; // kg/m^3 (Deniz seviyesi standart hava yoğunluğu - 15°C)
export const DEFAULT_ROLLING_COEFF = 0.012; // Standart binek araç lastik yuvarlanma katsayısı

export interface TelemetryConditions {
  speed_kmh: number;        // Araç hızı (km/h)
  grade_percent: number;    // Yol eğimi (% cinsinden, örn: %3 eğim için 3)
  headwind_kmh?: number;    // Karşıdan esen rüzgar hızı (km/h, arkadan esiyorsa negatif)
  hvac_power_kw?: number;   // Klima ve araç elektroniği ek güç tüketimi (kW)
}

export interface PowerBreakdown {
  speed_ms: number;
  f_aero_n: number;         // Aerodinamik sürtünme kuvveti (Newton)
  f_roll_n: number;         // Yuvarlanma direnci kuvveti (Newton)
  f_gravity_n: number;      // Eğim / Yer çekimi direnci (Newton)
  f_total_n: number;        // Tekerlekteki toplam direnç kuvveti (Newton)
  p_wheel_kw: number;       // Tekerlekte gereken mekanik güç (kW)
  p_battery_kw: number;     // Bataryadan çekilen toplam elektriksel güç (kW)
}

/**
 * Aerodinamik Sürtünme Kuvveti (Faero = 0.5 * rho * Cd * A * v_rel^2)
 */
export function calculateAeroDrag(vehicle: Vehicle, speed_ms: number, headwind_ms: number = 0): number {
  const relativeSpeed = speed_ms + headwind_ms;
  if (relativeSpeed <= 0) return 0;
  return 0.5 * AIR_DENSITY_SEA_LEVEL * vehicle.cd * vehicle.frontal_area_m2 * Math.pow(relativeSpeed, 2);
}

/**
 * Yuvarlanma Direnci Kuvveti (Froll = Crr * m * g * cos(theta))
 */
export function calculateRollingResistance(vehicle: Vehicle, theta_rad: number): number {
  const crr = vehicle.rolling_res_coef ?? DEFAULT_ROLLING_COEFF;
  return crr * vehicle.mass_kg * GRAVITY * Math.cos(theta_rad);
}

/**
 * Eğim / Yer Çekimi Kuvveti (Fgravity = m * g * sin(theta))
 */
export function calculateGravityForce(vehicle: Vehicle, theta_rad: number): number {
  return vehicle.mass_kg * GRAVITY * Math.sin(theta_rad);
}

/**
 * Belirli bir sürüş koşulunda anlık güç talebini ve batarya tüketimini hesaplayan ana fonksiyon
 */
export function calculateRequiredPower(vehicle: Vehicle, conditions: TelemetryConditions): PowerBreakdown {
  const speed_ms = conditions.speed_kmh / 3.6;
  const headwind_ms = (conditions.headwind_kmh ?? 0) / 3.6;
  
  // % Eğim -> Radyan dönüşümü: theta = atan(grade / 100)
  const theta_rad = Math.atan(conditions.grade_percent / 100);

  // Direnç kuvvetlerini hesapla
  const f_aero_n = calculateAeroDrag(vehicle, speed_ms, headwind_ms);
  const f_roll_n = calculateRollingResistance(vehicle, theta_rad);
  const f_gravity_n = calculateGravityForce(vehicle, theta_rad);

  const f_total_n = f_aero_n + f_roll_n + f_gravity_n;

  // Mekanik Güç: P = F * v (Watt -> kW)
  const p_wheel_kw = (f_total_n * speed_ms) / 1000;

  // Bataryadan çekilen güç: Motor verimi + HVAC yükü
  const hvac = conditions.hvac_power_kw ?? 1.5; // Standart 1.5 kW klima yükü
  let p_battery_kw: number;

  if (p_wheel_kw >= 0) {
    // Çekiş anı: Motor verimsizliği bataryadan daha fazla güç çekilmesine yol açar
    p_battery_kw = (p_wheel_kw / vehicle.motor_efficiency) + hvac;
  } else {
    // Rejeneratif Frenleme (Yokuş aşağı): Kinetik enerjinin bir kısmı bataryaya geri döner
    const regenEfficiency = 0.80; // Rejenerasyon geri kazanım verimi
    p_battery_kw = (p_wheel_kw * regenEfficiency) + hvac;
  }

  return {
    speed_ms,
    f_aero_n,
    f_roll_n,
    f_gravity_n,
    f_total_n,
    p_wheel_kw,
    p_battery_kw
  };
}