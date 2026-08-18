import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Zap, 
  BatteryCharging, 
  ShieldCheck, 
  AlertTriangle, 
  Gauge, 
  Leaf, 
  CheckCircle2, 
  XCircle,
  Navigation,
  MapPin,
  Clock,
  CreditCard,
  Flame,
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  cell_type: 'NMC' | 'LFP';
  mass_kg: number;
  drag_coefficient: number;
  frontal_area_m2: number;
  rolling_resistance_coeff: number;
  drivetrain_efficiency: number;
  battery: {
    total_capacity_kwh: number;
    usable_capacity_kwh: number;
    voltage_v: number;
    max_dc_charge_kw: number;
  };
}

const VEHICLES: Vehicle[] = [
  // --- YERLİ & ÇOK SATANLAR ---
  {
    id: 'togg-t10x-long',
    make: 'Togg',
    model: 'T10X V2 Uzun Menzil',
    cell_type: 'NMC',
    mass_kg: 2165,
    drag_coefficient: 0.28,
    frontal_area_m2: 2.55,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 88.5, usable_capacity_kwh: 83.5, voltage_v: 400, max_dc_charge_kw: 180 }
  },
  {
    id: 'tesla-model-y-lr',
    make: 'Tesla',
    model: 'Model Y Long Range AWD',
    cell_type: 'NMC',
    mass_kg: 1979,
    drag_coefficient: 0.23,
    frontal_area_m2: 2.51,
    rolling_resistance_coeff: 0.010,
    drivetrain_efficiency: 0.94,
    battery: { total_capacity_kwh: 78.1, usable_capacity_kwh: 75.0, voltage_v: 400, max_dc_charge_kw: 250 }
  },
  {
    id: 'tesla-model-3-lr',
    make: 'Tesla',
    model: 'Model 3 Highland Long Range',
    cell_type: 'NMC',
    mass_kg: 1828,
    drag_coefficient: 0.219,
    frontal_area_m2: 2.22,
    rolling_resistance_coeff: 0.0095,
    drivetrain_efficiency: 0.95,
    battery: { total_capacity_kwh: 78.1, usable_capacity_kwh: 75.0, voltage_v: 400, max_dc_charge_kw: 250 }
  },
  {
    id: 'tesla-cybertruck',
    make: 'Tesla',
    model: 'Cybertruck Dual Motor AWD',
    cell_type: 'NMC',
    mass_kg: 3009,
    drag_coefficient: 0.335,
    frontal_area_m2: 3.65,
    rolling_resistance_coeff: 0.0135,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 123.0, usable_capacity_kwh: 120.0, voltage_v: 800, max_dc_charge_kw: 250 }
  },

  // --- 800V & PREMİUM MODELLER ---
  {
    id: 'porsche-taycan-plus',
    make: 'Porsche',
    model: 'Taycan Turbo S Plus (800V)',
    cell_type: 'NMC',
    mass_kg: 2220,
    drag_coefficient: 0.22,
    frontal_area_m2: 2.33,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.93,
    battery: { total_capacity_kwh: 93.4, usable_capacity_kwh: 83.7, voltage_v: 800, max_dc_charge_kw: 270 }
  },
  {
    id: 'hyundai-ioniq-5-awd',
    make: 'Hyundai',
    model: 'Ioniq 5 AWD Long Range (800V)',
    cell_type: 'NMC',
    mass_kg: 2095,
    drag_coefficient: 0.288,
    frontal_area_m2: 2.54,
    rolling_resistance_coeff: 0.0105,
    drivetrain_efficiency: 0.93,
    battery: { total_capacity_kwh: 84.0, usable_capacity_kwh: 80.0, voltage_v: 800, max_dc_charge_kw: 240 }
  },
  {
    id: 'hyundai-ioniq-6-lr',
    make: 'Hyundai',
    model: 'Ioniq 6 Streamliner (800V)',
    cell_type: 'NMC',
    mass_kg: 1985,
    drag_coefficient: 0.21,
    frontal_area_m2: 2.40,
    rolling_resistance_coeff: 0.010,
    drivetrain_efficiency: 0.94,
    battery: { total_capacity_kwh: 77.4, usable_capacity_kwh: 74.0, voltage_v: 800, max_dc_charge_kw: 233 }
  },
  {
    id: 'kia-ev6-gtline',
    make: 'Kia',
    model: 'EV6 GT-Line AWD (800V)',
    cell_type: 'NMC',
    mass_kg: 2090,
    drag_coefficient: 0.28,
    frontal_area_m2: 2.50,
    rolling_resistance_coeff: 0.0105,
    drivetrain_efficiency: 0.93,
    battery: { total_capacity_kwh: 77.4, usable_capacity_kwh: 74.0, voltage_v: 800, max_dc_charge_kw: 233 }
  },
  {
    id: 'lucid-air-gt',
    make: 'Lucid',
    model: 'Air Grand Touring (900V)',
    cell_type: 'NMC',
    mass_kg: 2375,
    drag_coefficient: 0.197,
    frontal_area_m2: 2.37,
    rolling_resistance_coeff: 0.0098,
    drivetrain_efficiency: 0.96,
    battery: { total_capacity_kwh: 118.0, usable_capacity_kwh: 112.0, voltage_v: 900, max_dc_charge_kw: 300 }
  },

  // --- BLADE & LFP MODELLER ---
  {
    id: 'byd-seal-awd',
    make: 'BYD',
    model: 'Seal AWD Excellence (Blade LFP)',
    cell_type: 'LFP',
    mass_kg: 2185,
    drag_coefficient: 0.219,
    frontal_area_m2: 2.29,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 82.5, usable_capacity_kwh: 82.5, voltage_v: 550, max_dc_charge_kw: 150 }
  },
  {
    id: 'byd-atto-3',
    make: 'BYD',
    model: 'Atto 3 Design (Blade LFP)',
    cell_type: 'LFP',
    mass_kg: 1750,
    drag_coefficient: 0.29,
    frontal_area_m2: 2.52,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.91,
    battery: { total_capacity_kwh: 60.5, usable_capacity_kwh: 60.5, voltage_v: 400, max_dc_charge_kw: 88 }
  },
  {
    id: 'byd-dolphin',
    make: 'BYD',
    model: 'Dolphin Comfort (Blade LFP)',
    cell_type: 'LFP',
    mass_kg: 1658,
    drag_coefficient: 0.31,
    frontal_area_m2: 2.38,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.91,
    battery: { total_capacity_kwh: 60.4, usable_capacity_kwh: 60.4, voltage_v: 400, max_dc_charge_kw: 88 }
  },
  {
    id: 'mg4-electric-64',
    make: 'MG',
    model: 'MG4 Electric Luxury 64kWh',
    cell_type: 'NMC',
    mass_kg: 1685,
    drag_coefficient: 0.287,
    frontal_area_m2: 2.41,
    rolling_resistance_coeff: 0.0108,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 64.0, usable_capacity_kwh: 61.7, voltage_v: 400, max_dc_charge_kw: 135 }
  },

  // --- AVRUPA KOMPAKT & SUV ---
  {
    id: 'bmw-i4-edrive40',
    make: 'BMW',
    model: 'i4 eDrive40 Gran Coupe',
    cell_type: 'NMC',
    mass_kg: 2050,
    drag_coefficient: 0.24,
    frontal_area_m2: 2.31,
    rolling_resistance_coeff: 0.010,
    drivetrain_efficiency: 0.93,
    battery: { total_capacity_kwh: 83.9, usable_capacity_kwh: 80.7, voltage_v: 400, max_dc_charge_kw: 205 }
  },
  {
    id: 'mercedes-eqs-450',
    make: 'Mercedes-Benz',
    model: 'EQS 450+ Hyperscreen',
    cell_type: 'NMC',
    mass_kg: 2480,
    drag_coefficient: 0.20,
    frontal_area_m2: 2.51,
    rolling_resistance_coeff: 0.0098,
    drivetrain_efficiency: 0.94,
    battery: { total_capacity_kwh: 108.4, usable_capacity_kwh: 107.8, voltage_v: 400, max_dc_charge_kw: 200 }
  },
  {
    id: 'volkswagen-id4-pro',
    make: 'Volkswagen',
    model: 'ID.4 Pro Performance',
    cell_type: 'NMC',
    mass_kg: 2120,
    drag_coefficient: 0.28,
    frontal_area_m2: 2.65,
    rolling_resistance_coeff: 0.0108,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 82.0, usable_capacity_kwh: 77.0, voltage_v: 400, max_dc_charge_kw: 135 }
  },
  {
    id: 'volvo-ex30-er',
    make: 'Volvo',
    model: 'EX30 Extended Range Ultra',
    cell_type: 'NMC',
    mass_kg: 1830,
    drag_coefficient: 0.28,
    frontal_area_m2: 2.45,
    rolling_resistance_coeff: 0.0105,
    drivetrain_efficiency: 0.93,
    battery: { total_capacity_kwh: 69.0, usable_capacity_kwh: 64.0, voltage_v: 400, max_dc_charge_kw: 153 }
  },
  {
    id: 'renault-megane-e-tech',
    make: 'Renault',
    model: 'Megane E-Tech Iconic EV60',
    cell_type: 'NMC',
    mass_kg: 1636,
    drag_coefficient: 0.29,
    frontal_area_m2: 2.38,
    rolling_resistance_coeff: 0.010,
    drivetrain_efficiency: 0.91,
    battery: { total_capacity_kwh: 60.0, usable_capacity_kwh: 60.0, voltage_v: 400, max_dc_charge_kw: 130 }
  }
];

