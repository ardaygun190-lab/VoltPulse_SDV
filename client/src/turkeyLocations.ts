export interface DistrictItem {
  id: string;
  name: string;
  lat: number;
  lon: number;
  elevation_m: number;
  sampleNeighborhoods: string[];
}

export interface ProvinceItem {
  id: string;
  name: string;
  districts: DistrictItem[];
}

export const TURKEY_PROVINCES: ProvinceItem[] = [
  {
    id: 'adana',
    name: '01 Adana',
    districts: [
      { id: 'seyhan', name: 'Seyhan', lat: 37.0050, lon: 35.3250, elevation_m: 28, sampleNeighborhoods: ['Ziyapaşa Bulvarı', 'Gazipaşa', 'Cemalpaşa', 'Barajyolu', 'Reşatbey'] },
      { id: 'cukurova', name: 'Çukurova', lat: 37.0450, lon: 35.3120, elevation_m: 65, sampleNeighborhoods: ['Güzelyalı / Baraj Kıyısı', 'Beyazevler', 'Turgut Özal Bulvarı', 'Huzurevleri'] },
      { id: 'ceyhan', name: 'Ceyhan', lat: 37.0250, lon: 35.8150, elevation_m: 30, sampleNeighborhoods: ['Cumhuriyet', 'İstiklal', 'Hürriyet', 'Namık Kemal'] },
      { id: 'yuregir', name: 'Yüreğir', lat: 36.9850, lon: 35.3450, elevation_m: 25, sampleNeighborhoods: ['Kışla', 'Atakent', 'Serinevler', 'Yavuzlar'] },
      { id: 'kozan', name: 'Kozan', lat: 37.4550, lon: 35.8150, elevation_m: 130, sampleNeighborhoods: ['Kozan Kalesi Çevresi', 'Tufanpaşa', 'Karacaoğlan'] }
    ]
  },
  {
    id: 'adiyaman',
    name: '02 Adıyaman',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.7648, lon: 38.2786, elevation_m: 669, sampleNeighborhoods: ['Atatürk Bulvarı', 'Sümerevler', 'Yenimahalle', 'Mimar Sinan'] },
      { id: 'kahta', name: 'Kahta (Nemrut Yolu)', lat: 37.7850, lon: 38.6250, elevation_m: 750, sampleNeighborhoods: ['Nemrut Dağı Tesisleri', 'Fatih', 'Hürriyet'] },
      { id: 'besni', name: 'Besni', lat: 37.6950, lon: 37.9650, elevation_m: 890, sampleNeighborhoods: ['Dumlupınar', 'Erdemoğlu', 'Yenikent'] },
      { id: 'golbasi', name: 'Gölbaşı', lat: 37.7850, lon: 37.6450, elevation_m: 895, sampleNeighborhoods: ['Göl Park Çevresi', 'Yavuz Selim', 'Cumhuriyet'] }
    ]
  },
  {
    id: 'afyon',
    name: '03 Afyonkarahisar',
    districts: [
      { id: 'merkez', name: 'Merkez (Termal Bölge)', lat: 38.7507, lon: 30.5567, elevation_m: 1021, sampleNeighborhoods: ['Termal Oteller Bölgesi', 'Zafer Meydanı', 'Dumlupınar', 'Erkmen'] },
      { id: 'sandikli', name: 'Sandıklı (Hüdai Termal)', lat: 38.4650, lon: 30.2750, elevation_m: 1080, sampleNeighborhoods: ['Hüdai Kaplıcaları', 'Çakır', 'İstasyon'] },
      { id: 'dinar', name: 'Dinar', lat: 38.0650, lon: 30.1650, elevation_m: 875, sampleNeighborhoods: ['Suçıkan Parkı', 'Santral', 'Pazar'] },
      { id: 'bolvadin', name: 'Bolvadin', lat: 38.7150, lon: 31.0500, elevation_m: 990, sampleNeighborhoods: ['Eber Gölü Yolu', 'Kırkgöz', 'Bağlar'] }
    ]
  },
  {
    id: 'agri',
    name: '04 Ağrı',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.7191, lon: 43.0503, elevation_m: 1640, sampleNeighborhoods: ['Cumhuriyet Caddesi', 'Abide Meydanı', 'Fırat', 'Hürriyet'] },
      { id: 'dogubayazit', name: 'Doğubayazıt', lat: 39.5210, lon: 44.1290, elevation_m: 1950, sampleNeighborhoods: ['İshak Paşa Sarayı', 'Gürbulak Sınır Kapısı', 'Büyük Ağrı Caddesi'] },
      { id: 'patnos', name: 'Patnos', lat: 39.2350, lon: 42.8650, elevation_m: 1650, sampleNeighborhoods: ['Atatürk', 'Cumhuriyet', 'Sütlüpınar'] }
    ]
  },
  {
    id: 'amasya',
    name: '05 Amasya',
    districts: [
      { id: 'merkez', name: 'Merkez (Kral Kaya Mezarları)', lat: 40.6501, lon: 35.8353, elevation_m: 411, sampleNeighborhoods: ['Yeşilırmak Yalıboyu', 'Kral Mezarları Çevresi', 'Şehzadeler Gezisi', 'Hacılar Meydanı'] },
      { id: 'merzifon', name: 'Merzifon', lat: 40.8750, lon: 35.4650, elevation_m: 750, sampleNeighborhoods: ['Havalimanı Yolu', 'Cumhuriyet Caddesi', 'Bahçelievler'] }
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
      { id: 'kecioren', name: 'Keçiören', lat: 39.9950, lon: 32.8650, elevation_m: 910, sampleNeighborhoods: ['Etlik (Şehir Hastanesi)', 'Kalaba', 'Dutluk', 'Aktepe', 'İncirli'] },
      { id: 'mamak', name: 'Mamak', lat: 39.9350, lon: 32.9250, elevation_m: 890, sampleNeighborhoods: ['Abidinpaşa', 'Akdere', 'Gülveren', 'Durali Alıç'] },
      { id: 'sincan', name: 'Sincan', lat: 39.9600, lon: 32.5800, elevation_m: 810, sampleNeighborhoods: ['Fatih', 'Yenikent', 'Organize Sanayi', 'Plevne'] }
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
      { id: 'kemer', name: 'Kemer', lat: 36.6020, lon: 30.5600, elevation_m: 8, sampleNeighborhoods: ['Kemer Marina', 'Göynük Kanyonu', 'Beldibi', 'Çamyuva', 'Tekirova'] },
      { id: 'serik', name: 'Serik (Belek)', lat: 36.8650, lon: 31.0950, elevation_m: 12, sampleNeighborhoods: ['Belek Turizm Merkezi', 'Boğazkent', 'Kadriye Golf Sahaları'] }
    ]
  },
  {
    id: 'artvin',
    name: '08 Artvin',
    districts: [
      { id: 'hopa', name: 'Hopa (Sarp Sınır Kapısı)', lat: 41.3920, lon: 41.4310, elevation_m: 10, sampleNeighborhoods: ['Sarp Sınır Kapısı (Gürcistan)', 'Hopa Limanı', 'Kemalpaşa Sahil', 'Sundura'] },
      { id: 'merkez', name: 'Merkez', lat: 41.1828, lon: 41.8183, elevation_m: 345, sampleNeighborhoods: ['Çoruh Park', 'Köprübaşı', 'Çarşı'] },
      { id: 'borcka', name: 'Borçka (Karagöl)', lat: 41.3550, lon: 41.6750, elevation_m: 450, sampleNeighborhoods: ['Karagöl Tabiat Parkı', 'Aralık', 'Gündoğdu'] },
      { id: 'savsat', name: 'Şavşat (Karagöl)', lat: 41.2450, lon: 42.3650, elevation_m: 1100, sampleNeighborhoods: ['Şavşat Karagöl', 'Meydancık', 'Yavuzköy'] }
    ]
  },
  {
    id: 'aydin',
    name: '09 Aydın',
    districts: [
      { id: 'kusadasi', name: 'Kuşadası', lat: 37.8600, lon: 27.2600, elevation_m: 15, sampleNeighborhoods: ['Kuşadası Marina', 'Kadınlar Denizi', 'Güzelçamlı Milli Park', 'Davutlar'] },
      { id: 'didim', name: 'Didim', lat: 37.3750, lon: 27.2650, elevation_m: 18, sampleNeighborhoods: ['Altınkum Plajı', 'Apollon Tapınağı', 'Akbük Koyu', 'Çamlık'] },
      { id: 'efeler', name: 'Efeler (Merkez)', lat: 37.8444, lon: 27.8458, elevation_m: 65, sampleNeighborhoods: ['Adnan Menderes Bulvarı', 'Zafer', 'Kurtuluş', 'Mimar Sinan'] },
      { id: 'soke', name: 'Söke', lat: 37.7550, lon: 27.4050, elevation_m: 40, sampleNeighborhoods: ['Yenikent', 'Konak', 'Çeltikçi'] },
      { id: 'nazilli', name: 'Nazilli', lat: 37.9150, lon: 28.3250, elevation_m: 80, sampleNeighborhoods: ['Altıntaş', 'Yeni Mahalle', 'Sümer Park'] }
    ]
  },
  {
    id: 'balikesir',
    name: '10 Balıkesir',
    districts: [
      { id: 'ayvalik', name: 'Ayvalık (Cunda)', lat: 39.3197, lon: 26.6964, elevation_m: 5, sampleNeighborhoods: ['Cunda Adası (Alibey)', 'Sarımsaklı Plajı', 'Şeytan Sofrası', 'Ayvalık Marina'] },
      { id: 'edremit', name: 'Edremit (Akçay / Altınoluk)', lat: 39.5850, lon: 26.9250, elevation_m: 25, sampleNeighborhoods: ['Akçay Kordon', 'Altınoluk Sahil', 'Güre Termal', 'Kazdağları Yolu'] },
      { id: 'bandirma', name: 'Bandırma', lat: 40.3550, lon: 27.9750, elevation_m: 15, sampleNeighborhoods: ['İDO Feribot İskelesi', 'Sahil Kordon', 'Paşabayır', 'Livatya'] },
      { id: 'karesi', name: 'Karesi (Merkez)', lat: 39.6484, lon: 27.8826, elevation_m: 145, sampleNeighborhoods: ['Milli Kuvvetler Caddesi', 'Atatürk Parkı', 'Paşa Alanı', 'Ali Hikmet Paşa'] },
      { id: 'erdek', name: 'Erdek', lat: 40.4000, lon: 27.7950, elevation_m: 10, sampleNeighborhoods: ['Çuğra Plajı', 'Ocaklar', 'Erdek Liman', 'Sahil'] }
    ]
  },
  {
    id: 'bilecik',
    name: '11 Bilecik',
    districts: [
      { id: 'bozuyuk', name: 'Bozüyük (YHT Garı)', lat: 39.9050, lon: 30.0450, elevation_m: 740, sampleNeighborhoods: ['YHT Garı Çevresi', 'İsmet İnönü Caddesi', 'Kasımpaşa', 'Çarşı', 'Yeni Mahalle'] },
      { id: 'merkez', name: 'Merkez', lat: 40.1426, lon: 29.9793, elevation_m: 500, sampleNeighborhoods: ['Şeyh Edebali Türbesi', 'Valilik Meydanı', 'İstasyon', 'Ertuğrulgazi'] },
      { id: 'sogut', name: 'Söğüt', lat: 40.0150, lon: 30.1850, elevation_m: 665, sampleNeighborhoods: ['Ertuğrul Gazi Türbesi', 'Cumhuriyet', 'Türkoba'] },
      { id: 'osmaneli', name: 'Osmaneli', lat: 40.3600, lon: 29.9950, elevation_m: 110, sampleNeighborhoods: ['Tarihi Konaklar', 'İnönü', 'Camikebir'] }
    ]
  },
  {
    id: 'bingol',
    name: '12 Bingöl',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 38.8854, lon: 40.4983, elevation_m: 1151, sampleNeighborhoods: ['Dörtyol Meydanı', 'Genç Caddesi', 'Recep Tayyip Erdoğan Mah.', 'İnönü'] },
      { id: 'genc', name: 'Genç', lat: 38.7450, lon: 40.5550, elevation_m: 980, sampleNeighborhoods: ['Kültür', 'Cumhuriyet', 'Yenimahalle'] }
    ]
  },
  {
    id: 'bitlis',
    name: '13 Bitlis',
    districts: [
      { id: 'tatvan', name: 'Tatvan (Van Gölü İskelesi)', lat: 38.5050, lon: 42.2850, elevation_m: 1650, sampleNeighborhoods: ['Van Gölü Sahil Parkı', 'Nemrut Krater Yolu', 'Cumhuriyet', 'İşletme'] },
      { id: 'merkez', name: 'Merkez', lat: 38.4006, lon: 42.1095, elevation_m: 1545, sampleNeighborhoods: ['Bitlis Kalesi Çevresi', 'Atatürk', 'Hüsrevpaşa'] },
      { id: 'ahlat', name: 'Ahlat (Selçuklu Mezarlığı)', lat: 38.7550, lon: 42.4850, elevation_m: 1670, sampleNeighborhoods: ['Selçuklu Meydan Mezarlığı', 'Sahil', 'Ergezen'] }
    ]
  },
  {
    id: 'bolu',
    name: '14 Bolu',
    districts: [
      { id: 'merkez', name: 'Merkez (Bolu Dağı Otoyol)', lat: 40.7390, lon: 31.5050, elevation_m: 726, sampleNeighborhoods: ['Bolu Dağı Geçişi / Tünel', 'İzzet Baysal Caddesi', 'Karacasu Kaplıcaları', 'Gölcük Tabiat Parkı Yolu', 'Paşaköy'] },
      { id: 'abant', name: 'Mudurnu / Abant', lat: 40.6050, lon: 31.2800, elevation_m: 1325, sampleNeighborhoods: ['Abant Gölü Sahili', 'Tabiat Parkı Oteller Bölgesi', 'Mudurnu Tarihi Evler'] },
      { id: 'gerede', name: 'Gerede', lat: 40.8000, lon: 32.2000, elevation_m: 1300, sampleNeighborhoods: ['Esentepe Kayak Merkezi', 'Bahçelievler', 'Kitirler'] },
      { id: 'yedigoller', name: 'Mengen / Yedigöller', lat: 40.9450, lon: 31.7450, elevation_m: 900, sampleNeighborhoods: ['Yedigöller Milli Parkı Girişi', 'Aşçılar Caddesi'] }
    ]
  },
  {
    id: 'burdur',
    name: '15 Burdur',
    districts: [
      { id: 'merkez', name: 'Merkez (Burdur Gölü)', lat: 37.7203, lon: 30.2908, elevation_m: 950, sampleNeighborhoods: ['Burdur Gölü Sahil Parkı', 'Gazi Caddesi', 'Konak', 'Özgür'] },
      { id: 'salda', name: 'Yeşilova / Salda Gölü', lat: 37.5250, lon: 29.7150, elevation_m: 1160, sampleNeighborhoods: ['Salda Gölü Beyaz Adalar', 'Halk Plajı', 'Merkez'] },
      { id: 'bucak', name: 'Bucak', lat: 37.4550, lon: 30.5950, elevation_m: 850, sampleNeighborhoods: ['Konak', 'Yetmişevler', 'Sanayi'] }
    ]
  },
  {
    id: 'bursa',
    name: '16 Bursa',
    districts: [
      { id: 'nilufer', name: 'Nilüfer', lat: 40.2220, lon: 28.9210, elevation_m: 110, sampleNeighborhoods: ['Özlüce (Ahmet Taner Kışlalı)', 'Balat / YHT İstasyonu', 'Görükle Kampüs', 'FSM Bulvarı', 'İhsaniye', 'Odunluk / Sur Yapı'] },
      { id: 'osmangazi', name: 'Osmangazi', lat: 40.1880, lon: 29.0610, elevation_m: 155, sampleNeighborhoods: ['Heykel / Kent Meydanı', 'Çekirge Termal', 'Altıparmak', 'Ulucami Çevresi', 'Demirtaş'] },
      { id: 'mudanya', name: 'Mudanya', lat: 40.3650, lon: 28.8950, elevation_m: 8, sampleNeighborhoods: ['Güzelyalı (İDO/BUDO İskelesi)', 'Mudanya Kordon', 'Tirilye Sahil', 'Burgaz'] },
      { id: 'inegol', name: 'İnegöl', lat: 40.0800, lon: 29.5100, elevation_m: 290, sampleNeighborhoods: ['Organize Sanayi', 'Kemalpaşa', 'Yeniceköy', 'Oylat Kaplıcaları'] },
      { id: 'gemlik', name: 'Gemlik (Togg Fabrikası)', lat: 40.4350, lon: 29.1550, elevation_m: 15, sampleNeighborhoods: ['Togg Teknoloji Kampüsü', 'Gemlik Kordon', 'Kumla Sahili', 'Manastır'] },
      { id: 'uludag', name: 'Yıldırım / Uludağ', lat: 40.1150, lon: 29.1350, elevation_m: 1850, sampleNeighborhoods: ['Uludağ Oteller Bölgesi 1. Gelişim', '2. Gelişim Bölgesi', 'Teleferik'] }
    ]
  },
  {
    id: 'canakkale',
    name: '17 Çanakkale',
    districts: [
      { id: 'merkez', name: 'Merkez (1915 Köprüsü)', lat: 40.1553, lon: 26.4142, elevation_m: 10, sampleNeighborhoods: ['Kordon Sahili / Truva Atı', 'Kepez Sahil', 'Dardanel', 'Cevatpaşa'] },
      { id: 'bozcaada', name: 'Bozcaada', lat: 39.8350, lon: 26.0650, elevation_m: 15, sampleNeighborhoods: ['Cumhuriyet (Rum Mahallesi)', 'Alaybey', 'Ayazma Plajı', 'Rüzgar Gülleri'] },
      { id: 'gelibolu', name: 'Gelibolu', lat: 40.4100, lon: 26.6700, elevation_m: 20, sampleNeighborhoods: ['1915 Çanakkale Köprüsü Girişi', 'Feneraltı', 'Camiikebir'] },
      { id: 'assos', name: 'Ayvacık / Assos (Behramkale)', lat: 39.4950, lon: 26.3350, elevation_m: 180, sampleNeighborhoods: ['Assos Antik Liman', 'Behramkale Köyü', 'Kadırga Koyu', 'Küçükkuyu'] }
    ]
  },
  {
    id: 'cankiri',
    name: '18 Çankırı',
    districts: [
      { id: 'merkez', name: 'Merkez (Tuz Mağarası)', lat: 40.6013, lon: 33.6134, elevation_m: 730, sampleNeighborhoods: ['Tuz Mağarası Yolu', 'Cumhuriyet', 'Buğday Pazarı', 'Karataş'] },
      { id: 'ilgaz', name: 'Ilgaz (Kayak Merkezi)', lat: 40.9150, lon: 33.6250, elevation_m: 1450, sampleNeighborhoods: ['Ilgaz Dağı Oteller Bölgesi', 'Yurdintepe', 'Merkez'] }
    ]
  },
  {
    id: 'corum',
    name: '19 Çorum',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.5506, lon: 34.9556, elevation_m: 801, sampleNeighborhoods: ['Gazi Caddesi', 'Saat Kulesi Meydanı', 'Bahçelievler', 'Ulukavak'] },
      { id: 'sungurlu', name: 'Sungurlu (Hattuşa Yolu)', lat: 40.1650, lon: 34.3750, elevation_m: 770, sampleNeighborhoods: ['Boğazkale / Hattuşa Girişi', 'Turhan', 'Fatih'] },
      { id: 'osmancik', name: 'Osmancık', lat: 40.9750, lon: 34.8000, elevation_m: 430, sampleNeighborhoods: ['Koyunbaba Köprüsü', 'Yazı', 'Cumhuriyet'] }
    ]
  },
  {
    id: 'denizli',
    name: '20 Denizli',
    districts: [
      { id: 'pamukkale', name: 'Pamukkale (Travertenler)', lat: 37.9150, lon: 29.1200, elevation_m: 350, sampleNeighborhoods: ['Pamukkale Travertenler', 'Hierapolis Antik Kent', 'Karahayıt Termal', 'Bağbaşı Teleferik'] },
      { id: 'merkezefendi', name: 'Merkezefendi', lat: 37.7765, lon: 29.0864, elevation_m: 354, sampleNeighborhoods: ['Çamlık Bulvarı', 'Gazi Mustafa Kemal Bulvarı', 'Servergazi', 'Adalet'] }
    ]
  },
  {
    id: 'diyarbakir',
    name: '21 Diyarbakır',
    districts: [
      { id: 'kayapinar', name: 'Kayapınar', lat: 37.9450, lon: 40.1650, elevation_m: 680, sampleNeighborhoods: ['Diclekent Bulvarı', 'Mahabad Bulvarı (75. Yol)', 'Fırat', 'Huzurevleri'] },
      { id: 'sur', name: 'Sur (Tarihi Surlar)', lat: 37.9144, lon: 40.2306, elevation_m: 670, sampleNeighborhoods: ['Diyarbakır Surları / Hevsel', 'Ulu Cami Çevresi', 'Hasanpaşa Hanı', 'Gazi Caddesi'] },
      { id: 'baglar', name: 'Bağlar', lat: 37.9050, lon: 40.2000, elevation_m: 675, sampleNeighborhoods: ['Bağcılar', 'Körhat', 'Şeyh Şamil'] }
    ]
  },
  {
    id: 'edirne',
    name: '22 Edirne',
    districts: [
      { id: 'merkez', name: 'Merkez (Kapıkule Sınır)', lat: 41.6772, lon: 26.5557, elevation_m: 42, sampleNeighborhoods: ['Selimiye Camii Meydanı', 'Kapıkule Sınır Kapısı (Bulgaristan)', 'Karaağaç Tarihi Gar', 'Kaleiçi', 'Saraçlar Caddesi'] },
      { id: 'kesan', name: 'Keşan (Saros Körfezi)', lat: 40.8550, lon: 26.6350, elevation_m: 90, sampleNeighborhoods: ['Erikli Plajı', 'Yaylaköy Sahil', 'Büyük Cami'] }
    ]
  },
  {
    id: 'elazig',
    name: '23 Elazığ',
    districts: [
      { id: 'merkez', name: 'Merkez (Harput)', lat: 38.6810, lon: 39.2264, elevation_m: 1067, sampleNeighborhoods: ['Tarihi Harput Kalesi', 'Vali Fahri Bey Caddesi', 'Çaydaçıra', 'Ataşehir', 'Abdullahpaşa'] },
      { id: 'sivrice', name: 'Sivrice (Hazar Gölü)', lat: 38.4550, lon: 39.3150, elevation_m: 1250, sampleNeighborhoods: ['Hazar Gölü Tesisleri', 'Hazarbaba Kayak Merkezi'] }
    ]
  },
  {
    id: 'erzincan',
    name: '24 Erzincan',
    districts: [
      { id: 'merkez', name: 'Merkez (Ergan Kayak)', lat: 39.7500, lon: 39.5000, elevation_m: 1185, sampleNeighborhoods: ['Ergan Dağı Kayak Merkezi', 'Ordu Caddesi', 'Dörtyol', 'İnönü'] },
      { id: 'kemaliye', name: 'Kemaliye (Karanlık Kanyon)', lat: 39.2600, lon: 38.4950, elevation_m: 950, sampleNeighborhoods: ['Karanlık Kanyon Yolu', 'Tarihi Taş Yol', 'Dörtyol'] }
    ]
  },
  {
    id: 'erzurum',
    name: '25 Erzurum',
    districts: [
      { id: 'palandoken', name: 'Palandöken (Kayak Merkezi)', lat: 39.8520, lon: 41.2850, elevation_m: 2150, sampleNeighborhoods: ['Palandöken Oteller Bölgesi', 'Yenişehir / Kayak Yolu', 'Yıldızkent', 'Harput'] },
      { id: 'yakutiye', name: 'Yakutiye (Tarihi Merkez)', lat: 39.9055, lon: 41.2658, elevation_m: 1910, sampleNeighborhoods: ['Çifte Minareli Medrese', 'Cumhuriyet Caddesi', 'Yakutiye Medresesi Meydanı', 'Lalapaşa'] }
    ]
  },
  {
    id: 'eskisehir',
    name: '26 Eskişehir',
    districts: [
      { id: 'tepebasi', name: 'Tepebaşı', lat: 39.7850, lon: 30.5050, elevation_m: 790, sampleNeighborhoods: ['Anadolu Üniversitesi Kampüsü', 'Espark / Üniversite Cad.', 'Batıkent', 'Çamlıca', 'Yenibağlar'] },
      { id: 'odunpazari', name: 'Odunpazarı', lat: 39.7600, lon: 30.5250, elevation_m: 810, sampleNeighborhoods: ['Tarihi Odunpazarı Evleri', 'Porsuk Çayı Adalar', 'Sazova Bilim Parkı', 'Vişnelik', 'Büyükdere'] }
    ]
  },
  {
    id: 'gaziantep',
    name: '27 Gaziantep',
    districts: [
      { id: 'sehitkamil', name: 'Şehitkamil', lat: 37.0850, lon: 37.3350, elevation_m: 865, sampleNeighborhoods: ['İbrahimli (Batıkent)', 'Gazimuhtarpaşa Bulvarı', 'Merveşehir', 'Güvenevler', 'Atatürk'] },
      { id: 'sahinbey', name: 'Şahinbey', lat: 37.0650, lon: 37.3820, elevation_m: 850, sampleNeighborhoods: ['Gaziantep Kalesi / Bakırcılar Çarşısı', 'Karataş', 'Akkent', 'Yeditepe'] }
    ]
  },
  {
    id: 'giresun',
    name: '28 Giresun',
    districts: [
      { id: 'merkez', name: 'Merkez (Giresun Kalesi)', lat: 40.9128, lon: 38.3895, elevation_m: 10, sampleNeighborhoods: ['Giresun Kalesi Çevresi', 'Gazi Caddesi', 'Debboy', 'Teyyaredüzü'] },
      { id: 'kumbet', name: 'Dereli / Kümbet Yaylası', lat: 40.5650, lon: 38.4350, elevation_m: 1650, sampleNeighborhoods: ['Kümbet Yaylası', 'Bektaş Yaylası', 'Kuzalan Şelalesi'] }
    ]
  },
  {
    id: 'gumushane',
    name: '29 Gümüşhane',
    districts: [
      { id: 'merkez', name: 'Merkez (Yeni Zigana Tüneli)', lat: 40.4600, lon: 39.4700, elevation_m: 1210, sampleNeighborhoods: ['Yeni Zigana Tüneli Girişi', 'Atatürk Caddesi', 'Karşıyaka', 'Hasanbey'] },
      { id: 'torul', name: 'Torul (Cam Seyir Terası)', lat: 40.5600, lon: 39.2900, elevation_m: 1000, sampleNeighborhoods: ['Torul Kalesi Cam Teras', 'Merkez'] }
    ]
  },
  {
    id: 'hakkari',
    name: '30 Hakkari',
    districts: [
      { id: 'yuksekova', name: 'Yüksekova (Havalimanı)', lat: 37.5520, lon: 44.2400, elevation_m: 1870, sampleNeighborhoods: ['Selahaddin Eyyubi Havalimanı', 'İpekyolu Caddesi', 'Esentepe', 'Güngör'] },
      { id: 'merkez', name: 'Merkez', lat: 37.5744, lon: 43.7408, elevation_m: 1720, sampleNeighborhoods: ['Cumhuriyet Caddesi', 'Bulak', 'Pehlivan', 'Medrese'] },
      { id: 'semdinli', name: 'Şemdinli (Sıfır Noktası)', lat: 37.2970, lon: 44.5750, elevation_m: 1400, sampleNeighborhoods: ['Merkez Çarşı', 'Moda', 'Yayla'] }
    ]
  },
  {
    id: 'hatay',
    name: '31 Hatay',
    districts: [
      { id: 'iskenderun', name: 'İskenderun', lat: 36.5850, lon: 36.1750, elevation_m: 10, sampleNeighborhoods: ['İskenderun Sahil Kordon', 'Atatürk Bulvarı', 'Karaağaç', 'Denizciler'] },
      { id: 'antakya', name: 'Antakya', lat: 36.2023, lon: 36.1606, elevation_m: 100, sampleNeighborhoods: ['Tarihi Antakya Çarşısı', 'Saray Caddesi', 'Harbiye Şelaleleri', 'Cebrail'] }
    ]
  },
  {
    id: 'isparta',
    name: '32 Isparta',
    districts: [
      { id: 'merkez', name: 'Merkez (Gül Vadisi)', lat: 37.7648, lon: 30.5566, elevation_m: 1035, sampleNeighborhoods: ['Mimar Sinan Caddesi', 'Kafeler Caddesi', 'SDÜ Doğu Kampüsü', 'Fatih'] },
      { id: 'egirdir', name: 'Eğirdir (Göl Kıyısı)', lat: 37.8750, lon: 30.8550, elevation_m: 925, sampleNeighborhoods: ['Yeşilada (Ada)', 'Altınkum Plajı', 'Eğirdir Kalesi'] }
    ]
  },
  {
    id: 'mersin',
    name: '33 Mersin',
    districts: [
      { id: 'yenisehir', name: 'Yenişehir (Marina)', lat: 36.7850, lon: 34.5850, elevation_m: 10, sampleNeighborhoods: ['Mersin Marina', 'Gazi Mustafa Kemal Bulvarı', 'Pozcu Sahil', 'Kushimoto Sokağı'] },
      { id: 'mezitli', name: 'Mezitli', lat: 36.7550, lon: 34.5250, elevation_m: 15, sampleNeighborhoods: ['Soli Pompeiopolis', 'Viranşehir Sahil', 'Akdeniz'] },
      { id: 'tarsus', name: 'Tarsus', lat: 36.9150, lon: 34.8950, elevation_m: 25, sampleNeighborhoods: ['Tarsus Şelalesi', 'Kleopatra Kapısı', 'Tarihi Tarsus Evleri'] },
      { id: 'anamur', name: 'Anamur (En Güney Uç)', lat: 36.0753, lon: 32.8333, elevation_m: 10, sampleNeighborhoods: ['Mamure Kalesi', 'Anamuryum Antik Kenti', 'İskele Sahili'] }
    ]
  },
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
    id: 'kars',
    name: '36 Kars',
    districts: [
      { id: 'sarikamis', name: 'Sarıkamış (Kristal Kar Kayak)', lat: 40.3350, lon: 42.5850, elevation_m: 2100, sampleNeighborhoods: ['Sarıkamış Kayak Otelleri', 'Karakurt Baraj Yolu', 'İnönü'] },
      { id: 'merkez', name: 'Merkez (Kars Kalesi & Ani)', lat: 40.6013, lon: 43.0975, elevation_m: 1768, sampleNeighborhoods: ['Kars Kalesi Çevresi', 'Tarihi Taş Köprü', 'Ani Harabeleri Yolu', 'Atatürk Caddesi'] }
    ]
  },
  {
    id: 'kastamonu',
    name: '37 Kastamonu',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 41.3887, lon: 33.7827, elevation_m: 774, sampleNeighborhoods: ['Nasrullah Meydanı', 'Saat Kulesi', 'Kuzeykent', 'İnönü'] },
      { id: 'ilgaz', name: 'Ilgaz Dağı / Tünel', lat: 41.0800, lon: 33.7400, elevation_m: 1550, sampleNeighborhoods: ['Ilgaz 15 Temmuz İstiklal Tüneli', 'Kayak Merkezi Tesisleri'] }
    ]
  },
  {
    id: 'kayseri',
    name: '38 Kayseri',
    districts: [
      { id: 'melikgazi', name: 'Melikgazi (Erciyes Kayak)', lat: 38.5350, lon: 35.5350, elevation_m: 2200, sampleNeighborhoods: ['Erciyes Kayak Merkezi Tekir Kapı', 'Hacılar Kapı', 'Hisarcık', 'Cumhuriyet Meydanı'] },
      { id: 'talas', name: 'Talas', lat: 38.6900, lon: 35.5550, elevation_m: 1100, sampleNeighborhoods: ['Ali Dağı Yamaç Paraşütü', 'Tarihi Talas Evleri', 'Mevlana', 'Bahçelievler'] }
    ]
  },
  {
    id: 'kirklareli',
    name: '39 Kırklareli',
    districts: [
      { id: 'igneada', name: 'Demirköy / İğneada (Longoz)', lat: 41.8767, lon: 27.9856, elevation_m: 8, sampleNeighborhoods: ['İğneada Longoz Ormanları', 'Mert Gölü', 'Liman Feneri', 'Merkez'] },
      { id: 'luleburgaz', name: 'Lüleburgaz', lat: 41.4050, lon: 27.3550, elevation_m: 60, sampleNeighborhoods: ['İstanbul Caddesi', '8 Kasım', 'Siteler', 'Gazi Mustafa Kemal'] }
    ]
  },
  {
    id: 'kirsehir',
    name: '40 Kırşehir',
    districts: [
      { id: 'merkez', name: 'Merkez (Ahi Evran)', lat: 39.1425, lon: 34.1709, elevation_m: 985, sampleNeighborhoods: ['Ahi Evran Külliyesi', 'Cacabey Meydanı', 'Termal Kaplıcalar', 'Yenice'] }
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
    id: 'konya',
    name: '42 Konya',
    districts: [
      { id: 'selcuklu', name: 'Selçuklu', lat: 37.9350, lon: 32.4850, elevation_m: 1025, sampleNeighborhoods: ['Konya Tropikal Kelebek Bahçesi', 'Bosna Hersek', 'Binkonutlar', 'Yazır', 'Sille Tarihi Köy'] },
      { id: 'karatay', name: 'Karatay (Mevlana Müzesi)', lat: 37.8710, lon: 32.5050, elevation_m: 1020, sampleNeighborhoods: ['Mevlana Türbesi Meydanı', 'Şehir Hastanesi', 'Akabe', 'Fevzi Çakmak'] }
    ]
  },
  {
    id: 'kutahya',
    name: '43 Kütahya',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.4167, lon: 29.9833, elevation_m: 969, sampleNeighborhoods: ['Vazo Meydanı', 'Yoncalı Termal Kaplıcaları', 'Dumlupınar Üniversitesi', 'Zafertepe'] },
      { id: 'tavsanli', name: 'Tavşanlı', lat: 39.5450, lon: 29.5000, elevation_m: 860, sampleNeighborhoods: ['Göbel Kaplıcaları', 'Hanımçeşme', 'Moymul'] }
    ]
  },
  {
    id: 'malatya',
    name: '44 Malatya',
    districts: [
      { id: 'battalgazi', name: 'Battalgazi', lat: 38.3552, lon: 38.3095, elevation_m: 964, sampleNeighborhoods: ['Kanalboyu Caddesi', 'İnönü Kapalı Çarşı', 'Eski Malatya Surları', 'Kernek Meydanı'] },
      { id: 'yesilyurt', name: 'Yeşilyurt', lat: 38.3000, lon: 38.2500, elevation_m: 1010, sampleNeighborhoods: ['Bostanbaşı', 'Tecde', 'Yakınca', 'Fahri Kayahan Bulvarı'] }
    ]
  },
  {
    id: 'manisa',
    name: '45 Manisa',
    districts: [
      { id: 'yunusemre', name: 'Yunusemre (Spil Dağı)', lat: 38.6191, lon: 27.4289, elevation_m: 71, sampleNeighborhoods: ['Spil Dağı Milli Parkı Yolu', 'Güzelyurt', 'Muradiye Kampüs', 'Magnesia Çevresi'] },
      { id: 'akhisar', name: 'Akhisar', lat: 38.9250, lon: 27.8350, elevation_m: 95, sampleNeighborhoods: ['Hürriyet', 'Paşa', 'Atatürk', 'Reşatbey'] }
    ]
  },
  {
    id: 'kahramanmaras',
    name: '46 Kahramanmaraş',
    districts: [
      { id: 'onikisubat', name: 'Onikişubat', lat: 37.5858, lon: 36.9371, elevation_m: 568, sampleNeighborhoods: ['Necip Fazıl Kısakürek Bulvarı', 'Binevler', 'Yedikuyular Kayak Merkezi Yolu', 'Vadi'] },
      { id: 'dulkadiroglu', name: 'Dulkadiroğlu', lat: 37.5750, lon: 36.9450, elevation_m: 580, sampleNeighborhoods: ['Tarihi Maraş Kalesi / Kapalı Çarşı', 'Trabzon Caddesi', 'Doğukent'] }
    ]
  },
  {
    id: 'mardin',
    name: '47 Mardin',
    districts: [
      { id: 'artuklu', name: 'Artuklu (Eski Mardin)', lat: 37.3212, lon: 40.7245, elevation_m: 1085, sampleNeighborhoods: ['Tarihi Eski Mardin Birinci Cadde', 'Deyrulzafaran Manastırı Yolu', 'Kasımiye Medresesi', 'Yenişehir'] },
      { id: 'midyat', name: 'Midyat (Telkari / Konaklar)', lat: 37.4200, lon: 41.3700, elevation_m: 950, sampleNeighborhoods: ['Tarihi Midyat Devlet Konukevi', 'Mor Gabriel Yolu', 'Cumhuriyet'] }
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
    id: 'mus',
    name: '49 Muş',
    districts: [
      { id: 'merkez', name: 'Merkez (Tarihi Murat Köprüsü)', lat: 38.7432, lon: 41.5064, elevation_m: 1334, sampleNeighborhoods: ['Tarihi Murat Köprüsü Parkı', 'İstasyon Caddesi', 'Cumhuriyet', 'Sunay'] }
    ]
  },
  {
    id: 'nevsehir',
    name: '50 Nevşehir',
    districts: [
      { id: 'urgup', name: 'Ürgüp / Kapadokya', lat: 38.6244, lon: 34.7144, elevation_m: 1224, sampleNeighborhoods: ['Göreme Açık Hava Müzesi (Balon Kalkış)', 'Uçhisar Kalesi', 'Ürgüp Üç Güzeller', 'Avanos Çömlekçiler'] },
      { id: 'merkez', name: 'Merkez', lat: 38.6250, lon: 34.7100, elevation_m: 1150, sampleNeighborhoods: ['Nevşehir Kalesi Yeraltı Şehri', 'Atatürk Bulvarı', 'Güzelyurt'] }
    ]
  },
  {
    id: 'nigde',
    name: '51 Niğde',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.9667, lon: 34.6833, elevation_m: 1229, sampleNeighborhoods: ['Niğde Kalesi Çevresi', 'Saat Kulesi', 'Bor Yolu', 'Şahinali'] }
    ]
  },
  {
    id: 'ordu',
    name: '52 Ordu',
    districts: [
      { id: 'altinordu', name: 'Altınordu (Boztepe Teleferik)', lat: 40.9839, lon: 37.8764, elevation_m: 5, sampleNeighborhoods: ['Boztepe Seyir Terası', 'Ordu Sahil Kordon', 'Akyazı', 'Şahincili'] },
      { id: 'unye', name: 'Ünye', lat: 41.1250, lon: 37.2850, elevation_m: 10, sampleNeighborhoods: ['Ünye Kalesi', 'Çamlık Sahili', 'Atatürk Parkı'] }
    ]
  },
  {
    id: 'rize',
    name: '53 Rize',
    districts: [
      { id: 'camlihemsin', name: 'Çamlıhemşin (Ayder Yaylası)', lat: 40.9550, lon: 41.1000, elevation_m: 1350, sampleNeighborhoods: ['Ayder Yaylası Kaplıcaları', 'Zilkale Yolu', 'Fırtına Vadisi Rafting Parkuru', 'Pokut Yaylası Yolu'] },
      { id: 'merkez', name: 'Merkez (Çay Çarşısı)', lat: 41.0201, lon: 40.5234, elevation_m: 6, sampleNeighborhoods: ['Rize Çay Çarşısı / Dev Bardak', 'Sahil Parkı', 'Atatürk Caddesi', 'İslampaşa'] }
    ]
  },
  {
    id: 'sakarya',
    name: '54 Sakarya',
    districts: [
      { id: 'sapanca', name: 'Sapanca (Göl Kıyısı)', lat: 40.6920, lon: 30.2580, elevation_m: 45, sampleNeighborhoods: ['Kırkpınar Sahili', 'Sapanca Göl Yürüyüş Yolu', 'Kurtköy Bungalovlar Bölgesi', 'Rüstempaşa'] },
      { id: 'serdivan', name: 'Serdivan', lat: 40.7650, lon: 30.3650, elevation_m: 65, sampleNeighborhoods: ['Mavi Durak (Bağlar)', 'Sakarya Üniversitesi Kampüsü', 'Serdivan AVM Çevresi', 'Arabacıalanı'] },
      { id: 'adapazari', name: 'Adapazarı', lat: 40.7750, lon: 30.4000, elevation_m: 32, sampleNeighborhoods: ['Çark Caddesi', 'Kent Park', 'Mithatpaşa', 'Korucuk'] }
    ]
  },
  {
    id: 'samsun',
    name: '55 Samsun',
    districts: [
      { id: 'atakum', name: 'Atakum (Sahil Kordon)', lat: 41.3250, lon: 36.2750, elevation_m: 5, sampleNeighborhoods: ['Atakum Sahil Şeridi / Yalı', 'Türkiş Meydanı', 'OMÜ Kurupelit Kampüsü', 'Güzelyalı'] },
      { id: 'ilkadim', name: 'İlkadım (Bandırma Vapuru)', lat: 41.2850, lon: 36.3350, elevation_m: 20, sampleNeighborhoods: ['Bandırma Vapuru Müzesi', 'Onur Anıtı Parkı', 'Çiftlik Caddesi (İstiklal)', 'Fevzi Çakmak'] }
    ]
  },
  {
    id: 'siirt',
    name: '56 Siirt',
    districts: [
      { id: 'merkez', name: 'Merkez (Tillo Yolu)', lat: 37.9333, lon: 41.9500, elevation_m: 895, sampleNeighborhoods: ['Güres Caddesi', 'Tillo Işık Hadisesi Yolu', 'Bahçelievler', 'Kooperatif'] }
    ]
  },
  {
    id: 'sinop',
    name: '57 Sinop',
    districts: [
      { id: 'merkez', name: 'Merkez (İnceburun - En Kuzey)', lat: 42.0231, lon: 35.1531, elevation_m: 25, sampleNeighborhoods: ['Tarihi Sinop Cezaevi', 'İnceburun Feneri (Türkiye En Kuzey Uç)', 'Hamsilos Fiyordu', 'Karakum Plajı'] }
    ]
  },
  {
    id: 'sivas',
    name: '58 Sivas',
    districts: [
      { id: 'merkez', name: 'Merkez (Tarihi Meydan)', lat: 39.7477, lon: 37.0179, elevation_m: 1278, sampleNeighborhoods: ['Çifte Minareli Medrese Meydanı', 'Kongre Müzesi Parkı', 'İstasyon Caddesi', 'Kümbet', 'Şeyh Şamil'] },
      { id: 'divrigi', name: 'Divriği (Ulu Cami UNESCO)', lat: 39.3750, lon: 38.1150, elevation_m: 1050, sampleNeighborhoods: ['Divriği Ulu Cami Külliyesi', 'Kaledibi', 'Güllübağ'] }
    ]
  },
  {
    id: 'tekirdag',
    name: '59 Tekirdağ',
    districts: [
      { id: 'corlu', name: 'Çorlu (Sanayi & Havalimanı)', lat: 41.1600, lon: 27.8000, elevation_m: 150, sampleNeighborhoods: ['Omurtak Caddesi', 'Orion / Trend Arena', 'Emlak Konutları', 'Alipaşa'] },
      { id: 'suleymanpasa', name: 'Süleymanpaşa (Kordon)', lat: 40.9833, lon: 27.5167, elevation_m: 37, sampleNeighborhoods: ['Tekirdağ Sahil Dolgu Alanı', 'Değirmenaltı (NKÜ)', 'Hürriyet', 'Altınova Plajı'] }
    ]
  },
  {
    id: 'tokat',
    name: '60 Tokat',
    districts: [
      { id: 'merkez', name: 'Merkez (Ballıca Mağarası)', lat: 40.3167, lon: 36.5500, elevation_m: 623, sampleNeighborhoods: ['Taşhan & Saat Kulesi', 'Gaziosmanpaşa Bulvarı', 'Ballıca Mağarası Yolu', 'Karşıyaka'] }
    ]
  },
  {
    id: 'trabzon',
    name: '61 Trabzon',
    districts: [
      { id: 'ortahisar', name: 'Ortahisar (Meydan / Boztepe)', lat: 41.0027, lon: 39.7168, elevation_m: 35, sampleNeighborhoods: ['Meydan Parkı / Kahramanmaraş Caddesi', 'KTÜ Kanuni Kampüsü', 'Boztepe Seyir Terası', 'Ayasofya Müzesi Çevresi'] },
      { id: 'macka', name: 'Maçka (Sümela Manastırı)', lat: 40.6900, lon: 39.6550, elevation_m: 1150, sampleNeighborhoods: ['Sümela Manastırı Girişi (Altındere)', 'Hamsiköy Sütlaç Vadisi', 'Maçka Merkez'] },
      { id: 'akcaabat', name: 'Akçaabat', lat: 41.0200, lon: 39.5700, elevation_m: 15, sampleNeighborhoods: ['Sahil Kordon (Köfteciler)', 'Söğütlü', 'Darıca Sahil', 'Yaylacık'] },
      { id: 'caykara', name: 'Çaykara (Uzungöl)', lat: 40.6150, lon: 40.2900, elevation_m: 1100, sampleNeighborhoods: ['Uzungöl Sahili / Seyir Terası', 'Hasköy', 'Şekersu Yolu'] }
    ]
  },
  {
    id: 'tunceli',
    name: '62 Tunceli',
    districts: [
      { id: 'ovacik', name: 'Ovacık (Munzur Gözeleri)', lat: 39.3600, lon: 39.2150, elevation_m: 1300, sampleNeighborhoods: ['Munzur Gözeleri Tabiat Parkı', 'Ovacık Merkez', 'Kandolar'] },
      { id: 'merkez', name: 'Merkez', lat: 39.1079, lon: 39.5401, elevation_m: 915, sampleNeighborhoods: ['Munzur Çayı Kıyısı', 'Seyit Rıza Meydanı', 'Moğultay', 'Atatürk'] }
    ]
  },
  {
    id: 'sanliurfa',
    name: '63 Şanlıurfa',
    districts: [
      { id: 'haliliye', name: 'Haliliye (Göbeklitepe)', lat: 37.2200, lon: 38.9200, elevation_m: 530, sampleNeighborhoods: ['Göbeklitepe Ören Yeri', 'Necmettin Cevheri Bulvarı', 'Bahçelievler', 'Karasöprü Sınırı'] },
      { id: 'eyyubiye', name: 'Eyyübiye (Balıklıgöl)', lat: 37.1450, lon: 38.7850, elevation_m: 510, sampleNeighborhoods: ['Balıklıgöl (Halil-ür Rahman)', 'Tarihi Urfa Çarşısı', 'Eyyüp Peygamber Makamı'] },
      { id: 'birecik', name: 'Birecik (Kelaynak / Fırat)', lat: 37.0250, lon: 37.9850, elevation_m: 340, sampleNeighborhoods: ['Fırat Nehri Kıyısı', 'Kelaynak Üretme İstasyonu', 'Meydan'] }
    ]
  },
  {
    id: 'usak',
    name: '64 Uşak',
    districts: [
      { id: 'merkez', name: 'Merkez (Ulubey Kanyonu)', lat: 38.6823, lon: 29.4082, elevation_m: 907, sampleNeighborhoods: ['İsmetpaşa Caddesi', 'Atatürk Anıtı Meydanı', 'Ulubey Kanyonu Cam Teras Yolu', 'Cumhuriyet'] }
    ]
  },
  {
    id: 'van',
    name: '65 Van',
    districts: [
      { id: 'ipekyolu', name: 'İpekyolu (Merkez & Van Kalesi)', lat: 38.4891, lon: 43.4089, elevation_m: 1727, sampleNeighborhoods: ['Cumhuriyet Caddesi (Maraş)', 'Van Kalesi Çevresi', 'İskele Caddesi Sahil Parkı', 'Bahçıvan'] },
      { id: 'edremit', name: 'Edremit (Göl Kıyısı & Akdamar)', lat: 38.4250, lon: 43.2550, elevation_m: 1670, sampleNeighborhoods: ['Edremit Sahil Kordonu', 'Akdamar Adası İskelesi', 'Eski Cami'] }
    ]
  },
  {
    id: 'yozgat',
    name: '66 Yozgat',
    districts: [
      { id: 'merkez', name: 'Merkez (Çamlık Milli Park)', lat: 39.8181, lon: 34.8147, elevation_m: 1300, sampleNeighborhoods: ['Yozgat Çamlığı Milli Parkı', 'Saat Kulesi Meydanı', 'Lise Caddesi', 'Bahçeşehir'] }
    ]
  },
  {
    id: 'zonguldak',
    name: '67 Zonguldak',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 41.4564, lon: 31.7987, elevation_m: 50, sampleNeighborhoods: ['Liman Caddesi / Fener', 'Gazipaşa Caddesi', 'BEÜ İncirharmanı Kampüsü', 'Yaylalar'] },
      { id: 'eregli', name: 'Karadeniz Ereğli', lat: 41.2850, lon: 31.4250, elevation_m: 15, sampleNeighborhoods: ['Ereğli Sahil Kordon', 'Cehennemağzı Mağaraları', 'Erdemir Fabrika Çevresi', 'Müftü'] }
    ]
  },
  {
    id: 'aksaray',
    name: '68 Aksaray',
    districts: [
      { id: 'merkez', name: 'Merkez (Ihlara Vadisi)', lat: 38.3687, lon: 34.0370, elevation_m: 980, sampleNeighborhoods: ['Ihlara Vadisi Girişi', 'Hükümet Meydanı', 'Kafeler Caddesi', 'Ereğlikapı'] }
    ]
  },
  {
    id: 'bayburt',
    name: '69 Bayburt',
    districts: [
      { id: 'merkez', name: 'Merkez (Baksı Müzesi)', lat: 40.2552, lon: 40.2249, elevation_m: 1550, sampleNeighborhoods: ['Baksı Müzesi Yolu', 'Bayburt Kalesi', 'Çoruh Nehri Kordonu', 'Cumhuriyet'] }
    ]
  },
  {
    id: 'karaman',
    name: '70 Karaman',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.1759, lon: 33.2287, elevation_m: 1033, sampleNeighborhoods: ['Aktekke Kent Meydanı', 'İsmet Paşa Caddesi', 'Karaman Kalesi', 'Üniversite'] }
    ]
  },
  {
    id: 'kirikkale',
    name: '71 Kırıkkale',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.8468, lon: 33.5153, elevation_m: 713, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Zafer Caddesi', 'Silah Müzesi Çevresi', 'Yaylacık'] }
    ]
  },
  {
    id: 'batman',
    name: '72 Batman',
    districts: [
      { id: 'merkez', name: 'Merkez (Hasankeyf Yolu)', lat: 37.8812, lon: 41.1293, elevation_m: 540, sampleNeighborhoods: ['Turgut Özal Bulvarı', 'Gültepe', 'Hasankeyf Antik Kenti Girişi', 'Gap'] }
    ]
  },
  {
    id: 'sirnak',
    name: '73 Şırnak',
    districts: [
      { id: 'cizre', name: 'Cizre (Tarihi İpek Yolu)', lat: 37.3272, lon: 42.1869, elevation_m: 377, sampleNeighborhoods: ['Dicle Nehri Kordonu', 'Kırmızı Medrese', 'Dörtyol Çarşı', 'Şah'] },
      { id: 'merkez', name: 'Merkez', lat: 37.5164, lon: 42.4594, elevation_m: 1350, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Gazi Paşa', 'Vakıfkent'] }
    ]
  },
  {
    id: 'bartin',
    name: '74 Bartın',
    districts: [
      { id: 'amasra', name: 'Amasra (Fatih\'in Çeşm-i Cihan\'ı)', lat: 41.7450, lon: 32.3850, elevation_m: 15, sampleNeighborhoods: ['Amasra Kalesi', 'Küçük Liman / Büyük Liman', 'Kemere Köprüsü', 'Boztepe'] },
      { id: 'merkez', name: 'Merkez', lat: 41.6344, lon: 32.3375, elevation_m: 25, sampleNeighborhoods: ['Bartın Çayı İskelesi', 'Hükümet Caddesi', 'Kırtepe', 'Kemerköprü'] }
    ]
  },
  {
    id: 'ardahan',
    name: '75 Ardahan',
    districts: [
      { id: 'cildir', name: 'Çıldır (Buz Tutan Göl)', lat: 41.1250, lon: 43.1350, elevation_m: 1960, sampleNeighborhoods: ['Çıldır Gölü Kızak Tesisleri', 'Akçakale Adası', 'Merkez'] },
      { id: 'merkez', name: 'Merkez', lat: 41.1105, lon: 42.7022, elevation_m: 1829, sampleNeighborhoods: ['Ardahan Kalesi Kura Nehri Kıyısı', 'Kongre Caddesi', 'Karagöl'] }
    ]
  },
  {
    id: 'igdir',
    name: '76 Iğdır',
    districts: [
      { id: 'merkez', name: 'Merkez (Ağrı Dağı Eteği)', lat: 39.9237, lon: 44.0450, elevation_m: 858, sampleNeighborhoods: ['Vali Yolu Bulvarı', 'Atatürk Caddesi', 'Ağrı Dağı Manzara Noktası', '14 Kasım'] }
    ]
  },
  {
    id: 'yalova',
    name: '77 Yalova',
    districts: [
      { id: 'merkez', name: 'Merkez (İDO Feribot)', lat: 40.6500, lon: 29.2667, elevation_m: 10, sampleNeighborhoods: ['Yalova İDO İskelesi / Sahil', 'Yürüyen Köşk Parkı', 'Gazipaşa Caddesi', 'Bahçelievler'] },
      { id: 'altinova', name: 'Altınova (Osmangazi Köprüsü)', lat: 40.7000, lon: 29.5100, elevation_m: 15, sampleNeighborhoods: ['Osmangazi Köprüsü Girişi', 'Tersaneler Bölgesi', 'Hersek Lagünü'] },
      { id: 'termal', name: 'Termal', lat: 40.6050, lon: 29.1750, elevation_m: 150, sampleNeighborhoods: ['Yalova Termal Kaplıcaları', 'Gökçedere', 'Üvezpınar'] }
    ]
  },
  {
    id: 'karabuk',
    name: '78 Karabük',
    districts: [
      { id: 'safranbolu', name: 'Safranbolu (UNESCO Tarihi Evler)', lat: 41.2500, lon: 32.6900, elevation_m: 485, sampleNeighborhoods: ['Tarihi Safranbolu Çarşısı', 'Hıdırlık Tepesi', 'Bağlar Gazozcuları', 'Kristal Teras (Tokatlı Kanyonu)'] },
      { id: 'merkez', name: 'Merkez', lat: 41.2061, lon: 32.6204, elevation_m: 270, sampleNeighborhoods: ['Kardemir Fabrikası Çevresi', '100. Yıl (KBÜ)', 'Hürriyet Caddesi'] }
    ]
  },
  {
    id: 'kilis',
    name: '79 Kilis',
    districts: [
      { id: 'merkez', name: 'Merkez (Öncüpınar Sınır)', lat: 36.7184, lon: 37.1212, elevation_m: 660, sampleNeighborhoods: ['Cumhuriyet Meydanı', 'Öncüpınar Sınır Yolu', 'Nemika Caddesi', 'Şehit Sakıp'] }
    ]
  },
  {
    id: 'osmaniye',
    name: '80 Osmaniye',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.0742, lon: 36.2478, elevation_m: 125, sampleNeighborhoods: ['Devlet Bahçeli Meydanı', 'Atatürk Caddesi', 'Toprakkale Otoyol Ayrımı', 'Fakıuşağı'] },
      { id: 'kadirli', name: 'Kadirli (Karatepe)', lat: 37.3750, lon: 36.0950, elevation_m: 95, sampleNeighborhoods: ['Karatepe Aslantaş Milli Parkı', 'Cemalpaşa', 'Şehit Orhan Gök'] }
    ]
  },
  {
    id: 'duzce',
    name: '81 Düzce',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.8438, lon: 31.1565, elevation_m: 160, sampleNeighborhoods: ['İstanbul Caddesi', 'Anıtpark Meydanı', 'Düzce Üniversitesi Kampüsü', 'Kalıcı Konutlar'] },
      { id: 'akcakoca', name: 'Akçakoca (Karadeniz Sahili)', lat: 41.0850, lon: 31.1150, elevation_m: 10, sampleNeighborhoods: ['Ceneviz Kalesi Plajı', 'Çuhallı Çarşısı', 'Merkez Camii Çevresi'] },
      { id: 'kaynasli', name: 'Kaynaşlı (Bolu Dağı Çıkışı)', lat: 40.7750, lon: 31.3150, elevation_m: 320, sampleNeighborhoods: ['Bolu Dağı Otoyol Dinlenme Tesisleri', 'Darıyeri', 'Sarıçökek'] }
    ]
  }
];