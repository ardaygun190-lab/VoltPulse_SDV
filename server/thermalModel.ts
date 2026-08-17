// thermalModel.ts - Ortam Sıcaklığı ve Batarya Termal Modeli
import { Vehicle } from './types';

export interface ThermalConditions {
  ambient_temp_c: number; // Dış hava sıcaklığı (°C)
  cabin_target_temp_c?: number; // İstenen kabin sıcaklığı (Varsayılan: 21°C)
}

export interface ThermalImpact {
  hvac_power_kw: number;         // Klimanın çektiği anlık elektriksel güç (kW)
  usable_capacity_factor: number;// Soğuk havada bataryanın kimyasal verim çarpanı (0-1 arası)
  effective_usable_kwh: number;  // Sıcaklık etkisiyle kalan net kullanılabilir batarya (kWh)
}

/**
 * Dış sıcaklığa bağlı klima yükü ve batarya kimyasal kapasite kaybını hesaplar.
 */
export function calculateThermalImpact(vehicle: Vehicle, thermal: ThermalConditions): ThermalImpact {
  const targetTemp = thermal.cabin_target_temp_c ?? 21;
  const tempDiff = Math.abs(thermal.ambient_temp_c - targetTemp);

  // 1. HVAC (Klima) Güç Tüketimi Hesabı
  // Isı pompası / Rezistans: Sıcaklık farkı arttıkça klima yükü artar (Tepe: 4.5 kW)
  let hvac_power_kw = 0.5; // Taban havalandırma yükü
  if (tempDiff > 2) {
    hvac_power_kw += Math.min(tempDiff * 0.18, 4.0);
  }

  // 2. Elektro-kimyasal Sıcaklık Çarpanı
  // NMC hücreler soğukta daha dirençlidir, LFP hücreler 0°C altında ciddi iyon transferi kaybeder.
  let capacityFactor = 1.0;
  const temp = thermal.ambient_temp_c;

  if (temp < 20) {
    if (vehicle.cell_type === 'LFP') {
      // LFP soğukta daha sert düşer (-10°C'de yaklaşık %25-30 kayıp)
      capacityFactor = Math.max(0.70, 1.0 - (20 - temp) * 0.012);
    } else {
      // NMC soğukta daha stabil (-10°C'de yaklaşık %15 kayıp)
      capacityFactor = Math.max(0.82, 1.0 - (20 - temp) * 0.006);
    }
  }

  const effective_usable_kwh = vehicle.battery.usable_capacity_kwh * capacityFactor;

  return {
    hvac_power_kw,
    usable_capacity_factor: capacityFactor,
    effective_usable_kwh
  };
}