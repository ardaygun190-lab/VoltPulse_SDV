// vehicles.ts - VoltPulse Platformu Zengin Araç Veritabanı (V1.0)
import { Vehicle } from './types'; // types.ts'den tanımladığımız yapıyı içe aktar

// Standart Parametreler (Hesaplama tutarlılığı için)
const STD_MOTOR_EFF = 0.93; // Sektör ortalaması motor/inverter verimi
const STD_ROLL_RES = 0.012;  // Standart binek araç lastikleri yuvarlanma direnci

/**
| Araç (Make/Model) | Segment | Ağırlık ($kg$) | $C_d$ | Alan ($m^2$) | Usable kWh | DC kW | Voltaj | Pil |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
* Bu tabloyu temel alan, 20+ modelden oluşan profesyonel dijital ikiz havuzu.
* Ağırlıklara standart 75kg sürücü eklenmiştir.
*/
export const vehicles: Vehicle[] = [
  // --- SEGMENT: SUV ---
  {
    id: "togg-t10x-long",
    make: "Togg",
    model: "T10X Long Range",
    segment: 'SUV',
    mass_kg: 2165 + 75,
    cd: 0.29,
    frontal_area_m2: 2.85,
    motor_efficiency: 0.93,
    battery: {
      nominal_capacity_kwh: 88.5,
      usable_capacity_kwh: 83.5,
      voltage_v: 400,
      max_dc_charge_kw: 180,
    },
    cell_type: 'NMC'
  },
  {
    id: "tesla-model-y-lr",
    make: "Tesla",
    model: "Model Y LR",
    segment: 'SUV',
    mass_kg: 2054 + 75,
    cd: 0.23, // Aerodinamik avantaj
    frontal_area_m2: 2.54,
    motor_efficiency: 0.95,
    battery: {
      nominal_capacity_kwh: 82.0,
      usable_capacity_kwh: 75.0,
      voltage_v: 400,
      max_dc_charge_kw: 250,
    },
    cell_type: 'NMC'
  },
  {
    id: "hyundai-ioniq5-74",
    make: "Hyundai",
    model: "Ioniq 5 (74kWh)",
    segment: 'SUV',
    mass_kg: 2015 + 75,
    cd: 0.288,
    frontal_area_m2: 2.80,
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 77.4,
      usable_capacity_kwh: 74.0,
      voltage_v: 800, // 800V Avantajı
      max_dc_charge_kw: 233,
    },
    cell_type: 'NMC'
  },
  {
    id: "vw-id-buzz-pro",
    make: "VW",
    model: "ID.Buzz Pro",
    segment: 'SUV', // Aslen Minivan ama platformda SUV olarak sınıflandırdık
    mass_kg: 2471 + 75, // Çok ağır
    cd: 0.285,
    frontal_area_m2: 3.10, // Devasa ön alan
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 82.0,
      usable_capacity_kwh: 77.0,
      voltage_v: 400,
      max_dc_charge_kw: 170,
    },
    cell_type: 'NMC'
  },
  {
    id: "volvo-ex30-twin",
    make: "Volvo",
    model: "EX30 Twin Motor",
    segment: 'SUV',
    mass_kg: 1960 + 75,
    cd: 0.28,
    frontal_area_m2: 2.60,
    motor_efficiency: 0.94, // Performans odaklı
    battery: {
      nominal_capacity_kwh: 69.0,
      usable_capacity_kwh: 64.0,
      voltage_v: 400,
      max_dc_charge_kw: 153,
    },
    cell_type: 'NMC'
  },
  {
    id: "ford-mach-e-er",
    make: "Ford",
    model: "Mustang Mach-E ER",
    segment: 'SUV',
    mass_kg: 2182 + 75,
    cd: 0.28,
    frontal_area_m2: 2.70,
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 98.7,
      usable_capacity_kwh: 91.0,
      voltage_v: 400,
      max_dc_charge_kw: 150,
    },
    cell_type: 'NMC'
  },

  // --- SEGMENT: SEDAN ---
  {
    id: "tesla-model3-rwd",
    make: "Tesla",
    model: "Model 3 RWD (LFP)",
    segment: 'Sedan',
    mass_kg: 1836 + 75,
    cd: 0.219, // Sınıf lideri aerodinamik
    frontal_area_m2: 2.22,
    motor_efficiency: 0.95,
    battery: {
      nominal_capacity_kwh: 60.0,
      usable_capacity_kwh: 57.5,
      voltage_v: 400,
      max_dc_charge_kw: 170,
    },
    cell_type: 'LFP' // Kritik Fark: Batarya Pasaportunda LFP modelleme
  },
  {
    id: "lucid-air-dream-r",
    make: "Lucid",
    model: "Air Dream Edition R",
    segment: 'Sedan',
    mass_kg: 2375 + 75,
    cd: 0.197, // Dünya rekoru aerodinamik
    frontal_area_m2: 2.20,
    motor_efficiency: 0.96, // Eşsiz inverter teknolojisi
    battery: {
      nominal_capacity_kwh: 118.0,
      usable_capacity_kwh: 112.0,
      voltage_v: 900, // 900V Mimarisi
      max_dc_charge_kw: 300,
    },
    cell_type: 'NMC'
  },
  {
    id: "mercedes-eqs-450",
    make: "Mercedes",
    model: "EQS 450+",
    segment: 'Sedan',
    mass_kg: 2480 + 75, // Lüks ve ağır
    cd: 0.20,
    frontal_area_m2: 2.50,
    motor_efficiency: 0.94,
    battery: {
      nominal_capacity_kwh: 120.0,
      usable_capacity_kwh: 107.8,
      voltage_v: 400, // Mercedes ana akımda 400V tercih etti
      max_dc_charge_kw: 200,
    },
    cell_type: 'NMC'
  },
  {
    id: "bmw-i4-edrive40",
    make: "BMW",
    model: "i4 eDrive40",
    segment: 'Sedan',
    mass_kg: 2125 + 75,
    cd: 0.24,
    frontal_area_m2: 2.35,
    motor_efficiency: 0.93,
    battery: {
      nominal_capacity_kwh: 83.9,
      usable_capacity_kwh: 80.7,
      voltage_v: 400,
      max_dc_charge_kw: 205,
    },
    cell_type: 'NMC'
  },
  {
    id: "bmw-i7-xdrive60",
    make: "BMW",
    model: "i7 xDrive60",
    segment: 'Sedan',
    mass_kg: 2715 + 75, // En ağır sedanlardan
    cd: 0.24,
    frontal_area_m2: 2.60,
    motor_efficiency: 0.93,
    battery: {
      nominal_capacity_kwh: 105.7,
      usable_capacity_kwh: 101.7,
      voltage_v: 400,
      max_dc_charge_kw: 195,
    },
    cell_type: 'NMC'
  },
  {
    id: "byd-seal-awd",
    make: "BYD",
    model: "Seal AWD (82kWh)",
    segment: 'Sedan',
    mass_kg: 2130 + 75,
    cd: 0.219,
    frontal_area_m2: 2.30,
    motor_efficiency: 0.93,
    battery: {
      nominal_capacity_kwh: 82.5,
      usable_capacity_kwh: 82.5,
      voltage_v: 400,
      max_dc_charge_kw: 150,
    },
    cell_type: 'LFP' // Batarya Pasaportu için LFP Seal
  },

  // --- SEGMENT: HATCHBACK ---
  {
    id: "vw-id3-pro",
    make: "VW",
    model: "ID.3 Pro (58kWh)",
    segment: 'Hatchback',
    mass_kg: 1813 + 75,
    cd: 0.267,
    frontal_area_m2: 2.36,
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 62.0,
      usable_capacity_kwh: 58.0,
      voltage_v: 400,
      max_dc_charge_kw: 120,
    },
    cell_type: 'NMC'
  },
  {
    id: "renault-megane-e",
    make: "Renault",
    model: "Megane E-Tech EV60",
    segment: 'Hatchback',
    mass_kg: 1711 + 75, // Nispeten hafif
    cd: 0.29,
    frontal_area_m2: 2.40,
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 60.0,
      usable_capacity_kwh: 60.0,
      voltage_v: 400,
      max_dc_charge_kw: 130,
    },
    cell_type: 'NMC'
  },
  {
    id: "byd-dolphin-comfort",
    make: "BYD",
    model: "Dolphin Comfort",
    segment: 'Hatchback',
    mass_kg: 1658 + 75,
    cd: 0.30,
    frontal_area_m2: 2.40,
    motor_efficiency: 0.92,
    battery: {
      nominal_capacity_kwh: 60.4,
      usable_capacity_kwh: 60.4,
      voltage_v: 400,
      max_dc_charge_kw: 88, // LFP dezavantajı
    },
    cell_type: 'LFP'
  },
  {
    id: "fiat-500e-42",
    make: "Fiat",
    model: "500e (42kWh)",
    segment: 'Hatchback',
    mass_kg: 1365 + 75, // Çok hafif
    cd: 0.32, // Kötü aerodinamik ama küçük alan
    frontal_area_m2: 2.10,
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 42.0,
      usable_capacity_kwh: 37.3,
      voltage_v: 400,
      max_dc_charge_kw: 85,
    },
    cell_type: 'NMC'
  },
  {
    id: "nissan-leaf-62",
    make: "Nissan",
    model: "Leaf e+ (62kWh)",
    segment: 'Hatchback',
    mass_kg: 1731 + 75,
    cd: 0.28,
    frontal_area_m2: 2.40,
    motor_efficiency: 0.91, // Eski nesil motor
    battery: {
      nominal_capacity_kwh: 62.0,
      usable_capacity_kwh: 59.0,
      voltage_v: 400,
      max_dc_charge_kw: 100, // ChaDeMo standardı (Deşarj Teşhisi için kritik)
    },
    cell_type: 'NMC'
  },
  {
    id: "dacia-spring-27",
    make: "Dacia",
    model: "Spring Electric 45",
    segment: 'Hatchback',
    mass_kg: 975 + 75, // Sınıfının en hafifi
    cd: 0.30,
    frontal_area_m2: 2.15,
    motor_efficiency: 0.90, // Verimlilik düşük
    battery: {
      nominal_capacity_kwh: 27.4,
      usable_capacity_kwh: 26.8,
      voltage_v: 400,
      max_dc_charge_kw: 30, // Çok yavaş şarj
    },
    cell_type: 'NMC'
  },

  // --- SEGMENT: SPORT & PERFORMANCE ---
  {
    id: "porsche-taycan-plus",
    make: "Porsche",
    model: "Taycan Plus (93kWh)",
    segment: 'Sport',
    mass_kg: 2220 + 75,
    cd: 0.22, // Aerodinamik harika
    frontal_area_m2: 2.33,
    motor_efficiency: 0.96, // Pist odaklı verim
    battery: {
      nominal_capacity_kwh: 93.4,
      usable_capacity_kwh: 97.0, // Porsche usable verisini brüt olarak verebilir, teyit edilmeli
      voltage_v: 800, // 800V Öncüsü
      max_dc_charge_kw: 320, // Tepe şarj hızı
    },
    cell_type: 'NMC'
  },
  {
    id: "kia-ev6-gt",
    make: "Kia",
    model: "EV6 GT (77kWh)",
    segment: 'Sport', // SUV platformu ama GT performans sınıfı
    mass_kg: 2185 + 75,
    cd: 0.28,
    frontal_area_m2: 2.65,
    motor_efficiency: 0.94,
    battery: {
      nominal_capacity_kwh: 77.4,
      usable_capacity_kwh: 74.0,
      voltage_v: 800,
      max_dc_charge_kw: 233,
    },
    cell_type: 'NMC'
  },

  // --- SEGMENT: TRUCK / PICKUP ---
  {
    id: "tesla-cybertruck-awd",
    make: "Tesla",
    model: "Cybertruck AWD",
    segment: 'Truck',
    mass_kg: 3104 + 75, // Devasa kütle
    cd: 0.34, // Kötü aerodinamik
    frontal_area_m2: 3.80, // En büyük ön alan
    motor_efficiency: 0.94,
    battery: {
      nominal_capacity_kwh: 123.0,
      usable_capacity_kwh: 123.0, // Tesla genellikleusable'ı tam verir
      voltage_v: 800, // 800V Cybertruck
      max_dc_charge_kw: 350,
    },
    cell_type: 'NMC' // 4680 hücreler NMC kimyası
  },
  {
    id: "rivian-r1t-large",
    make: "Rivian",
    model: "R1T Large Pack",
    segment: 'Truck',
    mass_kg: 3150 + 75, // Cybertruck'tan da ağır
    cd: 0.30,
    frontal_area_m2: 3.50,
    motor_efficiency: STD_MOTOR_EFF,
    battery: {
      nominal_capacity_kwh: 135.0,
      usable_capacity_kwh: 135.0,
      voltage_v: 400,
      max_dc_charge_kw: 220,
    },
    cell_type: 'NMC'
  }
];