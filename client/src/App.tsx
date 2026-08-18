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

// --- 81 İL VE İLÇELERİ YERLEŞİK VERİTABANI ---
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
  {
    id: 'istanbul',
    name: '34 İstanbul',
    districts: [
      { id: 'pendik', name: 'Pendik', lat: 40.8752, lon: 29.2325, elevation_m: 55, sampleNeighborhoods: ['Kurtköy (Sabiha Gökçen / Teknopark)', 'Batı Mah. (Marina / Sahil)', 'Yenişehir (Lens / Atlantis)', 'Kaynarca (Marmara EAH)', 'Güzelyalı (YHT)'] },
      { id: 'kadikoy', name: 'Kadıköy', lat: 40.9850, lon: 29.0270, elevation_m: 25, sampleNeighborhoods: ['Caferağa (Moda Sahil)', 'Caddebostan (Bağdat Caddesi)', 'Fenerbahçe Orduevi Çevresi', 'Fikirtepe', 'Suadiye', 'Bostancı İskele'] },
      { id: 'sariyer', name: 'Sarıyer', lat: 41.1090, lon: 29.0220, elevation_m: 110, sampleNeighborhoods: ['Maslak (İTÜ / Finans)', 'İstinye Marina / Park', 'Tarabya Sahili', 'Zekeriyaköy Evleri', 'Yeniköy Boğaz'] },
      { id: 'besiktas', name: 'Beşiktaş', lat: 41.0820, lon: 29.0140, elevation_m: 60, sampleNeighborhoods: ['Levent (Kanyon / Zorlu)', 'Bebek Koyu', 'Etiler Nispetiye', 'Ortaköy Meydanı', 'Gayrettepe'] },
      { id: 'uskudar', name: 'Üsküdar', lat: 41.0220, lon: 29.0420, elevation_m: 45, sampleNeighborhoods: ['Altunizade (Köprü Çıkışı)', 'Çengelköy Sahil', 'Beylerbeyi Sarayı Çevresi', 'Kuzguncuk', 'Acıbadem'] },
      { id: 'bakirkoy', name: 'Bakırköy', lat: 40.9760, lon: 28.8720, elevation_m: 20, sampleNeighborhoods: ['Ataköy Marina', 'Florya Atatürk Ormanı', 'Yeşilköy Sahil', 'Zuhuratbaba'] },
      { id: 'basaksehir', name: 'Başakşehir', lat: 41.0950, lon: 28.8050, elevation_m: 140, sampleNeighborhoods: ['Bahçeşehir 1. Kısım Gölet', 'Bahçeşehir 2. Kısım', 'Kayaşehir Şehir Hastanesi', 'İkitelli OSB'] }
    ]
  },
  {
    id: 'ankara',
    name: '06 Ankara',
    districts: [
      { id: 'cankaya', name: 'Çankaya', lat: 39.9208, lon: 32.8541, elevation_m: 950, sampleNeighborhoods: ['Kızılay', 'Çayyolu / Ümitköy', 'Bilkent / ODTÜ Teknokent', 'İncek Bulvarı', 'Tunalı Hilmi', 'GOP', 'Bahçelievler'] },
      { id: 'yenimahalle', name: 'Yenimahalle', lat: 39.9650, lon: 32.7480, elevation_m: 860, sampleNeighborhoods: ['Batıkent Metro', 'OSTİM OSB', 'İvedik Sanayi', 'Demetevler', 'Ergazi'] },
      { id: 'golbasi', name: 'Gölbaşı', lat: 39.7900, lon: 32.8050, elevation_m: 975, sampleNeighborhoods: ['Mogan Gölü Sahili', 'Eymir Yolu', 'İncek Taşpınar', 'Karşıyaka'] },
      { id: 'etimesgut', name: 'Etimesgut', lat: 39.9500, lon: 32.6750, elevation_m: 820, sampleNeighborhoods: ['Eryaman (Göksu Parkı)', 'Bağlıca Bulvarı', 'Elvankent', 'Alsancak'] },
      { id: 'kecioren', name: 'Keçiören', lat: 39.9950, lon: 32.8650, elevation_m: 910, sampleNeighborhoods: ['Etlik (Şehir Hastanesi)', 'Kalaba', 'Dutluk', 'Aktepe', 'İncirli'] }
    ]
  },
  {
    id: 'izmir',
    name: '35 İzmir',
    districts: [
      { id: 'cesme', name: 'Çeşme', lat: 38.3240, lon: 26.3040, elevation_m: 15, sampleNeighborhoods: ['Alaçatı (Port / Çarşı)', 'Çeşme Marina & Kale', 'Ilıca Plajı', 'Dalyan Marina', 'Çiftlikköy'] },
      { id: 'konak', name: 'Konak', lat: 38.4190, lon: 27.1280, elevation_m: 5, sampleNeighborhoods: ['Alsancak Kordon', 'Göztepe Sahili', 'Güzelyalı', 'Pasaport İskelesi', 'Konak Meydanı'] },
      { id: 'karsiyaka', name: 'Karşıyaka', lat: 38.4550, lon: 27.0980, elevation_m: 5, sampleNeighborhoods: ['Bostanlı Sahili & İskele', 'Mavişehir Hilltown Çevresi', 'Aksoy', 'Alaybey'] },
      { id: 'urla', name: 'Urla', lat: 38.3250, lon: 26.7650, elevation_m: 25, sampleNeighborhoods: ['Urla İskele / Bağ Yolu', 'Kekliktepe', 'Zeytinalanı', 'Kuşçular'] },
      { id: 'bornova', name: 'Bornova', lat: 38.4620, lon: 27.2180, elevation_m: 45, sampleNeighborhoods: ['Küçükpark (Ege Üniversitesi)', 'Evka-3', 'Forum Bornova Çevresi', 'Özkanlar'] }
    ]
  },
  {
    id: 'antalya',
    name: '07 Antalya',
    districts: [
      { id: 'muratpasa', name: 'Muratpaşa', lat: 36.8850, lon: 30.7040, elevation_m: 35, sampleNeighborhoods: ['Lara (Falezler / Çağlayan)', 'Kaleiçi Yat Limanı', 'Şirinyalı', 'Fener', 'Işıklar Caddesi'] },
      { id: 'konyaalti', name: 'Konyaaltı', lat: 36.8780, lon: 30.6450, elevation_m: 10, sampleNeighborhoods: ['Sahil Bulvarı', 'Liman Mahallesi', 'Hurma', 'Gürsu', 'Altınkum'] },
      { id: 'kas', name: 'Kaş', lat: 36.2000, lon: 29.6380, elevation_m: 15, sampleNeighborhoods: ['Kalkan Marina', 'Kaş Merkez Liman', 'Çukurbağ Yarımadası', 'Patara Plajı', 'Gökseki'] },
      { id: 'alanya', name: 'Alanya', lat: 36.5450, lon: 31.9980, elevation_m: 10, sampleNeighborhoods: ['Kleopatra Plajı', 'Alanya Kalesi Çevresi', 'Mahmutlar', 'Oba', 'Tosmur'] },
      { id: 'manavgat', name: 'Manavgat', lat: 36.7850, lon: 31.4450, elevation_m: 15, sampleNeighborhoods: ['Side Antik Kent', 'Manavgat Şelalesi', 'Kumköy', 'Çolaklı', 'Evrenseki'] },
      { id: 'kemer', name: 'Kemer', lat: 36.6020, lon: 30.5600, elevation_m: 8, sampleNeighborhoods: ['Kemer Marina', 'Göynük Kanyonu', 'Beldibi', 'Çamyuva', 'Tekirova'] }
    ]
  },
  {
    id: 'mugla',
    name: '48 Muğla',
    districts: [
      { id: 'bodrum', name: 'Bodrum', lat: 37.0350, lon: 27.4320, elevation_m: 10, sampleNeighborhoods: ['Yalıkavak Marina', 'Göltürkbükü Sahili', 'Bodrum Merkez / Kale', 'Bitez Sahil', 'Turgutreis Marina', 'Gümüşlük Koyu'] },
      { id: 'fethiye', name: 'Fethiye', lat: 36.6500, lon: 29.1160, elevation_m: 15, sampleNeighborhoods: ['Ölüdeniz / Belcekız Plajı', 'Göcek (D-Marin)', 'Çalış Plajı Kordon', 'Hisarönü / Babadağ Teleferik', 'Kayaköy'] },
      { id: 'marmaris', name: 'Marmaris', lat: 36.8520, lon: 28.2750, elevation_m: 8, sampleNeighborhoods: ['Netsel Marina', 'İçmeler Sahili', 'Armutalan', 'Selimiye Koyu', 'Bozburun', 'Turunç'] },
      { id: 'datca', name: 'Datça', lat: 36.7250, lon: 27.6850, elevation_m: 18, sampleNeighborhoods: ['İskele / Kumluk Plajı', 'Eski Datça (Can Yücel Sokağı)', 'Knidos Feneri (En Batı Uç)', 'Palamutbükü Koyu'] }
    ]
  },
  {
    id: 'bursa',
    name: '16 Bursa',
    districts: [
      { id: 'nilufer', name: 'Nilüfer', lat: 40.2220, lon: 28.9210, elevation_m: 110, sampleNeighborhoods: ['Özlüce (Ahmet Taner Kışlalı)', 'Balat / YHT İstasyonu', 'Görükle Kampüs', 'FSM Bulvarı', 'İhsaniye', 'Odunluk / Sur Yapı'] },
      { id: 'osmangazi', name: 'Osmangazi', lat: 40.1880, lon: 29.0610, elevation_m: 155, sampleNeighborhoods: ['Heykel / Kent Meydanı', 'Çekirge Termal', 'Altıparmak', 'Ulucami Çevresi', 'Demirtaş'] },
      { id: 'mudanya', name: 'Mudanya', lat: 40.3650, lon: 28.8950, elevation_m: 8, sampleNeighborhoods: ['Güzelyalı (İDO/BUDO İskelesi)', 'Mudanya Kordon', 'Tirilye Sahil', 'Burgaz'] },
      { id: 'gemlik', name: 'Gemlik (Togg Fabrikası)', lat: 40.4350, lon: 29.1550, elevation_m: 15, sampleNeighborhoods: ['Togg Teknoloji Kampüsü', 'Gemlik Kordon', 'Kumla Sahili', 'Manastır'] }
    ]
  },
  {
    id: 'kocaeli',
    name: '41 Kocaeli',
    districts: [
      { id: 'gebze', name: 'Gebze (Bilişim Vadisi)', lat: 40.8050, lon: 29.4350, elevation_m: 110, sampleNeighborhoods: ['Bilişim Vadisi (Togg Genel Merkez)', 'GOSB Sanayi', 'Eskihisar Kalesi / Feribot', 'Hacıhalil', 'Mutlukent'] },
      { id: 'izmit', name: 'İzmit', lat: 40.7650, lon: 29.9400, elevation_m: 20, sampleNeighborhoods: ['Yahya Kaptan', 'Yürüyüş Yolu Kordon', 'Kocaeli Üniversitesi Umuttepe', 'Alikahya'] },
      { id: 'kartepe', name: 'Kartepe (Kayak Merkezi)', lat: 40.6700, lon: 30.0150, elevation_m: 1350, sampleNeighborhoods: ['Kartepe Zirve Oteller Bölgesi', 'Maşukiye Şelaleleri', 'Derbent'] }
    ]
  },
  {
    id: 'sakarya',
    name: '54 Sakarya',
    districts: [
      { id: 'sapanca', name: 'Sapanca (Göl Kıyısı)', lat: 40.6920, lon: 30.2580, elevation_m: 45, sampleNeighborhoods: ['Kırkpınar Sahili', 'Sapanca Göl Yürüyüş Yolu', 'Kurtköy Bungalovlar Bölgesi', 'Rüstempaşa'] },
      { id: 'serdivan', name: 'Serdivan', lat: 40.7650, lon: 30.3650, elevation_m: 65, sampleNeighborhoods: ['Mavi Durak (Bağlar)', 'Sakarya Üniversitesi Kampüsü', 'Serdivan AVM Çevresi'] },
      { id: 'adapazari', name: 'Adapazarı', lat: 40.7750, lon: 30.4000, elevation_m: 32, sampleNeighborhoods: ['Çark Caddesi', 'Kent Park', 'Mithatpaşa', 'Korucuk'] }
    ]
  },
  {
    id: 'bolu',
    name: '14 Bolu',
    districts: [
      { id: 'merkez', name: 'Merkez (Bolu Dağı Otoyol)', lat: 40.7390, lon: 31.5050, elevation_m: 726, sampleNeighborhoods: ['Bolu Dağı Geçişi / Tünel', 'İzzet Baysal Caddesi', 'Karacasu Kaplıcaları', 'Gölcük Tabiat Parkı Yolu'] },
      { id: 'abant', name: 'Mudurnu / Abant', lat: 40.6050, lon: 31.2800, elevation_m: 1325, sampleNeighborhoods: ['Abant Gölü Sahili', 'Tabiat Parkı Oteller Bölgesi', 'Mudurnu Tarihi Evler'] },
      { id: 'gerede', name: 'Gerede', lat: 40.8000, lon: 32.2000, elevation_m: 1300, sampleNeighborhoods: ['Esentepe Kayak Merkezi', 'Bahçelievler', 'Kitirler'] }
    ]
  },
  {
    id: 'bilecik',
    name: '11 Bilecik',
    districts: [
      { id: 'bozuyuk', name: 'Bozüyük (YHT Garı)', lat: 39.9050, lon: 30.0450, elevation_m: 740, sampleNeighborhoods: ['YHT Garı Çevresi', 'İsmet İnönü Caddesi', 'Kasımpaşa', 'Çarşı'] },
      { id: 'merkez', name: 'Merkez', lat: 40.1426, lon: 29.9793, elevation_m: 500, sampleNeighborhoods: ['Şeyh Edebali Türbesi', 'Valilik Meydanı', 'İstasyon', 'Ertuğrulgazi'] },
      { id: 'sogut', name: 'Söğüt', lat: 40.0150, lon: 30.1850, elevation_m: 665, sampleNeighborhoods: ['Ertuğrul Gazi Türbesi', 'Cumhuriyet', 'Türkoba'] }
    ]
  },
  {
    id: 'eskisehir',
    name: '26 Eskişehir',
    districts: [
      { id: 'tepebasi', name: 'Tepebaşı', lat: 39.7850, lon: 30.5050, elevation_m: 790, sampleNeighborhoods: ['Anadolu Üniversitesi Kampüsü', 'Espark / Üniversite Cad.', 'Batıkent', 'Çamlıca'] },
      { id: 'odunpazari', name: 'Odunpazarı', lat: 39.7600, lon: 30.5250, elevation_m: 810, sampleNeighborhoods: ['Tarihi Odunpazarı Evleri', 'Porsuk Çayı Adalar', 'Sazova Bilim Parkı', 'Vişnelik'] }
    ]
  },
  {
    id: 'erzurum',
    name: '25 Erzurum',
    districts: [
      { id: 'palandoken', name: 'Palandöken (Kayak Merkezi)', lat: 39.8520, lon: 41.2850, elevation_m: 2150, sampleNeighborhoods: ['Palandöken Oteller Bölgesi', 'Yenişehir / Kayak Yolu', 'Yıldızkent'] },
      { id: 'yakutiye', name: 'Yakutiye (Tarihi Merkez)', lat: 39.9055, lon: 41.2658, elevation_m: 1910, sampleNeighborhoods: ['Çifte Minareli Medrese', 'Cumhuriyet Caddesi', 'Lalapaşa'] }
    ]
  },
  {
    id: 'trabzon',
    name: '61 Trabzon',
    districts: [
      { id: 'ortahisar', name: 'Ortahisar (Meydan / Boztepe)', lat: 41.0027, lon: 39.7168, elevation_m: 35, sampleNeighborhoods: ['Meydan Parkı / Maraş Caddesi', 'KTÜ Kanuni Kampüsü', 'Boztepe Seyir Terası'] },
      { id: 'macka', name: 'Maçka (Sümela Manastırı)', lat: 40.6900, lon: 39.6550, elevation_m: 1150, sampleNeighborhoods: ['Sümela Manastırı Girişi (Altındere)', 'Hamsiköy Sütlaç Vadisi'] }
    ]
  },
  {
    id: 'gaziantep',
    name: '27 Gaziantep',
    districts: [
      { id: 'sehitkamil', name: 'Şehitkamil', lat: 37.0850, lon: 37.3350, elevation_m: 865, sampleNeighborhoods: ['İbrahimli (Batıkent)', 'Gazimuhtarpaşa Bulvarı', 'Merveşehir'] },
      { id: 'sahinbey', name: 'Şahinbey', lat: 37.0650, lon: 37.3820, elevation_m: 850, sampleNeighborhoods: ['Gaziantep Kalesi / Bakırcılar Çarşısı', 'Karataş', 'Akkent'] }
    ]
  },
  {
    id: 'adana',
    name: '01 Adana',
    districts: [
      { id: 'seyhan', name: 'Seyhan', lat: 37.0050, lon: 35.3250, elevation_m: 28, sampleNeighborhoods: ['Ziyapaşa Bulvarı', 'Gazipaşa', 'Cemalpaşa', 'Barajyolu'] },
      { id: 'cukurova', name: 'Çukurova', lat: 37.0450, lon: 35.3120, elevation_m: 65, sampleNeighborhoods: ['Güzelyalı / Baraj Kıyısı', 'Beyazevler', 'Turgut Özal Bulvarı'] }
    ]
  },
  {
    id: 'artvin',
    name: '08 Artvin',
    districts: [
      { id: 'hopa', name: 'Hopa (Sarp Sınır Kapısı)', lat: 41.3920, lon: 41.4310, elevation_m: 10, sampleNeighborhoods: ['Sarp Sınır Kapısı (Gürcistan)', 'Hopa Limanı', 'Kemalpaşa Sahil'] },
      { id: 'merkez', name: 'Merkez', lat: 41.1828, lon: 41.8183, elevation_m: 345, sampleNeighborhoods: ['Çoruh Park', 'Köprübaşı', 'Çarşı'] }
    ]
  },
  {
    id: 'hakkari',
    name: '30 Hakkari',
    districts: [
      { id: 'yuksekova', name: 'Yüksekova (Havalimanı)', lat: 37.5520, lon: 44.2400, elevation_m: 1870, sampleNeighborhoods: ['Selahaddin Eyyubi Havalimanı', 'İpekyolu Caddesi', 'Esentepe'] },
      { id: 'semdinli', name: 'Şemdinli (Sıfır Noktası)', lat: 37.2970, lon: 44.5750, elevation_m: 1400, sampleNeighborhoods: ['Merkez Çarşı', 'Moda', 'Yayla'] }
    ]
  },
  {
    id: 'agri',
    name: '04 Ağrı',
    districts: [
      { id: 'dogubayazit', name: 'Doğubayazıt', lat: 39.5210, lon: 44.1290, elevation_m: 1950, sampleNeighborhoods: ['İshak Paşa Sarayı', 'Gürbulak Sınır Kapısı', 'Büyük Ağrı Caddesi'] },
      { id: 'merkez', name: 'Merkez', lat: 39.7191, lon: 43.0503, elevation_m: 1640, sampleNeighborhoods: ['Cumhuriyet Caddesi', 'Abide Meydanı', 'Fırat'] }
    ]
  },
  {
    id: 'aydin',
    name: '09 Aydın',
    districts: [
      { id: 'kusadasi', name: 'Kuşadası', lat: 37.8600, lon: 27.2600, elevation_m: 15, sampleNeighborhoods: ['Kuşadası Marina', 'Kadınlar Denizi', 'Güzelçamlı Milli Park'] },
      { id: 'didim', name: 'Didim', lat: 37.3750, lon: 27.2650, elevation_m: 18, sampleNeighborhoods: ['Altınkum Plajı', 'Apollon Tapınağı', 'Akbük Koyu'] }
    ]
  },
  {
    id: 'balikesir',
    name: '10 Balıkesir',
    districts: [
      { id: 'ayvalik', name: 'Ayvalık (Cunda)', lat: 39.3197, lon: 26.6964, elevation_m: 5, sampleNeighborhoods: ['Cunda Adası (Alibey)', 'Sarımsaklı Plajı', 'Şeytan Sofrası'] },
      { id: 'edremit', name: 'Edremit (Akçay / Altınoluk)', lat: 39.5850, lon: 26.9250, elevation_m: 25, sampleNeighborhoods: ['Akçay Kordon', 'Altınoluk Sahil', 'Güre Termal'] }
    ]
  },
  {
    id: 'canakkale',
    name: '17 Çanakkale',
    districts: [
      { id: 'merkez', name: 'Merkez (1915 Köprüsü)', lat: 40.1553, lon: 26.4142, elevation_m: 10, sampleNeighborhoods: ['Kordon Sahili / Truva Atı', 'Kepez Sahil', 'Dardanel'] },
      { id: 'bozcaada', name: 'Bozcaada', lat: 39.8350, lon: 26.0650, elevation_m: 15, sampleNeighborhoods: ['Cumhuriyet (Rum Mahallesi)', 'Ayazma Plajı', 'Rüzgar Gülleri'] }
    ]
  },
  {
    id: 'denizli',
    name: '20 Denizli',
    districts: [
      { id: 'pamukkale', name: 'Pamukkale (Travertenler)', lat: 37.9150, lon: 29.1200, elevation_m: 350, sampleNeighborhoods: ['Pamukkale Travertenler', 'Hierapolis Antik Kent', 'Karahayıt Termal'] },
      { id: 'merkezefendi', name: 'Merkezefendi', lat: 37.7765, lon: 29.0864, elevation_m: 354, sampleNeighborhoods: ['Çamlık Bulvarı', 'Servergazi', 'Adalet'] }
    ]
  },
  {
    id: 'diyarbakir',
    name: '21 Diyarbakır',
    districts: [
      { id: 'kayapinar', name: 'Kayapınar', lat: 37.9450, lon: 40.1650, elevation_m: 680, sampleNeighborhoods: ['Diclekent Bulvarı', 'Mahabad Bulvarı (75. Yol)', 'Fırat'] },
      { id: 'sur', name: 'Sur (Tarihi Surlar)', lat: 37.9144, lon: 40.2306, elevation_m: 670, sampleNeighborhoods: ['Diyarbakır Surları / Hevsel', 'Ulu Cami Çevresi', 'Hasanpaşa Hanı'] }
    ]
  },
  {
    id: 'edirne',
    name: '22 Edirne',
    districts: [
      { id: 'merkez', name: 'Merkez (Kapıkule Sınır)', lat: 41.6772, lon: 26.5557, elevation_m: 42, sampleNeighborhoods: ['Selimiye Camii Meydanı', 'Kapıkule Sınır Kapısı', 'Karaağaç Tarihi Gar'] }
    ]
  },
  {
    id: 'kayseri',
    name: '38 Kayseri',
    districts: [
      { id: 'melikgazi', name: 'Melikgazi (Erciyes Kayak)', lat: 38.5350, lon: 35.5350, elevation_m: 2200, sampleNeighborhoods: ['Erciyes Kayak Merkezi Tekir Kapı', 'Hacılar Kapı', 'Hisarcık'] }
    ]
  },
  {
    id: 'konya',
    name: '42 Konya',
    districts: [
      { id: 'selcuklu', name: 'Selçuklu', lat: 37.9350, lon: 32.4850, elevation_m: 1025, sampleNeighborhoods: ['Konya Tropikal Kelebek Bahçesi', 'Bosna Hersek', 'Sille Tarihi Köy'] },
      { id: 'karatay', name: 'Karatay (Mevlana Müzesi)', lat: 37.8710, lon: 32.5050, elevation_m: 1020, sampleNeighborhoods: ['Mevlana Türbesi Meydanı', 'Şehir Hastanesi', 'Akabe'] }
    ]
  },
  {
    id: 'mardin',
    name: '47 Mardin',
    districts: [
      { id: 'artuklu', name: 'Artuklu (Eski Mardin)', lat: 37.3212, lon: 40.7245, elevation_m: 1085, sampleNeighborhoods: ['Tarihi Eski Mardin 1. Cadde', 'Deyrulzafaran Manastırı', 'Kasımiye Medresesi'] },
      { id: 'midyat', name: 'Midyat (Konaklar)', lat: 37.4200, lon: 41.3700, elevation_m: 950, sampleNeighborhoods: ['Tarihi Midyat Devlet Konukevi', 'Mor Gabriel Yolu'] }
    ]
  },
  {
    id: 'nevsehir',
    name: '50 Nevşehir',
    districts: [
      { id: 'urgup', name: 'Ürgüp / Kapadokya', lat: 38.6244, lon: 34.7144, elevation_m: 1224, sampleNeighborhoods: ['Göreme Açık Hava Müzesi (Balonlar)', 'Uçhisar Kalesi', 'Avanos Çömlekçiler'] }
    ]
  },
  {
    id: 'rize',
    name: '53 Rize',
    districts: [
      { id: 'camlihemsin', name: 'Çamlıhemşin (Ayder Yaylası)', lat: 40.9550, lon: 41.1000, elevation_m: 1350, sampleNeighborhoods: ['Ayder Yaylası Kaplıcaları', 'Zilkale Yolu', 'Fırtına Vadisi'] },
      { id: 'merkez', name: 'Merkez', lat: 41.0201, lon: 40.5234, elevation_m: 6, sampleNeighborhoods: ['Rize Çay Çarşısı / Dev Bardak', 'Sahil Parkı', 'İslampaşa'] }
    ]
  },
  {
    id: 'samsun',
    name: '55 Samsun',
    districts: [
      { id: 'atakum', name: 'Atakum (Sahil Kordon)', lat: 41.3250, lon: 36.2750, elevation_m: 5, sampleNeighborhoods: ['Atakum Sahil Şeridi / Yalı', 'Türkiş Meydanı', 'OMÜ Kampüsü'] }
    ]
  },
  {
    id: 'sanliurfa',
    name: '63 Şanlıurfa',
    districts: [
      { id: 'haliliye', name: 'Haliliye (Göbeklitepe)', lat: 37.2200, lon: 38.9200, elevation_m: 530, sampleNeighborhoods: ['Göbeklitepe Ören Yeri', 'Necmettin Cevheri Bulvarı'] },
      { id: 'eyyubiye', name: 'Eyyübiye (Balıklıgöl)', lat: 37.1450, lon: 38.7850, elevation_m: 510, sampleNeighborhoods: ['Balıklıgöl (Halil-ür Rahman)', 'Tarihi Urfa Çarşısı'] }
    ]
  },
  {
    id: 'van',
    name: '65 Van',
    districts: [
      { id: 'ipekyolu', name: 'İpekyolu (Merkez & Van Kalesi)', lat: 38.4891, lon: 43.4089, elevation_m: 1727, sampleNeighborhoods: ['Cumhuriyet Caddesi (Maraş)', 'Van Kalesi Çevresi', 'İskele Sahili'] },
      { id: 'edremit', name: 'Edremit (Akdamar İskelesi)', lat: 38.4250, lon: 43.2550, elevation_m: 1670, sampleNeighborhoods: ['Edremit Sahil Kordonu', 'Akdamar Adası İskelesi'] }
    ]
  },
  {
    id: 'yalova',
    name: '77 Yalova',
    districts: [
      { id: 'altinova', name: 'Altınova (Osmangazi Köprüsü)', lat: 40.7000, lon: 29.5100, elevation_m: 15, sampleNeighborhoods: ['Osmangazi Köprüsü Girişi', 'Hersek Lagünü'] },
      { id: 'merkez', name: 'Merkez (İDO)', lat: 40.6500, lon: 29.2667, elevation_m: 10, sampleNeighborhoods: ['Yalova İDO İskelesi / Sahil', 'Yürüyen Köşk Parkı'] }
    ]
  },
  {
    id: 'karabuk',
    name: '78 Karabük',
    districts: [
      { id: 'safranbolu', name: 'Safranbolu (Tarihi Evler)', lat: 41.2500, lon: 32.6900, elevation_m: 485, sampleNeighborhoods: ['Tarihi Safranbolu Çarşısı', 'Hıdırlık Tepesi', 'Kristal Teras'] }
    ]
  },
  {
    id: 'duzce',
    name: '81 Düzce',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.8438, lon: 31.1565, elevation_m: 160, sampleNeighborhoods: ['İstanbul Caddesi', 'Anıtpark Meydanı', 'Düzce Üniversitesi'] },
      { id: 'akcakoca', name: 'Akçakoca', lat: 41.0850, lon: 31.1150, elevation_m: 10, sampleNeighborhoods: ['Ceneviz Kalesi Plajı', 'Çuhallı Çarşısı'] }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'route' | 'saver' | 'telemetry' | 'charging' | 'passport'>('route');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('togg-t10x-long');
  const [loading, setLoading] = useState<boolean>(false);

  // --- 1. ROTA PLANLAYICI STATE ---
  const [origProvinceId, setOrigProvinceId] = useState<string>('istanbul');
  const [origDistrictId, setOrigDistrictId] = useState<string>('pendik');
  const [origNeighborhood, setOrigNeighborhood] = useState<string>('Kurtköy (Sabiha Gökçen / Teknopark)');

  const [destProvinceId, setDestProvinceId] = useState<string>('izmir');
  const [destDistrictId, setDestDistrictId] = useState<string>('cesme');
  const [destNeighborhood, setDestNeighborhood] = useState<string>('Alaçatı (Port / Çarşı)');

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
    TURKEY_PROVINCES.find(p => p.id === origProvinceId) || TURKEY_PROVINCES[0],
    [origProvinceId]
  );
  const currentOrigDistrict = useMemo(() => 
    currentOrigProvince.districts.find(d => d.id === origDistrictId) || currentOrigProvince.districts[0],
    [currentOrigProvince, origDistrictId]
  );

  // Varış Seçim Yardımcıları
  const currentDestProvince = useMemo(() => 
    TURKEY_PROVINCES.find(p => p.id === destProvinceId) || TURKEY_PROVINCES[2],
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
              VoltPulse SDV <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">v3.0 Pro</span>
            </h1>
            <p className="text-xs text-slate-400">Software-Defined Vehicle Diagnostics & Smart Route Navigation</p>
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
          <Navigation className="w-4 h-4" /> 🗺️ Rota & Şarj Planı
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

        {/* 1. SEKME: ROTA VE ŞARJ PLANI */}
        {activeTab === 'route' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <MapPin className="w-5 h-5 text-emerald-400" /> Konum ve Sürüş Seçimi
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
                  <h3 className="text-base font-semibold text-slate-300">Akıllı Rota Analizini Başlatın</h3>
                  <p className="text-xs text-slate-500 max-w-md mt-1">
                    Sol taraftan İl ve İlçenizi seçin; hazır semt listesinden seçim yapabilir veya istediğiniz mahalleyi kendiniz yazabilirsiniz.
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