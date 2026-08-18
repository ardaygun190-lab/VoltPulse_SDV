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
  ChevronRight
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

  // --- AVRUPA PREMİUM & KOMPAKT ---
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

// --- 81 İLİN TAMAMI (01 - 81 EKSİKSİZ PLAKA SIRASIYLA) ---
interface DistrictItem {
  id: string;
  name: string;
  lat: number;
  lon: number;
  elevation_m: number;
}

interface ProvinceItem {
  id: string;
  name: string;
  districts: DistrictItem[];
}

const TURKEY_PROVINCES: ProvinceItem[] = [
  { id: 'adana', name: '01 Adana', districts: [{ id: 'seyhan', name: 'Seyhan', lat: 36.99, lon: 35.32, elevation_m: 28 }, { id: 'cukurova', name: 'Çukurova', lat: 37.05, lon: 35.28, elevation_m: 65 }, { id: 'ceyhan', name: 'Ceyhan', lat: 37.02, lon: 35.81, elevation_m: 30 }, { id: 'kozan', name: 'Kozan', lat: 37.45, lon: 35.81, elevation_m: 130 }] },
  { id: 'adiyaman', name: '02 Adıyaman', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.76, lon: 38.27, elevation_m: 669 }, { id: 'kahta', name: 'Kahta', lat: 37.78, lon: 38.62, elevation_m: 750 }, { id: 'besni', name: 'Besni', lat: 37.69, lon: 37.96, elevation_m: 890 }, { id: 'golbasi', name: 'Gölbaşı', lat: 37.78, lon: 37.64, elevation_m: 895 }] },
  { id: 'afyonkarahisar', name: '03 Afyonkarahisar', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.75, lon: 30.55, elevation_m: 1021 }, { id: 'sandikli', name: 'Sandıklı', lat: 38.46, lon: 30.27, elevation_m: 1080 }, { id: 'dinar', name: 'Dinar', lat: 38.06, lon: 30.16, elevation_m: 875 }, { id: 'bolvadin', name: 'Bolvadin', lat: 38.71, lon: 31.05, elevation_m: 990 }] },
  { id: 'agri', name: '04 Ağrı', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.71, lon: 43.05, elevation_m: 1640 }, { id: 'dogubayazit', name: 'Doğubayazıt', lat: 39.54, lon: 44.08, elevation_m: 1625 }, { id: 'patnos', name: 'Patnos', lat: 39.23, lon: 42.86, elevation_m: 1650 }, { id: 'diyadin', name: 'Diyadin', lat: 39.55, lon: 43.68, elevation_m: 1925 }] },
  { id: 'amasya', name: '05 Amasya', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.65, lon: 35.83, elevation_m: 411 }, { id: 'merzifon', name: 'Merzifon', lat: 40.87, lon: 35.46, elevation_m: 750 }, { id: 'suluova', name: 'Suluova', lat: 40.83, lon: 35.65, elevation_m: 510 }, { id: 'tasova', name: 'Taşova', lat: 40.77, lon: 36.32, elevation_m: 230 }] },
  { id: 'ankara', name: '06 Ankara', districts: [{ id: 'cankaya', name: 'Çankaya', lat: 39.92, lon: 32.85, elevation_m: 950 }, { id: 'kecioren', name: 'Keçiören', lat: 39.99, lon: 32.86, elevation_m: 910 }, { id: 'yenimahalle', name: 'Yenimahalle', lat: 39.96, lon: 32.75, elevation_m: 860 }, { id: 'etimesgut', name: 'Etimesgut', lat: 39.95, lon: 32.67, elevation_m: 820 }, { id: 'golbasi', name: 'Gölbaşı', lat: 39.79, lon: 32.80, elevation_m: 975 }] },
  { id: 'antalya', name: '07 Antalya', districts: [{ id: 'muratpasa', name: 'Muratpaşa (Lara)', lat: 36.88, lon: 30.70, elevation_m: 35 }, { id: 'konyaalti', name: 'Konyaaltı', lat: 36.87, lon: 30.64, elevation_m: 10 }, { id: 'alanya', name: 'Alanya', lat: 36.54, lon: 31.99, elevation_m: 10 }, { id: 'manavgat', name: 'Manavgat / Side', lat: 36.78, lon: 31.44, elevation_m: 15 }, { id: 'kas', name: 'Kaş / Kalkan', lat: 36.20, lon: 29.63, elevation_m: 15 }, { id: 'kemer', name: 'Kemer', lat: 36.60, lon: 30.56, elevation_m: 8 }] },
  { id: 'artvin', name: '08 Artvin', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.18, lon: 41.81, elevation_m: 345 }, { id: 'hopa', name: 'Hopa / Sarp Sınır', lat: 41.39, lon: 41.43, elevation_m: 10 }, { id: 'borcka', name: 'Borçka / Karagöl', lat: 41.35, lon: 41.67, elevation_m: 450 }, { id: 'savsat', name: 'Şavşat', lat: 41.24, lon: 42.36, elevation_m: 1100 }] },
  { id: 'aydin', name: '09 Aydın', districts: [{ id: 'efeler', name: 'Efeler (Merkez)', lat: 37.84, lon: 27.84, elevation_m: 65 }, { id: 'kusadasi', name: 'Kuşadası', lat: 37.86, lon: 27.26, elevation_m: 15 }, { id: 'didim', name: 'Didim / Altınkum', lat: 37.37, lon: 27.26, elevation_m: 18 }, { id: 'soke', name: 'Söke', lat: 37.75, lon: 27.40, elevation_m: 40 }, { id: 'nazilli', name: 'Nazilli', lat: 37.91, lon: 28.32, elevation_m: 80 }] },
  { id: 'balikesir', name: '10 Balıkesir', districts: [{ id: 'karesi', name: 'Karesi (Merkez)', lat: 39.64, lon: 27.88, elevation_m: 145 }, { id: 'ayvalik', name: 'Ayvalık / Cunda', lat: 39.31, lon: 26.69, elevation_m: 5 }, { id: 'edremit', name: 'Edremit / Akçay', lat: 39.58, lon: 26.92, elevation_m: 25 }, { id: 'bandirma', name: 'Bandırma', lat: 40.35, lon: 27.97, elevation_m: 15 }, { id: 'erdek', name: 'Erdek', lat: 40.40, lon: 27.79, elevation_m: 10 }] },
  { id: 'bilecik', name: '11 Bilecik', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.14, lon: 29.97, elevation_m: 500 }, { id: 'bozuyuk', name: 'Bozüyük (YHT)', lat: 39.90, lon: 30.04, elevation_m: 740 }, { id: 'sogut', name: 'Söğüt', lat: 40.01, lon: 30.18, elevation_m: 665 }, { id: 'osmaneli', name: 'Osmaneli', lat: 40.36, lon: 29.99, elevation_m: 110 }] },
  { id: 'bingol', name: '12 Bingöl', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.88, lon: 40.49, elevation_m: 1151 }, { id: 'genc', name: 'Genç', lat: 38.74, lon: 40.55, elevation_m: 980 }, { id: 'solhan', name: 'Solhan', lat: 38.96, lon: 41.03, elevation_m: 1390 }, { id: 'karliova', name: 'Karlıova', lat: 39.30, lon: 41.01, elevation_m: 1820 }] },
  { id: 'bitlis', name: '13 Bitlis', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.40, lon: 42.10, elevation_m: 1545 }, { id: 'tatvan', name: 'Tatvan', lat: 38.50, lon: 42.28, elevation_m: 1650 }, { id: 'ahlat', name: 'Ahlat', lat: 38.75, lon: 42.48, elevation_m: 1670 }, { id: 'adilcevaz', name: 'Adilcevaz', lat: 38.80, lon: 42.73, elevation_m: 1660 }] },
  { id: 'bolu', name: '14 Bolu', districts: [{ id: 'merkez', name: 'Merkez (Bolu Dağı)', lat: 40.73, lon: 31.50, elevation_m: 726 }, { id: 'mudurnu', name: 'Mudurnu / Abant', lat: 40.60, lon: 31.28, elevation_m: 1325 }, { id: 'gerede', name: 'Gerede', lat: 40.80, lon: 32.20, elevation_m: 1300 }, { id: 'mengen', name: 'Mengen / Yedigöller', lat: 40.94, lon: 31.74, elevation_m: 900 }] },
  { id: 'burdur', name: '15 Burdur', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.72, lon: 30.29, elevation_m: 950 }, { id: 'yesilova', name: 'Yeşilova / Salda Gölü', lat: 37.52, lon: 29.71, elevation_m: 1160 }, { id: 'bucak', name: 'Bucak', lat: 37.45, lon: 30.59, elevation_m: 850 }, { id: 'golhisar', name: 'Gölhisar', lat: 37.14, lon: 29.51, elevation_m: 945 }] },
  { id: 'bursa', name: '16 Bursa', districts: [{ id: 'nilufer', name: 'Nilüfer / Özlüce', lat: 40.22, lon: 28.92, elevation_m: 110 }, { id: 'osmangazi', name: 'Osmangazi (Heykel)', lat: 40.18, lon: 29.06, elevation_m: 155 }, { id: 'mudanya', name: 'Mudanya / Güzelyalı', lat: 40.36, lon: 28.89, elevation_m: 8 }, { id: 'gemlik', name: 'Gemlik (Togg)', lat: 40.43, lon: 29.15, elevation_m: 15 }, { id: 'inegol', name: 'İnegöl', lat: 40.08, lon: 29.51, elevation_m: 290 }] },
  { id: 'canakkale', name: '17 Çanakkale', districts: [{ id: 'merkez', name: 'Merkez / 1915 Köprüsü', lat: 40.15, lon: 26.41, elevation_m: 10 }, { id: 'bozcaada', name: 'Bozcaada', lat: 39.83, lon: 26.06, elevation_m: 15 }, { id: 'gokceada', name: 'Gökçeada', lat: 40.19, lon: 25.90, elevation_m: 20 }, { id: 'gelibolu', name: 'Gelibolu', lat: 40.41, lon: 26.67, elevation_m: 20 }, { id: 'ayvacik', name: 'Ayvacık / Assos', lat: 39.49, lon: 26.33, elevation_m: 180 }] },
  { id: 'cankiri', name: '18 Çankırı', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.60, lon: 33.61, elevation_m: 730 }, { id: 'ilgaz', name: 'Ilgaz (Kayak)', lat: 40.91, lon: 33.62, elevation_m: 1450 }, { id: 'cerkes', name: 'Çerkeş', lat: 40.81, lon: 32.89, elevation_m: 1120 }, { id: 'kursunlu', name: 'Kurşunlu', lat: 40.84, lon: 33.26, elevation_m: 910 }] },
  { id: 'corum', name: '19 Çorum', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.55, lon: 34.95, elevation_m: 801 }, { id: 'sungurlu', name: 'Sungurlu / Hattuşa', lat: 40.16, lon: 34.37, elevation_m: 770 }, { id: 'osmancik', name: 'Osmancık', lat: 40.97, lon: 34.80, elevation_m: 430 }, { id: 'iskilip', name: 'İskilip', lat: 40.73, lon: 34.47, elevation_m: 750 }] },
  { id: 'denizli', name: '20 Denizli', districts: [{ id: 'pamukkale', name: 'Pamukkale Traverten', lat: 37.91, lon: 29.12, elevation_m: 350 }, { id: 'merkezefendi', name: 'Merkezefendi', lat: 37.77, lon: 29.08, elevation_m: 354 }, { id: 'saraykoy', name: 'Sarayköy', lat: 37.92, lon: 28.92, elevation_m: 160 }, { id: 'acipayam', name: 'Acıpayam', lat: 37.42, lon: 29.35, elevation_m: 950 }] },
  { id: 'diyarbakir', name: '21 Diyarbakır', districts: [{ id: 'kayapinar', name: 'Kayapınar', lat: 37.94, lon: 40.16, elevation_m: 680 }, { id: 'sur', name: 'Sur (Tarihi Surlar)', lat: 37.91, lon: 40.23, elevation_m: 670 }, { id: 'baglar', name: 'Bağlar', lat: 37.90, lon: 40.20, elevation_m: 675 }, { id: 'bismil', name: 'Bismil', lat: 37.84, lon: 40.66, elevation_m: 550 }] },
  { id: 'edirne', name: '22 Edirne', districts: [{ id: 'merkez', name: 'Merkez (Kapıkule)', lat: 41.67, lon: 26.55, elevation_m: 42 }, { id: 'kesan', name: 'Keşan / Erikli', lat: 40.85, lon: 26.63, elevation_m: 90 }, { id: 'uzunkopru', name: 'Uzunköprü', lat: 41.26, lon: 26.68, elevation_m: 40 }, { id: 'ipsala', name: 'İpsala Sınır', lat: 40.92, lon: 26.38, elevation_m: 20 }] },
  { id: 'elazig', name: '23 Elazığ', districts: [{ id: 'merkez', name: 'Merkez (Harput)', lat: 38.68, lon: 39.22, elevation_m: 1067 }, { id: 'sivrice', name: 'Sivrice / Hazar Gölü', lat: 38.45, lon: 39.31, elevation_m: 1250 }, { id: 'keban', name: 'Keban Barajı', lat: 38.79, lon: 38.74, elevation_m: 780 }, { id: 'karakocan', name: 'Karakoçan', lat: 38.95, lon: 40.04, elevation_m: 1090 }] },
  { id: 'erzincan', name: '24 Erzincan', districts: [{ id: 'merkez', name: 'Merkez (Ergan Kayak)', lat: 39.75, lon: 39.50, elevation_m: 1185 }, { id: 'kemaliye', name: 'Kemaliye (Karanlık Kanyon)', lat: 39.26, lon: 38.49, elevation_m: 950 }, { id: 'refahiye', name: 'Refahiye', lat: 39.90, lon: 38.76, elevation_m: 1580 }, { id: 'ilic', name: 'İliç', lat: 39.45, lon: 38.56, elevation_m: 1060 }] },
  { id: 'erzurum', name: '25 Erzurum', districts: [{ id: 'palandoken', name: 'Palandöken Kayak', lat: 39.85, lon: 41.28, elevation_m: 2150 }, { id: 'yakutiye', name: 'Yakutiye', lat: 39.90, lon: 41.26, elevation_m: 1910 }, { id: 'aziziye', name: 'Aziziye / Ilıca', lat: 39.94, lon: 41.13, elevation_m: 1800 }, { id: 'oltu', name: 'Oltu', lat: 40.54, lon: 41.99, elevation_m: 1275 }] },
  { id: 'eskisehir', name: '26 Eskişehir', districts: [{ id: 'tepebasi', name: 'Tepebaşı', lat: 39.78, lon: 30.50, elevation_m: 790 }, { id: 'odunpazari', name: 'Odunpazarı', lat: 39.76, lon: 30.52, elevation_m: 810 }, { id: 'sivrihisar', name: 'Sivrihisar', lat: 39.44, lon: 31.53, elevation_m: 850 }, { id: 'cifteler', name: 'Çifteler / Sakaryabaşı', lat: 39.38, lon: 31.13, elevation_m: 875 }] },
  { id: 'gaziantep', name: '27 Gaziantep', districts: [{ id: 'sehitkamil', name: 'Şehitkamil (İbrahimli)', lat: 37.08, lon: 37.33, elevation_m: 865 }, { id: 'sahinbey', name: 'Şahinbey (Kale)', lat: 37.06, lon: 37.38, elevation_m: 850 }, { id: 'nizip', name: 'Nizip / Zeugma', lat: 37.01, lon: 37.79, elevation_m: 520 }, { id: 'islahiye', name: 'İslahiye', lat: 37.02, lon: 36.63, elevation_m: 510 }] },
  { id: 'giresun', name: '28 Giresun', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.91, lon: 38.38, elevation_m: 10 }, { id: 'dereli', name: 'Dereli / Kümbet Yaylası', lat: 40.56, lon: 38.43, elevation_m: 1650 }, { id: 'bulancak', name: 'Bulancak', lat: 40.93, lon: 38.23, elevation_m: 10 }, { id: 'gorele', name: 'Görele', lat: 41.03, lon: 39.00, elevation_m: 10 }] },
  { id: 'gumushane', name: '29 Gümüşhane', districts: [{ id: 'merkez', name: 'Merkez / Yeni Zigana', lat: 40.46, lon: 39.47, elevation_m: 1210 }, { id: 'torul', name: 'Torul / Cam Teras', lat: 40.56, lon: 39.29, elevation_m: 1000 }, { id: 'kelkit', name: 'Kelkit', lat: 40.12, lon: 39.43, elevation_m: 1400 }, { id: 'siran', name: 'Şiran', lat: 40.18, lon: 39.12, elevation_m: 1450 }] },
  { id: 'hakkari', name: '30 Hakkari', districts: [{ id: 'yuksekova', name: 'Yüksekova (Havalimanı)', lat: 37.55, lon: 44.24, elevation_m: 1870 }, { id: 'merkez', name: 'Merkez', lat: 37.57, lon: 43.74, elevation_m: 1720 }, { id: 'semdinli', name: 'Şemdinli', lat: 37.29, lon: 44.57, elevation_m: 1400 }, { id: 'cukurca', name: 'Çukurca', lat: 37.24, lon: 43.61, elevation_m: 1280 }] },
  { id: 'hatay', name: '31 Hatay', districts: [{ id: 'iskenderun', name: 'İskenderun', lat: 36.58, lon: 36.17, elevation_m: 10 }, { id: 'antakya', name: 'Antakya', lat: 36.20, lon: 36.16, elevation_m: 100 }, { id: 'defne', name: 'Defne / Harbiye', lat: 36.16, lon: 36.13, elevation_m: 120 }, { id: 'dortyol', name: 'Dörtyol', lat: 36.83, lon: 36.22, elevation_m: 50 }] },
  { id: 'isparta', name: '32 Isparta', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.76, lon: 30.55, elevation_m: 1035 }, { id: 'egirdir', name: 'Eğirdir (Göl Kıyısı)', lat: 37.87, lon: 30.85, elevation_m: 925 }, { id: 'yalvac', name: 'Yalvaç', lat: 38.29, lon: 31.17, elevation_m: 1100 }, { id: 'sarkikaraagac', name: 'Şarkikaraağaç', lat: 38.08, lon: 31.36, elevation_m: 1180 }] },
  { id: 'mersin', name: '33 Mersin', districts: [{ id: 'yenisehir', name: 'Yenişehir / Marina', lat: 36.78, lon: 34.58, elevation_m: 10 }, { id: 'mezitli', name: 'Mezitli', lat: 36.75, lon: 34.52, elevation_m: 15 }, { id: 'tarsus', name: 'Tarsus', lat: 36.91, lon: 34.89, elevation_m: 25 }, { id: 'erdemli', name: 'Erdemli / Kızkalesi', lat: 36.60, lon: 34.30, elevation_m: 10 }, { id: 'anamur', name: 'Anamur (En Güney)', lat: 36.07, lon: 32.83, elevation_m: 10 }] },
  { id: 'istanbul', name: '34 İstanbul', districts: [{ id: 'pendik', name: 'Pendik / Kurtköy', lat: 40.87, lon: 29.23, elevation_m: 55 }, { id: 'kadikoy', name: 'Kadıköy / Moda', lat: 40.98, lon: 29.02, elevation_m: 25 }, { id: 'besiktas', name: 'Beşiktaş / Levent', lat: 41.08, lon: 29.01, elevation_m: 60 }, { id: 'sariyer', name: 'Sarıyer / Maslak', lat: 41.10, lon: 29.02, elevation_m: 110 }, { id: 'uskudar', name: 'Üsküdar / Altunizade', lat: 41.02, lon: 29.04, elevation_m: 45 }, { id: 'bakirkoy', name: 'Bakırköy / Ataköy', lat: 40.97, lon: 28.87, elevation_m: 20 }, { id: 'basaksehir', name: 'Başakşehir', lat: 41.09, lon: 28.80, elevation_m: 140 }] },
  { id: 'izmir', name: '35 İzmir', districts: [{ id: 'cesme', name: 'Çeşme / Alaçatı', lat: 38.32, lon: 26.30, elevation_m: 15 }, { id: 'konak', name: 'Konak / Alsancak', lat: 38.41, lon: 27.12, elevation_m: 5 }, { id: 'karsiyaka', name: 'Karşıyaka / Bostanlı', lat: 38.45, lon: 27.09, elevation_m: 5 }, { id: 'urla', name: 'Urla', lat: 38.32, lon: 26.76, elevation_m: 25 }, { id: 'bornova', name: 'Bornova', lat: 38.46, lon: 27.21, elevation_m: 45 }] },
  { id: 'kars', name: '36 Kars', districts: [{ id: 'sarikamis', name: 'Sarıkamış Kayak', lat: 40.33, lon: 42.58, elevation_m: 2100 }, { id: 'merkez', name: 'Merkez / Ani', lat: 40.60, lon: 43.09, elevation_m: 1768 }, { id: 'kagizman', name: 'Kağızman', lat: 40.14, lon: 43.13, elevation_m: 1350 }, { id: 'digor', name: 'Digor', lat: 40.37, lon: 43.41, elevation_m: 1610 }] },
  { id: 'kastamonu', name: '37 Kastamonu', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.38, lon: 33.78, elevation_m: 774 }, { id: 'ilgaz', name: 'Ilgaz Dağı Geçişi', lat: 41.08, lon: 33.74, elevation_m: 1550 }, { id: 'tosya', name: 'Tosya', lat: 41.01, lon: 34.04, elevation_m: 850 }, { id: 'cide', name: 'Cide (Gideros)', lat: 41.89, lon: 32.95, elevation_m: 10 }] },
  { id: 'kayseri', name: '38 Kayseri', districts: [{ id: 'melikgazi', name: 'Melikgazi / Erciyes', lat: 38.53, lon: 35.53, elevation_m: 2200 }, { id: 'talas', name: 'Talas', lat: 38.69, lon: 35.55, elevation_m: 1100 }, { id: 'kocasinan', name: 'Kocasinan', lat: 38.73, lon: 35.48, elevation_m: 1050 }, { id: 'develi', name: 'Develi', lat: 38.39, lon: 35.49, elevation_m: 1225 }] },
  { id: 'kirklareli', name: '39 Kırklareli', districts: [{ id: 'demirkoy', name: 'Demirköy / İğneada', lat: 41.87, lon: 27.98, elevation_m: 8 }, { id: 'luleburgaz', name: 'Lüleburgaz', lat: 41.40, lon: 27.35, elevation_m: 60 }, { id: 'merkez', name: 'Merkez', lat: 41.73, lon: 27.21, elevation_m: 203 }, { id: 'babaeski', name: 'Babaeski', lat: 41.43, lon: 27.09, elevation_m: 55 }] },
  { id: 'kirsehir', name: '40 Kırşehir', districts: [{ id: 'merkez', name: 'Merkez (Ahi Evran)', lat: 39.14, lon: 34.17, elevation_m: 985 }, { id: 'kaman', name: 'Kaman', lat: 39.35, lon: 33.72, elevation_m: 1080 }, { id: 'mucur', name: 'Mucur', lat: 39.06, lon: 34.37, elevation_m: 1050 }, { id: 'cicekdagi', name: 'Çiçekdağı', lat: 39.60, lon: 34.42, elevation_m: 950 }] },
  { id: 'kocaeli', name: '41 Kocaeli', districts: [{ id: 'gebze', name: 'Gebze (Bilişim Vadisi)', lat: 40.80, lon: 29.43, elevation_m: 110 }, { id: 'izmit', name: 'İzmit', lat: 40.76, lon: 29.94, elevation_m: 20 }, { id: 'kartepe', name: 'Kartepe Kayak', lat: 40.67, lon: 30.01, elevation_m: 1350 }, { id: 'darica', name: 'Darıca', lat: 40.77, lon: 29.40, elevation_m: 30 }, { id: 'korfez', name: 'Körfez', lat: 40.78, lon: 29.74, elevation_m: 25 }] },
  { id: 'konya', name: '42 Konya', districts: [{ id: 'selcuklu', name: 'Selçuklu', lat: 37.93, lon: 32.48, elevation_m: 1025 }, { id: 'karatay', name: 'Karatay / Mevlana', lat: 37.87, lon: 32.50, elevation_m: 1020 }, { id: 'meram', name: 'Meram Bağları', lat: 37.85, lon: 32.42, elevation_m: 1030 }, { id: 'beysehir', name: 'Beyşehir Gölü', lat: 37.67, lon: 31.72, elevation_m: 1150 }, { id: 'eregli', name: 'Ereğli', lat: 37.51, lon: 34.05, elevation_m: 1040 }] },
  { id: 'kutahya', name: '43 Kütahya', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.41, lon: 29.98, elevation_m: 969 }, { id: 'tavsanli', name: 'Tavşanlı', lat: 39.54, lon: 29.50, elevation_m: 860 }, { id: 'gediz', name: 'Gediz / Murat Dağı', lat: 38.99, lon: 29.57, elevation_m: 750 }, { id: 'simav', name: 'Simav Termal', lat: 39.09, lon: 28.97, elevation_m: 810 }] },
  { id: 'malatya', name: '44 Malatya', districts: [{ id: 'battalgazi', name: 'Battalgazi', lat: 38.35, lon: 38.30, elevation_m: 964 }, { id: 'yesilyurt', name: 'Yeşilyurt', lat: 38.30, lon: 38.25, elevation_m: 1010 }, { id: 'darende', name: 'Darende / Somuncu Baba', lat: 38.56, lon: 37.50, elevation_m: 1015 }, { id: 'dogansehir', name: 'Doğanşehir', lat: 38.01, lon: 37.87, elevation_m: 1290 }] },
  { id: 'manisa', name: '45 Manisa', districts: [{ id: 'yunusemre', name: 'Yunusemre / Spil', lat: 38.61, lon: 27.42, elevation_m: 71 }, { id: 'sehzadeler', name: 'Şehzadeler', lat: 38.61, lon: 27.43, elevation_m: 75 }, { id: 'salihli', name: 'Salihli / Sardes', lat: 38.48, lon: 28.13, elevation_m: 125 }, { id: 'akhisar', name: 'Akhisar', lat: 38.92, lon: 27.83, elevation_m: 95 }, { id: 'turgutlu', name: 'Turgutlu', lat: 38.50, lon: 27.70, elevation_m: 70 }] },
  { id: 'kahramanmaras', name: '46 Kahramanmaraş', districts: [{ id: 'onikisubat', name: 'Onikişubat / Yedikuyular', lat: 37.58, lon: 36.93, elevation_m: 568 }, { id: 'dulkadiroglu', name: 'Dulkadiroğlu (Kale)', lat: 37.57, lon: 36.94, elevation_m: 580 }, { id: 'elbistan', name: 'Elbistan', lat: 38.20, lon: 37.19, elevation_m: 1150 }, { id: 'afsin', name: 'Afşin', lat: 38.24, lon: 36.91, elevation_m: 1230 }] },
  { id: 'mardin', name: '47 Mardin', districts: [{ id: 'artuklu', name: 'Artuklu (Eski Mardin)', lat: 37.32, lon: 40.72, elevation_m: 1085 }, { id: 'midyat', name: 'Midyat', lat: 37.42, lon: 41.37, elevation_m: 950 }, { id: 'nusaybin', name: 'Nusaybin / Beyazsu', lat: 37.07, lon: 41.21, elevation_m: 480 }, { id: 'kiziltepe', name: 'Kızıltepe', lat: 37.19, lon: 40.58, elevation_m: 500 }] },
  { id: 'mugla', name: '48 Muğla', districts: [{ id: 'bodrum', name: 'Bodrum / Yalıkavak', lat: 37.03, lon: 27.43, elevation_m: 10 }, { id: 'fethiye', name: 'Fethiye / Ölüdeniz', lat: 36.65, lon: 29.11, elevation_m: 15 }, { id: 'marmaris', name: 'Marmaris', lat: 36.85, lon: 28.27, elevation_m: 8 }, { id: 'datca', name: 'Datça / Knidos', lat: 36.72, lon: 27.68, elevation_m: 18 }, { id: 'mentese', name: 'Menteşe (Merkez)', lat: 37.21, lon: 28.36, elevation_m: 660 }, { id: 'milas', name: 'Milas', lat: 37.31, lon: 27.78, elevation_m: 60 }] },
  { id: 'mus', name: '49 Muş', districts: [{ id: 'merkez', name: 'Merkez / Murat Köprüsü', lat: 38.74, lon: 41.50, elevation_m: 1334 }, { id: 'malazgirt', name: 'Malazgirt', lat: 39.14, lon: 42.54, elevation_m: 1530 }, { id: 'bulanık', name: 'Bulanık', lat: 39.09, lon: 42.27, elevation_m: 1480 }, { id: 'varto', name: 'Varto', lat: 39.17, lon: 41.45, elevation_m: 1650 }] },
  { id: 'nevsehir', name: '50 Nevşehir', districts: [{ id: 'urgup', name: 'Ürgüp / Göreme Balon', lat: 38.62, lon: 34.71, elevation_m: 1224 }, { id: 'merkez', name: 'Merkez', lat: 38.62, lon: 34.71, elevation_m: 1150 }, { id: 'derinkuyu', name: 'Derinkuyu Yeraltı', lat: 38.37, lon: 34.73, elevation_m: 1320 }, { id: 'avanos', name: 'Avanos', lat: 38.71, lon: 34.84, elevation_m: 930 }] },
  { id: 'nigde', name: '51 Niğde', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.96, lon: 34.68, elevation_m: 1229 }, { id: 'bor', name: 'Bor', lat: 37.89, lon: 34.56, elevation_m: 1110 }, { id: 'camardi', name: 'Çamardı / Aladağlar', lat: 37.83, lon: 35.00, elevation_m: 1500 }, { id: 'ulukisla', name: 'Ulukışla', lat: 37.54, lon: 34.48, elevation_m: 1420 }] },
  { id: 'ordu', name: '52 Ordu', districts: [{ id: 'altinordu', name: 'Altınordu / Boztepe', lat: 40.98, lon: 37.87, elevation_m: 5 }, { id: 'unye', name: 'Ünye', lat: 41.12, lon: 37.28, elevation_m: 10 }, { id: 'fatsa', name: 'Fatsa', lat: 41.03, lon: 37.50, elevation_m: 10 }, { id: 'aybasti', name: 'Aybastı / Perşembe Yaylası', lat: 40.68, lon: 37.40, elevation_m: 1500 }] },
  { id: 'rize', name: '53 Rize', districts: [{ id: 'merkez', name: 'Merkez (Çay Çarşısı)', lat: 41.02, lon: 40.52, elevation_m: 6 }, { id: 'camlihemsin', name: 'Çamlıhemşin / Ayder', lat: 40.95, lon: 41.10, elevation_m: 1350 }, { id: 'ikizdere', name: 'İkizdere / Ovit Tüneli', lat: 40.78, lon: 40.55, elevation_m: 750 }, { id: 'findikli', name: 'Fındıklı', lat: 41.27, lon: 41.14, elevation_m: 10 }, { id: 'ardesen', name: 'Ardeşen', lat: 41.19, lon: 40.98, elevation_m: 10 }] },
  { id: 'sakarya', name: '54 Sakarya', districts: [{ id: 'sapanca', name: 'Sapanca Gölü', lat: 40.69, lon: 30.25, elevation_m: 45 }, { id: 'serdivan', name: 'Serdivan (Mavi Durak)', lat: 40.76, lon: 30.36, elevation_m: 65 }, { id: 'adapazari', name: 'Adapazarı (Çark Cad.)', lat: 40.77, lon: 30.40, elevation_m: 32 }, { id: 'karasu', name: 'Karasu Sahil', lat: 41.09, lon: 30.68, elevation_m: 5 }, { id: 'hendek', name: 'Hendek', lat: 40.80, lon: 30.75, elevation_m: 175 }] },
  { id: 'samsun', name: '55 Samsun', districts: [{ id: 'atakum', name: 'Atakum Sahil', lat: 41.32, lon: 36.27, elevation_m: 5 }, { id: 'ilkadim', name: 'İlkadım (Bandırma Vapuru)', lat: 41.28, lon: 36.33, elevation_m: 20 }, { id: 'bafra', name: 'Bafra Kızılırmak', lat: 41.56, lon: 35.90, elevation_m: 20 }, { id: 'carsamba', name: 'Çarşamba', lat: 41.19, lon: 36.72, elevation_m: 15 }, { id: 'havza', name: 'Havza Termal', lat: 40.97, lon: 35.66, elevation_m: 675 }] },
  { id: 'siirt', name: '56 Siirt', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.93, lon: 41.95, elevation_m: 895 }, { id: 'tillo', name: 'Tillo', lat: 37.95, lon: 42.01, elevation_m: 1050 }, { id: 'kurtalan', name: 'Kurtalan', lat: 37.92, lon: 41.70, elevation_m: 700 }, { id: 'baykan', name: 'Baykan / Veysel Karani', lat: 38.16, lon: 41.77, elevation_m: 850 }] },
  { id: 'sinop', name: '57 Sinop', districts: [{ id: 'merkez', name: 'Merkez (İnceburun)', lat: 42.02, lon: 35.15, elevation_m: 25 }, { id: 'boyabat', name: 'Boyabat', lat: 41.46, lon: 34.76, elevation_m: 330 }, { id: 'ayancik', name: 'Ayancık', lat: 41.94, lon: 34.58, elevation_m: 10 }, { id: 'gerze', name: 'Gerze', lat: 41.80, lon: 35.19, elevation_m: 20 }] },
  { id: 'sivas', name: '58 Sivas', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.74, lon: 37.01, elevation_m: 1278 }, { id: 'divrigi', name: 'Divriği Ulu Cami', lat: 39.37, lon: 38.11, elevation_m: 1050 }, { id: 'kangal', name: 'Kangal Balıklı Kaplıca', lat: 39.23, lon: 37.38, elevation_m: 1540 }, { id: 'gurun', name: 'Gürün / Gökpınar', lat: 38.72, lon: 37.27, elevation_m: 1280 }, { id: 'sarkisla', name: 'Şarkışla', lat: 39.35, lon: 36.40, elevation_m: 1180 }] },
  { id: 'tekirdag', name: '59 Tekirdağ', districts: [{ id: 'suleymanpasa', name: 'Süleymanpaşa (Kordon)', lat: 40.98, lon: 27.51, elevation_m: 37 }, { id: 'corlu', name: 'Çorlu', lat: 41.16, lon: 27.80, elevation_m: 150 }, { id: 'cerkezkoy', name: 'Çerkezköy OSB', lat: 41.28, lon: 28.00, elevation_m: 155 }, { id: 'sarkoy', name: 'Şarköy', lat: 40.61, lon: 27.11, elevation_m: 10 }, { id: 'marmaraereglisi', name: 'Marmaraereğlisi', lat: 40.96, lon: 27.95, elevation_m: 15 }] },
  { id: 'tokat', name: '60 Tokat', districts: [{ id: 'merkez', name: 'Merkez / Ballıca', lat: 40.31, lon: 36.55, elevation_m: 623 }, { id: 'erbaa', name: 'Erbaa', lat: 40.67, lon: 36.57, elevation_m: 240 }, { id: 'niksar', name: 'Niksar', lat: 40.59, lon: 36.95, elevation_m: 350 }, { id: 'zile', name: 'Zile Kalesi', lat: 40.30, lon: 35.88, elevation_m: 710 }, { id: 'turhal', name: 'Turhal', lat: 40.38, lon: 36.08, elevation_m: 490 }] },
  { id: 'trabzon', name: '61 Trabzon', districts: [{ id: 'ortahisar', name: 'Ortahisar (Meydan)', lat: 41.00, lon: 39.71, elevation_m: 35 }, { id: 'macka', name: 'Maçka / Sümela', lat: 40.69, lon: 39.65, elevation_m: 1150 }, { id: 'caykara', name: 'Çaykara / Uzungöl', lat: 40.61, lon: 40.29, elevation_m: 1100 }, { id: 'akcaabat', name: 'Akçaabat Sahil', lat: 41.02, lon: 39.57, elevation_m: 15 }, { id: 'vakfikebir', name: 'Vakfıkebir', lat: 41.05, lon: 39.28, elevation_m: 10 }] },
  { id: 'tunceli', name: '62 Tunceli', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.10, lon: 39.54, elevation_m: 915 }, { id: 'ovacik', name: 'Ovacık / Munzur', lat: 39.36, lon: 39.21, elevation_m: 1300 }, { id: 'pulumur', name: 'Pülümür', lat: 39.48, lon: 39.91, elevation_m: 1550 }, { id: 'pertek', name: 'Pertek Feribot', lat: 38.86, lon: 39.32, elevation_m: 1050 }] },
  { id: 'sanliurfa', name: '63 Şanlıurfa', districts: [{ id: 'haliliye', name: 'Haliliye / Göbeklitepe', lat: 37.22, lon: 38.92, elevation_m: 530 }, { id: 'eyyubiye', name: 'Eyyübiye / Balıklıgöl', lat: 37.14, lon: 38.78, elevation_m: 510 }, { id: 'birecik', name: 'Birecik / Fırat', lat: 37.02, lon: 37.98, elevation_m: 340 }, { id: 'halfeti', name: 'Halfeti Batık Şehir', lat: 37.24, lon: 37.86, elevation_m: 380 }, { id: 'siverek', name: 'Siverek', lat: 37.75, lon: 39.31, elevation_m: 800 }] },
  { id: 'usak', name: '64 Uşak', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.68, lon: 29.40, elevation_m: 907 }, { id: 'ulubey', name: 'Ulubey Kanyonu', lat: 38.42, lon: 29.31, elevation_m: 650 }, { id: 'banaz', name: 'Banaz', lat: 38.74, lon: 29.75, elevation_m: 915 }, { id: 'esme', name: 'Eşme', lat: 38.40, lon: 28.97, elevation_m: 820 }] },
  { id: 'van', name: '65 Van', districts: [{ id: 'ipekyolu', name: 'İpekyolu / Van Kalesi', lat: 38.48, lon: 43.40, elevation_m: 1727 }, { id: 'edremit', name: 'Edremit / Akdamar', lat: 38.42, lon: 43.25, elevation_m: 1670 }, { id: 'tusba', name: 'Tuşba', lat: 38.53, lon: 43.38, elevation_m: 1660 }, { id: 'ercis', name: 'Erciş', lat: 39.02, lon: 43.36, elevation_m: 1690 }, { id: 'gevas', name: 'Gevaş', lat: 38.29, lon: 43.10, elevation_m: 1680 }] },
  { id: 'yozgat', name: '66 Yozgat', districts: [{ id: 'merkez', name: 'Merkez / Çamlık', lat: 39.81, lon: 34.81, elevation_m: 1300 }, { id: 'sorgun', name: 'Sorgun Termal', lat: 39.81, lon: 35.18, elevation_m: 1080 }, { id: 'bogazliyan', name: 'Boğazlıyan', lat: 39.19, lon: 35.24, elevation_m: 1060 }, { id: 'yerkoy', name: 'Yerköy', lat: 39.63, lon: 34.46, elevation_m: 770 }] },
  { id: 'zonguldak', name: '67 Zonguldak', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.45, lon: 31.79, elevation_m: 50 }, { id: 'karadeniz-eregli', name: 'Karadeniz Ereğli', lat: 41.28, lon: 31.42, elevation_m: 15 }, { id: 'caycuma', name: 'Çaycuma / Filyos', lat: 41.42, lon: 32.08, elevation_m: 35 }, { id: 'devrek', name: 'Devrek', lat: 41.21, lon: 31.95, elevation_m: 100 }, { id: 'kozlu', name: 'Kozlu', lat: 41.43, lon: 31.75, elevation_m: 20 }] },
  { id: 'aksaray', name: '68 Aksaray', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.36, lon: 34.03, elevation_m: 980 }, { id: 'guzelyurt', name: 'Güzelyurt / Ihlara', lat: 38.27, lon: 34.37, elevation_m: 1485 }, { id: 'ortakoy', name: 'Ortaköy', lat: 38.73, lon: 34.03, elevation_m: 1140 }, { id: 'eskil', name: 'Eskil', lat: 38.57, lon: 33.41, elevation_m: 930 }] },
  { id: 'bayburt', name: '69 Bayburt', districts: [{ id: 'merkez', name: 'Merkez / Baksı Müzesi', lat: 40.25, lon: 40.22, elevation_m: 1550 }, { id: 'aydintepe', name: 'Aydıntepe Yeraltı', lat: 40.38, lon: 40.15, elevation_m: 1500 }, { id: 'demirozu', name: 'Demirözü', lat: 40.15, lon: 39.90, elevation_m: 1650 }] },
  { id: 'karaman', name: '70 Karaman', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.17, lon: 33.22, elevation_m: 1033 }, { id: 'ermenek', name: 'Ermenek Barajı', lat: 36.63, lon: 32.79, elevation_m: 1250 }, { id: 'sariveliler', name: 'Sarıveliler', lat: 36.70, lon: 32.61, elevation_m: 1450 }, { id: 'kazimkarabekir', name: 'Kazımkarabekir', lat: 37.23, lon: 32.95, elevation_m: 1040 }] },
  { id: 'kirikkale', name: '71 Kırıkkale', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.84, lon: 33.51, elevation_m: 713 }, { id: 'yahsihan', name: 'Yahşihan (Üniversite)', lat: 39.85, lon: 33.45, elevation_m: 720 }, { id: 'keskin', name: 'Keskin', lat: 39.67, lon: 33.61, elevation_m: 1140 }, { id: 'bahsili', name: 'Bahşılı', lat: 39.80, lon: 33.43, elevation_m: 710 }] },
  { id: 'batman', name: '72 Batman', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.88, lon: 41.12, elevation_m: 540 }, { id: 'hasankeyf', name: 'Hasankeyf Antik Kent', lat: 37.71, lon: 41.41, elevation_m: 510 }, { id: 'kozluk', name: 'Kozluk', lat: 38.19, lon: 41.49, elevation_m: 875 }, { id: 'sason', name: 'Sason', lat: 38.32, lon: 41.41, elevation_m: 950 }] },
  { id: 'sirnak', name: '73 Şırnak', districts: [{ id: 'cizre', name: 'Cizre (İpek Yolu)', lat: 37.32, lon: 42.18, elevation_m: 377 }, { id: 'merkez', name: 'Merkez', lat: 37.51, lon: 42.45, elevation_m: 1350 }, { id: 'silopi', name: 'Silopi (Habur Sınır)', lat: 37.17, lon: 42.47, elevation_m: 510 }, { id: 'idil', name: 'İdil', lat: 37.34, lon: 41.89, elevation_m: 780 }, { id: 'uludere', name: 'Uludere', lat: 37.44, lon: 42.85, elevation_m: 1250 }] },
  { id: 'bartin', name: '74 Bartın', districts: [{ id: 'amasra', name: 'Amasra (Çeşm-i Cihan)', lat: 41.74, lon: 32.38, elevation_m: 15 }, { id: 'merkez', name: 'Merkez', lat: 41.63, lon: 32.33, elevation_m: 25 }, { id: 'kurucasile', name: 'Kurucaşile', lat: 41.84, lon: 32.72, elevation_m: 10 }, { id: 'ulus', name: 'Ulus / Küre Dağları', lat: 41.58, lon: 32.63, elevation_m: 200 }] },
  { id: 'ardahan', name: '75 Ardahan', districts: [{ id: 'cildir', name: 'Çıldır Gölü', lat: 41.12, lon: 43.13, elevation_m: 1960 }, { id: 'merkez', name: 'Merkez', lat: 41.11, lon: 42.70, elevation_m: 1829 }, { id: 'posof', name: 'Posof (Gürcistan Sınır)', lat: 41.51, lon: 42.73, elevation_m: 1550 }, { id: 'gole', name: 'Göle', lat: 40.78, lon: 42.61, elevation_m: 2030 }, { id: 'hanak', name: 'Hanak', lat: 41.23, lon: 42.83, elevation_m: 1810 }] },
  { id: 'igdir', name: '76 Iğdır', districts: [{ id: 'merkez', name: 'Merkez (Ağrı Dağı)', lat: 39.92, lon: 44.04, elevation_m: 858 }, { id: 'aralik', name: 'Aralık (Dilucu Sınır)', lat: 39.86, lon: 44.51, elevation_m: 820 }, { id: 'tuzluca', name: 'Tuzluca Tuz Mağarası', lat: 40.04, lon: 43.66, elevation_m: 950 }, { id: 'karakoyunlu', name: 'Karakoyunlu', lat: 39.97, lon: 44.17, elevation_m: 850 }] },
  { id: 'yalova', name: '77 Yalova', districts: [{ id: 'altinova', name: 'Altınova (Osmangazi Köprüsü)', lat: 40.70, lon: 29.51, elevation_m: 15 }, { id: 'merkez', name: 'Merkez (İDO)', lat: 40.65, lon: 29.26, elevation_m: 10 }, { id: 'termal', name: 'Termal Kaplıcalar', lat: 40.60, lon: 29.17, elevation_m: 150 }, { id: 'cinarcik', name: 'Çınarcık', lat: 40.64, lon: 29.12, elevation_m: 10 }, { id: 'armutlu', name: 'Armutlu', lat: 40.52, lon: 28.83, elevation_m: 10 }] },
  { id: 'karabuk', name: '78 Karabük', districts: [{ id: 'safranbolu', name: 'Safranbolu Tarihi Evler', lat: 41.25, lon: 32.69, elevation_m: 485 }, { id: 'merkez', name: 'Merkez', lat: 41.20, lon: 32.62, elevation_m: 270 }, { id: 'yenice', name: 'Yenice Blok Ormanları', lat: 41.20, lon: 32.33, elevation_m: 150 }, { id: 'eskipazar', name: 'Eskipazar (Hadrianapolis)', lat: 40.94, lon: 32.53, elevation_m: 750 }] },
  { id: 'kilis', name: '79 Kilis', districts: [{ id: 'merkez', name: 'Merkez (Öncüpınar)', lat: 36.71, lon: 37.12, elevation_m: 660 }, { id: 'elbeyli', name: 'Elbeyli (Çobanbey)', lat: 36.67, lon: 37.47, elevation_m: 500 }, { id: 'musabeyli', name: 'Musabeyli', lat: 36.88, lon: 36.91, elevation_m: 680 }, { id: 'polateli', name: 'Polateli', lat: 36.85, lon: 37.05, elevation_m: 750 }] },
  { id: 'osmaniye', name: '80 Osmaniye', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.07, lon: 36.24, elevation_m: 125 }, { id: 'kadirli', name: 'Kadirli / Karatepe', lat: 37.37, lon: 36.09, elevation_m: 95 }, { id: 'duzici', name: 'Düziçi / Düldül Dağı', lat: 37.24, lon: 36.45, elevation_m: 400 }, { id: 'bahce', name: 'Bahçe', lat: 37.20, lon: 36.57, elevation_m: 590 }, { id: 'toprakkale', name: 'Toprakkale', lat: 37.06, lon: 36.14, elevation_m: 85 }] },
  { id: 'duzce', name: '81 Düzce', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.84, lon: 31.15, elevation_m: 160 }, { id: 'akcakoca', name: 'Akçakoca Sahil', lat: 41.08, lon: 31.11, elevation_m: 10 }, { id: 'kaynasli', name: 'Kaynaşlı / Bolu Dağı', lat: 40.77, lon: 31.31, elevation_m: 320 }, { id: 'golyaka', name: 'Gölyaka / Efteni Gölü', lat: 40.77, lon: 31.02, elevation_m: 130 }, { id: 'yigilca', name: 'Yığılca', lat: 40.96, lon: 31.47, elevation_m: 350 }] }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'route' | 'saver' | 'telemetry' | 'charging' | 'passport'>('route');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('togg-t10x-long');
  const [loading, setLoading] = useState<boolean>(false);

  // --- 1. ROTA PLANLAYICI STATE ---
  const [origProvinceId, setOrigProvinceId] = useState<string>('istanbul');
  const [origDistrictId, setOrigDistrictId] = useState<string>('pendik');

  const [destProvinceId, setDestProvinceId] = useState<string>('izmir');
  const [destDistrictId, setDestDistrictId] = useState<string>('cesme');

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

  // Kalkış Seçim Yardımcıları
  const currentOrigProvince = useMemo(() => 
    TURKEY_PROVINCES.find(p => p.id === origProvinceId) || TURKEY_PROVINCES[33],
    [origProvinceId]
  );
  const currentOrigDistrict = useMemo(() => 
    currentOrigProvince.districts.find(d => d.id === origDistrictId) || currentOrigProvince.districts[0],
    [currentOrigProvince, origDistrictId]
  );

  // Varış Seçim Yardımcıları
  const currentDestProvince = useMemo(() => 
    TURKEY_PROVINCES.find(p => p.id === destProvinceId) || TURKEY_PROVINCES[34],
    [destProvinceId]
  );
  const currentDestDistrict = useMemo(() => 
    currentDestProvince.districts.find(d => d.id === destDistrictId) || currentDestProvince.districts[0],
    [currentDestProvince, destDistrictId]
  );

  // İl Değişim Olayları
  const handleOrigProvinceChange = (pId: string) => {
    setOrigProvinceId(pId);
    const p = TURKEY_PROVINCES.find(x => x.id === pId) || TURKEY_PROVINCES[0];
    setOrigDistrictId(p.districts[0].id);
  };

  const handleDestProvinceChange = (pId: string) => {
    setDestProvinceId(pId);
    const p = TURKEY_PROVINCES.find(x => x.id === pId) || TURKEY_PROVINCES[0];
    setDestDistrictId(p.districts[0].id);
  };

  // --- HAVERSINE GERÇEK KARAYOLU MESAFE HESABI ---
  const calculateDistanceKm = (d1: DistrictItem, d2: DistrictItem) => {
    const R = 6371;
    const dLat = ((d2.lat - d1.lat) * Math.PI) / 180;
    const dLon = ((d2.lon - d1.lon) * Math.PI) / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((d1.lat * Math.PI) / 180) * Math.cos((d2.lat * Math.PI) / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const straightDist = R * c;
    return Math.max(15, Math.round(straightDist * 1.28));
  };

  // --- 1. ROTA VE ŞARJ PLANI ÇALIŞTIRICI ---
  const runRoutePlanner = () => {
    if (currentOrigDistrict.id === currentDestDistrict.id && currentOrigProvince.id === currentDestProvince.id) {
      alert('Kalkış ve varış noktası olarak aynı ilçeyi seçtiniz!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const totalKm = calculateDistanceKm(currentOrigDistrict, currentDestDistrict);
      const elevationDelta = currentDestDistrict.elevation_m - currentOrigDistrict.elevation_m;

      // Fiziksel Güç Çekişi (F_aero + F_roll)
      const v_ms = cruisingSpeed / 3.6;
      const f_aero = 0.5 * 1.225 * selectedVehicle.drag_coefficient * selectedVehicle.frontal_area_m2 * (v_ms ** 2);
      const f_roll = selectedVehicle.rolling_resistance_coeff * selectedVehicle.mass_kg * 9.81;
      const p_mech = ((f_aero + f_roll) * v_ms) / 1000;

      let hvac = 0.6;
      if (routeTemp < 15) hvac += (15 - routeTemp) * 0.14;
      if (routeTemp > 25) hvac += (routeTemp - 25) * 0.12;

      const p_battery = (p_mech / selectedVehicle.drivetrain_efficiency) + hvac;
      let baseConsumption = (p_battery / cruisingSpeed) * 100;

      // Rakım Potansiyel Enerji Farkı (m * g * h)
      const potentialEnergyKwh = (selectedVehicle.mass_kg * 9.81 * elevationDelta) / (3.6e6 * 0.85);
      const totalEnergyNeededKwh = Math.max(5, ((totalKm / 100) * baseConsumption) + potentialEnergyKwh);

      const startingEnergyKwh = selectedVehicle.battery.usable_capacity_kwh * (departureSoc / 100);
      const drivingTimeHours = totalKm / cruisingSpeed;

      // Şarj Molası Algoritması
      const stops = [];
      let totalChargeDurationMin = 0;
      let totalChargingCostTl = 0;
      let arrivalSoc = 0;

      const dcTariffPerKwh = 8.60;

      if (totalEnergyNeededKwh <= startingEnergyKwh * 0.88) {
        arrivalSoc = Math.round(((startingEnergyKwh - totalEnergyNeededKwh) / selectedVehicle.battery.usable_capacity_kwh) * 100);
      } else {
        const netDeficitKwh = totalEnergyNeededKwh - startingEnergyKwh + (selectedVehicle.battery.usable_capacity_kwh * 0.15);
        const stopCount = Math.ceil(netDeficitKwh / (selectedVehicle.battery.usable_capacity_kwh * 0.60));
        
        const energyPerStop = netDeficitKwh / stopCount;
        const avgChargingPowerKw = Math.min(selectedVehicle.battery.max_dc_charge_kw * 0.72, 180);

        for (let i = 1; i <= stopCount; i++) {
          const stopKm = Math.round((totalKm / (stopCount + 1)) * i);
          const chargeMinutes = Math.round((energyPerStop / avgChargingPowerKw) * 60) + 4;
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
        arrivalSoc = 22;
      }

      setRoutePlanResult({
        origin_full: `${currentOrigProvince.name} / ${currentOrigDistrict.name}`,
        destination_full: `${currentDestProvince.name} / ${currentDestDistrict.name}`,
        total_km: totalKm,
        origin_elev: currentOrigDistrict.elevation_m,
        dest_elev: currentDestDistrict.elevation_m,
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
    }, 150);
  };

  // --- 2. ACİL MENZİL KURTARICI ---
  const runRescueAssistant = () => {
    setLoading(true);
    setTimeout(() => {
      const currentUsableKwh = selectedVehicle.battery.usable_capacity_kwh * (currentSoc / 100);
      
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

      const optimalSpeed = Math.min(82, currentDrivingSpeed);
      const v_opt_ms = optimalSpeed / 3.6;
      const f_aero_opt = 0.5 * 1.225 * selectedVehicle.drag_coefficient * selectedVehicle.frontal_area_m2 * (v_opt_ms ** 2);
      const p_mech_opt = ((f_aero_opt + f_roll_curr) * v_opt_ms) / 1000;
      const hvac_opt = 0.15;
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

  // --- 3. TELEMETRİ TESTİ ---
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
      {/* Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 shadow-lg shadow-emerald-500/10">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              VoltPulse SDV <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">v3.0 Pro</span>
            </h1>
            <p className="text-xs text-slate-400">Software-Defined Vehicle Diagnostic & Smart Navigation Suite</p>
          </div>
        </div>

        {/* Filo Seçici */}
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
          <Navigation className="w-4 h-4" /> Akıllı Rota & Şarj Planı
        </button>
        <button
          onClick={() => setActiveTab('saver')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'saver' 
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <LifeBuoy className="w-4 h-4" /> Menzil Kurtarıcı
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

      {/* Ana Gövde */}
      <main className="max-w-7xl mx-auto mt-6">

        {/* 1. SEKME: ROTA VE ŞARJ PLANI */}
        {activeTab === 'route' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <MapPin className="w-5 h-5 text-emerald-400" /> Rota & Konum Seçimi
                </h2>

                {/* 1. KALKIŞ NOKTASI */}
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2.5">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    1. Kalkış Noktası
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">İl</label>
                      <select 
                        value={origProvinceId} 
                        onChange={(e) => handleOrigProvinceChange(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs font-semibold rounded-lg p-2 outline-none border border-slate-700 focus:border-emerald-500 cursor-pointer"
                      >
                        {TURKEY_PROVINCES.map(p => (
                          <option key={`op-${p.id}`} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">İlçe</label>
                      <select 
                        value={origDistrictId} 
                        onChange={(e) => setOrigDistrictId(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs font-semibold rounded-lg p-2 outline-none border border-slate-700 focus:border-emerald-500 cursor-pointer"
                      >
                        {currentOrigProvince.districts.map(d => (
                          <option key={`od-${d.id}`} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 block text-right">
                    İlçe Rakımı: <strong className="text-slate-300">{currentOrigDistrict.elevation_m}m</strong>
                  </span>
                </div>

                {/* 2. VARIŞ NOKTASI */}
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2.5">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                    2. Varış Noktası
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">İl</label>
                      <select 
                        value={destProvinceId} 
                        onChange={(e) => handleDestProvinceChange(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs font-semibold rounded-lg p-2 outline-none border border-slate-700 focus:border-cyan-500 cursor-pointer"
                      >
                        {TURKEY_PROVINCES.map(p => (
                          <option key={`dp-${p.id}`} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">İlçe</label>
                      <select 
                        value={destDistrictId} 
                        onChange={(e) => setDestDistrictId(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs font-semibold rounded-lg p-2 outline-none border border-slate-700 focus:border-cyan-500 cursor-pointer"
                      >
                        {currentDestProvince.districts.map(d => (
                          <option key={`dd-${d.id}`} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 block text-right">
                    İlçe Rakımı: <strong className="text-slate-300">{currentDestDistrict.elevation_m}m</strong>
                  </span>
                </div>

                {/* SÜRÜŞ ŞARTLARI */}
                <div className="space-y-3 pt-2">
                  <div>
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
                className="mt-5 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                {loading ? 'Fizik & Molalar Hesaplanıyor...' : 'Akıllı Rotayı Planla'}
              </button>
            </div>

            {/* Rota Sonuç Paneli */}
            <div className="lg:col-span-2">
              {routePlanResult ? (
                <div className="space-y-4">
                  {/* Başlık Kartı */}
                  <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div className="text-xs">
                      <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                        <span className="text-emerald-400">{routePlanResult.origin_full}</span>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                        <span className="text-cyan-400">{routePlanResult.destination_full}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-0.5 block">
                        Kalkış: {routePlanResult.origin_elev}m ➔ Varış: {routePlanResult.dest_elev}m (Net Eğim: {routePlanResult.elevation_delta_m > 0 ? `+${routePlanResult.elevation_delta_m}m` : `${routePlanResult.elevation_delta_m}m`})
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full">
                      {routePlanResult.requires_charge ? `${routePlanResult.charging_stops.length} Şarj Molası` : 'Kesintisiz Varış'}
                    </span>
                  </div>

                  {/* Metrik Kartları */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Navigation className="w-3.5 h-3.5 text-emerald-400" /> Mesafe</span>
                      <p className="text-2xl font-black text-white mt-1">{routePlanResult.total_km} <span className="text-xs font-normal text-slate-400">km</span></p>
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
                      <span className="text-[10px] text-slate-400">Hedef Şarjı: %{routePlanResult.arrival_soc}</span>
                    </div>
                  </div>

                  {/* Rota Durak Detayı */}
                  <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
                    <h3 className="text-sm font-bold text-white mb-4">Şarj İtinereri & Yol Haritası</h3>

                    <div className="space-y-4 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                      {/* Çıkış */}
                      <div className="flex items-start gap-4 relative">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                          A
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{routePlanResult.origin_full}</h4>
                          <p className="text-xs text-slate-400">Yola Çıkış: <span className="text-emerald-400 font-semibold">%{departureSoc} SoC</span> • {cruisingSpeed} km/h Sabit Seyir</p>
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
                          <h4 className="text-sm font-bold text-white">{routePlanResult.destination_full}</h4>
                          <p className="text-xs text-slate-400">Hedefe Güvenli Varış Bataryası: <span className="text-cyan-400 font-bold">%{routePlanResult.arrival_soc}</span></p>
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
                    Başlangıç ve varış noktalarınızı seçerek fiziksel eğim, net enerji tüketimi ve DC hızlı şarj molalarını anında hesaplayın.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. SEKME: ACİL MENZİL KURTARICI */}
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

            {/* Reçete Çıktısı */}
            <div className="lg:col-span-2">
              {rescueResult ? (
                <div className="space-y-4">
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
                            : `Bataryanız istasyona ${rescueResult.dead_distance_km}. kilometrede tamamen tükenecektir (%0). Aşağıdaki acil reçeteyi uygulayın!`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Flame className="w-4 h-4" /> Hayat Kurtaran Acil Sürüş Reçetesi
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                        <span className="text-xs text-slate-400">Hedef Hız Sabitleme</span>
                        <p className="text-2xl font-black text-amber-400 mt-1">{rescueResult.optimal_speed} <span className="text-xs font-normal text-slate-400">km/h</span></p>
                        <span className="text-[10px] text-slate-400">Hava direnci %38 azalır</span>
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

        {/* 3. SEKME: TELEMETRİ VE FİZİK */}
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