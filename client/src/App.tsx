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
  ArrowRight,
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
  sampleNeighborhoods: string[];
}

interface ProvinceItem {
  id: string;
  name: string;
  districts: DistrictItem[];
}

const TURKEY_PROVINCES: ProvinceItem[] = [
  { id: 'adana', name: '01 Adana', districts: [{ id: 'seyhan', name: 'Seyhan', lat: 36.99, lon: 35.32, elevation_m: 28, sampleNeighborhoods: ['Ziyapaşa', 'Gazipaşa', 'Cemalpaşa'] }, { id: 'cukurova', name: 'Çukurova', lat: 37.05, lon: 35.28, elevation_m: 65, sampleNeighborhoods: ['Güzelyalı', 'Beyazevler', 'Turgut Özal'] }, { id: 'ceyhan', name: 'Ceyhan', lat: 37.02, lon: 35.81, elevation_m: 30, sampleNeighborhoods: ['Cumhuriyet', 'İstiklal'] }, { id: 'kozan', name: 'Kozan', lat: 37.45, lon: 35.81, elevation_m: 130, sampleNeighborhoods: ['Tufanpaşa', 'Karacaoğlan'] }] },
  { id: 'adiyaman', name: '02 Adıyaman', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.76, lon: 38.27, elevation_m: 669, sampleNeighborhoods: ['Atatürk Bulvarı', 'Sümerevler'] }, { id: 'kahta', name: 'Kahta', lat: 37.78, lon: 38.62, elevation_m: 750, sampleNeighborhoods: ['Nemrut Dağı Yolu', 'Fatih'] }, { id: 'besni', name: 'Besni', lat: 37.69, lon: 37.96, elevation_m: 890, sampleNeighborhoods: ['Dumlupınar', 'Erdemoğlu'] }] },
  { id: 'afyonkarahisar', name: '03 Afyonkarahisar', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.75, lon: 30.55, elevation_m: 1021, sampleNeighborhoods: ['Termal Bölge', 'Zafer Meydanı'] }, { id: 'sandikli', name: 'Sandıklı', lat: 38.46, lon: 30.27, elevation_m: 1080, sampleNeighborhoods: ['Hüdai Kaplıcaları', 'İstasyon'] }, { id: 'dinar', name: 'Dinar', lat: 38.06, lon: 30.16, elevation_m: 875, sampleNeighborhoods: ['Suçıkan Parkı', 'Santral'] }] },
  { id: 'agri', name: '04 Ağrı', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.71, lon: 43.05, elevation_m: 1640, sampleNeighborhoods: ['Cumhuriyet Cad.', 'Abide'] }, { id: 'dogubayazit', name: 'Doğubayazıt', lat: 39.54, lon: 44.08, elevation_m: 1625, sampleNeighborhoods: ['İshak Paşa Sarayı', 'Gürbulak Sınır'] }, { id: 'patnos', name: 'Patnos', lat: 39.23, lon: 42.86, elevation_m: 1650, sampleNeighborhoods: ['Sütlüpınar', 'Cumhuriyet'] }] },
  { id: 'amasya', name: '05 Amasya', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.65, lon: 35.83, elevation_m: 411, sampleNeighborhoods: ['Yalıboyu Evleri', 'Şehzadeler Gezisi'] }, { id: 'merzifon', name: 'Merzifon', lat: 40.87, lon: 35.46, elevation_m: 750, sampleNeighborhoods: ['Havalimanı Yolu', 'Bahçelievler'] }, { id: 'suluova', name: 'Suluova', lat: 40.83, lon: 35.65, elevation_m: 510, sampleNeighborhoods: ['Cumhuriyet', 'Şeker'] }] },
  { id: 'ankara', name: '06 Ankara', districts: [{ id: 'cankaya', name: 'Çankaya', lat: 39.92, lon: 32.85, 950, sampleNeighborhoods: ['Kızılay', 'Çayyolu', 'Bilkent', 'İncek'] }, { id: 'kecioren', name: 'Keçiören', lat: 39.99, lon: 32.86, 910, sampleNeighborhoods: ['Etlik', 'Kalaba'] }, { id: 'yenimahalle', name: 'Yenimahalle', lat: 39.96, lon: 32.75, 860, sampleNeighborhoods: ['Batıkent', 'OSTİM'] }, { id: 'etimesgut', name: 'Etimesgut', lat: 39.95, lon: 32.67, 820, sampleNeighborhoods: ['Eryaman', 'Bağlıca'] }, { id: 'golbasi', name: 'Gölbaşı', lat: 39.79, lon: 32.80, 975, sampleNeighborhoods: ['Mogan Sahili', 'İncek Taşpınar'] }] },
  { id: 'antalya', name: '07 Antalya', districts: [{ id: 'muratpasa', name: 'Muratpaşa', lat: 36.88, lon: 30.70, 35, sampleNeighborhoods: ['Lara', 'Kaleiçi Yat Limanı', 'Fener'] }, { id: 'konyaalti', name: 'Konyaaltı', lat: 36.87, lon: 30.64, 10, sampleNeighborhoods: ['Sahil Bulvarı', 'Liman'] }, { id: 'alanya', name: 'Alanya', lat: 36.54, lon: 31.99, 10, sampleNeighborhoods: ['Kleopatra Sahili', 'Mahmutlar'] }, { id: 'manavgat', name: 'Manavgat', lat: 36.78, lon: 31.44, 15, sampleNeighborhoods: ['Side Antik Kent', 'Şelale'] }, { id: 'kas', name: 'Kaş', lat: 36.20, lon: 29.63, 15, sampleNeighborhoods: ['Kalkan Marina', 'Çukurbağ', 'Patara'] }, { id: 'kemer', name: 'Kemer', lat: 36.60, lon: 30.56, 8, sampleNeighborhoods: ['Kemer Marina', 'Göynük', 'Beldibi'] }] },
  { id: 'artvin', name: '08 Artvin', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.18, lon: 41.81, 345, sampleNeighborhoods: ['Çoruh Park', 'Köprübaşı'] }, { id: 'hopa', name: 'Hopa', lat: 41.39, lon: 41.43, 10, sampleNeighborhoods: ['Sarp Sınır Kapısı', 'Hopa Limanı', 'Kemalpaşa'] }, { id: 'borcka', name: 'Borçka', lat: 41.35, lon: 41.67, 450, sampleNeighborhoods: ['Karagöl Tabiat Parkı', 'Merkez'] }, { id: 'savsat', name: 'Şavşat', lat: 41.24, lon: 42.36, 1100, sampleNeighborhoods: ['Şavşat Karagöl', 'Yavuzköy'] }] },
  { id: 'aydin', name: '09 Aydın', districts: [{ id: 'efeler', name: 'Efeler', lat: 37.84, lon: 27.84, 65, sampleNeighborhoods: ['Adnan Menderes Bulvarı', 'Zafer'] }, { id: 'kusadasi', name: 'Kuşadası', lat: 37.86, lon: 27.26, 15, sampleNeighborhoods: ['Kuşadası Marina', 'Kadınlar Denizi', 'Güzelçamlı'] }, { id: 'didim', name: 'Didim', lat: 37.37, lon: 27.26, 18, sampleNeighborhoods: ['Altınkum Plajı', 'Akbük'] }, { id: 'soke', name: 'Söke', lat: 37.75, lon: 27.40, 40, sampleNeighborhoods: ['Yenikent', 'Konak'] }, { id: 'nazilli', name: 'Nazilli', lat: 37.91, lon: 28.32, 80, sampleNeighborhoods: ['Sümer Park', 'Altıntaş'] }] },
  { id: 'balikesir', name: '10 Balıkesir', districts: [{ id: 'karesi', name: 'Karesi', lat: 39.64, lon: 27.88, 145, sampleNeighborhoods: ['Milli Kuvvetler', 'Paşa Alanı'] }, { id: 'ayvalik', name: 'Ayvalık', lat: 39.31, lon: 26.69, 5, sampleNeighborhoods: ['Cunda Adası', 'Sarımsaklı Plajı', 'Şeytan Sofrası'] }, { id: 'edremit', name: 'Edremit', lat: 39.58, lon: 26.92, 25, sampleNeighborhoods: ['Akçay Sahil', 'Altınoluk', 'Güre Termal'] }, { id: 'bandirma', name: 'Bandırma', lat: 40.35, lon: 27.97, 15, sampleNeighborhoods: ['İDO Feribot', 'Kordon'] }, { id: 'erdek', name: 'Erdek', lat: 40.40, lon: 27.79, 10, sampleNeighborhoods: ['Ocaklar', 'Çuğra Plajı'] }] },
  { id: 'bilecik', name: '11 Bilecik', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.14, lon: 29.97, 500, sampleNeighborhoods: ['Şeyh Edebali Türbesi', 'Valilik'] }, { id: 'bozuyuk', name: 'Bozüyük', lat: 39.90, lon: 30.04, 740, sampleNeighborhoods: ['YHT Garı', 'İsmet İnönü Cad.', 'Kasımpaşa'] }, { id: 'sogut', name: 'Söğüt', lat: 40.01, lon: 30.18, 665, sampleNeighborhoods: ['Ertuğrul Gazi Türbesi', 'Cumhuriyet'] }, { id: 'osmaneli', name: 'Osmaneli', lat: 40.36, lon: 29.99, 110, sampleNeighborhoods: ['Tarihi Konaklar', 'İnönü'] }] },
  { id: 'bingol', name: '12 Bingöl', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.88, lon: 40.49, 1151, sampleNeighborhoods: ['Dörtyol Meydanı', 'Genç Cad.'] }, { id: 'genc', name: 'Genç', lat: 38.74, lon: 40.55, 980, sampleNeighborhoods: ['Kültür', 'Cumhuriyet'] }, { id: 'solhan', name: 'Solhan', lat: 38.96, lon: 41.03, 1390, sampleNeighborhoods: ['Yüzen Adalar', 'Merkez'] }] },
  { id: 'bitlis', name: '13 Bitlis', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.40, lon: 42.10, 1545, sampleNeighborhoods: ['Bitlis Kalesi', 'Hüsrevpaşa'] }, { id: 'tatvan', name: 'Tatvan', lat: 38.50, lon: 42.28, 1650, sampleNeighborhoods: ['Van Gölü Sahili', 'Nemrut Krateri'] }, { id: 'ahlat', name: 'Ahlat', lat: 38.75, lon: 42.48, 1670, sampleNeighborhoods: ['Selçuklu Mezarlığı', 'Sahil'] }, { id: 'adilcevaz', name: 'Adilcevaz', lat: 38.80, lon: 42.73, 1660, sampleNeighborhoods: ['Sahil Kordon', 'Ceviz Parkı'] }] },
  { id: 'bolu', name: '14 Bolu', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.73, lon: 31.50, 726, sampleNeighborhoods: ['Bolu Dağı Geçişi / Tünel', 'İzzet Baysal Cad.', 'Gölcük'] }, { id: 'mudurnu', name: 'Mudurnu', lat: 40.60, lon: 31.28, 1325, sampleNeighborhoods: ['Abant Gölü', 'Tarihi Konaklar'] }, { id: 'gerede', name: 'Gerede', lat: 40.80, lon: 32.20, 1300, sampleNeighborhoods: ['Esentepe', 'Bahçelievler'] }, { id: 'mengen', name: 'Mengen', lat: 40.94, lon: 31.74, 900, sampleNeighborhoods: ['Yedigöller Yolu', 'Aşçılar Cad.'] }] },
  { id: 'burdur', name: '15 Burdur', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.72, lon: 30.29, 950, sampleNeighborhoods: ['Burdur Gölü Sahili', 'Gazi Cad.'] }, { id: 'yesilova', name: 'Yeşilova', lat: 37.52, lon: 29.71, 1160, sampleNeighborhoods: ['Salda Gölü Beyaz Adalar', 'Halk Plajı'] }, { id: 'bucak', name: 'Bucak', lat: 37.45, lon: 30.59, 850, sampleNeighborhoods: ['Konak', 'Sanayi'] }] },
  { id: 'bursa', name: '16 Bursa', districts: [{ id: 'nilufer', name: 'Nilüfer', lat: 40.22, lon: 28.92, 110, sampleNeighborhoods: ['Özlüce', 'Balat YHT', 'Görükle', 'FSM Bulvarı'] }, { id: 'osmangazi', name: 'Osmangazi', lat: 40.18, lon: 29.06, 155, sampleNeighborhoods: ['Heykel', 'Çekirge Termal', 'Ulucami'] }, { id: 'mudanya', name: 'Mudanya', lat: 40.36, lon: 28.89, 8, sampleNeighborhoods: ['Güzelyalı İDO', 'Tirilye', 'Kordon'] }, { id: 'gemlik', name: 'Gemlik', lat: 40.43, lon: 29.15, 15, sampleNeighborhoods: ['Togg Teknoloji Kampüsü', 'Kumla', 'Sahil'] }, { id: 'inegol', name: 'İnegöl', lat: 40.08, lon: 29.51, 290, sampleNeighborhoods: ['Organize Sanayi', 'Oylat Kaplıcaları'] }] },
  { id: 'canakkale', name: '17 Çanakkale', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.15, lon: 26.41, 10, sampleNeighborhoods: ['Kordon Truva Atı', 'Kepez Sahili', 'Dardanel'] }, { id: 'bozcaada', name: 'Bozcaada', lat: 39.83, lon: 26.06, 15, sampleNeighborhoods: ['Rum Mahallesi', 'Ayazma Plajı'] }, { id: 'gokceada', name: 'Gökçeada', lat: 40.19, lon: 25.90, 20, sampleNeighborhoods: ['Kaleköy', 'Zeytinliköy', 'Aydıncık'] }, { id: 'gelibolu', name: 'Gelibolu', lat: 40.41, lon: 26.67, 20, sampleNeighborhoods: ['1915 Çanakkale Köprüsü', 'Feneraltı'] }, { id: 'ayvacik', name: 'Ayvacık', lat: 39.49, lon: 26.33, 180, sampleNeighborhoods: ['Assos Antik Liman', 'Behramkale', 'Küçükkuyu'] }] },
  { id: 'cankiri', name: '18 Çankırı', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.60, lon: 33.61, 730, sampleNeighborhoods: ['Tuz Mağarası', 'Cumhuriyet'] }, { id: 'ilgaz', name: 'Ilgaz', lat: 40.91, lon: 33.62, 1450, sampleNeighborhoods: ['Ilgaz Dağı Kayak', 'Yurdintepe'] }, { id: 'cerkes', name: 'Çerkeş', lat: 40.81, lon: 32.89, 1120, sampleNeighborhoods: ['İstasyon', 'Karamuk'] }] },
  { id: 'corum', name: '19 Çorum', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.55, lon: 34.95, 801, sampleNeighborhoods: ['Saat Kulesi', 'Gazi Cad.', 'Bahçelievler'] }, { id: 'sungurlu', name: 'Sungurlu', lat: 40.16, lon: 34.37, 770, sampleNeighborhoods: ['Hattuşa Ören Yeri', 'Fatih'] }, { id: 'osmancik', name: 'Osmancık', lat: 40.97, lon: 34.80, 430, sampleNeighborhoods: ['Koyunbaba Köprüsü', 'Yazı'] }] },
  { id: 'denizli', name: '20 Denizli', districts: [{ id: 'pamukkale', name: 'Pamukkale', lat: 37.91, lon: 29.12, 350, sampleNeighborhoods: ['Travertenler', 'Hierapolis', 'Karahayıt Termal'] }, { id: 'merkezefendi', name: 'Merkezefendi', lat: 37.77, lon: 29.08, 354, sampleNeighborhoods: ['Çamlık Bulvarı', 'Servergazi', 'Adalet'] }, { id: 'honaz', name: 'Honaz', lat: 37.75, lon: 29.25, 520, sampleNeighborhoods: ['Milli Park', 'Cumhuriyet'] }] },
  { id: 'diyarbakir', name: '21 Diyarbakır', districts: [{ id: 'kayapinar', name: 'Kayapınar', lat: 37.94, lon: 40.16, 680, sampleNeighborhoods: ['Diclekent Bulvarı', '75. Yol', 'Fırat'] }, { id: 'sur', name: 'Sur', lat: 37.91, lon: 40.23, 670, sampleNeighborhoods: ['Tarihi Surlar', 'Hevsel Bahçeleri', 'Ulu Cami'] }, { id: 'baglar', name: 'Bağlar', lat: 37.90, lon: 40.20, 675, sampleNeighborhoods: ['Bağcılar', 'Şeyh Şamil'] }, { id: 'yenisehir', name: 'Yenişehir', lat: 37.92, lon: 40.21, 670, sampleNeighborhoods: ['Ofis Semti', 'Ekinciler'] }] },
  { id: 'edirne', name: '22 Edirne', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.67, lon: 26.55, 42, sampleNeighborhoods: ['Selimiye Camii', 'Kapıkule Sınır Kapısı', 'Karaağaç'] }, { id: 'kesan', name: 'Keşan', lat: 40.85, lon: 26.63, 90, sampleNeighborhoods: ['Erikli Sahili', 'Saros Körfezi'] }, { id: 'uzunkopru', name: 'Uzunköprü', lat: 41.26, lon: 26.68, 40, sampleNeighborhoods: ['Tarihi Taş Köprü', 'Cumhuriyet'] }] },
  { id: 'elazig', name: '23 Elazığ', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.68, lon: 39.22, 1067, sampleNeighborhoods: ['Harput Kalesi', 'Çaydaçıra', 'Vali Fahri Bey'] }, { id: 'sivrice', name: 'Sivrice', lat: 38.45, lon: 39.31, 1250, sampleNeighborhoods: ['Hazar Gölü Sahili', 'Hazarbaba Kayak'] }, { id: 'keban', name: 'Keban', lat: 38.79, lon: 38.74, 780, sampleNeighborhoods: ['Keban Barajı', 'Değirmenbaşı'] }] },
  { id: 'erzincan', name: '24 Erzincan', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.75, lon: 39.50, 1185, sampleNeighborhoods: ['Ergan Dağı Kayak', 'Ordu Cad.', 'Dörtyol'] }, { id: 'kemaliye', name: 'Kemaliye', lat: 39.26, lon: 38.49, 950, sampleNeighborhoods: ['Karanlık Kanyon', 'Tarihi Taş Yol'] }, { id: 'refahiye', name: 'Refahiye', lat: 39.90, lon: 38.76, 1580, sampleNeighborhoods: ['Dumanlı Tabiat Parkı', 'Merkez'] }] },
  { id: 'erzurum', name: '25 Erzurum', districts: [{ id: 'palandoken', name: 'Palandöken', lat: 39.85, lon: 41.28, 2150, sampleNeighborhoods: ['Palandöken Kayak Otelleri', 'Yenişehir'] }, { id: 'yakutiye', name: 'Yakutiye', lat: 39.90, lon: 41.26, 1910, sampleNeighborhoods: ['Çifte Minareli Medrese', 'Cumhuriyet Cad.'] }, { id: 'aziziye', name: 'Aziziye', lat: 39.94, lon: 41.13, 1800, sampleNeighborhoods: ['Ilıca Termal', 'Dadaşkent'] }, { id: 'tortum', name: 'Tortum', lat: 40.30, lon: 41.53, 1450, sampleNeighborhoods: ['Tortum Şelalesi', 'Merkez'] }] },
  { id: 'eskisehir', name: '26 Eskişehir', districts: [{ id: 'tepebasi', name: 'Tepebaşı', lat: 39.78, lon: 30.50, 790, sampleNeighborhoods: ['Anadolu Üniversitesi', 'Espark', 'Batıkent'] }, { id: 'odunpazari', name: 'Odunpazarı', lat: 39.76, lon: 30.52, 810, sampleNeighborhoods: ['Tarihi Odunpazarı', 'Porsuk Çayı', 'Sazova Parkı'] }, { id: 'sivrihisar', name: 'Sivrihisar', lat: 39.44, lon: 31.53, 850, sampleNeighborhoods: ['Saat Kulesi', 'Ulu Cami'] }, { id: 'cifteler', name: 'Çifteler', lat: 39.38, lon: 31.13, 875, sampleNeighborhoods: ['Sakaryabaşı Doğal Kaynak', 'Merkez'] }] },
  { id: 'gaziantep', name: '27 Gaziantep', districts: [{ id: 'sehitkamil', name: 'Şehitkamil', lat: 37.08, lon: 37.33, 865, sampleNeighborhoods: ['İbrahimli', 'Gazimuhtarpaşa', 'Merveşehir'] }, { id: 'sahinbey', name: 'Şahinbey', lat: 37.06, lon: 37.38, 850, sampleNeighborhoods: ['Gaziantep Kalesi', 'Bakırcılar Çarşısı', 'Karataş'] }, { id: 'nizip', name: 'Nizip', lat: 37.01, lon: 37.79, 520, sampleNeighborhoods: ['Zeugma Antik Kenti', 'Fırat Sahili'] }] },
  { id: 'giresun', name: '28 Giresun', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.91, lon: 38.38, 10, sampleNeighborhoods: ['Giresun Kalesi', 'Gazi Cad.', 'Debboy'] }, { id: 'dereli', name: 'Dereli', lat: 40.56, lon: 38.43, 1650, sampleNeighborhoods: ['Kümbet Yaylası', 'Kuzalan Şelalesi', 'Mavi Göl'] }, { id: 'bulancak', name: 'Bulancak', lat: 40.93, lon: 38.23, 10, sampleNeighborhoods: ['Sahil Kordon', 'İskele'] }, { id: 'gorele', name: 'Görele', lat: 41.03, lon: 39.00, 10, sampleNeighborhoods: ['Kemençe Meydanı', 'Sahil'] }] },
  { id: 'gumushane', name: '29 Gümüşhane', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.46, lon: 39.47, 1210, sampleNeighborhoods: ['Yeni Zigana Tüneli', 'Atatürk Cad.', 'Hasanbey'] }, { id: 'torul', name: 'Torul', lat: 40.56, lon: 39.29, 1000, sampleNeighborhoods: ['Torul Kalesi Cam Teras', 'Karaca Mağarası'] }, { id: 'kelkit', name: 'Kelkit', lat: 40.12, lon: 39.43, 1400, sampleNeighborhoods: ['Satala Antik Kent', 'Cumhuriyet'] }] },
  { id: 'hakkari', name: '30 Hakkari', districts: [{ id: 'yuksekova', name: 'Yüksekova', lat: 37.55, lon: 44.24, 1870, sampleNeighborhoods: ['Havalimanı Yolu', 'İpekyolu Cad.', 'Esentepe'] }, { id: 'merkez', name: 'Merkez', lat: 37.57, lon: 43.74, 1720, sampleNeighborhoods: ['Cumhuriyet Cad.', 'Bulak', 'Pehlivan'] }, { id: 'semdinli', name: 'Şemdinli', lat: 37.29, lon: 44.57, 1400, sampleNeighborhoods: ['Sıfır Noktası', 'Moda', 'Yayla'] }, { id: 'cukurca', name: 'Çukurca', lat: 37.24, lon: 43.61, 1280, sampleNeighborhoods: ['Tarihi Taş Evler', 'Emirşaban'] }] },
  { id: 'hatay', name: '31 Hatay', districts: [{ id: 'iskenderun', name: 'İskenderun', lat: 36.58, lon: 36.17, 10, sampleNeighborhoods: ['Sahil Kordon', 'Atatürk Bulvarı', 'Karaağaç'] }, { id: 'antakya', name: 'Antakya', lat: 36.20, lon: 36.16, 100, sampleNeighborhoods: ['Tarihi Çarşı', 'Harbiye Şelalesi', 'Saray Cad.'] }, { id: 'defne', name: 'Defne', lat: 36.16, lon: 36.13, 120, sampleNeighborhoods: ['Harbiye', 'Çekmece', 'Sümerler'] }, { id: 'dortyol', name: 'Dörtyol', lat: 36.83, lon: 36.22, 50, sampleNeighborhoods: ['İlk Kurşun Parkı', 'Numune'] }] },
  { id: 'isparta', name: '32 Isparta', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.76, lon: 30.55, 1035, sampleNeighborhoods: ['Kafeler Cad.', 'SDÜ Kampüsü', 'Gül Vadisi'] }, { id: 'egirdir', name: 'Eğirdir', lat: 37.87, lon: 30.85, 925, sampleNeighborhoods: ['Yeşilada', 'Altınkum Plajı', 'Eğirdir Kalesi'] }, { id: 'yalvac', name: 'Yalvaç', lat: 38.29, lon: 31.17, 1100, sampleNeighborhoods: ['Pisidia Antiokheia', 'Çınaraltı'] }] },
  { id: 'mersin', name: '33 Mersin', districts: [{ id: 'yenisehir', name: 'Yenişehir', lat: 36.78, lon: 34.58, 10, sampleNeighborhoods: ['Mersin Marina', 'Pozcu Sahil', 'GMK Bulvarı'] }, { id: 'mezitli', name: 'Mezitli', lat: 36.75, lon: 34.52, 15, sampleNeighborhoods: ['Soli Pompeiopolis', 'Viranşehir'] }, { id: 'tarsus', name: 'Tarsus', lat: 36.91, lon: 34.89, 25, sampleNeighborhoods: ['Tarsus Şelalesi', 'Kleopatra Kapısı'] }, { id: 'erdemli', name: 'Erdemli', lat: 36.60, lon: 34.30, 10, sampleNeighborhoods: ['Kızkalesi', 'Ayaş Plajı'] }, { id: 'anamur', name: 'Anamur', lat: 36.07, lon: 32.83, 10, sampleNeighborhoods: ['Mamure Kalesi', 'Anamuryum', 'İskele'] }] },
  { id: 'istanbul', name: '34 İstanbul', districts: [{ id: 'pendik', name: 'Pendik', lat: 40.87, lon: 29.23, 55, sampleNeighborhoods: ['Kurtköy Teknopark', 'Batı Mah. Marina', 'Yenişehir Lens', 'Kaynarca'] }, { id: 'kadikoy', name: 'Kadıköy', lat: 40.98, lon: 29.02, 25, sampleNeighborhoods: ['Moda Sahil', 'Bağdat Caddesi', 'Fenerbahçe', 'Bostancı'] }, { id: 'besiktas', name: 'Beşiktaş', lat: 41.08, lon: 29.01, 60, sampleNeighborhoods: ['Levent Zorlu/Kanyon', 'Bebek', 'Etiler', 'Ortaköy'] }, { id: 'sariyer', name: 'Sarıyer', lat: 41.10, lon: 29.02, 110, sampleNeighborhoods: ['Maslak İTÜ', 'İstinye Park', 'Tarabya', 'Zekeriyaköy'] }, { id: 'uskudar', name: 'Üsküdar', lat: 41.02, lon: 29.04, 45, sampleNeighborhoods: ['Altunizade', 'Çengelköy', 'Beylerbeyi', 'Kuzguncuk'] }, { id: 'bakirkoy', name: 'Bakırköy', lat: 40.97, lon: 28.87, 20, sampleNeighborhoods: ['Ataköy Marina', 'Florya Orman', 'Yeşilköy'] }, { id: 'basaksehir', name: 'Başakşehir', lat: 41.09, lon: 28.80, 140, sampleNeighborhoods: ['Bahçeşehir Gölet', 'Kayaşehir Şehir Hastanesi', 'İkitelli OSB'] }] },
  { id: 'izmir', name: '35 İzmir', districts: [{ id: 'cesme', name: 'Çeşme', lat: 38.32, lon: 26.30, 15, sampleNeighborhoods: ['Alaçatı Port', 'Çeşme Marina', 'Ilıca Plajı', 'Dalyan'] }, { id: 'konak', name: 'Konak', lat: 38.41, lon: 27.12, 5, sampleNeighborhoods: ['Alsancak Kordon', 'Göztepe', 'Güzelyalı', 'Pasaport'] }, { id: 'karsiyaka', name: 'Karşıyaka', lat: 38.45, lon: 27.09, 5, sampleNeighborhoods: ['Bostanlı İskele', 'Mavişehir', 'Aksoy'] }, { id: 'urla', name: 'Urla', lat: 38.32, lon: 26.76, 25, sampleNeighborhoods: ['Urla İskele', 'Bağ Yolu', 'Kekliktepe'] }, { id: 'bornova', name: 'Bornova', lat: 38.46, lon: 27.21, 45, sampleNeighborhoods: ['Küçükpark Ege Üniv.', 'Forum Bornova', 'Evka-3'] }] },
  { id: 'kars', name: '36 Kars', districts: [{ id: 'sarikamis', name: 'Sarıkamış', lat: 40.33, lon: 42.58, 2100, sampleNeighborhoods: ['Kristal Kar Kayak Otelleri', 'Karakurt'] }, { id: 'merkez', name: 'Merkez', lat: 40.60, lon: 43.09, 1768, sampleNeighborhoods: ['Kars Kalesi', 'Ani Harabeleri Yolu', 'Taş Köprü'] }] },
  { id: 'kastamonu', name: '37 Kastamonu', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.38, lon: 33.78, 774, sampleNeighborhoods: ['Nasrullah Meydanı', 'Saat Kulesi', 'Kuzeykent'] }, { id: 'ilgaz', name: 'Ilgaz', lat: 41.08, lon: 33.74, 1550, sampleNeighborhoods: ['Ilgaz 15 Temmuz Tüneli', 'Kayak Tesisleri'] }, { id: 'tosya', name: 'Tosya', lat: 41.01, lon: 34.04, 850, sampleNeighborhoods: ['Çeltik Vadisi', 'Bahçelievler'] }, { id: 'cide', name: 'Cide', lat: 41.89, lon: 32.95, 10, sampleNeighborhoods: ['Gideros Koyu', 'Sahil Kordon'] }] },
  { id: 'kayseri', name: '38 Kayseri', districts: [{ id: 'melikgazi', name: 'Melikgazi', lat: 38.53, lon: 35.53, 2200, sampleNeighborhoods: ['Erciyes Kayak Tekir Kapı', 'Hisarcık', 'Meydan'] }, { id: 'talas', name: 'Talas', lat: 38.69, lon: 35.55, 1100, sampleNeighborhoods: ['Ali Dağı Yamaç Paraşütü', 'Tarihi Talas Evleri'] }, { id: 'kocasinan', name: 'Kocasinan', lat: 38.73, lon: 35.48, 1050, sampleNeighborhoods: ['Kayseri Forum Çevresi', 'Fevzi Çakmak'] }] },
  { id: 'kirklareli', name: '39 Kırklareli', districts: [{ id: 'demirkoy', name: 'Demirköy', lat: 41.87, lon: 27.98, 8, sampleNeighborhoods: ['İğneada Longoz Ormanları', 'Liman Feneri'] }, { id: 'luleburgaz', name: 'Lüleburgaz', lat: 41.40, lon: 27.35, 60, sampleNeighborhoods: ['İstanbul Cad.', '8 Kasım', 'Siteler'] }, { id: 'merkez', name: 'Merkez', lat: 41.73, lon: 27.21, 203, sampleNeighborhoods: ['İstasyon Cad.', 'Vilayet Meydanı'] }] },
  { id: 'kirsehir', name: '40 Kırşehir', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.14, lon: 34.17, 985, sampleNeighborhoods: ['Ahi Evran Külliyesi', 'Cacabey Meydanı', 'Termal'] }, { id: 'kaman', name: 'Kaman', lat: 39.35, lon: 33.72, 1080, sampleNeighborhoods: ['Japon Bahçesi Kalehöyük', 'Merkez'] }] },
  { id: 'kocaeli', name: '41 Kocaeli', districts: [{ id: 'gebze', name: 'Gebze', lat: 40.80, lon: 29.43, 110, sampleNeighborhoods: ['Bilişim Vadisi Togg', 'GOSB', 'Eskihisar Feribot', 'Mutlukent'] }, { id: 'izmit', name: 'İzmit', lat: 40.76, lon: 29.94, 20, sampleNeighborhoods: ['Yahya Kaptan', 'Kordon Sahil', 'Umuttepe Kampüs'] }, { id: 'kartepe', name: 'Kartepe', lat: 40.67, lon: 30.01, 1350, sampleNeighborhoods: ['Zirve Kayak Otelleri', 'Maşukiye Şelaleleri'] }] },
  { id: 'konya', name: '42 Konya', districts: [{ id: 'selcuklu', name: 'Selçuklu', lat: 37.93, lon: 32.48, 1025, sampleNeighborhoods: ['Kelebekler Vadisi', 'Bosna Hersek', 'Sille'] }, { id: 'karatay', name: 'Karatay', lat: 37.87, lon: 32.50, 1020, sampleNeighborhoods: ['Mevlana Türbesi Meydanı', 'Şehir Hastanesi'] }, { id: 'meram', name: 'Meram', lat: 37.85, lon: 32.42, 1030, sampleNeighborhoods: ['Meram Bağları', 'Akyokuş Seyir Terası'] }, { id: 'beysehir', name: 'Beyşehir', lat: 37.67, lon: 31.72, 1150, sampleNeighborhoods: ['Beyşehir Gölü Sahili', 'Eşrefoğlu Camii'] }] },
  { id: 'kutahya', name: '43 Kütahya', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.41, lon: 29.98, 969, sampleNeighborhoods: ['Vazo Meydanı', 'Yoncalı Termal', 'Dumlupınar Kampüs'] }, { id: 'tavsanli', name: 'Tavşanlı', lat: 39.54, lon: 29.50, 860, sampleNeighborhoods: ['Göbel Kaplıcaları', 'Hanımçeşme'] }, { id: 'gediz', name: 'Gediz', lat: 38.99, lon: 29.57, 750, sampleNeighborhoods: ['Murat Dağı Termal Kayak', 'Ulu Cami'] }] },
  { id: 'malatya', name: '44 Malatya', districts: [{ id: 'battalgazi', name: 'Battalgazi', lat: 38.35, lon: 38.30, 964, sampleNeighborhoods: ['Kanalboyu', 'İnönü Kapalı Çarşı', 'Eski Malatya'] }, { id: 'yesilyurt', name: 'Yeşilyurt', lat: 38.30, lon: 38.25, 1010, sampleNeighborhoods: ['Fahri Kayahan Bulvarı', 'Bostanbaşı', 'Tecde'] }, { id: 'darende', name: 'Darende', lat: 38.56, lon: 37.50, 1015, sampleNeighborhoods: ['Somuncu Baba Külliyesi', 'Tohma Kanyonu'] }] },
  { id: 'manisa', name: '45 Manisa', districts: [{ id: 'yunusemre', name: 'Yunusemre', lat: 38.61, lon: 27.42, 71, sampleNeighborhoods: ['Spil Dağı Milli Parkı', 'Güzelyurt', 'Muradiye'] }, { id: 'sehzadeler', name: 'Şehzadeler', lat: 38.61, lon: 27.43, 75, sampleNeighborhoods: ['Sultan Camii', 'Manisa Kalesi Eteği'] }, { id: 'salihli', name: 'Salihli', lat: 38.48, lon: 28.13, 125, sampleNeighborhoods: ['Sardes Antik Kenti', 'Kurşunlu Kaplıcaları'] }, { id: 'akhisar', name: 'Akhisar', lat: 38.92, lon: 27.83, 95, sampleNeighborhoods: ['Tarihi Tepe Mezarı', 'Hürriyet'] }] },
  { id: 'kahramanmaras', name: '46 Kahramanmaraş', districts: [{ id: 'onikisubat', name: 'Onikişubat', lat: 37.58, lon: 36.93, 568, sampleNeighborhoods: ['Yedikuyular Kayak', 'Binevler', 'Necip Fazıl Bulvarı'] }, { id: 'dulkadiroglu', name: 'Dulkadiroğlu', lat: 37.57, lon: 36.94, 580, sampleNeighborhoods: ['Maraş Kalesi', 'Tarihi Kapalı Çarşı', 'Trabzon Cad.'] }, { id: 'elbistan', name: 'Elbistan', lat: 38.20, lon: 37.19, 1150, sampleNeighborhoods: ['Ceyhan Nehri Kaynağı', 'Pınarbaşı'] }] },
  { id: 'mardin', name: '47 Mardin', districts: [{ id: 'artuklu', name: 'Artuklu', lat: 37.32, lon: 40.72, 1085, sampleNeighborhoods: ['Eski Mardin 1. Cadde', 'Deyrulzafaran', 'Kasımiye'] }, { id: 'midyat', name: 'Midyat', lat: 37.42, lon: 41.37, 950, sampleNeighborhoods: ['Midyat Devlet Konukevi', 'Mor Gabriel', 'Telkari'] }, { id: 'nusaybin', name: 'Nusaybin', lat: 37.07, lon: 41.21, 480, sampleNeighborhoods: ['Beyazsu Kanyonu', 'Mor Yakup'] }] },
  { id: 'mugla', name: '48 Muğla', districts: [{ id: 'bodrum', name: 'Bodrum', lat: 37.03, lon: 27.43, 10, sampleNeighborhoods: ['Yalıkavak Marina', 'Göltürkbükü', 'Bodrum Kale', 'Gümüşlük'] }, { id: 'fethiye', name: 'Fethiye', lat: 36.65, lon: 29.11, 15, sampleNeighborhoods: ['Ölüdeniz Belcekız', 'Göcek D-Marin', 'Babadağ Teleferik'] }, { id: 'marmaris', name: 'Marmaris', lat: 36.85, lon: 28.27, 8, sampleNeighborhoods: ['Netsel Marina', 'İçmeler', 'Selimiye', 'Bozburun'] }, { id: 'datca', name: 'Datça', lat: 36.72, lon: 27.68, 18, sampleNeighborhoods: ['Kumluk İskele', 'Eski Datça Can Yücel', 'Knidos Feneri'] }, { id: 'mentese', name: 'Menteşe', lat: 37.21, lon: 28.36, 660, sampleNeighborhoods: ['Kurşunlu Camii', 'Kötekli Kampüs'] }] },
  { id: 'mus', name: '49 Muş', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.74, lon: 41.50, 1334, sampleNeighborhoods: ['Tarihi Murat Köprüsü', 'İstasyon Cad.'] }, { id: 'malazgirt', name: 'Malazgirt', lat: 39.14, lon: 42.54, 1530, sampleNeighborhoods: ['Milli Park Meydanı', 'Malazgirt Kalesi'] }] },
  { id: 'nevsehir', name: '50 Nevşehir', districts: [{ id: 'urgup', name: 'Ürgüp', lat: 38.62, lon: 34.71, 1224, sampleNeighborhoods: ['Göreme Balon Sahası', 'Uçhisar Kalesi', 'Avanos Çömlek'] }, { id: 'merkez', name: 'Merkez', lat: 38.62, lon: 34.71, 1150, sampleNeighborhoods: ['Kayaşehir Yeraltı', 'Atatürk Bulvarı'] }, { id: 'derinkuyu', name: 'Derinkuyu', lat: 38.37, lon: 34.73, 1320, sampleNeighborhoods: ['Derinkuyu Yeraltı Şehri', 'Cumhuriyet'] }] },
  { id: 'nigde', name: '51 Niğde', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.96, lon: 34.68, 1229, sampleNeighborhoods: ['Niğde Kalesi', 'Bor Yolu', 'Saat Kulesi'] }, { id: 'bor', name: 'Bor', lat: 37.89, lon: 34.56, 1110, sampleNeighborhoods: ['Tarihi Paşa Camii', 'Organize Sanayi'] }, { id: 'camardi', name: 'Çamardı', lat: 37.83, lon: 35.00, 1500, sampleNeighborhoods: ['Aladağlar Demirkazık Zirve', 'Merkez'] }] },
  { id: 'ordu', name: '52 Ordu', districts: [{ id: 'altinordu', name: 'Altınordu', lat: 40.98, lon: 37.87, 5, sampleNeighborhoods: ['Boztepe Teleferik', 'Sahil Kordon', 'Akyazı'] }, { id: 'unye', name: 'Ünye', lat: 41.12, lon: 37.28, 10, sampleNeighborhoods: ['Çamlık Sahili', 'Ünye Kalesi', 'Kordon'] }, { id: 'fatsa', name: 'Fatsa', lat: 41.03, lon: 37.50, 10, sampleNeighborhoods: ['Yalıköy Sahil', 'Gaga Gölü', 'Dolunay'] }, { id: 'aybasti', name: 'Aybastı', lat: 40.68, lon: 37.40, 1500, sampleNeighborhoods: ['Perşembe Yaylası Menderesleri', 'Merkez'] }] },
  { id: 'rize', name: '53 Rize', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.02, lon: 40.52, 6, sampleNeighborhoods: ['Çay Çarşısı Dev Bardak', 'Sahil Parkı', 'İslampaşa'] }, { id: 'camlihemsin', name: 'Çamlıhemşin', lat: 40.95, lon: 41.10, 1350, sampleNeighborhoods: ['Ayder Yaylası', 'Zilkale', 'Fırtına Vadisi', 'Pokut'] }, { id: 'ikizdere', name: 'İkizdere', lat: 40.78, lon: 40.55, 750, sampleNeighborhoods: ['Ovit Tüneli', 'Ridos Termal', 'Anzer Yaylası'] }, { id: 'findikli', name: 'Fındıklı', lat: 41.27, lon: 41.14, 10, sampleNeighborhoods: ['Çağlayan Vadisi', 'Tarihi Taş Konaklar'] }] },
  { id: 'sakarya', name: '54 Sakarya', districts: [{ id: 'sapanca', name: 'Sapanca', lat: 40.69, lon: 30.25, 45, sampleNeighborhoods: ['Kırkpınar Sahil', 'Göl Yürüyüş Yolu', 'Kurtköy Bungalov'] }, { id: 'serdivan', name: 'Serdivan', lat: 40.76, lon: 30.36, 65, sampleNeighborhoods: ['Mavi Durak', 'SAÜ Kampüsü', 'Serdivan AVM'] }, { id: 'adapazari', name: 'Adapazarı', lat: 40.77, lon: 30.40, 32, sampleNeighborhoods: ['Çark Caddesi', 'Kent Park', 'Mithatpaşa'] }, { id: 'karasu', name: 'Karasu', lat: 41.09, lon: 30.68, 5, sampleNeighborhoods: ['Acarlar Longozu', 'Karasu Plajı', 'Yenimahalle'] }] },
  { id: 'samsun', name: '55 Samsun', districts: [{ id: 'atakum', name: 'Atakum', lat: 41.32, lon: 36.27, 5, sampleNeighborhoods: ['Sahil Şeridi Yalı', 'Türkiş Meydanı', 'OMÜ Kampüs'] }, { id: 'ilkadim', name: 'İlkadım', lat: 41.28, lon: 36.33, 20, sampleNeighborhoods: ['Bandırma Vapuru Müzesi', 'Onur Anıtı', 'Çiftlik Cad.'] }, { id: 'canik', name: 'Canik', lat: 41.27, lon: 36.36, 30, sampleNeighborhoods: ['Mert Irmağı Parkı', 'Piazza Çevresi'] }, { id: 'bafra', name: 'Bafra', lat: 41.56, lon: 35.90, 20, sampleNeighborhoods: ['Kızılırmak Deltası Kuş Cenneti', 'Merkez'] }] },
  { id: 'siirt', name: '56 Siirt', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.93, lon: 41.95, 895, sampleNeighborhoods: ['Güres Caddesi', 'Bahçelievler', 'Veysel Karani Yolu'] }, { id: 'tillo', name: 'Tillo', lat: 37.95, lon: 42.01, 1050, sampleNeighborhoods: ['Işık Hadisesi Türbesi', 'Kale Seyir Terası'] }] },
  { id: 'sinop', name: '57 Sinop', districts: [{ id: 'merkez', name: 'Merkez', lat: 42.02, lon: 35.15, 25, sampleNeighborhoods: ['Tarihi Cezaevi', 'İnceburun En Kuzey', 'Hamsilos Fiyordu'] }, { id: 'boyabat', name: 'Boyabat', lat: 41.46, lon: 34.76, 330, sampleNeighborhoods: ['Tarihi Boyabat Kalesi', 'Bazalt Kayalıkları'] }, { id: 'ayancik', name: 'Ayancık', lat: 41.94, lon: 34.58, 10, sampleNeighborhoods: ['Akgöl Tabiat Parkı', 'Sahil Kordon'] }] },
  { id: 'sivas', name: '58 Sivas', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.74, lon: 37.01, 1278, sampleNeighborhoods: ['Tarihi Kent Meydanı', 'Kongre Müzesi', 'İstasyon Cad.'] }, { id: 'divrigi', name: 'Divriği', lat: 39.37, lon: 38.11, 1050, sampleNeighborhoods: ['Divriği Ulu Cami Külliyesi UNESCO', 'Kaledibi'] }, { id: 'kangal', name: 'Kangal', lat: 39.23, lon: 37.38, 1540, sampleNeighborhoods: ['Balıklı Kaplıca Termal', 'Merkez'] }, { id: 'gurun', name: 'Gürün', lat: 38.72, lon: 37.27, 1280, sampleNeighborhoods: ['Gökpınar Gölü', 'Şuğul Kanyonu'] }] },
  { id: 'tekirdag', name: '59 Tekirdağ', districts: [{ id: 'suleymanpasa', name: 'Süleymanpaşa', lat: 40.98, lon: 27.51, 37, sampleNeighborhoods: ['Sahil Dolgu Alanı', 'Değirmenaltı NKÜ', 'Hürriyet'] }, { id: 'corlu', name: 'Çorlu', lat: 41.16, lon: 27.80, 150, sampleNeighborhoods: ['Omurtak Caddesi', 'Trend Arena', 'Emlak Konutları'] }, { id: 'cerkezkoy', name: 'Çerkezköy', lat: 41.28, lon: 28.00, 155, sampleNeighborhoods: ['Organize Sanayi', 'Gazi Mustafa Kemal Paşa'] }] },
  { id: 'tokat', name: '60 Tokat', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.31, lon: 36.55, 623, sampleNeighborhoods: ['Taşhan & Saat Kulesi', 'Ballıca Mağarası Yolu', 'GOP Bulvarı'] }, { id: 'erbaa', name: 'Erbaa', lat: 40.67, lon: 36.57, 240, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Gazi Bulvarı'] }, { id: 'niksar', name: 'Niksar', lat: 40.59, lon: 36.95, 350, sampleNeighborhoods: ['Niksar Kalesi', 'Çamiçi Yaylası'] }, { id: 'zile', name: 'Zile', lat: 40.30, lon: 35.88, 710, sampleNeighborhoods: ['Tarihi Zile Kalesi', 'Veni Vidi Vici'] }] },
  { id: 'trabzon', name: '61 Trabzon', districts: [{ id: 'ortahisar', name: 'Ortahisar', lat: 41.00, lon: 39.71, 35, sampleNeighborhoods: ['Meydan Parkı', 'KTÜ Kampüsü', 'Boztepe', 'Ayasofya'] }, { id: 'macka', name: 'Maçka', lat: 40.69, lon: 39.65, 1150, sampleNeighborhoods: ['Sümela Manastırı Altındere', 'Hamsiköy Sütlaç'] }, { id: 'caykara', name: 'Çaykara', lat: 40.61, lon: 40.29, 1100, sampleNeighborhoods: ['Uzungöl Sahili', 'Seyir Terası', 'Şekersu'] }, { id: 'akcaabat', name: 'Akçaabat', lat: 41.02, lon: 39.57, 15, sampleNeighborhoods: ['Köfteciler Sahil Kordon', 'Söğütlü', 'Darıca'] }] },
  { id: 'tunceli', name: '62 Tunceli', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.10, lon: 39.54, 915, sampleNeighborhoods: ['Munzur Çayı Kordon', 'Seyit Rıza Meydanı', 'Atatürk'] }, { id: 'ovacik', name: 'Ovacık', lat: 39.36, lon: 39.21, 1300, sampleNeighborhoods: ['Munzur Gözeleri Tabiat Parkı', 'Merkez'] }, { id: 'pulumur', name: 'Pülümür', lat: 39.48, lon: 39.91, 1550, sampleNeighborhoods: ['Pülümür Vadisi', 'Ağlayan Kayalar'] }] },
  { id: 'sanliurfa', name: '63 Şanlıurfa', districts: [{ id: 'haliliye', name: 'Haliliye', lat: 37.22, lon: 38.92, 530, sampleNeighborhoods: ['Göbeklitepe Ören Yeri', 'Necmettin Cevheri Bulvarı'] }, { id: 'eyyubiye', name: 'Eyyübiye', lat: 37.14, lon: 38.78, 510, sampleNeighborhoods: ['Balıklıgöl', 'Tarihi Urfa Kapalı Çarşı', 'Dergah'] }, { id: 'birecik', name: 'Birecik', lat: 37.02, lon: 37.98, 340, sampleNeighborhoods: ['Fırat Kıyısı', 'Kelaynak İstasyonu'] }, { id: 'halfeti', name: 'Halfeti', lat: 37.24, lon: 37.86, 380, sampleNeighborhoods: ['Eski Halfeti Batık Minare', 'Rumkale Tekne'] }] },
  { id: 'usak', name: '64 Uşak', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.68, lon: 29.40, 907, sampleNeighborhoods: ['İsmetpaşa Cad.', 'Ulubey Kanyonu Yolu', 'Atatürk Meydanı'] }, { id: 'banaz', name: 'Banaz', lat: 38.74, lon: 29.75, 915, sampleNeighborhoods: ['Hamamboğazı Termal', 'İslam Mahallesi'] }] },
  { id: 'van', name: '65 Van', districts: [{ id: 'ipekyolu', name: 'İpekyolu', lat: 38.48, lon: 43.40, 1727, sampleNeighborhoods: ['Cumhuriyet Cad. Maraş', 'Van Kalesi', 'İskele Sahili'] }, { id: 'edremit', name: 'Edremit', lat: 38.42, lon: 43.25, 1670, sampleNeighborhoods: ['Edremit Sahil Kordonu', 'Akdamar Adası İskelesi'] }, { id: 'tusba', name: 'Tuşba', lat: 38.53, lon: 43.38, 1660, sampleNeighborhoods: ['Yüzüncü Yıl Üniversitesi', 'İskele Sahil'] }] },
  { id: 'yozgat', name: '66 Yozgat', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.81, lon: 34.81, 1300, sampleNeighborhoods: ['Yozgat Çamlığı Milli Parkı', 'Saat Kulesi', 'Lise Cad.'] }, { id: 'sorgun', name: 'Sorgun', lat: 39.81, lon: 35.18, 1080, sampleNeighborhoods: ['Termal Tesisler', 'Cumhuriyet', 'Ahmet Efendi'] }, { id: 'bogazliyan', name: 'Boğazlıyan', lat: 39.19, lon: 35.24, 1060, sampleNeighborhoods: ['Cavlak Termal', 'Merkez'] }] },
  { id: 'zonguldak', name: '67 Zonguldak', districts: [{ id: 'merkez', name: 'Merkez', lat: 41.45, lon: 31.79, 50, sampleNeighborhoods: ['Fener Liman Gezisi', 'Gazipaşa Cad.', 'BEÜ İncirharmanı'] }, { id: 'karadeniz-eregli', name: 'Karadeniz Ereğli', lat: 41.28, lon: 31.42, 15, sampleNeighborhoods: ['Ereğli Sahil Kordon', 'Cehennemağzı Mağaraları', 'Erdemir'] }, { id: 'caycuma', name: 'Çaycuma', lat: 41.42, lon: 32.08, 35, sampleNeighborhoods: ['Filyos Vadisi Projesi', 'Havalimanı Çevresi'] }] },
  { id: 'aksaray', name: '68 Aksaray', districts: [{ id: 'merkez', name: 'Merkez', lat: 38.36, lon: 34.03, 980, sampleNeighborhoods: ['Hükümet Meydanı', 'Kafeler Cad.', 'Ereğlikapı'] }, { id: 'guzelyurt', name: 'Güzelyurt', lat: 38.27, lon: 34.37, 1485, sampleNeighborhoods: ['Ihlara Vadisi Girişi', 'Manastır Vadisi', 'Yüksek Kilise'] }] },
  { id: 'bayburt', name: '69 Bayburt', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.25, lon: 40.22, 1550, sampleNeighborhoods: ['Baksı Müzesi Yolu', 'Bayburt Kalesi', 'Çoruh Kordonu'] }, { id: 'aydintepe', name: 'Aydıntepe', lat: 40.38, lon: 40.15, 1500, sampleNeighborhoods: ['Yeraltı Şehri', 'Merkez'] }] },
  { id: 'karaman', name: '70 Karaman', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.17, lon: 33.22, 1033, sampleNeighborhoods: ['Aktekke Meydanı', 'İsmet Paşa Cad.', 'Karaman Kalesi'] }, { id: 'ermenek', name: 'Ermenek', lat: 36.63, lon: 32.79, 1250, sampleNeighborhoods: ['Ermenek Barajı Turkuaz Göl', 'Tarihi Meydan'] }] },
  { id: 'kirikkale', name: '71 Kırıkkale', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.84, lon: 33.51, 713, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Zafer Cad.', 'MKE Silah Fabrikası'] }, { id: 'yahsihan', name: 'Yahşihan', lat: 39.85, lon: 33.45, 720, sampleNeighborhoods: ['Kırıkkale Üniversitesi Kampüsü', 'Podium AVM'] }] },
  { id: 'batman', name: '72 Batman', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.88, lon: 41.12, 540, sampleNeighborhoods: ['Turgut Özal Bulvarı', 'Gültepe', 'Gap'] }, { id: 'hasankeyf', name: 'Hasankeyf', lat: 37.71, lon: 41.41, 510, sampleNeighborhoods: ['Yeni Hasankeyf Müzesi', 'Tarihi Kale Seyir', 'Ilısu Baraj Gölü'] }] },
  { id: 'sirnak', name: '73 Şırnak', districts: [{ id: 'cizre', name: 'Cizre', lat: 37.32, lon: 42.18, 377, sampleNeighborhoods: ['Dicle Nehri Kordonu', 'Kırmızı Medrese', 'Dörtyol'] }, { id: 'merkez', name: 'Merkez', lat: 37.51, lon: 42.45, 1350, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Gazi Paşa', 'Vakıfkent'] }, { id: 'silopi', name: 'Silopi', lat: 37.17, lon: 42.47, 510, sampleNeighborhoods: ['Habur Sınır Kapısı Koridoru', 'İpekyolu'] }] },
  { id: 'bartin', name: '74 Bartın', districts: [{ id: 'amasra', name: 'Amasra', lat: 41.74, lon: 32.38, 15, sampleNeighborhoods: ['Çeşm-i Cihan', 'Amasra Kalesi', 'Küçük Liman', 'Kemere Köprüsü'] }, { id: 'merkez', name: 'Merkez', lat: 41.63, lon: 32.33, 25, sampleNeighborhoods: ['Bartın Çayı İskelesi', 'Hükümet Cad.', 'Kemerköprü'] }, { id: 'kurucasile', name: 'Kurucaşile', lat: 41.84, lon: 32.72, 10, sampleNeighborhoods: ['Tekne Yapım Tersanesi', 'Gideros Sahili'] }] },
  { id: 'ardahan', name: '75 Ardahan', districts: [{ id: 'cildir', name: 'Çıldır', lat: 41.12, lon: 43.13, 1960, sampleNeighborhoods: ['Buz Tutan Çıldır Gölü', 'Atlı Kızak Tesisleri', 'Akçakale'] }, { id: 'merkez', name: 'Merkez', lat: 41.11, lon: 42.70, 1829, sampleNeighborhoods: ['Ardahan Kalesi', 'Kura Nehri Kordonu', 'Kongre Cad.'] }, { id: 'posof', name: 'Posof', lat: 41.51, lon: 42.73, 1550, sampleNeighborhoods: ['Türkgözü Gürcistan Sınırı', 'Merkez'] }] },
  { id: 'igdir', name: '76 Iğdır', districts: [{ id: 'merkez', name: 'Merkez', lat: 39.92, lon: 44.04, 858, sampleNeighborhoods: ['Vali Yolu Bulvarı', 'Ağrı Dağı Manzarası', 'Atatürk Cad.'] }, { id: 'aralik', name: 'Aralık', lat: 39.86, lon: 44.51, 820, sampleNeighborhoods: ['Dilucu Nahçıvan Sınır Kapısı', 'Merkez'] }] },
  { id: 'yalova', name: '77 Yalova', districts: [{ id: 'altinova', name: 'Altınova', lat: 40.70, lon: 29.51, 15, sampleNeighborhoods: ['Osmangazi Köprüsü Girişi', 'Hersek Lagünü Kuş Cenneti'] }, { id: 'merkez', name: 'Merkez', lat: 40.65, lon: 29.26, 10, sampleNeighborhoods: ['Yalova İDO İskelesi', 'Yürüyen Köşk Parkı', 'Kordon'] }, { id: 'termal', name: 'Termal', lat: 40.60, lon: 29.17, 150, sampleNeighborhoods: ['Yalova Termal Kaplıcaları', 'Gökçedere', 'Üvezpınar'] }, { id: 'cinarcik', name: 'Çınarcık', lat: 40.64, lon: 29.12, 10, sampleNeighborhoods: ['Çınarcık Kordon Sahil', 'Esenköy', 'Teşvikiye Şelaleleri'] }] },
  { id: 'karabuk', name: '78 Karabük', districts: [{ id: 'safranbolu', name: 'Safranbolu', lat: 41.25, lon: 32.69, 485, sampleNeighborhoods: ['Tarihi Safranbolu Çarşısı', 'Hıdırlık Tepesi', 'Kristal Teras', 'Tokatlı Kanyonu'] }, { id: 'merkez', name: 'Merkez', lat: 41.20, lon: 32.62, 270, sampleNeighborhoods: ['Kardemir Fabrikası', '100. Yıl KBÜ Kampüs', 'Hürriyet Cad.'] }, { id: 'yenice', name: 'Yenice', lat: 41.20, lon: 32.33, 150, sampleNeighborhoods: ['Yenice Blok Ormanları Tabiat Parkı', 'Merkez'] }] },
  { id: 'kilis', name: '79 Kilis', districts: [{ id: 'merkez', name: 'Merkez', lat: 36.71, lon: 37.12, 660, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Öncüpınar Sınır Kapısı', 'Tarihi Taş Mektep'] }, { id: 'elbeyli', name: 'Elbeyli', lat: 36.67, lon: 37.47, 500, sampleNeighborhoods: ['Çobanbey Sınır Koridoru', 'Merkez'] }] },
  { id: 'osmaniye', name: '80 Osmaniye', districts: [{ id: 'merkez', name: 'Merkez', lat: 37.07, lon: 36.24, 125, sampleNeighborhoods: ['Devlet Bahçeli Meydanı', 'Korkut Ata Üniv.', 'Toprakkale Otoyol'] }, { id: 'kadirli', name: 'Kadirli', lat: 37.37, lon: 36.09, 95, sampleNeighborhoods: ['Karatepe Aslantaş Açık Hava Müzesi', 'Cemalpaşa'] }, { id: 'duzici', name: 'Düziçi', lat: 37.24, lon: 36.45, 400, sampleNeighborhoods: ['Harun Reşit Kalesi', 'Düldül Dağı Teleferik'] }] },
  { id: 'duzce', name: '81 Düzce', districts: [{ id: 'merkez', name: 'Merkez', lat: 40.84, lon: 31.15, 160, sampleNeighborhoods: ['İstanbul Cad.', 'Anıtpark', 'Düzce Üniversitesi Kampüs', 'Kalıcı Konutlar'] }, { id: 'akcakoca', name: 'Akçakoca', lat: 41.08, lon: 31.11, 10, sampleNeighborhoods: ['Ceneviz Kalesi Plajı', 'Çuhallı Sahili', 'Merkez Camii'] }, { id: 'kaynasli', name: 'Kaynaşlı', lat: 40.77, lon: 31.31, 320, sampleNeighborhoods: ['Bolu Dağı Otoyol Tesisleri', 'Topuk Yaylası Göleti', 'Darıyeri'] }, { id: 'golyaka', name: 'Gölyaka', lat: 40.77, lon: 31.02, 130, sampleNeighborhoods: ['Efteni Gölü Kuş Cenneti', 'Güzeldere Şelalesi Tabiat Parkı'] }] }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'route' | 'saver' | 'telemetry' | 'charging' | 'passport'>('route');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('togg-t10x-long');
  const [loading, setLoading] = useState<boolean>(false);

  // --- 1. ROTA PLANLAYICI STATE ---
  const [origProvinceId, setOrigProvinceId] = useState<string>('istanbul');
  const [origDistrictId, setOrigDistrictId] = useState<string>('pendik');
  const [origNeighborhood, setOrigNeighborhood] = useState<string>('Kurtköy Teknopark');

  const [destProvinceId, setDestProvinceId] = useState<string>('izmir');
  const [destDistrictId, setDestDistrictId] = useState<string>('cesme');
  const [destNeighborhood, setDestNeighborhood] = useState<string>('Alaçatı Port');

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
    TURKEY_PROVINCES.find(p => p.id === origProvinceId) || TURKEY_PROVINCES[33], // 34 İstanbul
    [origProvinceId]
  );
  const currentOrigDistrict = useMemo(() => 
    currentOrigProvince.districts.find(d => d.id === origDistrictId) || currentOrigProvince.districts[0],
    [currentOrigProvince, origDistrictId]
  );

  // Varış Seçim Yardımcıları
  const currentDestProvince = useMemo(() => 
    TURKEY_PROVINCES.find(p => p.id === destProvinceId) || TURKEY_PROVINCES[34], // 35 İzmir
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
    const firstDist = p.districts[0];
    setOrigDistrictId(firstDist.id);
    setOrigNeighborhood(firstDist.sampleNeighborhoods[0] || 'Merkez');
  };

  const handleOrigDistrictChange = (dId: string) => {
    setOrigDistrictId(dId);
    const d = currentOrigProvince.districts.find(x => x.id === dId) || currentOrigProvince.districts[0];
    setOrigNeighborhood(d.sampleNeighborhoods[0] || 'Merkez');
  };

  const handleDestProvinceChange = (pId: string) => {
    setDestProvinceId(pId);
    const p = TURKEY_PROVINCES.find(x => x.id === pId) || TURKEY_PROVINCES[0];
    const firstDist = p.districts[0];
    setDestDistrictId(firstDist.id);
    setDestNeighborhood(firstDist.sampleNeighborhoods[0] || 'Merkez');
  };

  const handleDestDistrictChange = (dId: string) => {
    setDestDistrictId(dId);
    const d = currentDestProvince.districts.find(x => x.id === dId) || currentDestProvince.districts[0];
    setDestNeighborhood(d.sampleNeighborhoods[0] || 'Merkez');
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
        origin_full: `${currentOrigProvince.name} / ${currentOrigDistrict.name} (${origNeighborhood})`,
        destination_full: `${currentDestProvince.name} / ${currentDestDistrict.name} (${destNeighborhood})`,
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
              VoltPulse SDV <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">81 İl Eksiksiz</span>
            </h1>
            <p className="text-xs text-slate-400">Turkey 81 Provinces Complete EV Range & Diagnostic Suite</p>
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
          <Navigation className="w-4 h-4" /> 🗺️ 81 İl Rota Planı
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

      {/* Ana Gövde */}
      <main className="max-w-7xl mx-auto mt-6">

        {/* 1. SEKME: 81 İL ROTA PLANI */}
        {activeTab === 'route' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <MapPin className="w-5 h-5 text-emerald-400" /> 81 İl ve İlçe Seçimi
                </h2>

                {/* 1. KALKIŞ NOKTASI */}
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2.5">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    1. Kalkış Noktası
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">İl (01-81)</label>
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
                        onChange={(e) => handleOrigDistrictChange(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs font-semibold rounded-lg p-2 outline-none border border-slate-700 focus:border-emerald-500 cursor-pointer"
                      >
                        {currentOrigProvince.districts.map(d => (
                          <option key={`od-${d.id}`} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Semt / Bölge (Seçin veya Yazın)</label>
                    <input 
                      type="text"
                      list="orig-neighborhoods"
                      value={origNeighborhood}
                      onChange={(e) => setOrigNeighborhood(e.target.value)}
                      placeholder="Mahalle veya sokak..."
                      className="w-full bg-slate-800 text-white text-xs rounded-lg p-2 outline-none border border-slate-700 focus:border-emerald-500"
                    />
                    <datalist id="orig-neighborhoods">
                      {currentOrigDistrict.sampleNeighborhoods.map((n, i) => (
                        <option key={`on-${i}`} value={n} />
                      ))}
                    </datalist>
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
                      <label className="text-[10px] text-slate-400 block mb-0.5">İl (01-81)</label>
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
                        onChange={(e) => handleDestDistrictChange(e.target.value)}
                        className="w-full bg-slate-800 text-white text-xs font-semibold rounded-lg p-2 outline-none border border-slate-700 focus:border-cyan-500 cursor-pointer"
                      >
                        {currentDestProvince.districts.map(d => (
                          <option key={`dd-${d.id}`} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Semt / Bölge (Seçin veya Yazın)</label>
                    <input 
                      type="text"
                      list="dest-neighborhoods"
                      value={destNeighborhood}
                      onChange={(e) => setDestNeighborhood(e.target.value)}
                      placeholder="Mahalle veya sokak..."
                      className="w-full bg-slate-800 text-white text-xs rounded-lg p-2 outline-none border border-slate-700 focus:border-cyan-500"
                    />
                    <datalist id="dest-neighborhoods">
                      {currentDestDistrict.sampleNeighborhoods.map((n, i) => (
                        <option key={`dn-${i}`} value={n} />
                      ))}
                    </datalist>
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
                  <h3 className="text-base font-semibold text-slate-300">81 İl Akıllı Rota Analizi</h3>
                  <p className="text-xs text-slate-500 max-w-md mt-1">
                    01 Adana'dan 81 Düzce'ye kadar tüm illeri ve ilçelerini seçerek rakım, batarya tüketimi ve şarj molalarını anında hesaplayın.
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