// --- TÜRKİYE 81 İL + UÇ VE TURİSTİK NOKTALAR VERİTABANI ---
interface LocationPoint {
  id: string;
  name: string;
  lat: number;
  lon: number;
  elevation_m: number;
}

const TURKEY_LOCATIONS: LocationPoint[] = [
  // 81 İl
  { id: 'adana', name: 'Adana', lat: 37.0000, lon: 35.3213, elevation_m: 23 },
  { id: 'adiyaman', name: 'Adıyaman', lat: 37.7648, lon: 38.2786, elevation_m: 669 },
  { id: 'afyon', name: 'Afyonkarahisar', lat: 38.7507, lon: 30.5567, elevation_m: 1021 },
  { id: 'agri', name: 'Ağrı', lat: 39.7191, lon: 43.0503, elevation_m: 1640 },
  { id: 'aksaray', name: 'Aksaray', lat: 38.3687, lon: 34.0370, elevation_m: 980 },
  { id: 'amasya', name: 'Amasya', lat: 40.6501, lon: 35.8353, elevation_m: 411 },
  { id: 'ankara', name: 'Ankara', lat: 39.9334, lon: 32.8597, elevation_m: 938 },
  { id: 'antalya', name: 'Antalya (Merkez)', lat: 36.8969, lon: 30.7133, elevation_m: 30 },
  { id: 'ardahan', name: 'Ardahan', lat: 41.1105, lon: 42.7022, elevation_m: 1829 },
  { id: 'artvin', name: 'Artvin (Merkez)', lat: 41.1828, lon: 41.8183, elevation_m: 345 },
  { id: 'aydin', name: 'Aydın', lat: 37.8444, lon: 27.8458, elevation_m: 65 },
  { id: 'balikesir', name: 'Balıkesir', lat: 39.6484, lon: 27.8826, elevation_m: 145 },
  { id: 'bartin', name: 'Bartın', lat: 41.6344, lon: 32.3375, elevation_m: 25 },
  { id: 'batman', name: 'Batman', lat: 37.8812, lon: 41.1293, elevation_m: 540 },
  { id: 'bayburt', name: 'Bayburt', lat: 40.2552, lon: 40.2249, elevation_m: 1550 },
  { id: 'bilecik', name: 'Bilecik / Bozüyük', lat: 40.1426, lon: 29.9793, elevation_m: 500 },
  { id: 'bingol', name: 'Bingöl', lat: 38.8854, lon: 40.4983, elevation_m: 1151 },
  { id: 'bitlis', name: 'Bitlis', lat: 38.4006, lon: 42.1095, elevation_m: 1545 },
  { id: 'bolu', name: 'Bolu (Dağı Geçişi)', lat: 40.7392, lon: 31.6089, elevation_m: 726 },
  { id: 'burdur', name: 'Burdur', lat: 37.7203, lon: 30.2908, elevation_m: 950 },
  { id: 'bursa', name: 'Bursa', lat: 40.1885, lon: 29.0610, elevation_m: 155 },
  { id: 'canakkale', name: 'Çanakkale (1915 Köprüsü)', lat: 40.1553, lon: 26.4142, elevation_m: 10 },
  { id: 'cankiri', name: 'Çankırı', lat: 40.6013, lon: 33.6134, elevation_m: 730 },
  { id: 'corum', name: 'Çorum', lat: 40.5506, lon: 34.9556, elevation_m: 801 },
  { id: 'denizli', name: 'Denizli / Pamukkale', lat: 37.7765, lon: 29.0864, elevation_m: 354 },
  { id: 'diyarbakir', name: 'Diyarbakır', lat: 37.9144, lon: 40.2306, elevation_m: 670 },
  { id: 'duzce', name: 'Düzce', lat: 40.8438, lon: 31.1565, elevation_m: 160 },
  { id: 'edirne', name: 'Edirne (Kapıkule)', lat: 41.6772, lon: 26.5557, elevation_m: 42 },
  { id: 'elazig', name: 'Elazığ', lat: 38.6810, lon: 39.2264, elevation_m: 1067 },
  { id: 'erzincan', name: 'Erzincan', lat: 39.7500, lon: 39.5000, elevation_m: 1185 },
  { id: 'erzurum', name: 'Erzurum (Palandöken)', lat: 39.9055, lon: 41.2658, elevation_m: 1890 },
  { id: 'eskisehir', name: 'Eskişehir', lat: 39.7667, lon: 30.5256, elevation_m: 792 },
  { id: 'gaziantep', name: 'Gaziantep', lat: 37.0662, lon: 37.3833, elevation_m: 850 },
  { id: 'giresun', name: 'Giresun', lat: 40.9128, lon: 38.3895, elevation_m: 10 },
  { id: 'gumushane', name: 'Gümüşhane (Zigana)', lat: 40.4600, lon: 39.4700, elevation_m: 1210 },
  { id: 'hakkari', name: 'Hakkari (Merkez)', lat: 37.5744, lon: 43.7408, elevation_m: 1720 },
  { id: 'hatay', name: 'Hatay / İskenderun', lat: 36.2023, lon: 36.1606, elevation_m: 100 },
  { id: 'igdir', name: 'Iğdır', lat: 39.9237, lon: 44.0450, elevation_m: 858 },
  { id: 'isparta', name: 'Isparta', lat: 37.7648, lon: 30.5566, elevation_m: 1035 },
  { id: 'istanbul-anadolu', name: 'İstanbul (Pendik / Sabiha Gökçen)', lat: 40.8784, lon: 29.2578, elevation_m: 40 },
  { id: 'istanbul-avrupa', name: 'İstanbul (Maslak / Havalimanı)', lat: 41.1105, lon: 29.0200, elevation_m: 120 },
  { id: 'izmir', name: 'İzmir (Konak / Alsancak)', lat: 38.4192, lon: 27.1287, elevation_m: 5 },
  { id: 'kahramanmaras', name: 'Kahramanmaraş', lat: 37.5858, lon: 36.9371, elevation_m: 568 },
  { id: 'karabuk', name: 'Karabük / Safranbolu', lat: 41.2061, lon: 32.6204, elevation_m: 270 },
  { id: 'karaman', name: 'Karaman', lat: 37.1759, lon: 33.2287, elevation_m: 1033 },
  { id: 'kars', name: 'Kars (Sarıkamış)', lat: 40.6013, lon: 43.0975, elevation_m: 1768 },
  { id: 'kastamonu', name: 'Kastamonu (Ilgaz)', lat: 41.3887, lon: 33.7827, elevation_m: 774 },
  { id: 'kayseri', name: 'Kayseri (Erciyes)', lat: 38.7312, lon: 35.4787, elevation_m: 1050 },
  { id: 'kilis', name: 'Kilis', lat: 36.7184, lon: 37.1212, elevation_m: 660 },
  { id: 'kirikkale', name: 'Kırıkkale', lat: 39.8468, lon: 33.5153, elevation_m: 713 },
  { id: 'kirklareli', name: 'Kırklareli', lat: 41.7333, lon: 27.2167, elevation_m: 203 },
  { id: 'kirsehir', name: 'Kırşehir', lat: 39.1425, lon: 34.1709, elevation_m: 985 },
  { id: 'kocaeli', name: 'Kocaeli (Gebze / İzmit)', lat: 40.7654, lon: 29.9408, elevation_m: 15 },
  { id: 'konya', name: 'Konya', lat: 37.8667, lon: 32.4833, elevation_m: 1024 },
  { id: 'kutahya', name: 'Kütahya', lat: 39.4167, lon: 29.9833, elevation_m: 969 },
  { id: 'malatya', name: 'Malatya', lat: 38.3552, lon: 38.3095, elevation_m: 964 },
  { id: 'manisa', name: 'Manisa', lat: 38.6191, lon: 27.4289, elevation_m: 71 },
  { id: 'mardin', name: 'Mardin (Eski Mardin)', lat: 37.3212, lon: 40.7245, elevation_m: 1085 },
  { id: 'mersin', name: 'Mersin (Liman)', lat: 36.8000, lon: 34.6333, elevation_m: 10 },
  { id: 'mugla', name: 'Muğla (Merkez)', lat: 37.2153, lon: 28.3636, elevation_m: 660 },
  { id: 'mus', name: 'Muş', lat: 38.7432, lon: 41.5064, elevation_m: 1334 },
  { id: 'nevsehir', name: 'Nevşehir (Kapadokya / Ürgüp)', lat: 38.6244, lon: 34.7144, elevation_m: 1224 },
  { id: 'nigde', name: 'Niğde', lat: 37.9667, lon: 34.6833, elevation_m: 1229 },
  { id: 'ordu', name: 'Ordu', lat: 40.9839, lon: 37.8764, elevation_m: 5 },
  { id: 'osmaniye', name: 'Osmaniye', lat: 37.0742, lon: 36.2478, elevation_m: 125 },
  { id: 'rize', name: 'Rize (Ayder Yaylası Yolu)', lat: 41.0201, lon: 40.5234, elevation_m: 6 },
  { id: 'sakarya', name: 'Sakarya (Adapazarı)', lat: 40.7569, lon: 30.3783, elevation_m: 31 },
  { id: 'samsun', name: 'Samsun', lat: 41.2928, lon: 36.3313, elevation_m: 20 },
  { id: 'sanliurfa', name: 'Şanlıurfa (Göbeklitepe)', lat: 37.1591, lon: 38.7969, elevation_m: 518 },
  { id: 'siirt', name: 'Siirt', lat: 37.9333, lon: 41.9500, elevation_m: 895 },
  { id: 'sinop', name: 'Sinop (İnceburun - En Kuzey)', lat: 42.0231, lon: 35.1531, elevation_m: 25 },
  { id: 'sirnak', name: 'Şırnak (Merkez)', lat: 37.5164, lon: 42.4594, elevation_m: 1350 },
  { id: 'sivas', name: 'Sivas', lat: 39.7477, lon: 37.0179, elevation_m: 1278 },
  { id: 'tekirdag', name: 'Tekirdağ', lat: 40.9833, lon: 27.5167, elevation_m: 37 },
  { id: 'tokat', name: 'Tokat', lat: 40.3167, lon: 36.5500, elevation_m: 623 },
  { id: 'trabzon', name: 'Trabzon (Sümela Yolu)', lat: 41.0027, lon: 39.7168, elevation_m: 35 },
  { id: 'tunceli', name: 'Tunceli (Munzur Vadisi)', lat: 39.1079, lon: 39.5401, elevation_m: 915 },
  { id: 'usak', name: 'Uşak', lat: 38.6823, lon: 29.4082, elevation_m: 907 },
  { id: 'van', name: 'Van (Göl Kıyısı)', lat: 38.4891, lon: 43.4089, elevation_m: 1727 },
  { id: 'yalova', name: 'Yalova (Osmangazi Köprüsü)', lat: 40.6500, lon: 29.2667, elevation_m: 10 },
  { id: 'yozgat', name: 'Yozgat', lat: 39.8181, lon: 34.8147, elevation_m: 1300 },
  { id: 'zonguldak', name: 'Zonguldak', lat: 41.4564, lon: 31.7987, elevation_m: 50 },

  // Stratejik, Turistik ve Uç Noktalar
  { id: 'cesme', name: 'İzmir / Çeşme & Alaçatı', lat: 38.3236, lon: 26.3042, elevation_m: 15 },
  { id: 'bodrum', name: 'Muğla / Bodrum (Yalıkavak)', lat: 37.0344, lon: 27.4305, elevation_m: 10 },
  { id: 'fethiye', name: 'Muğla / Fethiye & Ölüdeniz', lat: 36.6500, lon: 29.1167, elevation_m: 20 },
  { id: 'marmaris', name: 'Muğla / Marmaris', lat: 36.8550, lon: 28.2742, elevation_m: 5 },
  { id: 'datca', name: 'Muğla / Datça (Knidos Burnu)', lat: 36.7256, lon: 27.6853, elevation_m: 20 },
  { id: 'kas', name: 'Antalya / Kaş & Kalkan', lat: 36.2000, lon: 29.6375, elevation_m: 15 },
  { id: 'alanya', name: 'Antalya / Alanya', lat: 36.5438, lon: 31.9998, elevation_m: 10 },
  { id: 'anamur', name: 'Mersin / Anamur (En Güney Uç)', lat: 36.0753, lon: 32.8333, elevation_m: 10 },
  { id: 'ayvalik', name: 'Balıkesir / Ayvalık & Cunda', lat: 39.3197, lon: 26.6964, elevation_m: 5 },
  { id: 'hopa', name: 'Artvin / Hopa (Sarp Sınır Kapısı)', lat: 41.3917, lon: 41.4311, elevation_m: 10 },
  { id: 'dogubayazit', name: 'Ağrı / Doğubayazıt (İshak Paşa)', lat: 39.5458, lon: 44.0850, elevation_m: 1625 },
  { id: 'cizre', name: 'Şırnak / Cizre (İpek Yolu)', lat: 37.3272, lon: 42.1869, elevation_m: 377 },
  { id: 'yuksekova', name: 'Hakkari / Yüksekova', lat: 37.5736, lon: 44.2864, elevation_m: 1870 },
  { id: 'semdinli', name: 'Hakkari / Şemdinli (Sıfır Noktası)', lat: 37.2978, lon: 44.5750, elevation_m: 1400 },
  { id: 'igneada', name: 'Kırklareli / İğneada Longoz', lat: 41.8767, lon: 27.9856, elevation_m: 8 }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'route' | 'saver' | 'charging' | 'passport'>('route');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('togg-t10x-long');
  const [loading, setLoading] = useState<boolean>(false);

  // --- 1. ROTA PLANLAYICI STATE ---
  const [originId, setOriginId] = useState<string>('istanbul-anadolu');
  const [destinationId, setDestinationId] = useState<string>('izmir');
  const [departureSoc, setDepartureSoc] = useState<number>(90);
  const [cruisingSpeed, setCruisingSpeed] = useState<number>(120);
  const [routeTemp, setRouteTemp] = useState<number>(24);
  const [routePlanResult, setRoutePlanResult] = useState<any>(null);

  // --- 2. ACİL MENZİL KURTARICI STATE ---
  const [currentSoc, setCurrentSoc] = useState<number>(14);
  const [chargerDistance, setChargerDistance] = useState<number>(42);
  const [currentDrivingSpeed, setCurrentDrivingSpeed] = useState<number>(120);
  const [cabinAcActive, setCabinAcActive] = useState<boolean>(true);
  const [ambientConditionsTemp, setAmbientConditionsTemp] = useState<number>(6);
  const [rescueResult, setRescueResult] = useState<any>(null);

  // --- 3. TELEMETRİ STATE ---
  const [speed, setSpeed] = useState<number>(110);
  const [ambientTemp, setAmbientTemp] = useState<number>(20);
  const [grade, setGrade] = useState<number>(0);
  const [telemetryResult, setTelemetryResult] = useState<any>(null);

  // --- 4. ŞARJ TEŞHİSİ STATE ---
  const [soc, setSoc] = useState<number>(30);
  const [packTemp, setPackTemp] = useState<number>(32);
  const [insulationRes, setInsulationRes] = useState<number>(1200);
  const [chargingResult, setChargingResult] = useState<any>(null);

  // --- 5. BATARYA PASAPORTU STATE ---
  const [ageYears, setAgeYears] = useState<number>(4);
  const [cycles, setCycles] = useState<number>(350);
  const [fastChargeRatio, setFastChargeRatio] = useState<number>(0.3);
  const [passportResult, setPassportResult] = useState<any>(null);

  const selectedVehicle = useMemo(() => 
    VEHICLES.find(v => v.id === selectedVehicleId) || VEHICLES[0],
    [selectedVehicleId]
  );

  // --- HAVERSINE İKİ NOKTA ARASI MESAFE (KARA YOLU DÜZELTMESİYLE) ---
  const calculateDistanceKm = (loc1: LocationPoint, loc2: LocationPoint) => {
    const R = 6371; // km
    const dLat = ((loc2.lat - loc1.lat) * Math.PI) / 180;
    const dLon = ((loc2.lon - loc1.lon) * Math.PI) / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((loc1.lat * Math.PI) / 180) * Math.cos((loc2.lat * Math.PI) / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const straightDist = R * c;
    return Math.round(straightDist * 1.28); // Türkiye otoyol/dağ kıvrım katsayısı (~%28)
  };

  // --- 1. ROTA VE ŞARJ PLANI ÇALIŞTIRICI ---
  const runRoutePlanner = () => {
    if (originId === destinationId) {
      alert('Başlangıç ve varış noktası aynı olamaz!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const origin = TURKEY_LOCATIONS.find(l => l.id === originId)!;
      const destination = TURKEY_LOCATIONS.find(l => l.id === destinationId)!;
      const totalKm = calculateDistanceKm(origin, destination);
      const elevationDelta = destination.elevation_m - origin.elevation_m;

      // Fiziksel Tüketim Hesabı (kWh/100km)
      const v_ms = cruisingSpeed / 3.6;
      const f_aero = 0.5 * 1.225 * selectedVehicle.drag_coefficient * selectedVehicle.frontal_area_m2 * (v_ms ** 2);
      const f_roll = selectedVehicle.rolling_resistance_coeff * selectedVehicle.mass_kg * 9.81;
      const p_mech = ((f_aero + f_roll) * v_ms) / 1000;

      let hvac = 0.6;
      if (routeTemp < 15) hvac += (15 - routeTemp) * 0.14;
      if (routeTemp > 25) hvac += (routeTemp - 25) * 0.12;

      const p_battery = (p_mech / selectedVehicle.drivetrain_efficiency) + hvac;
      let baseConsumption = (p_battery / cruisingSpeed) * 100;

      // Rakım farkı etkisi (Potansiyel Enerji: m*g*h)
      const potentialEnergyKwh = (selectedVehicle.mass_kg * 9.81 * elevationDelta) / (3.6e6 * 0.85);
      const totalEnergyNeededKwh = ((totalKm / 100) * baseConsumption) + potentialEnergyKwh;

      const startingEnergyKwh = selectedVehicle.battery.usable_capacity_kwh * (departureSoc / 100);
      const drivingTimeHours = totalKm / cruisingSpeed;

      // Şarj Molası Algoritması
      const stops = [];
      let totalChargeDurationMin = 0;
      let totalChargingCostTl = 0;
      let arrivalSoc = 0;

      const dcTariffPerKwh = 8.60; // ₺/kWh ortalama Trugo/ZES DC hızlı şarj fiyatı

      if (totalEnergyNeededKwh <= startingEnergyKwh * 0.88) {
        // Tek seferde varış mümkün!
        arrivalSoc = Math.round(((startingEnergyKwh - totalEnergyNeededKwh) / selectedVehicle.battery.usable_capacity_kwh) * 100);
      } else {
        // Şarj Molası Gerekiyor
        const netDeficitKwh = totalEnergyNeededKwh - startingEnergyKwh + (selectedVehicle.battery.usable_capacity_kwh * 0.15); // %15 güvenlik payı
        const stopCount = Math.ceil(netDeficitKwh / (selectedVehicle.battery.usable_capacity_kwh * 0.60)); // Her molada max %60 dolum (15->75)
        
        const energyPerStop = netDeficitKwh / stopCount;
        const avgChargingPowerKw = Math.min(selectedVehicle.battery.max_dc_charge_kw * 0.72, 180); // Ortalama şarj gücü (eğri düşüşü dahil)

        for (let i = 1; i <= stopCount; i++) {
          const stopKm = Math.round((totalKm / (stopCount + 1)) * i);
          const chargeMinutes = Math.round((energyPerStop / avgChargingPowerKw) * 60) + 4; // +4 dk el sıkışma/istasyon başlatma
          const costTl = energyPerStop * dcTariffPerKwh;
          
          totalChargeDurationMin += chargeMinutes;
          totalChargingCostTl += costTl;

          const hubNames = ['Trugo 180kW Hub Dinlenme Tesisi', 'ZES 180kW Otoyol İstasyonu', 'Eşarj 150kW Ultra Fast', 'Astor Şarj 200kW Hub'];
          stops.push({
            station: hubNames[(i - 1) % hubNames.length],
            km: stopKm,
            duration_min: chargeMinutes,
            energy_kwh: Number(energyPerStop.toFixed(1)),
            cost_tl: Math.round(costTl)
          });
        }
        arrivalSoc = 22; // Planlanan güvenli varış şarjı
      }

      setRoutePlanResult({
        origin: origin.name,
        destination: destination.name,
        total_km: totalKm,
        elevation_delta_m: elevationDelta,
        consumption_per_100km: Number(baseConsumption.toFixed(1)),
        total_energy_kwh: Number(totalEnergyNeededKwh.toFixed(1)),
        driving_time_formatted: `${Math.floor(drivingTimeHours)} sa ${Math.round((drivingTimeHours % 1) * 60)} dk`,
        total_duration_formatted: `${Math.floor((drivingTimeHours * 60 + totalChargeDurationMin) / 60)} sa ${Math.round((drivingTimeHours * 60 + totalChargeDurationMin) % 60)} dk`,
        charging_stops: stops,
        total_charge_cost_tl: Math.round(totalChargingCostTl),
        arrival_soc: arrivalSoc,
        requires_charge: stops.length > 0
      });
      setLoading(false);
    }, 200);
  };

  // --- 2. ACİL MENZİL KURTARICI (YOLDA KALMAMA ASİSTANI) ---
  const runRescueAssistant = () => {
    setLoading(true);
    setTimeout(() => {
      const currentUsableKwh = selectedVehicle.battery.usable_capacity_kwh * (currentSoc / 100);
      
      // Mevcut Agresif Sürüş Modeli
      const v_curr_ms = currentDrivingSpeed / 3.6;
      const f_aero_curr = 0.5 * 1.225 * selectedVehicle.drag_coefficient * selectedVehicle.frontal_area_m2 * (v_curr_ms ** 2);
      const f_roll_curr = selectedVehicle.rolling_resistance_coeff * selectedVehicle.mass_kg * 9.81;
      const p_mech_curr = ((f_aero_curr + f_roll_curr) * v_curr_ms) / 1000;
      const hvac_curr = cabinAcActive ? (ambientConditionsTemp < 10 ? 3.5 : 2.2) : 0.2;
      const p_battery_curr = (p_mech_curr / selectedVehicle.drivetrain_efficiency) + hvac_curr;
      const currentConsumption100 = (p_battery_curr / currentDrivingSpeed) * 100;
      const neededEnergyCurrKwh = (chargerDistance / 100) * currentConsumption100;

      const isSafeAsIs = currentUsableKwh >= neededEnergyCurrKwh;
      const deadDistanceKm = isSafeAsIs ? null : Number(((currentUsableKwh / currentConsumption100) * 100).toFixed(1));

      // --- ACİL KURTARMA PLANI (REÇETE) HESABI ---
      const optimalSpeed = Math.min(82, currentDrivingSpeed); // 80-85 km/h optimum aerodinamik tatlı nokta
      const v_opt_ms = optimalSpeed / 3.6;
      const f_aero_opt = 0.5 * 1.225 * selectedVehicle.drag_coefficient * selectedVehicle.frontal_area_m2 * (v_opt_ms ** 2);
      const p_mech_opt = ((f_aero_opt + f_roll_curr) * v_opt_ms) / 1000;
      const hvac_opt = 0.15; // Kabin kliması kapalı, sadece koltuk ısıtma açık (150W)
      const p_battery_opt = (p_mech_opt / selectedVehicle.drivetrain_efficiency) + hvac_opt;
      const optimalConsumption100 = (p_battery_opt / optimalSpeed) * 100;
      const neededEnergyOptKwh = (chargerDistance / 100) * optimalConsumption100;

      const rescuedArrivalSoc = Math.round(((currentUsableKwh - neededEnergyOptKwh) / selectedVehicle.battery.usable_capacity_kwh) * 100);
      const energySavedKwh = Number((neededEnergyCurrKwh - neededEnergyOptKwh).toFixed(1));

      setRescueResult({
        is_safe_as_is: isSafeAsIs,
        dead_distance_km: deadDistanceKm,
        current_consumption: Number(currentConsumption100.toFixed(1)),
        optimal_speed: optimalSpeed,
        optimal_consumption: Number(optimalConsumption100.toFixed(1)),
        energy_saved_kwh: energySavedKwh,
        projected_arrival_soc: rescuedArrivalSoc,
        time_delay_min: Math.round(((chargerDistance / optimalSpeed) - (chargerDistance / currentDrivingSpeed)) * 60)
      });
      setLoading(false);
    }, 150);
  };

  // --- 3. TELEMETRİ TEST MOTORU ---
  const runTelemetrySim = () => {
    setLoading(true);
    setTimeout(() => {
      const v_ms = speed / 3.6;
      const f_aero = 0.5 * 1.225 * selectedVehicle.drag_coefficient * selectedVehicle.frontal_area_m2 * (v_ms ** 2);
      const angle_rad = Math.atan(grade / 100);
      const f_roll = selectedVehicle.rolling_resistance_coeff * selectedVehicle.mass_kg * 9.81 * Math.cos(angle_rad);
      const f_grade = selectedVehicle.mass_kg * 9.81 * Math.sin(angle_rad);
      const p_mech = ((f_aero + f_roll + f_grade) * v_ms) / 1000;

      let hvac_power = 0.6;
      if (ambientTemp < 15) hvac_power += (15 - ambientTemp) * 0.15;
      if (ambientTemp > 25) hvac_power += (ambientTemp - 25) * 0.12;

      let p_battery = (p_mech / selectedVehicle.drivetrain_efficiency) + hvac_power + 0.4;
      p_battery = Math.max(0.5, p_battery);

      const consumption = (p_battery / (speed || 1)) * 100;
      let usable_cap = selectedVehicle.battery.usable_capacity_kwh;
      if (ambientTemp < 0) usable_cap *= (1 + (ambientTemp * 0.008));
      const range = (usable_cap / consumption) * 100;

      setTelemetryResult({
        metrics: {
          consumption_kwh_100km: Number(consumption.toFixed(1)),
          estimated_range_km: Math.round(range)
        },
        physics: {
          f_aero_n: f_aero,
          f_roll_n: f_roll,
          p_battery_kw: p_battery
        },
        thermal: {
          effective_usable_kwh: Number(usable_cap.toFixed(1)),
          hvac_power_kw: Number(hvac_power.toFixed(2))
        }
      });
      setLoading(false);
    }, 120);
  };

  // --- 4. ŞARJ TEŞHİSİ TESTİ ---
  const runChargingDiag = () => {
    setLoading(true);
    setTimeout(() => {
      const faults: string[] = [];
      let is_safe = true;
      let power = selectedVehicle.battery.max_dc_charge_kw;

      if (insulationRes < 500) {
        faults.push('KRİTİK HATA: İzolasyon direnci 500 kΩ altında! DC kontaktörleri açıldı.');
        is_safe = false;
      }
      if (packTemp > 55) {
        faults.push('TERMAL KAÇAK RİSKİ: Batarya sıcaklığı >55°C. Acil durdurma tetiklendi.');
        is_safe = false;
      } else if (packTemp > 45) {
        power *= 0.6;
        faults.push('BMS KISITLAMASI: Yüksek sıcaklık sebebiyle şarj gücü %40 düşürüldü.');
      }

      if (soc > 80) power *= 0.4;
      else if (soc > 60) power *= 0.7;

      setChargingResult({
        diagnostic: {
          is_safe_to_charge: is_safe,
          active_phase: is_safe ? 'PowerDelivery' : 'SessionStopped',
          actual_charge_power_kw: is_safe ? Math.round(power) : 0,
          fault_codes: faults
        }
      });
      setLoading(false);
    }, 120);
  };

  // --- 5. BATARYA PASAPORTU TESTİ ---
  const runPassportGen = () => {
    setLoading(true);
    setTimeout(() => {
      const cal_deg = ageYears * 1.4;
      const cyc_deg = (cycles / 1500) * 12;
      const fast_deg = fastChargeRatio * (cycles / 500) * 4;
      const total_loss = Number((cal_deg + cyc_deg + fast_deg).toFixed(1));
      const soh = Number(Math.max(40, 100 - total_loss).toFixed(1));
      const cur_cap = Number((selectedVehicle.battery.usable_capacity_kwh * (soh / 100)).toFixed(1));

      setPassportResult({
        passport: {
          passport_id: `EU-BAT-${Math.random().toString(36).substring(2, 9).toUpperCase()}-2026`,
          state_of_health_percent: soh,
          current_capacity_kwh: cur_cap,
          chemistry: selectedVehicle.cell_type,
          second_life_status: soh >= 75 ? 'Optimal Araç Kullanımı' : 'Sabit Enerji Depolama (2. Ömür)',
          carbon_footprint_kg_co2_kwh: selectedVehicle.cell_type === 'NMC' ? 73 : 58,
          degradation_breakdown: {
            calendar_aging_percent: Number(cal_deg.toFixed(1)),
            cycle_aging_percent: Number(cyc_deg.toFixed(1)),
            fast_charge_stress_percent: Number(fast_deg.toFixed(1))
          }
        }
      });
      setLoading(false);
    }, 120);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Üst Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 shadow-lg shadow-emerald-500/10">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              VoltPulse SDV <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">v2.5 Pro</span>
            </h1>
            <p className="text-xs text-slate-400">Software-Defined Vehicle Diagnostic & Smart Range Navigation</p>
          </div>
        </div>

        {/* Araç Seçim Kutusu */}
        <div className="w-full md:w-auto flex items-center gap-2.5 bg-slate-900 border border-slate-800 p-2 rounded-xl">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1.5 whitespace-nowrap">Filo:</span>
          <select 
            value={selectedVehicleId} 
            onChange={(e) => setSelectedVehicleId(e.target.value)}
            className="w-full md:w-auto bg-slate-800 text-white font-medium text-xs md:text-sm rounded-lg px-3 py-1.5 outline-none border border-slate-700 focus:border-emerald-500 cursor-pointer"
          >
            {VEHICLES.map(v => (
              <option key={v.id} value={v.id}>
                {v.make} {v.model} ({v.battery.usable_capacity_kwh} kWh - {v.battery.voltage_v}V)
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Navigasyon Tab Bar */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-2 border-b border-slate-800/80 pb-4">
        <button
          onClick={() => setActiveTab('route')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'route' 
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Navigation className="w-4 h-4" /> 🗺️ Rota & Şarj Planlayıcı
        </button>
        <button
          onClick={() => setActiveTab('saver')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'saver' 
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <LifeBuoy className="w-4 h-4" /> 🚨 Menzil Kurtarıcı
        </button>
        <button
          onClick={() => setActiveTab('telemetry')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'telemetry' 
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Activity className="w-4 h-4" /> Telemetri & Fizik
        </button>
        <button
          onClick={() => setActiveTab('charging')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'charging' 
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <BatteryCharging className="w-4 h-4" /> ISO 15118 Teşhis
        </button>
        <button
          onClick={() => setActiveTab('passport')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'passport' 
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <ShieldCheck className="w-4 h-4" /> Batarya Pasaportu
        </button>
      </div>

      {/* Ana İçerik */}
      <main className="max-w-7xl mx-auto mt-6">

        {/* 1. SEKME: ROTA VE ŞARJ PLANLAYICI */}
        {activeTab === 'route' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400" /> Rota & Sürüş Ayarları
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Kalkış Noktası (81 İl + Noktalar)</label>
                    <select 
                      value={originId} 
                      onChange={(e) => setOriginId(e.target.value)}
                      className="w-full bg-slate-800 text-white text-xs font-medium rounded-lg p-2.5 outline-none border border-slate-700 focus:border-emerald-500"
                    >
                      {TURKEY_LOCATIONS.map(l => (
                        <option key={`orig-${l.id}`} value={l.id}>{l.name} (Rakım: {l.elevation_m}m)</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Varış Noktası</label>
                    <select 
                      value={destinationId} 
                      onChange={(e) => setDestinationId(e.target.value)}
                      className="w-full bg-slate-800 text-white text-xs font-medium rounded-lg p-2.5 outline-none border border-slate-700 focus:border-emerald-500"
                    >
                      {TURKEY_LOCATIONS.map(l => (
                        <option key={`dest-${l.id}`} value={l.id}>{l.name} (Rakım: {l.elevation_m}m)</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Çıkış Şarjı (SoC)</span>
                      <span className="font-bold text-emerald-400">%{departureSoc}</span>
                    </div>
                    <input 
                      type="range" min="30" max="100" value={departureSoc} 
                      onChange={(e) => setDepartureSoc(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Otoyol Seyir Hızı</span>
                      <span className="font-bold text-emerald-400">{cruisingSpeed} km/h</span>
                    </div>
                    <input 
                      type="range" min="80" max="150" step="5" value={cruisingSpeed} 
                      onChange={(e) => setCruisingSpeed(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Hava Sıcaklığı</span>
                      <span className="font-bold text-emerald-400">{routeTemp} °C</span>
                    </div>
                    <input 
                      type="range" min="-15" max="42" value={routeTemp} 
                      onChange={(e) => setRouteTemp(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={runRoutePlanner}
                disabled={loading}
                className="mt-6 w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                {loading ? 'Fizik & Molalar Hesaplanıyor...' : 'Akıllı Rotayı Planla'}
              </button>
            </div>

            {/* Rota Sonuç Paneli */}
            <div className="lg:col-span-2">
              {routePlanResult ? (
                <div className="space-y-4">
                  {/* Özet Kartları */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Navigation className="w-3.5 h-3.5 text-emerald-400" /> Mesafe</span>
                      <p className="text-2xl font-black text-white mt-1">{routePlanResult.total_km} <span className="text-xs font-normal text-slate-400">km</span></p>
                      <span className="text-[10px] text-slate-400">Rakım Farkı: {routePlanResult.elevation_delta_m > 0 ? `+${routePlanResult.elevation_delta_m}m` : `${routePlanResult.elevation_delta_m}m`}</span>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> Toplam Süre</span>
                      <p className="text-xl font-black text-cyan-400 mt-1">{routePlanResult.total_duration_formatted}</p>
                      <span className="text-[10px] text-slate-400">Sürüş: {routePlanResult.driving_time_formatted}</span>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" /> Tüketim</span>
                      <p className="text-2xl font-black text-amber-400 mt-1">{routePlanResult.consumption_per_100km} <span className="text-xs font-normal text-slate-400">kWh/100</span></p>
                      <span className="text-[10px] text-slate-400">Toplam: {routePlanResult.total_energy_kwh} kWh</span>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><CreditCard className="w-3.5 h-3.5 text-emerald-400" /> Şarj Maliyeti</span>
                      <p className="text-2xl font-black text-emerald-400 mt-1">{routePlanResult.total_charge_cost_tl} <span className="text-xs font-normal text-slate-400">₺</span></p>
                      <span className="text-[10px] text-slate-400">Varış Şarjı: %{routePlanResult.arrival_soc}</span>
                    </div>
                  </div>

                  {/* Rota Durak Detayı */}
                  <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-sm font-bold text-white mb-4 flex items-center justify-between">
                      <span>Rota & Şarj İstasyonu İtinereri</span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {routePlanResult.requires_charge ? `${routePlanResult.charging_stops.length} Hızlı Şarj Molası` : 'Direkt Varış (Mola Gerekmez)'}
                      </span>
                    </h3>

                    <div className="space-y-4 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                      {/* Çıkış */}
                      <div className="flex items-start gap-4 relative">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                          A
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{routePlanResult.origin}</h4>
                          <p className="text-xs text-slate-400">Yola Çıkış Şarjı: <span className="text-emerald-400 font-semibold">%{departureSoc}</span> • {cruisingSpeed} km/h Sabit Hız</p>
                        </div>
                      </div>

                      {/* Molalar */}
                      {routePlanResult.charging_stops.map((stop: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-4 relative bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 ml-2">
                          <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                            ⚡
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h4 className="text-xs md:text-sm font-bold text-amber-300">{stop.station}</h4>
                              <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">~{stop.cost_tl} ₺</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">
                              Konum: <span className="text-white font-medium">{stop.km}. km</span> • Mola Süresi: <span className="text-emerald-400 font-bold">{stop.duration_min} dakika</span> (+{stop.energy_kwh} kWh)
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Varış */}
                      <div className="flex items-start gap-4 relative">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                          B
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{routePlanResult.destination}</h4>
                          <p className="text-xs text-slate-400">Hedefe Güvenli Varış Şarjı: <span className="text-cyan-400 font-bold">%{routePlanResult.arrival_soc}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[320px] bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                  <Navigation className="w-12 h-12 text-slate-600 mb-3 animate-pulse" />
                  <h3 className="text-base font-semibold text-slate-300">Akıllı Rota Analizini Başlatın</h3>
                  <p className="text-xs text-slate-500 max-w-md mt-1">
                    Türkiye'nin 81 ili ve turistik noktaları arasında rakım farkı, aerodinamik sürtünme ve DC hızlı şarj maliyetlerini hesaplayın.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. SEKME: ACİL MENZİL KURTARICI (YOLDA KALMAMA ASİSTANI) */}
        {activeTab === 'saver' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <h2 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <LifeBuoy className="w-5 h-5" /> Acil Durum Parametreleri
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Mevcut Kalan Batarya (SoC)</span>
                      <span className="font-bold text-rose-400">%{currentSoc}</span>
                    </div>
                    <input 
                      type="range" min="3" max="30" value={currentSoc} 
                      onChange={(e) => setCurrentSoc(Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>En Yakın DC Şarj İstasyonuna Mesafe</span>
                      <span className="font-bold text-white">{chargerDistance} km</span>
                    </div>
                    <input 
                      type="range" min="5" max="100" value={chargerDistance} 
                      onChange={(e) => setChargerDistance(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Şu Anki Seyir Hızınız</span>
                      <span className="font-bold text-white">{currentDrivingSpeed} km/h</span>
                    </div>
                    <input 
                      type="range" min="70" max="160" step="5" value={currentDrivingSpeed} 
                      onChange={(e) => setCurrentDrivingSpeed(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Dış Ortam Sıcaklığı</span>
                      <span className="font-bold text-white">{ambientConditionsTemp} °C</span>
                    </div>
                    <input 
                      type="range" min="-10" max="40" value={ambientConditionsTemp} 
                      onChange={(e) => setAmbientConditionsTemp(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-xs text-slate-300">Kabin Kliması / Isıtıcı Açık</span>
                    <input 
                      type="checkbox" checked={cabinAcActive} 
                      onChange={(e) => setCabinAcActive(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={runRescueAssistant}
                disabled={loading}
                className="mt-6 w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/20"
              >
                {loading ? 'Hesaplanıyor...' : 'Menzil Kurtarma Planını Çıkar'}
              </button>
            </div>

            {/* Kurtarma Reçetesi Ekranı */}
            <div className="lg:col-span-2">
              {rescueResult ? (
                <div className="space-y-4">
                  {/* Durum Başlığı */}
                  <div className={`p-6 rounded-2xl border flex items-start justify-between ${
                    rescueResult.is_safe_as_is 
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' 
                      : 'bg-rose-950/30 border-rose-500/50 text-rose-300'
                  }`}>
                    <div className="flex items-start gap-3">
                      {rescueResult.is_safe_as_is ? (
                        <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-8 h-8 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {rescueResult.is_safe_as_is 
                            ? 'Mevcut Hızla Güvenle Ulaşabilirsiniz' 
                            : '🚨 KRİTİK UYARI: Bu Hızla Giderseniz Yolda Kalırsınız!'}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1">
                          {rescueResult.is_safe_as_is 
                            ? `Mevcut tüketiminizle (${rescueResult.current_consumption} kWh/100km) şarj istasyonuna rahatlıkla varacaksınız.` 
                            : `Bataryanız istasyona ${rescueResult.dead_distance_km}. kilometrede tamamen tükenecek (%0). Lütfen aşağıdaki acil reçeteyi uygulayın!`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reçete Kartı */}
                  <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Flame className="w-4 h-4" /> Hayat Kurtaran Acil Sürüş Reçetesi
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                        <span className="text-xs text-slate-400">Hedef Hız Sabitleme</span>
                        <p className="text-2xl font-black text-amber-400 mt-1">{rescueResult.optimal_speed} <span className="text-xs font-normal text-slate-400">km/h</span></p>
                        <span className="text-[10px] text-slate-400">Hava sürtünmesi %38 azalır</span>
                      </div>

                      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                        <span className="text-xs text-slate-400">Kazanılan Net Enerji</span>
                        <p className="text-2xl font-black text-emerald-400 mt-1">+{rescueResult.energy_saved_kwh} <span className="text-xs font-normal text-slate-400">kWh</span></p>
                        <span className="text-[10px] text-slate-400">HVAC kapalı + Eco Cruise</span>
                      </div>

                      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                        <span className="text-xs text-slate-400">İstasyona Varış Şarjı</span>
                        <p className="text-2xl font-black text-cyan-400 mt-1">%{rescueResult.projected_arrival_soc}</p>
                        <span className="text-[10px] text-slate-400">Güvenli tampon bölge</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>Klima & Fanları Kapatın:</strong> Kabin fanını kapatıp sadece koltuk ısıtmasını açın (Isıtıcı 3500W çekerken koltuk ısıtıcı sadece 120W çeker).</span>
                      </div>
                      <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>Sağ Şeritte Sabit Akış:</strong> Ani hızlanmalardan kaçının ve rejeneratif frenleme seviyesini en yükseğe (Tek Pedal Sürüş) alın.</span>
                      </div>
                      <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/60 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>Zaman Kaybı:</strong> Bu tasarruf sürüşü hedefinize sadece <strong>{rescueResult.time_delay_min} dakika</strong> gecikmeyle, ancak çekici çağırmadan ulaşmanızı sağlar.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[320px] bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                  <LifeBuoy className="w-12 h-12 text-amber-500/40 mb-3" />
                  <h3 className="text-base font-semibold text-slate-300">Menzil Kurtarma Asistanı Hazır</h3>
                  <p className="text-xs text-slate-500 max-w-md mt-1">
                    Bataryanız kritik seviyedeyken yolda kalmamak için anlık hız, sıcaklık ve kalan mesafenizi girip reçete alın.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. SEKME: TELEMETRİ VE FİZİK MOTORU */}
        {activeTab === 'telemetry' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-emerald-400" /> Sürüş Koşulları
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Araç Hızı</span>
                      <span className="font-semibold text-emerald-400">{speed} km/h</span>
                    </div>
                    <input 
                      type="range" min="0" max="220" value={speed} 
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Ortam Sıcaklığı</span>
                      <span className="font-semibold text-emerald-400">{ambientTemp} °C</span>
                    </div>
                    <input 
                      type="range" min="-20" max="45" value={ambientTemp} 
                      onChange={(e) => setAmbientTemp(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Yol Eğimi</span>
                      <span className="font-semibold text-emerald-400">%{grade}</span>
                    </div>
                    <input 
                      type="range" min="-10" max="15" value={grade} 
                      onChange={(e) => setGrade(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={runTelemetrySim}
                disabled={loading}
                className="mt-6 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                {loading ? 'Hesaplanıyor...' : 'Telemetriyi Simüle Et'}
              </button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {telemetryResult ? (
                <>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tahmini Kalan Menzil</span>
                    <div className="my-4">
                      <span className="text-5xl font-black text-white">{telemetryResult.metrics.estimated_range_km}</span>
                      <span className="text-lg font-medium text-emerald-400 ml-2">km</span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Leaf className="w-4 h-4 text-emerald-400" />
                      Efektif Pil Kapasitesi: {telemetryResult.thermal.effective_usable_kwh} kWh
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Anlık Enerji Tüketimi</span>
                    <div className="my-4">
                      <span className="text-5xl font-black text-white">{telemetryResult.metrics.consumption_kwh_100km}</span>
                      <span className="text-lg font-medium text-cyan-400 ml-2">kWh/100km</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Batarya Güç Çekişi: {telemetryResult.physics.p_battery_kw.toFixed(1)} kW
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">Aerodinamik & Direnç Dağılımı</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                        <span className="text-xs text-slate-400">Hava Direnci</span>
                        <p className="text-lg font-bold text-white mt-1">{telemetryResult.physics.f_aero_n.toFixed(0)} N</p>
                      </div>
                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                        <span className="text-xs text-slate-400">Yuvarlanma</span>
                        <p className="text-lg font-bold text-white mt-1">{telemetryResult.physics.f_roll_n.toFixed(0)} N</p>
                      </div>
                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                        <span className="text-xs text-slate-400">Klima Yükü</span>
                        <p className="text-lg font-bold text-amber-400 mt-1">{telemetryResult.thermal.hvac_power_kw} kW</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="md:col-span-2 bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                  <Activity className="w-10 h-10 text-slate-600 mb-3" />
                  <p className="text-sm text-slate-400">Sürüş koşullarını ayarlayıp simülasyonu başlatın.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. SEKME: ISO 15118 ŞARJ TEŞHİSİ */}
        {activeTab === 'charging' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BatteryCharging className="w-5 h-5 text-emerald-400" /> Şarj Parametreleri
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Mevcut Doluluk (SoC)</span>
                      <span className="font-semibold text-emerald-400">%{soc}</span>
                    </div>
                    <input 
                      type="range" min="5" max="98" value={soc} 
                      onChange={(e) => setSoc(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Batarya Sıcaklığı</span>
                      <span className="font-semibold text-emerald-400">{packTemp} °C</span>
                    </div>
                    <input 
                      type="range" min="10" max="65" value={packTemp} 
                      onChange={(e) => setPackTemp(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>İzolasyon Direnci</span>
                      <span className="font-semibold text-emerald-400">{insulationRes} kΩ</span>
                    </div>
                    <input 
                      type="range" min="100" max="2000" step="50" value={insulationRes} 
                      onChange={(e) => setInsulationRes(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={runChargingDiag}
                disabled={loading}
                className="mt-6 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                {loading ? 'Analiz Ediliyor...' : 'Şarj Teşhisini Başlat'}
              </button>
            </div>

            <div className="lg:col-span-2">
              {chargingResult ? (
                <div className="space-y-4">
                  <div className={`p-5 rounded-2xl border flex items-center justify-between ${
                    chargingResult.diagnostic.is_safe_to_charge 
                      ? 'bg-emerald-950/20 border-emerald-500/30' 
                      : 'bg-rose-950/20 border-rose-500/30'
                  }`}>
                    <div className="flex items-center gap-3">
                      {chargingResult.diagnostic.is_safe_to_charge ? (
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      ) : (
                        <XCircle className="w-8 h-8 text-rose-400" />
                      )}
                      <div>
                        <h4 className="font-bold text-white">
                          {chargingResult.diagnostic.is_safe_to_charge ? 'Şarj Güvenli - Protokol Aktif' : 'Güvenlik Protokolü Şarjı Durdurdu'}
                        </h4>
                        <p className="text-xs text-slate-400">Aktif Faz: {chargingResult.diagnostic.active_phase}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">{chargingResult.diagnostic.actual_charge_power_kw}</span>
                      <span className="text-xs font-semibold text-emerald-400 ml-1">kW</span>
                    </div>
                  </div>

                  {chargingResult.diagnostic.fault_codes.length > 0 && (
                    <div className="bg-slate-900/60 border border-rose-900/50 rounded-2xl p-5">
                      <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" /> Tespit Edilen Kritik Arızalar
                      </h4>
                      <ul className="space-y-1.5">
                        {chargingResult.diagnostic.fault_codes.map((code: string, i: number) => (
                          <li key={i} className="text-xs text-rose-300 bg-rose-950/40 px-3 py-2 rounded-lg border border-rose-800/40">
                            {code}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                  <BatteryCharging className="w-10 h-10 text-slate-600 mb-3" />
                  <p className="text-sm text-slate-400">Şarj simülasyonunu başlatın.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. SEKME: DİJİTAL BATARYA PASAPORTU */}
        {activeTab === 'passport' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> Kullanım Geçmişi
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Araç Yaşı</span>
                      <span className="font-semibold text-emerald-400">{ageYears} Yıl</span>
                    </div>
                    <input 
                      type="range" min="1" max="15" value={ageYears} 
                      onChange={(e) => setAgeYears(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Toplam Şarj Döngüsü</span>
                      <span className="font-semibold text-emerald-400">{cycles} Döngü</span>
                    </div>
                    <input 
                      type="range" min="50" max="2500" step="50" value={cycles} 
                      onChange={(e) => setCycles(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>DC Hızlı Şarj Oranı</span>
                      <span className="font-semibold text-emerald-400">%{Math.round(fastChargeRatio * 100)}</span>
                    </div>
                    <input 
                      type="range" min="0" max="1" step="0.05" value={fastChargeRatio} 
                      onChange={(e) => setFastChargeRatio(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={runPassportGen}
                disabled={loading}
                className="mt-6 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                {loading ? 'Sertifikalanıyor...' : 'Pasaport Sertifikası Üret'}
              </button>
            </div>

            <div className="lg:col-span-2">
              {passportResult ? (
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                  <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-mono text-emerald-400">{passportResult.passport.passport_id}</span>
                      <h3 className="text-xl font-bold text-white mt-0.5">{selectedVehicle.make} {selectedVehicle.model}</h3>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-xs font-semibold">
                      {passportResult.passport.second_life_status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                      <span className="text-xs text-slate-400">Sağlık (SOH)</span>
                      <p className="text-2xl font-black text-emerald-400 mt-1">%{passportResult.passport.state_of_health_percent}</p>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                      <span className="text-xs text-slate-400">Kalan Kapasite</span>
                      <p className="text-2xl font-black text-white mt-1">{passportResult.passport.current_capacity_kwh} <span className="text-xs font-normal text-slate-400">kWh</span></p>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                      <span className="text-xs text-slate-400">Kimya</span>
                      <p className="text-2xl font-black text-white mt-1">{passportResult.passport.chemistry}</p>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                      <span className="text-xs text-slate-400">Karbon Ayak İzi</span>
                      <p className="text-2xl font-black text-slate-300 mt-1">{passportResult.passport.carbon_footprint_kg_co2_kwh} <span className="text-xs font-normal text-slate-400">kg/kWh</span></p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60 flex justify-between">
                    <span>Döngü Kaybı: %{passportResult.passport.degradation_breakdown.cycle_aging_percent}</span>
                    <span>Takvim Kaybı: %{passportResult.passport.degradation_breakdown.calendar_aging_percent}</span>
                    <span>DC Şarj Stresi: %{passportResult.passport.degradation_breakdown.fast_charge_stress_percent}</span>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-10 h-10 text-slate-600 mb-3" />
                  <p className="text-sm text-slate-400">EU 2023/1542 batarya sertifikası üretmek için parametreleri seçin.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}