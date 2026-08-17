// types.ts - VoltPulse Platformu Teknik Veri Modelleri

export interface Vehicle {
  // Kimlik Bilgileri
  id: string;
  make: string;
  model: string;
  segment: 'SUV' | 'Sedan' | 'Hatchback' | 'Sport' | 'Truck';

  // Fizik & Dinamik Motoru Parametreleri
  mass_kg: number;
  cd: number;
  frontal_area_m2: number;
  motor_efficiency: number;
  rolling_res_coef?: number;

  // Batarya & Şarj Parametreleri
  battery: {
    nominal_capacity_kwh: number;
    usable_capacity_kwh: number;
    voltage_v: number;
    max_dc_charge_kw: number;
  };

  // Batarya Kimyası & Yaşlanma Modeli
  cell_type: 'NMC' | 'LFP';
}