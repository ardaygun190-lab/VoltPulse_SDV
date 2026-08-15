// server/batteryPassport.ts - Batarya Sağlığı (SOH) ve Dijital Pasaport Motoru
import { Vehicle } from '../types';

export interface BatteryUsageHistory {
  vehicle_age_years: number;          // Araç yaşı (yıl)
  total_mileage_km: number;           // Toplam yapılan kilometre
  charge_cycles: number;              // Eşdeğer tam şarj döngüsü sayısı (EFC)
  fast_charge_ratio: number;          // %0 - %1 arası DC hızlı şarj oranı (Örn: 0.40 -> %40 DC)
  average_storage_soc: number;        // Günlük bekleme ortalama doluluk oranı (%50, %80, vb.)
}

export interface BatteryPassportData {
  passport_id: string;                // Benzersiz pasaport kimliği (EU-BAT-XXXX)
  vehicle_vin_prefix: string;
  chemistry: 'NMC' | 'LFP';
  original_capacity_kwh: number;
  current_capacity_kwh: number;
  state_of_health_percent: number;    // Anlık SOH (%100 üzerinden)
  degradation_breakdown: {
    cycle_aging_percent: number;      // Döngü kaynaklı kayıp (%)
    calendar_aging_percent: number;   // Takvimsel zaman kaynaklı kayıp (%)
    fast_charge_stress_percent: number; // DC yüksek akım stresi kaybı (%)
  };
  carbon_footprint_kg_co2_kwh: number;// Üretim karbon ayak izi (kg CO2 eq / kWh)
  second_life_status: 'VEHICLE_OPTIMAL' | 'SECOND_LIFE_SUITABLE' | 'RECYCLING_REQUIRED';
}

/**
 * Elektro-kimyasal batarya yaşlanması ve SOH hesaplama motoru
 */
export function calculateBatteryHealth(
  vehicle: Vehicle,
  history: BatteryUsageHistory
): BatteryPassportData {
  const isLFP = vehicle.cell_type === 'LFP';

  // 1. Döngüsel Yaşlanma (Cycle Aging)
  // LFP hücreler ~3500 döngüde %20 kaybederken, NMC hücreler ~1500 döngüde %20 kaybeder.
  const cycleDegradationRate = isLFP ? 0.0057 : 0.0133; // % kayıp / 100 döngü
  const cycleAging = (history.charge_cycles / 100) * cycleDegradationRate;

  // 2. Takvimsel Yaşlanma (Calendar Aging - Zamana ve Bekleme SoC'sine bağlı SEI katmanı kalınlaşması)
  const socStressFactor = history.average_storage_soc > 80 ? 1.35 : 1.0;
  const calendarDegradationRate = isLFP ? 0.4 : 0.6; // Yıllık baz kayıp (%)
  const calendarAging = Math.sqrt(history.vehicle_age_years) * calendarDegradationRate * socStressFactor;

  // 3. DC Hızlı Şarj Stresi (Lithium Plating & Termal Gerilim)
  const fastChargeStress = history.fast_charge_ratio * (history.charge_cycles * 0.003);

  // Toplam Kapasite Kaybı ve SOH Hesabı
  const totalLossPercent = Math.min(cycleAging + calendarAging + fastChargeStress, 40);
  const soh = Number((100 - totalLossPercent).toFixed(2));
  const currentCapacity = Number(((vehicle.battery.usable_capacity_kwh * soh) / 100).toFixed(2));

  // 4. İkinci Hayat (Second-Life) Değerlendirmesi
  let secondLifeStatus: BatteryPassportData['second_life_status'] = 'VEHICLE_OPTIMAL';
  if (soh < 70) {
    secondLifeStatus = 'RECYCLING_REQUIRED';
  } else if (soh < 80) {
    secondLifeStatus = 'SECOND_LIFE_SUITABLE'; // Şebeke depolama (BESS) için uygun
  }

  // Karbon Ayak İzi (AB Standart benchmark: NMC ~75 kg/kWh, LFP ~60 kg/kWh)
  const carbonFootprint = isLFP ? 58.5 : 74.2;

  return {
    passport_id: `EU-BAT-${vehicle.id.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`,
    vehicle_vin_prefix: `VLT${vehicle.make.substring(0, 3).toUpperCase()}`,
    chemistry: vehicle.cell_type,
    original_capacity_kwh: vehicle.battery.usable_capacity_kwh,
    current_capacity_kwh: currentCapacity,
    state_of_health_percent: soh,
    degradation_breakdown: {
      cycle_aging_percent: Number(cycleAging.toFixed(2)),
      calendar_aging_percent: Number(calendarAging.toFixed(2)),
      fast_charge_stress_percent: Number(fastChargeStress.toFixed(2))
    },
    carbon_footprint_kg_co2_kwh: carbonFootprint,
    second_life_status: secondLifeStatus
  };
}