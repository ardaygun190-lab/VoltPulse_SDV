export interface DistrictItem {
  id: string;
  name: string;
  lat: number;
  lon: number;
  elevation_m: number;
}

export interface ProvinceItem {
  id: string;
  name: string;
  districts: DistrictItem[];
}

export const TURKEY_PROVINCES: ProvinceItem[] = [
  {
    id: 'adana', name: '01 Adana',
    districts: [
      { id: 'seyhan', name: 'Seyhan', lat: 36.99, lon: 35.32, elevation_m: 28 },
      { id: 'cukurova', name: 'Çukurova', lat: 37.05, lon: 35.28, elevation_m: 65 },
      { id: 'yuregir', name: 'Yüreğir', lat: 36.98, lon: 35.35, elevation_m: 25 },
      { id: 'saricam', name: 'Sarıçam', lat: 37.03, lon: 35.40, elevation_m: 50 },
      { id: 'ceyhan', name: 'Ceyhan', lat: 37.02, lon: 35.81, elevation_m: 30 },
      { id: 'kozan', name: 'Kozan', lat: 37.45, lon: 35.81, elevation_m: 130 },
      { id: 'imamoglu', name: 'İmamoğlu', lat: 37.26, lon: 35.65, elevation_m: 75 },
      { id: 'karatas', name: 'Karataş', lat: 36.58, lon: 35.37, elevation_m: 10 },
      { id: 'karaisali', name: 'Karaisalı', lat: 37.25, lon: 35.06, elevation_m: 240 },
      { id: 'pozanti', name: 'Pozantı', lat: 37.42, lon: 34.87, elevation_m: 780 },
      { id: 'yumurtalik', name: 'Yumurtalık', lat: 36.77, lon: 35.79, elevation_m: 10 },
      { id: 'tufanbeyli', name: 'Tufanbeyli', lat: 38.26, lon: 36.22, elevation_m: 1400 },
      { id: 'feke', name: 'Feke', lat: 37.81, lon: 35.91, elevation_m: 620 },
      { id: 'aladag', name: 'Aladağ', lat: 37.54, lon: 35.39, elevation_m: 850 },
      { id: 'saimbeyli', name: 'Saimbeyli', lat: 37.99, lon: 36.09, elevation_m: 1050 }
    ]
  },
  {
    id: 'adiyaman', name: '02 Adıyaman',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.76, lon: 38.27, elevation_m: 669 },
      { id: 'kahta', name: 'Kahta (Nemrut)', lat: 37.78, lon: 38.62, elevation_m: 750 },
      { id: 'besni', name: 'Besni', lat: 37.69, lon: 37.96, elevation_m: 890 },
      { id: 'golbasi', name: 'Gölbaşı', lat: 37.78, lon: 37.64, elevation_m: 895 },
      { id: 'gerger', name: 'Gerger', lat: 38.03, lon: 39.04, elevation_m: 760 },
      { id: 'sincik', name: 'Sincik', lat: 38.04, lon: 38.61, elevation_m: 1350 },
      { id: 'celikhan', name: 'Çelikhan', lat: 38.03, lon: 38.24, elevation_m: 1380 },
      { id: 'tut', name: 'Tut', lat: 37.79, lon: 37.89, elevation_m: 950 },
      { id: 'samsat', name: 'Samsat', lat: 37.57, lon: 38.48, elevation_m: 550 }
    ]
  },
  {
    id: 'afyonkarahisar', name: '03 Afyonkarahisar',
    districts: [
      { id: 'merkez', name: 'Merkez (Termal)', lat: 38.75, lon: 30.55, elevation_m: 1021 },
      { id: 'sandikli', name: 'Sandıklı', lat: 38.46, lon: 30.27, elevation_m: 1080 },
      { id: 'dinar', name: 'Dinar', lat: 38.06, lon: 30.16, elevation_m: 875 },
      { id: 'bolvadin', name: 'Bolvadin', lat: 38.71, lon: 31.05, elevation_m: 990 },
      { id: 'sinanpasa', name: 'Sinanpaşa', lat: 38.74, lon: 30.24, elevation_m: 1120 },
      { id: 'emirdag', name: 'Emirdağ', lat: 39.02, lon: 31.15, elevation_m: 970 },
      { id: 'suhut', name: 'Şuhut', lat: 38.53, lon: 30.54, elevation_m: 1150 },
      { id: 'cay', name: 'Çay', lat: 38.59, lon: 31.03, elevation_m: 1010 },
      { id: 'ihsaniye', name: 'İhsaniye', lat: 38.93, lon: 30.41, elevation_m: 1100 },
      { id: 'iscehisar', name: 'İscehisar', lat: 38.86, lon: 30.75, elevation_m: 1075 },
      { id: 'sultandagi', name: 'Sultandağı', lat: 38.53, lon: 31.23, elevation_m: 1000 },
      { id: 'cobanlar', name: 'Çobanlar', lat: 38.70, lon: 30.78, elevation_m: 995 },
      { id: 'dazkiri', name: 'Dazkırı', lat: 37.92, lon: 29.86, elevation_m: 890 },
      { id: 'basmakci', name: 'Başmakçı', lat: 37.90, lon: 30.01, elevation_m: 870 },
      { id: 'hocalar', name: 'Hocalar', lat: 38.55, lon: 30.01, elevation_m: 1080 },
      { id: 'bayat', name: 'Bayat', lat: 38.98, lon: 30.92, elevation_m: 1050 },
      { id: 'evciler', name: 'Evciler', lat: 38.04, lon: 29.89, elevation_m: 900 },
      { id: 'kiziloren', name: 'Kızılören', lat: 38.35, lon: 30.15, elevation_m: 1140 }
    ]
  },
  {
    id: 'agri', name: '04 Ağrı',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.71, lon: 43.05, elevation_m: 1640 },
      { id: 'dogubayazit', name: 'Doğubayazıt', lat: 39.54, lon: 44.08, elevation_m: 1625 },
      { id: 'patnos', name: 'Patnos', lat: 39.23, lon: 42.86, elevation_m: 1650 },
      { id: 'diyadin', name: 'Diyadin', lat: 39.55, lon: 43.68, elevation_m: 1925 },
      { id: 'eleskirt', name: 'Eleşkirt', lat: 39.79, lon: 42.68, elevation_m: 1810 },
      { id: 'tutak', name: 'Tutak', lat: 39.53, lon: 42.77, elevation_m: 1565 },
      { id: 'taslicay', name: 'Taşlıçay', lat: 39.63, lon: 43.37, elevation_m: 1720 },
      { id: 'hamur', name: 'Hamur', lat: 39.61, lon: 42.98, elevation_m: 1675 }
    ]
  },
  {
    id: 'amasya', name: '05 Amasya',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.65, lon: 35.83, elevation_m: 411 },
      { id: 'merzifon', name: 'Merzifon', lat: 40.87, lon: 35.46, elevation_m: 750 },
      { id: 'suluova', name: 'Suluova', lat: 40.83, lon: 35.65, elevation_m: 510 },
      { id: 'tasova', name: 'Taşova', lat: 40.77, lon: 36.32, elevation_m: 230 },
      { id: 'gumushacikoy', name: 'Gümüşhacıköy', lat: 40.87, lon: 35.21, elevation_m: 810 },
      { id: 'goynucek', name: 'Göynücek', lat: 40.40, lon: 35.53, elevation_m: 500 },
      { id: 'hamamozu', name: 'Hamamözü', lat: 40.79, lon: 35.03, elevation_m: 680 }
    ]
  },
  {
    id: 'ankara', name: '06 Ankara',
    districts: [
      { id: 'cankaya', name: 'Çankaya', lat: 39.92, lon: 32.85, elevation_m: 950 },
      { id: 'kecioren', name: 'Keçiören', lat: 39.99, lon: 32.86, elevation_m: 910 },
      { id: 'yenimahalle', name: 'Yenimahalle', lat: 39.96, lon: 32.75, elevation_m: 860 },
      { id: 'mamak', name: 'Mamak', lat: 39.93, lon: 32.92, elevation_m: 890 },
      { id: 'etimesgut', name: 'Etimesgut', lat: 39.95, lon: 32.67, elevation_m: 820 },
      { id: 'sincan', name: 'Sincan', lat: 39.96, lon: 32.58, elevation_m: 810 },
      { id: 'altindag', name: 'Altındağ', lat: 39.94, lon: 32.86, elevation_m: 880 },
      { id: 'pursaklar', name: 'Pursaklar', lat: 40.03, lon: 32.90, elevation_m: 950 },
      { id: 'golbasi', name: 'Gölbaşı', lat: 39.79, lon: 32.80, elevation_m: 975 },
      { id: 'polatli', name: 'Polatlı', lat: 39.58, lon: 32.14, elevation_m: 850 },
      { id: 'cubuk', name: 'Çubuk', lat: 40.23, lon: 33.03, elevation_m: 1100 },
      { id: 'kahramankazan', name: 'Kahramankazan', lat: 40.19, lon: 32.68, elevation_m: 890 },
      { id: 'beypazari', name: 'Beypazarı', lat: 40.16, lon: 31.92, elevation_m: 675 },
      { id: 'elmadaq', name: 'Elmadağ', lat: 39.92, lon: 33.23, elevation_m: 1130 },
      { id: 'sereflikochisar', name: 'Şereflikoçhisar', lat: 38.93, lon: 33.53, elevation_m: 950 },
      { id: 'akyurt', name: 'Akyurt', lat: 40.13, lon: 33.08, elevation_m: 1000 },
      { id: 'nallihan', name: 'Nallıhan', lat: 40.18, lon: 31.35, elevation_m: 625 },
      { id: 'haymana', name: 'Haymana', lat: 39.43, lon: 32.49, elevation_m: 1259 },
      { id: 'kizilcahamam', name: 'Kızılcahamam', lat: 40.47, lon: 32.65, elevation_m: 975 },
      { id: 'bala', name: 'Bala', lat: 39.55, lon: 33.12, elevation_m: 1310 },
      { id: 'kalecik', name: 'Kalecik', lat: 40.09, lon: 33.40, elevation_m: 725 },
      { id: 'ayas', name: 'Ayaş', lat: 40.01, lon: 32.33, elevation_m: 910 },
      { id: 'gudul', name: 'Güdül', lat: 40.21, lon: 32.24, elevation_m: 720 },
      { id: 'camlidere', name: 'Çamlıdere', lat: 40.48, lon: 32.47, elevation_m: 1200 },
      { id: 'evren', name: 'Evren', lat: 38.97, lon: 33.80, elevation_m: 930 }
    ]
  },
  {
    id: 'antalya', name: '07 Antalya',
    districts: [
      { id: 'kepez', name: 'Kepez', lat: 36.93, lon: 30.70, elevation_m: 50 },
      { id: 'muratpasa', name: 'Muratpaşa (Lara/Kaleiçi)', lat: 36.88, lon: 30.70, elevation_m: 35 },
      { id: 'alanya', name: 'Alanya', lat: 36.54, lon: 31.99, elevation_m: 10 },
      { id: 'manavgat', name: 'Manavgat (Side)', lat: 36.78, lon: 31.44, elevation_m: 15 },
      { id: 'konyaalti', name: 'Konyaaltı', lat: 36.87, lon: 30.64, elevation_m: 10 },
      { id: 'serik', name: 'Serik (Belek)', lat: 36.91, lon: 31.10, elevation_m: 25 },
      { id: 'aksu', name: 'Aksu', lat: 36.95, lon: 30.85, elevation_m: 20 },
      { id: 'dosemealti', name: 'Döşemealtı', lat: 37.01, lon: 30.61, elevation_m: 300 },
      { id: 'kumluca', name: 'Kumluca', lat: 36.37, lon: 30.28, elevation_m: 35 },
      { id: 'kas', name: 'Kaş (Kalkan)', lat: 36.20, lon: 29.63, elevation_m: 15 },
      { id: 'korkuteli', name: 'Korkuteli', lat: 37.06, lon: 30.19, elevation_m: 1020 },
      { id: 'gazipasa', name: 'Gazipaşa', lat: 36.27, lon: 32.31, elevation_m: 20 },
      { id: 'finike', name: 'Finike', lat: 36.30, lon: 30.14, elevation_m: 10 },
      { id: 'kemer', name: 'Kemer', lat: 36.60, lon: 30.56, elevation_m: 8 },
      { id: 'elmali', name: 'Elmalı', lat: 36.73, lon: 29.91, elevation_m: 1150 },
      { id: 'demre', name: 'Demre', lat: 36.24, lon: 29.98, elevation_m: 10 },
      { id: 'akseki', name: 'Akseki', lat: 37.04, lon: 31.79, elevation_m: 1050 },
      { id: 'gundogmus', name: 'Gündoğmuş', lat: 36.81, lon: 31.99, elevation_m: 900 },
      { id: 'ibradi', name: 'İbradı', lat: 37.09, lon: 31.59, elevation_m: 1050 }
    ]
  },
  {
    id: 'artvin', name: '08 Artvin',
    districts: [
      { id: 'hopa', name: 'Hopa (Sarp Sınırı)', lat: 41.39, lon: 41.43, elevation_m: 10 },
      { id: 'merkez', name: 'Merkez', lat: 41.18, lon: 41.81, elevation_m: 345 },
      { id: 'borcka', name: 'Borçka (Karagöl)', lat: 41.35, lon: 41.67, elevation_m: 450 },
      { id: 'yusufeli', name: 'Yusufeli', lat: 40.82, lon: 41.53, elevation_m: 650 },
      { id: 'arhavi', name: 'Arhavi', lat: 41.35, lon: 41.30, elevation_m: 15 },
      { id: 'savsat', name: 'Şavşat', lat: 41.24, lon: 42.36, elevation_m: 1100 },
      { id: 'kemalpasa', name: 'Kemalpaşa', lat: 41.48, lon: 41.51, elevation_m: 10 },
      { id: 'ardanuc', name: 'Ardanuç', lat: 41.12, lon: 42.06, elevation_m: 500 },
      { id: 'murgul', name: 'Murgul', lat: 41.26, lon: 41.56, elevation_m: 380 }
    ]
  },
  {
    id: 'aydin', name: '09 Aydın',
    districts: [
      { id: 'efeler', name: 'Efeler (Merkez)', lat: 37.84, lon: 27.84, elevation_m: 65 },
      { id: 'nazilli', name: 'Nazilli', lat: 37.91, lon: 28.32, elevation_m: 80 },
      { id: 'kusadasi', name: 'Kuşadası', lat: 37.86, lon: 27.26, elevation_m: 15 },
      { id: 'soke', name: 'Söke', lat: 37.75, lon: 27.40, elevation_m: 40 },
      { id: 'didim', name: 'Didim (Altınkum)', lat: 37.37, lon: 27.26, elevation_m: 18 },
      { id: 'incirliova', name: 'İncirliova', lat: 37.85, lon: 27.72, elevation_m: 60 },
      { id: 'cine', name: 'Çine', lat: 37.61, lon: 28.06, elevation_m: 85 },
      { id: 'germencik', name: 'Germencik', lat: 37.87, lon: 27.60, elevation_m: 55 },
      { id: 'bozdogan', name: 'Bozdoğan', lat: 37.67, lon: 28.31, elevation_m: 130 },
      { id: 'kosk', name: 'Köşk', lat: 37.85, lon: 28.05, elevation_m: 75 },
      { id: 'kuyucak', name: 'Kuyucak', lat: 37.91, lon: 28.45, elevation_m: 95 },
      { id: 'sultanhisar', name: 'Sultanhisar', lat: 37.89, lon: 28.15, elevation_m: 85 },
      { id: 'karacasu', name: 'Karacasu', lat: 37.72, lon: 28.60, elevation_m: 450 },
      { id: 'buharkent', name: 'Buharkent', lat: 37.96, lon: 28.74, elevation_m: 125 },
      { id: 'yenipazar', name: 'Yenipazar', lat: 37.82, lon: 28.20, elevation_m: 65 },
      { id: 'kocarli', name: 'Koçarlı', lat: 37.76, lon: 27.70, elevation_m: 45 },
      { id: 'karpuzlu', name: 'Karpuzlu', lat: 37.56, lon: 27.83, elevation_m: 110 }
    ]
  },
  {
    id: 'balikesir', name: '10 Balıkesir',
    districts: [
      { id: 'karesi', name: 'Karesi', lat: 39.64, lon: 27.88, elevation_m: 145 },
      { id: 'altieylul', name: 'Altıeylül', lat: 39.63, lon: 27.87, elevation_m: 140 },
      { id: 'bandirma', name: 'Bandırma', lat: 40.35, lon: 27.97, elevation_m: 15 },
      { id: 'edremit', name: 'Edremit (Akçay/Altınoluk)', lat: 39.58, lon: 26.92, elevation_m: 25 },
      { id: 'gonen', name: 'Gönen', lat: 40.10, lon: 27.65, elevation_m: 35 },
      { id: 'ayvalik', name: 'Ayvalık (Cunda)', lat: 39.31, lon: 26.69, elevation_m: 5 },
      { id: 'burhaniye', name: 'Burhaniye', lat: 39.50, lon: 26.97, elevation_m: 15 },
      { id: 'bigadic', name: 'Bigadiç', lat: 39.40, lon: 28.13, elevation_m: 180 },
      { id: 'susurluk', name: 'Susurluk', lat: 39.91, lon: 28.15, elevation_m: 65 },
      { id: 'dursunbey', name: 'Dursunbey', lat: 39.58, lon: 28.62, elevation_m: 630 },
      { id: 'sindirgi', name: 'Sındırgı', lat: 39.24, lon: 28.17, elevation_m: 230 },
      { id: 'erdek', name: 'Erdek', lat: 40.40, lon: 27.79, elevation_m: 10 },
      { id: 'ivrindi', name: 'İvrindi', lat: 39.58, lon: 27.48, elevation_m: 240 },
      { id: 'havran', name: 'Havran', lat: 39.56, lon: 27.10, elevation_m: 45 },
      { id: 'kepsut', name: 'Kepsut', lat: 39.68, lon: 28.15, elevation_m: 85 },
      { id: 'manyas', name: 'Manyas', lat: 40.04, lon: 27.97, elevation_m: 50 },
      { id: 'savastepe', name: 'Savaştepe', lat: 39.38, lon: 27.65, elevation_m: 270 },
      { id: 'balya', name: 'Balya', lat: 39.76, lon: 27.57, elevation_m: 220 },
      { id: 'gomec', name: 'Gömeç', lat: 39.39, lon: 26.84, elevation_m: 15 },
      { id: 'marmara', name: 'Marmara Adası', lat: 40.58, lon: 27.55, elevation_m: 10 }
    ]
  },
  {
    id: 'bilecik', name: '11 Bilecik',
    districts: [
      { id: 'bozuyuk', name: 'Bozüyük (YHT)', lat: 39.90, lon: 30.04, elevation_m: 740 },
      { id: 'merkez', name: 'Merkez', lat: 40.14, lon: 29.97, elevation_m: 500 },
      { id: 'osmaneli', name: 'Osmaneli', lat: 40.36, lon: 29.99, elevation_m: 110 },
      { id: 'sogut', name: 'Söğüt', lat: 40.01, lon: 30.18, elevation_m: 665 },
      { id: 'golpazari', name: 'Gölpazarı', lat: 40.28, lon: 30.31, elevation_m: 520 },
      { id: 'pazaryeri', name: 'Pazaryeri', lat: 39.99, lon: 29.90, elevation_m: 800 },
      { id: 'inhisar', name: 'İnhisar', lat: 40.04, lon: 30.39, elevation_m: 220 },
      { id: 'yenipazar', name: 'Yenipazar', lat: 40.18, lon: 30.52, elevation_m: 610 }
    ]
  },
  {
    id: 'bingol', name: '12 Bingöl',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 38.88, lon: 40.49, elevation_m: 1151 },
      { id: 'genc', name: 'Genç', lat: 38.74, lon: 40.55, elevation_m: 980 },
      { id: 'solhan', name: 'Solhan', lat: 38.96, lon: 41.05, elevation_m: 1400 },
      { id: 'karliova', name: 'Karlıova', lat: 39.29, lon: 41.01, elevation_m: 1940 },
      { id: 'adakli', name: 'Adaklı', lat: 39.23, lon: 40.54, elevation_m: 1500 },
      { id: 'kigi', name: 'Kiğı', lat: 39.31, lon: 40.34, elevation_m: 1550 },
      { id: 'yedisu', name: 'Yedisu', lat: 39.43, lon: 40.53, elevation_m: 1500 },
      { id: 'yayladere', name: 'Yayladere', lat: 39.22, lon: 40.07, elevation_m: 1450 }
    ]
  },
  {
    id: 'bitlis', name: '13 Bitlis',
    districts: [
      { id: 'tatvan', name: 'Tatvan (Van Gölü)', lat: 38.50, lon: 42.28, elevation_m: 1650 },
      { id: 'merkez', name: 'Merkez', lat: 38.40, lon: 42.10, elevation_m: 1545 },
      { id: 'guroymak', name: 'Güroymak', lat: 38.56, lon: 41.98, elevation_m: 1320 },
      { id: 'ahlat', name: 'Ahlat', lat: 38.75, lon: 42.48, elevation_m: 1670 },
      { id: 'hizan', name: 'Hizan', lat: 38.22, lon: 42.42, elevation_m: 1470 },
      { id: 'mutki', name: 'Mutki', lat: 38.41, lon: 41.92, elevation_m: 1480 },
      { id: 'adilcevaz', name: 'Adilcevaz', lat: 38.80, lon: 42.73, elevation_m: 1680 }
    ]
  },
  {
    id: 'bolu', name: '14 Bolu',
    districts: [
      { id: 'merkez', name: 'Merkez (Bolu Dağı)', lat: 40.73, lon: 31.60, elevation_m: 726 },
      { id: 'gerede', name: 'Gerede', lat: 40.80, lon: 32.20, elevation_m: 1300 },
      { id: 'mengen', name: 'Mengen (Yedigöller)', lat: 40.94, lon: 31.74, elevation_m: 900 },
      { id: 'goynuk', name: 'Göynük', lat: 40.39, lon: 30.78, elevation_m: 720 },
      { id: 'mudurnu', name: 'Mudurnu (Abant)', lat: 40.46, lon: 31.21, elevation_m: 840 },
      { id: 'yenicaga', name: 'Yeniçağa', lat: 40.77, lon: 32.03, elevation_m: 990 },
      { id: 'dortdivan', name: 'Dörtdivan', lat: 40.72, lon: 32.06, elevation_m: 1150 },
      { id: 'seben', name: 'Seben', lat: 40.41, lon: 31.57, elevation_m: 750 },
      { id: 'kibriscik', name: 'Kıbrıscık', lat: 40.40, lon: 31.85, elevation_m: 1100 }
    ]
  },
  {
    id: 'burdur', name: '15 Burdur',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.72, lon: 30.29, elevation_m: 950 },
      { id: 'bucak', name: 'Bucak', lat: 37.45, lon: 30.59, elevation_m: 850 },
      { id: 'golhisar', name: 'Gölhisar', lat: 37.14, lon: 29.51, elevation_m: 950 },
      { id: 'yesilova', name: 'Yeşilova (Salda)', lat: 37.52, lon: 29.71, elevation_m: 1160 },
      { id: 'cavdir', name: 'Çavdır', lat: 37.15, lon: 29.69, elevation_m: 1000 },
      { id: 'tefenni', name: 'Tefenni', lat: 37.31, lon: 29.77, elevation_m: 1140 },
      { id: 'aglasun', name: 'Ağlasun (Sagalassos)', lat: 37.65, lon: 30.53, elevation_m: 1150 },
      { id: 'karamanli', name: 'Karamanlı', lat: 37.37, lon: 29.83, elevation_m: 1180 },
      { id: 'altinyayla', name: 'Altınyayla', lat: 36.99, lon: 29.54, elevation_m: 1250 },
      { id: 'celtikci', name: 'Çeltikçi', lat: 37.54, lon: 30.46, elevation_m: 850 },
      { id: 'kemer', name: 'Kemer', lat: 37.34, lon: 30.06, elevation_m: 1100 }
    ]
  },
  {
    id: 'bursa', name: '16 Bursa',
    districts: [
      { id: 'osmangazi', name: 'Osmangazi (Merkez)', lat: 40.18, lon: 29.06, elevation_m: 155 },
      { id: 'yildirim', name: 'Yıldırım (Uludağ Teleferik)', lat: 40.19, lon: 29.09, elevation_m: 150 },
      { id: 'nilufer', name: 'Nilüfer (Özlüce/Görükle)', lat: 40.22, lon: 28.92, elevation_m: 110 },
      { id: 'inegol', name: 'İnegöl', lat: 40.08, lon: 29.51, elevation_m: 290 },
      { id: 'gemlik', name: 'Gemlik (Togg Kampüsü)', lat: 40.43, lon: 29.15, elevation_m: 15 },
      { id: 'mustafakemalpasa', name: 'Mustafakemalpaşa', lat: 40.03, lon: 28.41, elevation_m: 45 },
      { id: 'mudanya', name: 'Mudanya (İDO/BUDO)', lat: 40.36, lon: 28.89, elevation_m: 8 },
      { id: 'gursu', name: 'Gürsu', lat: 40.21, lon: 29.19, elevation_m: 100 },
      { id: 'karacabey', name: 'Karacabey', lat: 40.21, lon: 28.35, elevation_m: 25 },
      { id: 'orhangazi', name: 'Orhangazi', lat: 40.49, lon: 29.30, elevation_m: 125 },
      { id: 'kestel', name: 'Kestel', lat: 40.19, lon: 29.21, elevation_m: 120 },
      { id: 'yenisehir', name: 'Yenişehir (Havalimanı)', lat: 40.26, lon: 29.65, elevation_m: 230 },
      { id: 'iznik', name: 'İznik (Göl Kıyısı)', lat: 40.42, lon: 29.72, elevation_m: 90 },
      { id: 'orhaneli', name: 'Orhaneli', lat: 39.90, lon: 28.99, elevation_m: 490 },
      { id: 'keles', name: 'Keles', lat: 39.91, lon: 29.23, elevation_m: 1050 },
      { id: 'buyukorhan', name: 'Büyükorhan', lat: 39.77, lon: 28.88, elevation_m: 820 },
      { id: 'harmancik', name: 'Harmancık', lat: 39.69, lon: 29.15, elevation_m: 690 }
    ]
  },
  {
    id: 'canakkale', name: '17 Çanakkale',
    districts: [
      { id: 'merkez', name: 'Merkez (1915 Köprüsü)', lat: 40.15, lon: 26.41, elevation_m: 10 },
      { id: 'biga', name: 'Biga', lat: 40.22, lon: 27.24, elevation_m: 35 },
      { id: 'can', name: 'Çan', lat: 40.03, lon: 27.05, elevation_m: 130 },
      { id: 'gelibolu', name: 'Gelibolu', lat: 40.41, lon: 26.67, elevation_m: 20 },
      { id: 'yenice', name: 'Yenice', lat: 39.93, lon: 27.25, elevation_m: 260 },
      { id: 'ayvacik', name: 'Ayvacık (Assos)', lat: 39.59, lon: 26.40, elevation_m: 265 },
      { id: 'ezine', name: 'Ezine', lat: 39.78, lon: 26.34, elevation_m: 40 },
      { id: 'bayramic', name: 'Bayramiç', lat: 39.81, lon: 26.61, elevation_m: 110 },
      { id: 'lapseki', name: 'Lapseki', lat: 40.34, lon: 26.68, elevation_m: 10 },
      { id: 'eceabat', name: 'Eceabat', lat: 40.18, lon: 26.35, elevation_m: 10 },
      { id: 'gokceada', name: 'Gökçeada', lat: 40.20, lon: 25.90, elevation_m: 25 },
      { id: 'bozcaada', name: 'Bozcaada', lat: 39.83, lon: 26.06, elevation_m: 15 }
    ]
  },
  {
    id: 'cankiri', name: '18 Çankırı',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.60, lon: 33.61, elevation_m: 730 },
      { id: 'cerkes', name: 'Çerkeş', lat: 40.81, lon: 32.88, elevation_m: 1120 },
      { id: 'ilgaz', name: 'Ilgaz (Kayak)', lat: 40.91, lon: 33.62, elevation_m: 1450 },
      { id: 'orta', name: 'Orta', lat: 40.62, lon: 33.11, elevation_m: 1260 },
      { id: 'sabanozu', name: 'Şabanözü', lat: 40.47, lon: 33.27, elevation_m: 1050 },
      { id: 'kursunlu', name: 'Kurşunlu', lat: 40.84, lon: 33.26, elevation_m: 1130 },
      { id: 'yaprakli', name: 'Yapraklı', lat: 40.76, lon: 33.78, elevation_m: 1200 },
      { id: 'kizilirmak', name: 'Kızılırmak', lat: 40.34, lon: 33.99, elevation_m: 550 },
      { id: 'eldivan', name: 'Eldivan', lat: 40.53, lon: 33.51, elevation_m: 950 },
      { id: 'atkaracalar', name: 'Atkaracalar', lat: 40.81, lon: 33.10, elevation_m: 1240 },
      { id: 'korgun', name: 'Korgun', lat: 40.73, lon: 33.52, elevation_m: 880 },
      { id: 'bayramoren', name: 'Bayramören', lat: 40.95, lon: 33.21, elevation_m: 850 }
    ]
  },
  {
    id: 'corum', name: '19 Çorum',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.55, lon: 34.95, elevation_m: 801 },
      { id: 'sungurlu', name: 'Sungurlu', lat: 40.16, lon: 34.37, elevation_m: 770 },
      { id: 'osmancik', name: 'Osmancık', lat: 40.97, lon: 34.80, elevation_m: 430 },
      { id: 'iskilip', name: 'İskilip', lat: 40.73, lon: 34.36, elevation_m: 750 },
      { id: 'alaca', name: 'Alaca', lat: 40.16, lon: 34.84, elevation_m: 900 },
      { id: 'bayat', name: 'Bayat', lat: 40.65, lon: 34.27, elevation_m: 625 },
      { id: 'mecitozu', name: 'Mecitözü', lat: 40.52, lon: 35.30, elevation_m: 800 },
      { id: 'kargi', name: 'Kargı', lat: 41.13, lon: 34.49, elevation_m: 450 },
      { id: 'ortakoy', name: 'Ortaköy', lat: 40.29, lon: 35.25, elevation_m: 750 },
      { id: 'ugurludag', name: 'Uğurludağ', lat: 40.47, lon: 34.42, elevation_m: 850 },
      { id: 'dodurga', name: 'Dodurga', lat: 40.96, lon: 34.81, elevation_m: 600 },
      { id: 'oguzlar', name: 'Oğuzlar', lat: 40.78, lon: 34.72, elevation_m: 700 },
      { id: 'lacin', name: 'Laçin', lat: 40.77, lon: 34.87, elevation_m: 720 },
      { id: 'bogazkale', name: 'Boğazkale (Hattuşa)', lat: 40.02, lon: 34.61, elevation_m: 1035 }
    ]
  },
  {
    id: 'denizli', name: '20 Denizli',
    districts: [
      { id: 'pamukkale', name: 'Pamukkale (Travertenler)', lat: 37.91, lon: 29.12, elevation_m: 350 },
      { id: 'merkezefendi', name: 'Merkezefendi', lat: 37.77, lon: 29.08, elevation_m: 354 },
      { id: 'civril', name: 'Çivril', lat: 38.30, lon: 29.73, elevation_m: 830 },
      { id: 'acipayam', name: 'Acıpayam', lat: 37.42, lon: 29.35, elevation_m: 890 },
      { id: 'tavas', name: 'Tavas', lat: 37.57, lon: 29.07, elevation_m: 950 },
      { id: 'honaz', name: 'Honaz', lat: 37.76, lon: 29.26, elevation_m: 530 },
      { id: 'saraykoy', name: 'Sarayköy', lat: 37.91, lon: 28.92, elevation_m: 140 },
      { id: 'buldan', name: 'Buldan', lat: 38.04, lon: 28.83, elevation_m: 690 },
      { id: 'kale', name: 'Kale', lat: 37.44, lon: 28.85, elevation_m: 1050 },
      { id: 'cal', name: 'Çal', lat: 37.93, lon: 29.40, elevation_m: 850 },
      { id: 'cameli', name: 'Çameli', lat: 37.07, lon: 29.35, elevation_m: 1300 },
      { id: 'serinhisar', name: 'Serinhisar', lat: 37.58, lon: 29.26, elevation_m: 960 },
      { id: 'bozkurt', name: 'Bozkurt', lat: 37.82, lon: 29.61, elevation_m: 860 },
      { id: 'guney', name: 'Güney', lat: 38.15, lon: 29.05, elevation_m: 850 },
      { id: 'cardak', name: 'Çardak (Havalimanı)', lat: 37.82, lon: 29.70, elevation_m: 850 },
      { id: 'bekilli', name: 'Bekilli', lat: 38.23, lon: 29.41, elevation_m: 850 },
      { id: 'beyagac', name: 'Beyağaç', lat: 37.22, lon: 28.90, elevation_m: 720 },
      { id: 'babadag', name: 'Babadağ', lat: 37.80, lon: 28.85, elevation_m: 770 },
      { id: 'baklan', name: 'Baklan', lat: 37.97, lon: 29.61, elevation_m: 900 }
    ]
  },
  {
    id: 'diyarbakir', name: '21 Diyarbakır',
    districts: [
      { id: 'baglar', name: 'Bağlar', lat: 37.90, lon: 40.20, elevation_m: 675 },
      { id: 'kayapinar', name: 'Kayapınar (Diclekent)', lat: 37.94, lon: 40.16, elevation_m: 680 },
      { id: 'yenisehir', name: 'Yenişehir', lat: 37.92, lon: 40.21, elevation_m: 670 },
      { id: 'ergani', name: 'Ergani', lat: 38.26, lon: 39.76, elevation_m: 950 },
      { id: 'bismil', name: 'Bismil', lat: 37.84, lon: 40.66, elevation_m: 550 },
      { id: 'sur', name: 'Sur (Tarihi Surlar)', lat: 37.91, lon: 40.23, elevation_m: 670 },
      { id: 'silvan', name: 'Silvan', lat: 38.14, lon: 41.00, elevation_m: 820 },
      { id: 'cinar', name: 'Çınar', lat: 37.72, lon: 40.41, elevation_m: 660 },
      { id: 'cermik', name: 'Çermik (Kaplıcalar)', lat: 38.13, lon: 39.45, elevation_m: 700 },
      { id: 'dicle', name: 'Dicle', lat: 38.37, lon: 40.06, elevation_m: 930 },
      { id: 'kulp', name: 'Kulp', lat: 38.50, lon: 41.01, elevation_m: 1020 },
      { id: 'hani', name: 'Hani', lat: 38.41, lon: 40.39, elevation_m: 900 },
      { id: 'lice', name: 'Lice', lat: 38.45, lon: 40.64, elevation_m: 1000 },
      { id: 'egil', name: 'Eğil', lat: 38.25, lon: 40.07, elevation_m: 850 },
      { id: 'hazro', name: 'Hazro', lat: 38.25, lon: 40.77, elevation_m: 980 },
      { id: 'kocakoy', name: 'Kocaköy', lat: 38.25, lon: 40.50, elevation_m: 870 },
      { id: 'cungus', name: 'Çüngüş', lat: 38.22, lon: 39.29, elevation_m: 980 }
    ]
  },
  {
    id: 'edirne', name: '22 Edirne',
    districts: [
      { id: 'merkez', name: 'Merkez (Kapıkule)', lat: 41.67, lon: 26.55, elevation_m: 42 },
      { id: 'kesan', name: 'Keşan (Saros Körfezi)', lat: 40.85, lon: 26.63, elevation_m: 90 },
      { id: 'uzunkopru', name: 'Uzunköprü', lat: 41.27, lon: 26.68, elevation_m: 35 },
      { id: 'ipsala', name: 'İpsala (Yunanistan Sınırı)', lat: 40.92, lon: 26.38, elevation_m: 15 },
      { id: 'havsa', name: 'Havsa', lat: 41.55, lon: 26.82, elevation_m: 75 },
      { id: 'meric', name: 'Meriç', lat: 41.18, lon: 26.42, elevation_m: 35 },
      { id: 'enez', name: 'Enez', lat: 40.72, lon: 26.08, elevation_m: 10 },
      { id: 'suloglu', name: 'Süloğlu', lat: 41.76, lon: 26.91, elevation_m: 150 },
      { id: 'lalapasa', name: 'Lalapaşa', lat: 41.83, lon: 26.73, elevation_m: 160 }
    ]
  },
  {
    id: 'elazig', name: '23 Elazığ',
    districts: [
      { id: 'merkez', name: 'Merkez (Harput)', lat: 38.68, lon: 39.22, elevation_m: 1067 },
      { id: 'kovancilar', name: 'Kovancılar', lat: 38.71, lon: 39.85, elevation_m: 970 },
      { id: 'karakocan', name: 'Karakoçan', lat: 38.95, lon: 40.04, elevation_m: 1090 },
      { id: 'palu', name: 'Palu', lat: 38.69, lon: 39.92, elevation_m: 920 },
      { id: 'aricak', name: 'Arıcak', lat: 38.56, lon: 40.17, elevation_m: 1100 },
      { id: 'baskil', name: 'Baskil', lat: 38.56, lon: 38.81, elevation_m: 1200 },
      { id: 'maden', name: 'Maden', lat: 38.39, lon: 39.66, elevation_m: 1050 },
      { id: 'sivrice', name: 'Sivrice (Hazar Gölü)', lat: 38.45, lon: 39.31, elevation_m: 1250 },
      { id: 'alacakaya', name: 'Alacakaya', lat: 38.48, lon: 39.85, elevation_m: 1150 },
      { id: 'keban', name: 'Keban (Baraj)', lat: 38.79, lon: 38.74, elevation_m: 780 },
      { id: 'agin', name: 'Ağın', lat: 38.94, lon: 38.71, elevation_m: 900 }
    ]
  },
  {
    id: 'erzincan', name: '24 Erzincan',
    districts: [
      { id: 'merkez', name: 'Merkez (Ergan)', lat: 39.75, lon: 39.50, elevation_m: 1185 },
      { id: 'tercan', name: 'Tercan', lat: 39.78, lon: 40.38, elevation_m: 1430 },
      { id: 'uzumlu', name: 'Üzümlü', lat: 39.71, lon: 39.70, elevation_m: 1250 },
      { id: 'cayirli', name: 'Çayırlı', lat: 39.78, lon: 40.01, elevation_m: 1520 },
      { id: 'ilic', name: 'İliç', lat: 39.45, lon: 38.56, elevation_m: 1060 },
      { id: 'kemah', name: 'Kemah', lat: 39.60, lon: 39.03, elevation_m: 1050 },
      { id: 'kemaliye', name: 'Kemaliye (Kanyon)', lat: 39.26, lon: 38.49, elevation_m: 950 },
      { id: 'refahiye', name: 'Refahiye', lat: 39.90, lon: 38.77, elevation_m: 1580 },
      { id: 'otlukbeli', name: 'Otlukbeli', lat: 40.04, lon: 40.00, elevation_m: 1750 }
    ]
  },
  {
    id: 'erzurum', name: '25 Erzurum',
    districts: [
      { id: 'yakutiye', name: 'Yakutiye (Merkez)', lat: 39.90, lon: 41.26, elevation_m: 1910 },
      { id: 'palandoken', name: 'Palandöken (Kayak)', lat: 39.85, lon: 41.28, elevation_m: 2150 },
      { id: 'aziziye', name: 'Aziziye (Ilıca Termal)', lat: 39.95, lon: 41.09, elevation_m: 1810 },
      { id: 'horasan', name: 'Horasan', lat: 40.04, lon: 42.17, elevation_m: 1540 },
      { id: 'oltu', name: 'Oltu', lat: 40.54, lon: 41.99, elevation_m: 1275 },
      { id: 'pasinler', name: 'Pasinler (Kaplıca)', lat: 39.98, lon: 41.67, elevation_m: 1660 },
      { id: 'karayazi', name: 'Karayazı', lat: 39.70, lon: 42.14, elevation_m: 2450 },
      { id: 'hinis', name: 'Hınıs', lat: 39.35, lon: 41.70, elevation_m: 1720 },
      { id: 'tekman', name: 'Tekman', lat: 39.56, lon: 41.52, elevation_m: 1940 },
      { id: 'karacoban', name: 'Karaçoban', lat: 39.34, lon: 42.12, elevation_m: 1550 },
      { id: 'askale', name: 'Aşkale', lat: 39.92, lon: 40.69, elevation_m: 1650 },
      { id: 'senkaya', name: 'Şenkaya', lat: 40.54, lon: 42.36, elevation_m: 1850 },
      { id: 'cat', name: 'Çat', lat: 39.61, lon: 40.99, elevation_m: 1960 },
      { id: 'koprukoy', name: 'Köprüköy', lat: 39.97, lon: 41.87, elevation_m: 1600 },
      { id: 'ispir', name: 'İspir', lat: 40.48, lon: 40.99, elevation_m: 1200 },
      { id: 'tortum', name: 'Tortum (Şelale)', lat: 40.30, lon: 41.54, elevation_m: 1450 },
      { id: 'narman', name: 'Narman (Peribacaları)', lat: 40.35, lon: 41.87, elevation_m: 1650 },
      { id: 'uzundere', name: 'Uzundere', lat: 40.53, lon: 41.54, elevation_m: 1050 },
      { id: 'olur', name: 'Olur', lat: 40.83, lon: 42.13, elevation_m: 1350 },
      { id: 'pazaryolu', name: 'Pazaryolu', lat: 40.41, lon: 40.78, elevation_m: 1480 }
    ]
  },
  {
    id: 'eskisehir', name: '26 Eskişehir',
    districts: [
      { id: 'odunpazari', name: 'Odunpazarı', lat: 39.76, lon: 30.52, elevation_m: 810 },
      { id: 'tepebasi', name: 'Tepebaşı (Anadolu Üniv.)', lat: 39.78, lon: 30.50, elevation_m: 790 },
      { id: 'sivrihisar', name: 'Sivrihisar', lat: 39.45, lon: 31.53, elevation_m: 870 },
      { id: 'cifteler', name: 'Çifteler (Sakaryabaşı)', lat: 39.38, lon: 31.13, elevation_m: 875 },
      { id: 'seyitgazi', name: 'Seyitgazi (Battal Gazi)', lat: 39.44, lon: 30.69, elevation_m: 990 },
      { id: 'alpu', name: 'Alpu', lat: 39.76, lon: 31.18, elevation_m: 780 },
      { id: 'mihaliccik', name: 'Mihalıççık (Yunus Emre)', lat: 39.86, lon: 31.49, elevation_m: 1325 },
      { id: 'mahmudiye', name: 'Mahmudiye', lat: 39.50, lon: 30.98, elevation_m: 890 },
      { id: 'beylikova', name: 'Beylikova', lat: 39.69, lon: 31.20, elevation_m: 760 },
      { id: 'inonu', name: 'İnönü', lat: 39.81, lon: 30.14, elevation_m: 840 },
      { id: 'gunyuzu', name: 'Günyüzü', lat: 39.39, lon: 31.81, elevation_m: 860 },
      { id: 'han', name: 'Han', lat: 39.02, lon: 30.86, elevation_m: 1200 },
      { id: 'mihalgazi', name: 'Mihalgazi', lat: 40.03, lon: 30.57, elevation_m: 220 },
      { id: 'saricakaya', name: 'Sarıcakaya', lat: 40.04, lon: 30.62, elevation_m: 230 }
    ]
  },
  {
    id: 'gaziantep', name: '27 Gaziantep',
    districts: [
      { id: 'sahinbey', name: 'Şahinbey', lat: 37.06, lon: 37.38, elevation_m: 850 },
      { id: 'sehitkamil', name: 'Şehitkamil (İbrahimli)', lat: 37.08, lon: 37.33, elevation_m: 865 },
      { id: 'nizip', name: 'Nizip (Zeugma)', lat: 37.01, lon: 37.79, elevation_m: 540 },
      { id: 'islahiye', name: 'İslahiye', lat: 37.02, lon: 36.63, elevation_m: 520 },
      { id: 'nurdagi', name: 'Nurdağı', lat: 37.17, lon: 36.73, elevation_m: 570 },
      { id: 'oguzeli', name: 'Oğuzeli (Havalimanı)', lat: 36.96, lon: 37.51, elevation_m: 700 },
      { id: 'araban', name: 'Araban', lat: 37.42, lon: 37.69, elevation_m: 610 },
      { id: 'yavuzeli', name: 'Yavuzeli (Rumkale)', lat: 37.31, lon: 37.57, elevation_m: 650 },
      { id: 'karkamis', name: 'Karkamış', lat: 36.83, lon: 38.01, elevation_m: 370 }
    ]
  },
  {
    id: 'giresun', name: '28 Giresun',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.91, lon: 38.38, elevation_m: 10 },
      { id: 'bulancak', name: 'Bulancak', lat: 40.93, lon: 38.23, elevation_m: 15 },
      { id: 'espiye', name: 'Espiye', lat: 40.95, lon: 38.71, elevation_m: 15 },
      { id: 'gorele', name: 'Görele', lat: 41.03, lon: 39.04, elevation_m: 10 },
      { id: 'tirebolu', name: 'Tirebolu', lat: 41.00, lon: 38.81, elevation_m: 10 },
      { id: 'dereli', name: 'Dereli (Kümbet)', lat: 40.74, lon: 38.44, elevation_m: 260 },
      { id: 'sebinkarahisar', name: 'Şebinkarahisar', lat: 40.28, lon: 38.42, elevation_m: 1350 },
      { id: 'kesap', name: 'Keşap', lat: 40.91, lon: 38.50, elevation_m: 20 },
      { id: 'yaglidere', name: 'Yağlıdere', lat: 40.77, lon: 38.55, elevation_m: 160 },
      { id: 'piraziz', name: 'Piraziz', lat: 40.95, lon: 38.12, elevation_m: 10 },
      { id: 'eynesil', name: 'Eynesil', lat: 41.06, lon: 39.14, elevation_m: 10 },
      { id: 'alucra', name: 'Alucra', lat: 40.32, lon: 38.76, elevation_m: 1480 },
      { id: 'guce', name: 'Güce', lat: 40.88, lon: 38.83, elevation_m: 350 },
      { id: 'dogankent', name: 'Doğankent', lat: 40.78, lon: 38.92, elevation_m: 250 },
      { id: 'camoluk', name: 'Çamoluk', lat: 40.13, lon: 38.78, elevation_m: 1050 },
      { id: 'canakci', name: 'Çanakçı', lat: 40.89, lon: 39.01, elevation_m: 280 }
    ]
  },
  {
    id: 'gumushane', name: '29 Gümüşhane',
    districts: [
      { id: 'merkez', name: 'Merkez (Zigana)', lat: 40.46, lon: 39.47, elevation_m: 1210 },
      { id: 'kelkit', name: 'Kelkit', lat: 40.12, lon: 39.43, elevation_m: 1400 },
      { id: 'siran', name: 'Şiran', lat: 40.19, lon: 39.12, elevation_m: 1450 },
      { id: 'kurtun', name: 'Kürtün', lat: 40.71, lon: 39.16, elevation_m: 650 },
      { id: 'torul', name: 'Torul (Cam Teras)', lat: 40.56, lon: 39.29, elevation_m: 1000 },
      { id: 'kose', name: 'Köse', lat: 40.26, lon: 39.64, elevation_m: 1550 }
    ]
  },
  {
    id: 'hakkari', name: '30 Hakkari',
    districts: [
      { id: 'yuksekova', name: 'Yüksekova (Havalimanı)', lat: 37.55, lon: 44.24, elevation_m: 1870 },
      { id: 'merkez', name: 'Merkez', lat: 37.57, lon: 43.74, elevation_m: 1720 },
      { id: 'semdinli', name: 'Şemdinli', lat: 37.29, lon: 44.57, elevation_m: 1400 },
      { id: 'cukurca', name: 'Çukurca', lat: 37.24, lon: 43.61, elevation_m: 1285 },
      { id: 'derecik', name: 'Derecik', lat: 37.10, lon: 44.33, elevation_m: 850 }
    ]
  },
  {
    id: 'hatay', name: '31 Hatay',
    districts: [
      { id: 'antakya', name: 'Antakya (Merkez)', lat: 36.20, lon: 36.16, elevation_m: 100 },
      { id: 'iskenderun', name: 'İskenderun', lat: 36.58, lon: 36.17, elevation_m: 10 },
      { id: 'defne', name: 'Defne', lat: 36.16, lon: 36.13, elevation_m: 120 },
      { id: 'dortyol', name: 'Dörtyol', lat: 36.83, lon: 36.22, elevation_m: 40 },
      { id: 'samandag', name: 'Samandağ (Çevlik)', lat: 36.08, lon: 35.98, elevation_m: 15 },
      { id: 'kirikhan', name: 'Kırıkhan', lat: 36.49, lon: 36.35, elevation_m: 140 },
      { id: 'reyhanli', name: 'Reyhanlı (Cilvegözü)', lat: 36.26, lon: 36.56, elevation_m: 160 },
      { id: 'arsuz', name: 'Arsuz', lat: 35.88, lon: 35.88, elevation_m: 10 },
      { id: 'altinozu', name: 'Altınözü', lat: 36.11, lon: 36.24, elevation_m: 235 },
      { id: 'hassa', name: 'Hassa', lat: 36.79, lon: 36.52, elevation_m: 450 },
      { id: 'erzin', name: 'Erzin', lat: 36.95, lon: 36.20, elevation_m: 75 },
      { id: 'payas', name: 'Payas', lat: 36.75, lon: 36.21, elevation_m: 25 },
      { id: 'belen', name: 'Belen (Geçit)', lat: 36.48, lon: 36.19, elevation_m: 640 },
      { id: 'yayladagi', name: 'Yayladağı', lat: 35.90, lon: 36.06, elevation_m: 470 },
      { id: 'kumlu', name: 'Kumlu', lat: 36.36, lon: 36.44, elevation_m: 90 }
    ]
  },
  {
    id: 'isparta', name: '32 Isparta',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.76, lon: 30.55, elevation_m: 1035 },
      { id: 'yalvac', name: 'Yalvaç (Psidia)', lat: 38.29, lon: 31.17, elevation_m: 1100 },
      { id: 'egirdir', name: 'Eğirdir (Göl)', lat: 37.87, lon: 30.85, elevation_m: 925 },
      { id: 'sarkikaraagac', name: 'Şarkikaraağaç', lat: 38.08, lon: 31.36, elevation_m: 1180 },
      { id: 'gelendost', name: 'Gelendost', lat: 38.12, lon: 31.01, elevation_m: 940 },
      { id: 'keciborlu', name: 'Keçiborlu (Lavanta)', lat: 37.94, lon: 30.30, elevation_m: 1010 },
      { id: 'senirkent', name: 'Senirkent', lat: 38.10, lon: 30.55, elevation_m: 1000 },
      { id: 'sutculer', name: 'Sütçüler', lat: 37.49, lon: 30.98, elevation_m: 1000 },
      { id: 'gonen', name: 'Gönen', lat: 37.96, lon: 30.51, elevation_m: 1050 },
      { id: 'uluborlu', name: 'Uluborlu', lat: 38.08, lon: 30.45, elevation_m: 1100 },
      { id: 'atabey', name: 'Atabey', lat: 37.95, lon: 30.64, elevation_m: 1020 },
      { id: 'aksu', name: 'Aksu', lat: 37.79, lon: 31.07, elevation_m: 1200 },
      { id: 'yenisarbademli', name: 'Yenişarbademli', lat: 37.70, lon: 31.38, elevation_m: 1150 }
    ]
  },
  {
    id: 'mersin', name: '33 Mersin',
    districts: [
      { id: 'tarsus', name: 'Tarsus', lat: 36.91, lon: 34.89, elevation_m: 25 },
      { id: 'toroslar', name: 'Toroslar', lat: 36.85, lon: 34.61, elevation_m: 100 },
      { id: 'akdeniz', name: 'Akdeniz (Liman)', lat: 36.80, lon: 34.63, elevation_m: 10 },
      { id: 'yenisehir', name: 'Yenişehir (Marina)', lat: 36.78, lon: 34.58, elevation_m: 10 },
      { id: 'mezitli', name: 'Mezitli', lat: 36.75, lon: 34.52, elevation_m: 15 },
      { id: 'erdemli', name: 'Erdemli (Kızkalesi)', lat: 36.60, lon: 34.30, elevation_m: 15 },
      { id: 'silifke', name: 'Silifke (Taşucu)', lat: 36.37, lon: 33.92, elevation_m: 20 },
      { id: 'anamur', name: 'Anamur (En Güney)', lat: 36.07, lon: 32.83, elevation_m: 10 },
      { id: 'mut', name: 'Mut', lat: 36.64, lon: 33.43, elevation_m: 320 },
      { id: 'bozyazi', name: 'Bozyazı', lat: 36.09, lon: 32.96, elevation_m: 10 },
      { id: 'gulnar', name: 'Gülnar (Akkuyu)', lat: 36.34, lon: 33.40, elevation_m: 950 },
      { id: 'aydincik', name: 'Aydıncık', lat: 36.14, lon: 33.32, elevation_m: 15 },
      { id: 'camliyayla', name: 'Çamlıyayla', lat: 37.16, lon: 34.60, elevation_m: 1430 }
    ]
  },
  {
    id: 'istanbul', name: '34 İstanbul',
    districts: [
      { id: 'pendik', name: 'Pendik (Kurtköy/Sabiha)', lat: 40.87, lon: 29.23, elevation_m: 55 },
      { id: 'kadikoy', name: 'Kadıköy (Moda/Caddebostan)', lat: 40.98, lon: 29.02, elevation_m: 25 },
      { id: 'sariyer', name: 'Sarıyer (Maslak/İstinye)', lat: 41.10, lon: 29.02, elevation_m: 110 },
      { id: 'besiktas', name: 'Beşiktaş (Levent/Bebek)', lat: 41.08, lon: 29.01, elevation_m: 60 },
      { id: 'uskudar', name: 'Üsküdar (Çengelköy/Altunizade)', lat: 41.02, lon: 29.04, elevation_m: 45 },
      { id: 'umraniye', name: 'Ümraniye (Finans Merkezi)', lat: 41.02, lon: 29.11, elevation_m: 130 },
      { id: 'atasehir', name: 'Ataşehir (Batı Ataşehir)', lat: 40.99, lon: 29.11, elevation_m: 115 },
      { id: 'maltepe', name: 'Maltepe', lat: 40.93, lon: 29.14, elevation_m: 30 },
      { id: 'kartal', name: 'Kartal (Dragos)', lat: 40.89, lon: 29.19, elevation_m: 40 },
      { id: 'tuzla', name: 'Tuzla (Marina)', lat: 40.81, lon: 29.30, elevation_m: 20 },
      { id: 'cekmekoy', name: 'Çekmeköy', lat: 41.03, lon: 29.17, elevation_m: 120 },
      { id: 'sancaktepe', name: 'Sancaktepe', lat: 40.99, lon: 29.23, elevation_m: 110 },
      { id: 'sultanbeyli', name: 'Sultanbeyli', lat: 40.96, lon: 29.26, elevation_m: 130 },
      { id: 'beykoz', name: 'Beykoz (Kavacık/Acarkent)', lat: 41.13, lon: 29.10, elevation_m: 70 },
      { id: 'sile', name: 'Şile', lat: 41.17, lon: 29.61, elevation_m: 30 },
      { id: 'adalar', name: 'Adalar (Büyükada)', lat: 40.87, lon: 29.12, elevation_m: 20 },
      { id: 'sisli', name: 'Şişli (Mecidiyeköy/Nişantaşı)', lat: 41.06, lon: 28.98, elevation_m: 95 },
      { id: 'bakirkoy', name: 'Bakırköy (Ataköy/Florya)', lat: 40.97, lon: 28.87, elevation_m: 20 },
      { id: 'fatih', name: 'Fatih (Tarihi Yarımada)', lat: 41.01, lon: 28.94, elevation_m: 40 },
      { id: 'beyoglu', name: 'Beyoğlu (Taksim/Galata)', lat: 41.03, lon: 28.97, elevation_m: 70 },
      { id: 'basaksehir', name: 'Başakşehir (Bahçeşehir)', lat: 41.09, lon: 28.80, elevation_m: 140 },
      { id: 'beylikduzu', name: 'Beylikdüzü (Marina)', lat: 40.99, lon: 28.64, elevation_m: 125 },
      { id: 'buyukcekmece', name: 'Büyükçekmece', lat: 41.02, lon: 28.58, elevation_m: 25 },
      { id: 'kucukcekmece', name: 'Küçükçekmece', lat: 40.99, lon: 28.77, elevation_m: 35 },
      { id: 'avcilar', name: 'Avcılar', lat: 40.97, lon: 28.72, elevation_m: 45 },
      { id: 'esenyurt', name: 'Esenyurt', lat: 41.03, lon: 28.68, elevation_m: 110 },
      { id: 'bagcilar', name: 'Bağcılar', lat: 41.03, lon: 28.85, elevation_m: 85 },
      { id: 'bahcelievler', name: 'Bahçelievler', lat: 41.00, lon: 28.86, elevation_m: 55 },
      { id: 'esenler', name: 'Esenler', lat: 41.03, lon: 28.88, elevation_m: 80 },
      { id: 'gungoren', name: 'Güngören', lat: 41.02, lon: 28.87, elevation_m: 60 },
      { id: 'zeytinburnu', name: 'Zeytinburnu', lat: 40.99, lon: 28.90, elevation_m: 25 },
      { id: 'gaziosmanpasa', name: 'Gaziosmanpaşa', lat: 41.05, lon: 28.91, elevation_m: 85 },
      { id: 'sultangazi', name: 'Sultangazi', lat: 41.10, lon: 28.86, elevation_m: 120 },
      { id: 'eyupsultan', name: 'Eyüpsultan (Göktürk)', lat: 41.04, lon: 28.93, elevation_m: 65 },
      { id: 'kagithane', name: 'Kağıthane (Vadi İstanbul)', lat: 41.08, lon: 28.97, elevation_m: 40 },
      { id: 'bayrampasa', name: 'Bayrampaşa', lat: 41.03, lon: 28.90, elevation_m: 50 },
      { id: 'arnavutkoy', name: 'Arnavutköy (Havalimanı)', lat: 41.18, lon: 28.74, elevation_m: 120 },
      { id: 'silivri', name: 'Silivri', lat: 41.07, lon: 28.24, elevation_m: 20 },
      { id: 'catalca', name: 'Çatalca', lat: 41.14, lon: 28.46, elevation_m: 100 }
    ]
  },
  {
    id: 'izmir', name: '35 İzmir',
    districts: [
      { id: 'cesme', name: 'Çeşme (Alaçatı)', lat: 38.32, lon: 26.30, elevation_m: 15 },
      { id: 'konak', name: 'Konak (Alsancak/Kordon)', lat: 38.41, lon: 27.12, elevation_m: 5 },
      { id: 'karsiyaka', name: 'Karşıyaka (Bostanlı/Mavişehir)', lat: 38.45, lon: 27.09, elevation_m: 5 },
      { id: 'bornova', name: 'Bornova (Ege Üniv.)', lat: 38.46, lon: 27.21, elevation_m: 45 },
      { id: 'buca', name: 'Buca (Dokuz Eylül)', lat: 38.38, lon: 27.17, elevation_m: 100 },
      { id: 'karabaglar', name: 'Karabağlar', lat: 38.37, lon: 27.13, elevation_m: 60 },
      { id: 'bayrakli', name: 'Bayraklı (Gökdelenler)', lat: 38.46, lon: 27.16, elevation_m: 15 },
      { id: 'cigli', name: 'Çiğli (Sasalı/Kuş Cenneti)', lat: 38.49, lon: 27.06, elevation_m: 10 },
      { id: 'gaziemir', name: 'Gaziemir (Adnan Menderes/ESBAŞ)', lat: 38.31, lon: 27.13, elevation_m: 90 },
      { id: 'balcova', name: 'Balçova (Teleferik/Termal)', lat: 38.39, lon: 27.05, elevation_m: 20 },
      { id: 'narlidere', name: 'Narlıdere', lat: 38.39, lon: 27.01, elevation_m: 30 },
      { id: 'guzelbahce', name: 'Güzelbahçe', lat: 38.37, lon: 26.89, elevation_m: 15 },
      { id: 'urla', name: 'Urla (İskele/Kekliktepe)', lat: 38.32, lon: 26.76, elevation_m: 25 },
      { id: 'seferihisar', name: 'Seferihisar (Sığacık)', lat: 38.19, lon: 26.83, elevation_m: 20 },
      { id: 'torbali', name: 'Torbalı', lat: 38.15, lon: 27.36, elevation_m: 35 },
      { id: 'menemen', name: 'Menemen', lat: 38.60, lon: 27.07, elevation_m: 25 },
      { id: 'kemalpasa', name: 'Kemalpaşa', lat: 38.42, lon: 27.41, elevation_m: 180 },
      { id: 'menderes', name: 'Menderes (Özdere/Gümüldür)', lat: 38.25, lon: 27.13, elevation_m: 110 },
      { id: 'aliaga', name: 'Aliağa (Liman/Rafineri)', lat: 38.79, lon: 26.97, elevation_m: 15 },
      { id: 'foca', name: 'Foça (Eski Foça)', lat: 38.67, lon: 26.75, elevation_m: 10 },
      { id: 'dikili', name: 'Dikili', lat: 39.07, lon: 26.89, elevation_m: 5 },
      { id: 'bergama', name: 'Bergama (Pergamon)', lat: 39.12, lon: 27.18, elevation_m: 65 },
      { id: 'odemis', name: 'Ödemiş (Gölcük/Bozdağ)', lat: 38.22, lon: 27.97, elevation_m: 120 },
      { id: 'tire', name: 'Tire', lat: 38.08, lon: 27.73, elevation_m: 90 },
      { id: 'selcuk', name: 'Selçuk (Efes/Şirince)', lat: 37.94, lon: 27.36, elevation_m: 15 },
      { id: 'bayindir', name: 'Bayındır', lat: 38.21, lon: 27.65, elevation_m: 65 },
      { id: 'karaburun', name: 'Karaburun (Mordoğan)', lat: 38.63, lon: 26.51, elevation_m: 20 },
      { id: 'kiraz', name: 'Kiraz', lat: 38.23, lon: 28.20, elevation_m: 280 },
      { id: 'kinik', name: 'Kınık', lat: 39.08, lon: 27.38, elevation_m: 50 },
      { id: 'beydag', name: 'Beydağ', lat: 38.08, lon: 28.20, elevation_m: 210 }
    ]
  },
  {
    id: 'kars', name: '36 Kars',
    districts: [
      { id: 'merkez', name: 'Merkez (Kars Kalesi & Ani)', lat: 40.60, lon: 43.09, elevation_m: 1768 },
      { id: 'sarikamis', name: 'Sarıkamış (Kayak)', lat: 40.33, lon: 42.58, elevation_m: 2100 },
      { id: 'kagizman', name: 'Kağızman', lat: 40.14, lon: 43.11, elevation_m: 1300 },
      { id: 'selim', name: 'Selim', lat: 40.46, lon: 42.79, elevation_m: 1820 },
      { id: 'digor', name: 'Digor', lat: 40.37, lon: 43.41, elevation_m: 1650 },
      { id: 'arpacay', name: 'Arpaçay (Çıldır)', lat: 40.84, lon: 43.32, elevation_m: 1680 },
      { id: 'akyaka', name: 'Akyaka', lat: 40.74, lon: 43.62, elevation_m: 1620 },
      { id: 'susuz', name: 'Susuz', lat: 40.78, lon: 43.12, elevation_m: 1750 }
    ]
  },
  {
    id: 'kastamonu', name: '37 Kastamonu',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 41.38, lon: 33.78, elevation_m: 774 },
      { id: 'tosya', name: 'Tosya', lat: 41.01, lon: 34.04, elevation_m: 800 },
      { id: 'taskopru', name: 'Taşköprü', lat: 41.51, lon: 34.21, elevation_m: 550 },
      { id: 'cide', name: 'Cide (Gideros)', lat: 41.89, lon: 32.96, elevation_m: 10 },
      { id: 'inebolu', name: 'İnebolu (Liman)', lat: 41.97, lon: 33.76, elevation_m: 10 },
      { id: 'arac', name: 'Araç', lat: 41.24, lon: 33.32, elevation_m: 680 },
      { id: 'devrekani', name: 'Devrekani', lat: 41.59, lon: 33.83, elevation_m: 980 },
      { id: 'bozkurt', name: 'Bozkurt', lat: 41.95, lon: 34.01, elevation_m: 20 },
      { id: 'daday', name: 'Daday', lat: 41.53, lon: 33.47, elevation_m: 940 },
      { id: 'azdavay', name: 'Azdavay (Kanyon)', lat: 41.65, lon: 33.30, elevation_m: 850 },
      { id: 'catalzeytin', name: 'Çatalzeytin', lat: 41.95, lon: 34.22, elevation_m: 10 },
      { id: 'kure', name: 'Küre', lat: 41.80, lon: 33.71, elevation_m: 970 },
      { id: 'doganyurt', name: 'Doğanyurt', lat: 42.00, lon: 33.45, elevation_m: 10 },
      { id: 'ihsangazi', name: 'İhsangazi', lat: 41.18, lon: 33.54, elevation_m: 850 },
      { id: 'pinarbasi', name: 'Pınarbaşı (Valla Kanyonu)', lat: 41.60, lon: 33.11, elevation_m: 650 },
      { id: 'senpazar', name: 'Şenpazar', lat: 41.80, lon: 33.14, elevation_m: 350 },
      { id: 'abana', name: 'Abana', lat: 41.97, lon: 34.01, elevation_m: 5 },
      { id: 'seydiler', name: 'Seydiler', lat: 41.62, lon: 33.72, elevation_m: 1050 },
      { id: 'hanonu', name: 'Hanönü', lat: 41.63, lon: 34.46, elevation_m: 420 },
      { id: 'agli', name: 'Ağlı', lat: 41.71, lon: 33.55, elevation_m: 1150 }
    ]
  },
  {
    id: 'kayseri', name: '38 Kayseri',
    districts: [
      { id: 'melikgazi', name: 'Melikgazi (Erciyes Kayak)', lat: 38.53, lon: 35.53, elevation_m: 2200 },
      { id: 'kocasinan', name: 'Kocasinan', lat: 38.73, lon: 35.48, elevation_m: 1050 },
      { id: 'talas', name: 'Talas (Ali Dağı)', lat: 38.69, lon: 35.55, elevation_m: 1100 },
      { id: 'develi', name: 'Develi', lat: 38.38, lon: 35.49, elevation_m: 1180 },
      { id: 'yahyali', name: 'Yahyalı (Kapuzbaşı Şelaleleri)', lat: 38.10, lon: 35.36, elevation_m: 1200 },
      { id: 'bunyan', name: 'Bünyan', lat: 38.84, lon: 35.86, elevation_m: 1350 },
      { id: 'incesu', name: 'İncesu', lat: 38.71, lon: 35.19, elevation_m: 1100 },
      { id: 'pinarbasi', name: 'Pınarbaşı', lat: 38.72, lon: 36.39, elevation_m: 1500 },
      { id: 'tomarza', name: 'Tomarza', lat: 38.45, lon: 35.80, elevation_m: 1400 },
      { id: 'yesilhisar', name: 'Yeşilhisar (Soğanlı)', lat: 38.35, lon: 35.09, elevation_m: 1000 },
      { id: 'sarioglan', name: 'Sarıoğlan', lat: 39.09, lon: 35.97, elevation_m: 1150 },
      { id: 'hacilar', name: 'Hacılar (Erciyes Kapı)', lat: 38.64, lon: 35.45, elevation_m: 1350 },
      { id: 'sariz', name: 'Sarız', lat: 38.48, lon: 36.50, elevation_m: 1580 },
      { id: 'felahiye', name: 'Felahiye', lat: 39.09, lon: 35.56, elevation_m: 1250 },
      { id: 'akkisla', name: 'Akkışla', lat: 39.00, lon: 36.14, elevation_m: 1350 },
      { id: 'ozvatan', name: 'Özvatan', lat: 39.10, lon: 35.70, elevation_m: 1300 }
    ]
  },
  {
    id: 'kirklareli', name: '39 Kırklareli',
    districts: [
      { id: 'luleburgaz', name: 'Lüleburgaz', lat: 41.40, lon: 27.35, elevation_m: 60 },
      { id: 'merkez', name: 'Merkez', lat: 41.73, lon: 27.21, elevation_m: 203 },
      { id: 'babaeski', name: 'Babaeski', lat: 41.43, lon: 27.09, elevation_m: 55 },
      { id: 'vize', name: 'Vize (Kıyıköy)', lat: 41.57, lon: 27.76, elevation_m: 180 },
      { id: 'pinarhisar', name: 'Pınarhisar', lat: 41.62, lon: 27.51, elevation_m: 190 },
      { id: 'demirkoy', name: 'Demirköy (İğneada Longoz)', lat: 41.87, lon: 27.98, elevation_m: 8 },
      { id: 'pehlivankoy', name: 'Pehlivanköy', lat: 41.35, lon: 26.91, elevation_m: 25 },
      { id: 'kofcaz', name: 'Kofçaz', lat: 41.93, lon: 27.16, elevation_m: 440 }
    ]
  },
  {
    id: 'kirsehir', name: '40 Kırşehir',
    districts: [
      { id: 'merkez', name: 'Merkez (Ahi Evran)', lat: 39.14, lon: 34.17, elevation_m: 985 },
      { id: 'kaman', name: 'Kaman (Kalehöyük)', lat: 39.35, lon: 33.72, elevation_m: 1050 },
      { id: 'mucur', name: 'Mucur (Seyfe Gölü)', lat: 39.06, lon: 34.38, elevation_m: 1030 },
      { id: 'cicekdagi', name: 'Çiçekdağı', lat: 39.61, lon: 34.42, elevation_m: 900 },
      { id: 'akpinar', name: 'Akpınar', lat: 39.44, lon: 33.97, elevation_m: 1150 },
      { id: 'boztepe', name: 'Boztepe', lat: 39.24, lon: 34.25, elevation_m: 1180 },
      { id: 'akcakent', name: 'Akçakent', lat: 39.63, lon: 34.12, elevation_m: 1250 }
    ]
  },
  {
    id: 'kocaeli', name: '41 Kocaeli',
    districts: [
      { id: 'gebze', name: 'Gebze (Bilişim Vadisi/Togg)', lat: 40.80, lon: 29.43, elevation_m: 110 },
      { id: 'izmit', name: 'İzmit (Merkez)', lat: 40.76, lon: 29.94, elevation_m: 20 },
      { id: 'darica', name: 'Darıca (Sahil/Hayvanat Bahçesi)', lat: 40.77, lon: 29.40, elevation_m: 35 },
      { id: 'korfez', name: 'Körfez (Hereke)', lat: 40.78, lon: 29.74, elevation_m: 20 },
      { id: 'golcuk', name: 'Gölcük (Donanma/Değirmendere)', lat: 40.71, lon: 29.83, elevation_m: 15 },
      { id: 'derince', name: 'Derince (Liman)', lat: 40.75, lon: 29.82, elevation_m: 20 },
      { id: 'cayirova', name: 'Çayırova', lat: 40.82, lon: 29.37, elevation_m: 110 },
      { id: 'kartepe', name: 'Kartepe (Kayak/Maşukiye)', lat: 40.67, lon: 30.01, elevation_m: 1350 },
      { id: 'basiskele', name: 'Başiskele (Yuvacık)', lat: 40.71, lon: 29.93, elevation_m: 30 },
      { id: 'karamursel', name: 'Karamürsel', lat: 40.69, lon: 29.61, elevation_m: 10 },
      { id: 'kandira', name: 'Kandıra (Kerpe/Kefken)', lat: 41.07, lon: 30.15, elevation_m: 45 },
      { id: 'dilovasi', name: 'Dilovası (Osmangazi Köprüsü)', lat: 40.78, lon: 29.54, elevation_m: 50 }
    ]
  },
  {
    id: 'konya', name: '42 Konya',
    districts: [
      { id: 'selcuklu', name: 'Selçuklu (Kelebekler/Sille)', lat: 37.93, lon: 32.48, elevation_m: 1025 },
      { id: 'meram', name: 'Meram (Bağları)', lat: 37.86, lon: 32.44, elevation_m: 1030 },
      { id: 'karatay', name: 'Karatay (Mevlana Müzesi)', lat: 37.87, lon: 32.50, elevation_m: 1020 },
      { id: 'eregli', name: 'Ereğli', lat: 37.51, lon: 34.05, elevation_m: 1040 },
      { id: 'aksehir', name: 'Akşehir (Nasreddin Hoca)', lat: 38.35, lon: 31.41, elevation_m: 1025 },
      { id: 'beysehir', name: 'Beyşehir (Göl)', lat: 37.68, lon: 31.72, elevation_m: 1150 },
      { id: 'cihanbeyli', name: 'Cihanbeyli (Tuz Gölü)', lat: 38.65, lon: 32.92, elevation_m: 960 },
      { id: 'ilgin', name: 'Ilgın (Kaplıcalar)', lat: 38.27, lon: 31.91, elevation_m: 1030 },
      { id: 'seydisehir', name: 'Seydişehir', lat: 37.42, lon: 31.84, elevation_m: 1125 },
      { id: 'kulu', name: 'Kulu', lat: 39.09, lon: 33.08, elevation_m: 980 },
      { id: 'karapinar', name: 'Karapınar (Meke Gölü)', lat: 37.71, lon: 33.55, elevation_m: 1000 },
      { id: 'cumra', name: 'Çumra (Çatalhöyük)', lat: 37.57, lon: 32.77, elevation_m: 1015 },
      { id: 'kadinhani', name: 'Kadınhanı', lat: 38.23, lon: 32.21, elevation_m: 1120 },
      { id: 'sarayonu', name: 'Sarayönü', lat: 38.26, lon: 32.40, elevation_m: 1060 },
      { id: 'bozkir', name: 'Bozkır', lat: 37.18, lon: 32.24, elevation_m: 1200 },
      { id: 'yunak', name: 'Yunak', lat: 38.81, lon: 31.73, elevation_m: 1070 },
      { id: 'doganhisar', name: 'Doğanhisar', lat: 38.14, lon: 31.67, elevation_m: 1220 },
      { id: 'huyuk', name: 'Hüyük', lat: 37.95, lon: 31.59, elevation_m: 1250 },
      { id: 'altinekin', name: 'Altınekin', lat: 38.30, lon: 32.71, elevation_m: 1000 },
      { id: 'hadim', name: 'Hadim (Yerköprü Şelalesi)', lat: 36.98, lon: 32.45, elevation_m: 1530 },
      { id: 'celtik', name: 'Çeltik', lat: 39.02, lon: 31.78, elevation_m: 850 },
      { id: 'guneysinir', name: 'Güneysınır', lat: 37.27, lon: 32.73, elevation_m: 1100 },
      { id: 'emirgazi', name: 'Emirgazi', lat: 37.90, lon: 33.83, elevation_m: 1080 },
      { id: 'taskent', name: 'Taşkent', lat: 36.92, lon: 32.49, elevation_m: 1620 },
      { id: 'tuzlukcu', name: 'Tuzlukçu', lat: 38.51, lon: 31.62, elevation_m: 990 },
      { id: 'derebucak', name: 'Derebucak', lat: 37.37, lon: 31.48, elevation_m: 1230 },
      { id: 'akoren', name: 'Akören', lat: 37.45, lon: 32.37, elevation_m: 1100 },
      { id: 'ahirli', name: 'Ahırlı', lat: 37.23, lon: 32.12, elevation_m: 1220 },
      { id: 'derbent', name: 'Derbent', lat: 37.97, lon: 32.01, elevation_m: 1480 },
      { id: 'halkapinar', name: 'Halkapınar (İvriz)', lat: 37.44, lon: 34.18, elevation_m: 1200 },
      { id: 'yalihuyuk', name: 'Yalıhüyük', lat: 37.30, lon: 31.99, elevation_m: 1120 }
    ]
  },
  {
    id: 'kutahya', name: '43 Kütahya',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.41, lon: 29.98, elevation_m: 969 },
      { id: 'tavsanli', name: 'Tavşanlı', lat: 39.54, lon: 29.50, elevation_m: 860 },
      { id: 'simav', name: 'Simav (Eynal Termal)', lat: 39.09, lon: 28.97, elevation_m: 820 },
      { id: 'gediz', name: 'Gediz (Murat Dağı)', lat: 38.99, lon: 29.57, elevation_m: 740 },
      { id: 'emet', name: 'Emet (Termal)', lat: 39.34, lon: 29.26, elevation_m: 900 },
      { id: 'altintas', name: 'Altıntaş (Zafer Havalimanı)', lat: 39.06, lon: 30.11, elevation_m: 1040 },
      { id: 'domanic', name: 'Domaniç', lat: 39.80, lon: 29.61, elevation_m: 870 },
      { id: 'hisarcik', name: 'Hisarcık', lat: 39.29, lon: 29.18, elevation_m: 850 },
      { id: 'aslanapa', name: 'Aslanapa', lat: 39.21, lon: 29.87, elevation_m: 1020 },
      { id: 'cavdarhisar', name: 'Çavdarhisar (Aizanoi)', lat: 39.20, lon: 29.61, elevation_m: 1010 },
      { id: 'saphane', name: 'Şaphane', lat: 39.03, lon: 29.22, elevation_m: 1000 },
      { id: 'pazarlar', name: 'Pazarlar', lat: 38.98, lon: 29.13, elevation_m: 900 },
      { id: 'dumlupinar', name: 'Dumlupınar (Şehitlik)', lat: 38.87, lon: 29.97, elevation_m: 1220 }
    ]
  },
  {
    id: 'malatya', name: '44 Malatya',
    districts: [
      { id: 'battalgazi', name: 'Battalgazi (Eski Malatya)', lat: 38.35, lon: 38.30, elevation_m: 964 },
      { id: 'yesilyurt', name: 'Yeşilyurt', lat: 38.30, lon: 38.25, elevation_m: 1010 },
      { id: 'dogansehir', name: 'Doğanşehir', lat: 38.00, lon: 37.87, elevation_m: 1250 },
      { id: 'akcadag', name: 'Akçadağ (Levent Vadisi)', lat: 38.34, lon: 37.96, elevation_m: 1050 },
      { id: 'darende', name: 'Darende (Somuncu Baba)', lat: 38.56, lon: 37.50, elevation_m: 1010 },
      { id: 'hekimhan', name: 'Hekimhan', lat: 38.82, lon: 37.93, elevation_m: 1075 },
      { id: 'puturge', name: 'Pütürge', lat: 38.19, lon: 38.87, elevation_m: 1250 },
      { id: 'yazihan', name: 'Yazıhan', lat: 38.58, lon: 38.26, elevation_m: 830 },
      { id: 'arapgir', name: 'Arapgir', lat: 39.04, lon: 38.48, elevation_m: 1200 },
      { id: 'kuluncak', name: 'Kuluncak', lat: 38.88, lon: 37.65, elevation_m: 1250 },
      { id: 'arguvan', name: 'Arguvan', lat: 38.77, lon: 38.27, elevation_m: 1150 },
      { id: 'kale', name: 'Kale', lat: 38.41, lon: 38.74, elevation_m: 750 },
      { id: 'doganyol', name: 'Doğanyol', lat: 38.31, lon: 39.04, elevation_m: 900 }
    ]
  },
  {
    id: 'manisa', name: '45 Manisa',
    districts: [
      { id: 'yunusemre', name: 'Yunusemre', lat: 38.61, lon: 27.42, elevation_m: 71 },
      { id: 'sehzadeler', name: 'Şehzadeler (Spil Dağı)', lat: 38.62, lon: 27.43, elevation_m: 80 },
      { id: 'akhisar', name: 'Akhisar', lat: 38.92, lon: 27.83, elevation_m: 95 },
      { id: 'salihli', name: 'Salihli (Sardes/Kurşunlu)', lat: 38.48, lon: 28.13, elevation_m: 125 },
      { id: 'turgutlu', name: 'Turgutlu', lat: 38.49, lon: 27.70, elevation_m: 80 },
      { id: 'soma', name: 'Soma', lat: 39.18, lon: 27.61, elevation_m: 160 },
      { id: 'alasehir', name: 'Alaşehir', lat: 38.35, lon: 28.51, elevation_m: 190 },
      { id: 'saruhanli', name: 'Saruhanlı', lat: 38.73, lon: 27.57, elevation_m: 45 },
      { id: 'kula', name: 'Kula (Volkanik Jeopark)', lat: 38.54, lon: 28.65, elevation_m: 670 },
      { id: 'demirci', name: 'Demirci', lat: 39.04, lon: 28.65, elevation_m: 850 },
      { id: 'kirkagac', name: 'Kırkağaç', lat: 39.10, lon: 27.67, elevation_m: 190 },
      { id: 'sarigol', name: 'Sarıgöl', lat: 38.24, lon: 28.69, elevation_m: 210 },
      { id: 'gordes', name: 'Gördes', lat: 38.93, lon: 28.29, elevation_m: 680 },
      { id: 'selendi', name: 'Selendi', lat: 38.74, lon: 28.87, elevation_m: 430 },
      { id: 'ahmetli', name: 'Ahmetli', lat: 38.52, lon: 27.94, elevation_m: 90 },
      { id: 'golmarmara', name: 'Gölmarmara', lat: 38.71, lon: 27.91, elevation_m: 100 },
      { id: 'koprubasi', name: 'Köprübaşı', lat: 38.74, lon: 28.39, elevation_m: 250 }
    ]
  },
  {
    id: 'kahramanmaras', name: '46 Kahramanmaraş',
    districts: [
      { id: 'onikisubat', name: 'Onikişubat', lat: 37.58, lon: 36.93, elevation_m: 568 },
      { id: 'dulkadiroglu', name: 'Dulkadiroğlu', lat: 37.57, lon: 36.94, elevation_m: 580 },
      { id: 'elbistan', name: 'Elbistan', lat: 38.20, lon: 37.19, elevation_m: 1150 },
      { id: 'afsin', name: 'Afşin (Eshab-ı Kehf)', lat: 38.24, lon: 36.91, elevation_m: 1230 },
      { id: 'turkoglu', name: 'Türkoğlu', lat: 37.38, lon: 36.85, elevation_m: 490 },
      { id: 'pazarcik', name: 'Pazarcık', lat: 37.48, lon: 37.29, elevation_m: 750 },
      { id: 'goksun', name: 'Göksun', lat: 38.02, lon: 36.49, elevation_m: 1350 },
      { id: 'andirin', name: 'Andırın', lat: 37.57, lon: 36.35, elevation_m: 1080 },
      { id: 'caglayancerit', name: 'Çağlayancerit', lat: 37.75, lon: 37.29, elevation_m: 1150 },
      { id: 'nurhak', name: 'Nurhak', lat: 37.96, lon: 37.43, elevation_m: 1400 },
      { id: 'ekinozu', name: 'Ekinözü (İçmeler)', lat: 38.06, lon: 37.18, elevation_m: 1270 }
    ]
  },
  {
    id: 'mardin', name: '47 Mardin',
    districts: [
      { id: 'kiziltepe', name: 'Kızıltepe', lat: 37.19, lon: 40.58, elevation_m: 490 },
      { id: 'artuklu', name: 'Artuklu (Eski Mardin)', lat: 37.32, lon: 40.72, elevation_m: 1085 },
      { id: 'midyat', name: 'Midyat (Konaklar)', lat: 37.42, lon: 41.37, elevation_m: 950 },
      { id: 'nusaybin', name: 'Nusaybin (Beyazsu)', lat: 37.07, lon: 41.21, elevation_m: 480 },
      { id: 'derik', name: 'Derik', lat: 37.36, lon: 40.27, elevation_m: 760 },
      { id: 'mazidagi', name: 'Mazıdağı', lat: 37.51, lon: 40.48, elevation_m: 1030 },
      { id: 'dargecit', name: 'Dargeçit (Ilısu Barajı)', lat: 37.54, lon: 41.72, elevation_m: 900 },
      { id: 'savur', name: 'Savur', lat: 37.53, lon: 40.89, elevation_m: 920 },
      { id: 'yesilli', name: 'Yeşilli', lat: 37.35, lon: 40.82, elevation_m: 800 },
      { id: 'omerli', name: 'Ömerli', lat: 37.44, lon: 40.95, elevation_m: 1050 }
    ]
  },
  {
    id: 'mugla', name: '48 Muğla',
    districts: [
      { id: 'bodrum', name: 'Bodrum (Yalıkavak/Türkbükü)', lat: 37.03, lon: 27.43, elevation_m: 10 },
      { id: 'fethiye', name: 'Fethiye (Ölüdeniz/Göcek)', lat: 36.65, lon: 29.11, elevation_m: 15 },
      { id: 'milas', name: 'Milas (Bodrum Havalimanı)', lat: 37.31, lon: 27.78, elevation_m: 60 },
      { id: 'mentese', name: 'Menteşe (Merkez)', lat: 37.21, lon: 28.36, elevation_m: 660 },
      { id: 'marmaris', name: 'Marmaris (Selimiye/Bozburun)', lat: 36.85, lon: 28.27, elevation_m: 8 },
      { id: 'seydikemer', name: 'Seydikemer (Saklıkent)', lat: 36.65, lon: 29.35, elevation_m: 130 },
      { id: 'ortaca', name: 'Ortaca (Dalyan/İztuzu)', lat: 36.83, lon: 28.76, elevation_m: 25 },
      { id: 'yatagan', name: 'Yatağan', lat: 37.34, lon: 28.14, elevation_m: 390 },
      { id: 'dalaman', name: 'Dalaman (Havalimanı/Sarsala)', lat: 36.76, lon: 28.80, elevation_m: 15 },
      { id: 'koycegiz', name: 'Köyceğiz (Göl/Ekincik)', lat: 36.96, lon: 28.69, elevation_m: 20 },
      { id: 'ula', name: 'Ula (Akyaka/Azmak)', lat: 37.11, lon: 28.41, elevation_m: 600 },
      { id: 'datca', name: 'Datça (Palamutbükü/Knidos)', lat: 36.72, lon: 27.68, elevation_m: 18 },
      { id: 'kavaklidere', name: 'Kavaklıdere', lat: 37.44, lon: 28.36, elevation_m: 850 }
    ]
  },
  {
    id: 'mus', name: '49 Muş',
    districts: [
      { id: 'merkez', name: 'Merkez (Murat Köprüsü)', lat: 38.74, lon: 41.50, elevation_m: 1334 },
      { id: 'bulanik', name: 'Bulanık', lat: 39.08, lon: 42.27, elevation_m: 1480 },
      { id: 'malazgirt', name: 'Malazgirt (Zafer Anıtı)', lat: 39.14, lon: 42.54, elevation_m: 1530 },
      { id: 'varto', name: 'Varto', lat: 39.17, lon: 41.45, elevation_m: 1650 },
      { id: 'haskoy', name: 'Hasköy', lat: 38.68, lon: 41.69, elevation_m: 1290 },
      { id: 'korkut', name: 'Korkut', lat: 38.72, lon: 41.78, elevation_m: 1300 }
    ]
  },
  {
    id: 'nevsehir', name: '50 Nevşehir',
    districts: [
      { id: 'urgup', name: 'Ürgüp (Kapadokya)', lat: 38.62, lon: 34.71, elevation_m: 1224 },
      { id: 'merkez', name: 'Merkez (Göreme/Uçhisar)', lat: 38.62, lon: 34.71, elevation_m: 1150 },
      { id: 'avanos', name: 'Avanos (Çömlekçiler)', lat: 38.71, lon: 34.84, elevation_m: 920 },
      { id: 'gulsehir', name: 'Gülşehir', lat: 38.74, lon: 34.62, elevation_m: 900 },
      { id: 'derinkuyu', name: 'Derinkuyu (Yeraltı Şehri)', lat: 38.37, lon: 34.73, elevation_m: 1300 },
      { id: 'acigol', name: 'Acıgöl', lat: 38.55, lon: 34.51, elevation_m: 1240 },
      { id: 'kozakli', name: 'Kozaklı (Termal)', lat: 39.21, lon: 34.85, elevation_m: 960 },
      { id: 'hacibektas', name: 'Hacıbektaş', lat: 38.94, lon: 34.56, elevation_m: 1250 }
    ]
  },
  {
    id: 'nigde', name: '51 Niğde',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.96, lon: 34.68, elevation_m: 1229 },
      { id: 'bor', name: 'Bor', lat: 37.89, lon: 34.56, elevation_m: 1110 },
      { id: 'ciftlik', name: 'Çiftlik', lat: 38.17, lon: 34.48, elevation_m: 1500 },
      { id: 'ulukisla', name: 'Ulukışla', lat: 37.54, lon: 34.48, elevation_m: 1430 },
      { id: 'altunhisar', name: 'Altunhisar', lat: 37.98, lon: 34.37, elevation_m: 1200 },
      { id: 'camardi', name: 'Çamardı (Aladağlar)', lat: 37.83, lon: 35.01, elevation_m: 1550 }
    ]
  },
  {
    id: 'ordu', name: '52 Ordu',
    districts: [
      { id: 'altinordu', name: 'Altınordu (Boztepe)', lat: 40.98, lon: 37.87, elevation_m: 5 },
      { id: 'unye', name: 'Ünye', lat: 41.12, lon: 37.28, elevation_m: 10 },
      { id: 'fatsa', name: 'Fatsa', lat: 41.02, lon: 37.50, elevation_m: 10 },
      { id: 'kumru', name: 'Kumru', lat: 40.87, lon: 37.26, elevation_m: 450 },
      { id: 'korgan', name: 'Korgan', lat: 40.82, lon: 37.34, elevation_m: 750 },
      { id: 'golkoy', name: 'Gölköy (Ulugöl)', lat: 40.68, lon: 37.61, elevation_m: 1050 },
      { id: 'persembe', name: 'Perşembe (Yason Burnu)', lat: 41.06, lon: 37.77, elevation_m: 5 },
      { id: 'aybasti', name: 'Aybastı (Perşembe Yaylası)', lat: 40.68, lon: 37.39, elevation_m: 750 },
      { id: 'akkus', name: 'Akkuş', lat: 40.79, lon: 37.01, elevation_m: 1340 },
      { id: 'ulubey', name: 'Ulubey', lat: 40.87, lon: 37.75, elevation_m: 580 },
      { id: 'mesudiye', name: 'Mesudiye', lat: 40.46, lon: 37.77, elevation_m: 1350 },
      { id: 'ikizce', name: 'İkizce', lat: 41.06, lon: 37.07, elevation_m: 170 },
      { id: 'gurgentepe', name: 'Gürgentepe', lat: 40.78, lon: 37.59, elevation_m: 1250 },
      { id: 'catalpinar', name: 'Çatalpınar', lat: 40.91, lon: 37.49, elevation_m: 130 },
      { id: 'caybasi', name: 'Çaybaşı', lat: 41.09, lon: 37.13, elevation_m: 380 },
      { id: 'kabatas', name: 'Kabataş', lat: 40.74, lon: 37.44, elevation_m: 550 },
      { id: 'kabaduz', name: 'Kabadüz (Çambaşı Kayak)', lat: 40.81, lon: 37.90, elevation_m: 1850 },
      { id: 'camas', name: 'Çamaş', lat: 40.91, lon: 37.52, elevation_m: 500 },
      { id: 'gulyali', name: 'Gülyalı (Ordu-Giresun Havalimanı)', lat: 40.96, lon: 38.06, elevation_m: 5 }
    ]
  },
  {
    id: 'rize', name: '53 Rize',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 41.02, lon: 40.52, elevation_m: 6 },
      { id: 'cayeli', name: 'Çayeli', lat: 41.09, lon: 40.72, elevation_m: 10 },
      { id: 'ardesen', name: 'Ardeşen', lat: 41.19, lon: 40.98, elevation_m: 10 },
      { id: 'pazar', name: 'Pazar (Rize-Artvin Havalimanı)', lat: 41.18, lon: 40.88, elevation_m: 10 },
      { id: 'findikli', name: 'Fındıklı', lat: 41.27, lon: 41.14, elevation_m: 10 },
      { id: 'guneysu', name: 'Güneysu', lat: 40.97, lon: 40.60, elevation_m: 150 },
      { id: 'kalkandere', name: 'Kalkandere', lat: 40.92, lon: 40.43, elevation_m: 170 },
      { id: 'iyidere', name: 'İyidere', lat: 41.01, lon: 40.35, elevation_m: 10 },
      { id: 'derepazari', name: 'Derepazarı', lat: 41.02, lon: 40.42, elevation_m: 10 },
      { id: 'camlihemsin', name: 'Çamlıhemşin (Ayder/Pokut)', lat: 40.95, lon: 41.10, elevation_m: 1350 },
      { id: 'ikizdere', name: 'İkizdere (Ovit Tüneli)', lat: 40.78, lon: 40.55, elevation_m: 700 },
      { id: 'hemsin', name: 'Hemşin', lat: 41.05, lon: 40.90, elevation_m: 320 }
    ]
  },
  {
    id: 'sakarya', name: '54 Sakarya',
    districts: [
      { id: 'adapazari', name: 'Adapazarı', lat: 40.77, lon: 30.40, elevation_m: 32 },
      { id: 'serdivan', name: 'Serdivan (Mavi Durak)', lat: 40.76, lon: 30.36, elevation_m: 65 },
      { id: 'akyazi', name: 'Akyazı (Kuzuluk Termal)', lat: 40.68, lon: 30.62, elevation_m: 70 },
      { id: 'erenler', name: 'Erenler', lat: 40.75, lon: 30.41, elevation_m: 35 },
      { id: 'hendek', name: 'Hendek', lat: 40.80, lon: 30.74, elevation_m: 170 },
      { id: 'karasu', name: 'Karasu (Sahil/Maden Deresi)', lat: 41.09, lon: 30.68, elevation_m: 10 },
      { id: 'geyve', name: 'Geyve', lat: 40.50, lon: 30.29, elevation_m: 90 },
      { id: 'arifiye', name: 'Arifiye (YHT İstasyonu)', lat: 40.71, lon: 30.36, elevation_m: 40 },
      { id: 'sapanca', name: 'Sapanca (Kırkpınar)', lat: 40.69, lon: 30.25, elevation_m: 45 },
      { id: 'pamukova', name: 'Pamukova', lat: 40.50, lon: 30.16, elevation_m: 95 },
      { id: 'ferizli', name: 'Ferizli', lat: 40.94, lon: 30.45, elevation_m: 45 },
      { id: 'kaynarca', name: 'Kaynarca', lat: 41.03, lon: 30.30, elevation_m: 60 },
      { id: 'kocaali', name: 'Kocaali', lat: 41.05, lon: 30.85, elevation_m: 15 },
      { id: 'sogutlu', name: 'Söğütlü', lat: 40.91, lon: 30.46, elevation_m: 40 },
      { id: 'karapurcek', name: 'Karapürçek', lat: 40.65, lon: 30.54, elevation_m: 110 },
      { id: 'tarakli', name: 'Taraklı (Tarihi Evler)', lat: 40.40, lon: 30.45, elevation_m: 450 }
    ]
  },
  {
    id: 'samsun', name: '55 Samsun',
    districts: [
      { id: 'ilkadim', name: 'İlkadım (Bandırma Vapuru)', lat: 41.28, lon: 36.33, elevation_m: 20 },
      { id: 'atakum', name: 'Atakum (Sahil Kordonu)', lat: 41.32, lon: 36.27, elevation_m: 5 },
      { id: 'bafra', name: 'Bafra (Kızılırmak Deltası)', lat: 41.56, lon: 35.90, elevation_m: 20 },
      { id: 'carsamba', name: 'Çarşamba (Havalimanı)', lat: 41.19, lon: 36.72, elevation_m: 15 },
      { id: 'canik', name: 'Canik', lat: 41.27, lon: 36.36, elevation_m: 35 },
      { id: 'vezirkopru', name: 'Vezirköprü (Şahinkaya Kanyonu)', lat: 41.14, lon: 35.45, elevation_m: 275 },
      { id: 'terme', name: 'Terme', lat: 41.20, lon: 36.97, elevation_m: 10 },
      { id: 'tekkekoy', name: 'Tekkeköy (Mağaralar)', lat: 41.21, lon: 36.45, elevation_m: 25 },
      { id: 'havza', name: 'Havza (Termal)', lat: 40.97, lon: 35.66, elevation_m: 675 },
      { id: 'ondokuzmayis', name: '19 Mayıs', lat: 41.49, lon: 36.08, elevation_m: 20 },
      { id: 'alacam', name: 'Alaçam', lat: 41.61, lon: 35.60, elevation_m: 15 },
      { id: 'salipazari', name: 'Salıpazarı', lat: 41.08, lon: 36.82, elevation_m: 65 },
      { id: 'ayvacik', name: 'Ayvacık (Saklı Cennet)', lat: 41.02, lon: 36.63, elevation_m: 120 },
      { id: 'kavak', name: 'Kavak', lat: 41.07, lon: 36.04, elevation_m: 610 },
      { id: 'asarcik', name: 'Asarcık', lat: 41.03, lon: 36.23, elevation_m: 780 },
      { id: 'ladik', name: 'Ladik (Akdağ Kayak/Göl)', lat: 40.91, lon: 35.89, elevation_m: 950 },
      { id: 'yakakent', name: 'Yakakent', lat: 41.63, lon: 35.53, elevation_m: 5 }
    ]
  },
  {
    id: 'siirt', name: '56 Siirt',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.93, lon: 41.95, elevation_m: 895 },
      { id: 'kurtalan', name: 'Kurtalan', lat: 37.92, lon: 41.70, elevation_m: 690 },
      { id: 'pervari', name: 'Pervari', lat: 37.93, lon: 42.54, elevation_m: 1380 },
      { id: 'baykan', name: 'Baykan (Veysel Karani)', lat: 38.16, lon: 41.77, elevation_m: 750 },
      { id: 'sirvan', name: 'Şirvan', lat: 38.06, lon: 42.02, elevation_m: 1050 },
      { id: 'eruh', name: 'Eruh', lat: 37.74, lon: 42.17, elevation_m: 1100 },
      { id: 'tillo', name: 'Tillo (İsmail Fakirullah)', lat: 37.95, lon: 42.01, elevation_m: 1100 }
    ]
  },
  {
    id: 'sinop', name: '57 Sinop',
    districts: [
      { id: 'merkez', name: 'Merkez (İnceburun/Cezaevi)', lat: 42.02, lon: 35.15, elevation_m: 25 },
      { id: 'boyabat', name: 'Boyabat (Kale)', lat: 41.46, lon: 34.76, elevation_m: 350 },
      { id: 'gerze', name: 'Gerze', lat: 41.80, lon: 35.19, elevation_m: 15 },
      { id: 'ayancik', name: 'Ayancık', lat: 41.94, lon: 34.58, elevation_m: 10 },
      { id: 'duragan', name: 'Durağan', lat: 41.41, lon: 35.05, elevation_m: 250 },
      { id: 'turkeli', name: 'Türkeli', lat: 41.95, lon: 34.34, elevation_m: 10 },
      { id: 'erfelek', name: 'Erfelek (Tatlıca Şelaleleri)', lat: 41.87, lon: 34.91, elevation_m: 180 },
      { id: 'dikmen', name: 'Dikmen', lat: 41.67, lon: 35.25, elevation_m: 50 },
      { id: 'sarayduzu', name: 'Saraydüzü', lat: 41.33, lon: 34.84, elevation_m: 400 }
    ]
  },
  {
    id: 'sivas', name: '58 Sivas',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.74, lon: 37.01, elevation_m: 1278 },
      { id: 'sarkisla', name: 'Şarkışla (Aşık Veysel)', lat: 39.41, lon: 36.41, elevation_m: 1180 },
      { id: 'yildizeli', name: 'Yıldızeli (Yıldız Dağı Kayak)', lat: 39.86, lon: 36.65, elevation_m: 1400 },
      { id: 'susehri', name: 'Suşehri', lat: 40.16, lon: 38.08, elevation_m: 1050 },
      { id: 'zara', name: 'Zara (Tödürge Gölü)', lat: 39.89, lon: 37.75, elevation_m: 1350 },
      { id: 'gemerek', name: 'Gemerek (Sızır Şelalesi)', lat: 39.18, lon: 36.07, elevation_m: 1150 },
      { id: 'kangal', name: 'Kangal (Balıklı Kaplıca)', lat: 39.23, lon: 37.38, elevation_m: 1540 },
      { id: 'hafik', name: 'Hafik (Göl)', lat: 39.85, lon: 37.38, elevation_m: 1300 },
      { id: 'gurun', name: 'Gürün (Gökpınar Gölü)', lat: 38.72, lon: 37.27, elevation_m: 1280 },
      { id: 'divrigi', name: 'Divriği (Ulu Cami)', lat: 39.37, lon: 38.11, elevation_m: 1050 },
      { id: 'koyulhisar', name: 'Koyulhisar', lat: 40.30, lon: 37.82, elevation_m: 850 },
      { id: 'altinyayla', name: 'Altınyayla', lat: 39.26, lon: 36.75, elevation_m: 1450 },
      { id: 'imranli', name: 'İmranlı (Kızılırmak Doğuşu)', lat: 39.87, lon: 38.11, elevation_m: 1600 },
      { id: 'akincilar', name: 'Akıncılar', lat: 40.10, lon: 38.37, elevation_m: 1000 },
      { id: 'golova', name: 'Gölova', lat: 40.06, lon: 38.56, elevation_m: 1320 },
      { id: 'dogansar', name: 'Doğanşar', lat: 40.19, lon: 37.54, elevation_m: 1300 },
      { id: 'ulas', name: 'Ulaş', lat: 39.44, lon: 37.04, elevation_m: 1350 }
    ]
  },
  {
    id: 'tekirdag', name: '59 Tekirdağ',
    districts: [
      { id: 'corlu', name: 'Çorlu', lat: 41.16, lon: 27.80, elevation_m: 150 },
      { id: 'suleymanpasa', name: 'Süleymanpaşa (Kordon)', lat: 40.98, lon: 27.51, elevation_m: 37 },
      { id: 'cerkezkoy', name: 'Çerkezköy', lat: 41.29, lon: 28.00, elevation_m: 155 },
      { id: 'kapakli', name: 'Kapaklı', lat: 41.32, lon: 27.97, elevation_m: 180 },
      { id: 'ergene', name: 'Ergene', lat: 41.26, lon: 27.70, elevation_m: 130 },
      { id: 'malkara', name: 'Malkara', lat: 40.89, lon: 26.90, elevation_m: 230 },
      { id: 'saray', name: 'Saray', lat: 41.44, lon: 27.92, elevation_m: 140 },
      { id: 'hayrabolu', name: 'Hayrabolu', lat: 41.21, lon: 27.11, elevation_m: 75 },
      { id: 'sarkoy', name: 'Şarköy (Uçmakdere)', lat: 40.61, lon: 27.11, elevation_m: 15 },
      { id: 'muratli', name: 'Muratlı', lat: 41.17, lon: 27.50, elevation_m: 70 },
      { id: 'marmaraereglisi', name: 'Marmaraereğlisi', lat: 40.97, lon: 27.95, elevation_m: 15 }
    ]
  },
  {
    id: 'tokat', name: '60 Tokat',
    districts: [
      { id: 'merkez', name: 'Merkez (Ballıca Mağarası)', lat: 40.31, lon: 36.55, elevation_m: 623 },
      { id: 'erbaa', name: 'Erbaa', lat: 40.69, lon: 36.57, elevation_m: 250 },
      { id: 'turhal', name: 'Turhal', lat: 40.39, lon: 36.08, elevation_m: 500 },
      { id: 'niksar', name: 'Niksar (Çamiçi Yaylası)', lat: 40.59, lon: 36.95, elevation_m: 350 },
      { id: 'zile', name: 'Zile (Kale)', lat: 40.30, lon: 35.88, elevation_m: 710 },
      { id: 'resadiye', name: 'Reşadiye (Termal)', lat: 40.38, lon: 37.33, elevation_m: 500 },
      { id: 'almus', name: 'Almus (Baraj Gölü)', lat: 40.37, lon: 36.90, elevation_m: 800 },
      { id: 'pazar', name: 'Pazar (Ballıca)', lat: 40.27, lon: 36.28, elevation_m: 600 },
      { id: 'yesilyurt', name: 'Yeşilyurt', lat: 40.32, lon: 36.35, elevation_m: 1000 },
      { id: 'artova', name: 'Artova', lat: 40.11, lon: 36.30, elevation_m: 1100 },
      { id: 'sulusaray', name: 'Sulusaray (Sebastapolis)', lat: 40.03, lon: 36.08, elevation_m: 1020 },
      { id: 'basciftlik', name: 'Başçiftlik (Kayak)', lat: 40.54, lon: 37.16, elevation_m: 1450 }
    ]
  },
  {
    id: 'trabzon', name: '61 Trabzon',
    districts: [
      { id: 'ortahisar', name: 'Ortahisar (Meydan/Boztepe)', lat: 41.00, lon: 39.71, elevation_m: 35 },
      { id: 'akcaabat', name: 'Akçaabat (Sahil/Köfte)', lat: 41.02, lon: 39.57, elevation_m: 15 },
      { id: 'arakli', name: 'Araklı', lat: 40.94, lon: 39.96, elevation_m: 10 },
      { id: 'of', name: 'Of', lat: 40.94, lon: 40.26, elevation_m: 10 },
      { id: 'yomra', name: 'Yomra (Kaşüstü)', lat: 40.95, lon: 39.85, elevation_m: 15 },
      { id: 'arsin', name: 'Arsin (OSB/Sahil)', lat: 40.95, lon: 39.92, elevation_m: 15 },
      { id: 'vakfikebir', name: 'Vakfıkebir', lat: 41.05, lon: 39.28, elevation_m: 10 },
      { id: 'surmene', name: 'Sürmene (Çamburnu)', lat: 40.91, lon: 40.11, elevation_m: 15 },
      { id: 'macka', name: 'Maçka (Sümela Manastırı)', lat: 40.69, lon: 39.65, elevation_m: 1150 },
      { id: 'besikduzu', name: 'Beşikdüzü (Teleferik)', lat: 41.05, lon: 39.23, elevation_m: 10 },
      { id: 'carsibasi', name: 'Çarşıbaşı', lat: 41.08, lon: 39.38, elevation_m: 10 },
      { id: 'caykara', name: 'Çaykara (Uzungöl)', lat: 40.61, lon: 40.29, elevation_m: 1100 },
      { id: 'tonya', name: 'Tonya', lat: 40.88, lon: 39.28, elevation_m: 750 },
      { id: 'duzkoy', name: 'Düzköy (Çal Mağarası)', lat: 40.88, lon: 39.43, elevation_m: 850 },
      { id: 'salpazari', name: 'Şalpazarı (Sis Dağı)', lat: 40.93, lon: 39.17, elevation_m: 350 },
      { id: 'hayrat', name: 'Hayrat', lat: 40.88, lon: 40.36, elevation_m: 180 },
      { id: 'koprubasi', name: 'Köprübaşı', lat: 40.79, lon: 39.99, elevation_m: 300 },
      { id: 'dernekpazari', name: 'Dernekpazarı', lat: 40.78, lon: 40.24, elevation_m: 170 }
    ]
  },
  {
    id: 'tunceli', name: '62 Tunceli',
    districts: [
      { id: 'merkez', name: 'Merkez (Munzur)', lat: 39.10, lon: 39.54, elevation_m: 915 },
      { id: 'pertek', name: 'Pertek (Feribot/Kale)', lat: 38.86, lon: 39.33, elevation_m: 950 },
      { id: 'mazgirt', name: 'Mazgirt', lat: 39.02, lon: 39.60, elevation_m: 1400 },
      { id: 'cemisgezek', name: 'Çemişgezek', lat: 39.06, lon: 38.91, elevation_m: 950 },
      { id: 'hozat', name: 'Hozat', lat: 39.10, lon: 39.21, elevation_m: 1520 },
      { id: 'ovacik', name: 'Ovacık (Munzur Gözeleri)', lat: 39.36, lon: 39.21, elevation_m: 1300 },
      { id: 'pulumur', name: 'Pülümür', lat: 39.48, lon: 39.90, elevation_m: 1650 },
      { id: 'nazimiye', name: 'Nazımiye', lat: 39.18, lon: 39.81, elevation_m: 1550 }
    ]
  },
  {
    id: 'sanliurfa', name: '63 Şanlıurfa',
    districts: [
      { id: 'eyyubiye', name: 'Eyyübiye (Balıklıgöl)', lat: 37.14, lon: 38.78, elevation_m: 510 },
      { id: 'haliliye', name: 'Haliliye (Göbeklitepe)', lat: 37.22, lon: 38.92, elevation_m: 530 },
      { id: 'siverek', name: 'Siverek', lat: 37.75, lon: 39.31, elevation_m: 800 },
      { id: 'viransehir', name: 'Viranşehir', lat: 37.23, lon: 39.76, elevation_m: 580 },
      { id: 'karakopru', name: 'Karaköprü', lat: 37.19, lon: 38.78, elevation_m: 560 },
      { id: 'akcakale', name: 'Akçakale (Sınır)', lat: 36.71, lon: 38.94, elevation_m: 360 },
      { id: 'suruc', name: 'Suruç', lat: 36.97, lon: 38.42, elevation_m: 500 },
      { id: 'birecik', name: 'Birecik (Fırat)', lat: 37.02, lon: 37.98, elevation_m: 340 },
      { id: 'ceylanpinar', name: 'Ceylanpınar (TİGEM)', lat: 36.83, lon: 40.03, elevation_m: 370 },
      { id: 'harran', name: 'Harran (Kümbet Evler)', lat: 36.86, lon: 39.03, elevation_m: 375 },
      { id: 'bozova', name: 'Bozova', lat: 37.36, lon: 38.52, elevation_m: 580 },
      { id: 'hilvan', name: 'Hilvan', lat: 37.58, lon: 38.95, elevation_m: 600 },
      { id: 'halfeti', name: 'Halfeti (Batık Şehir)', lat: 37.24, lon: 37.86, elevation_m: 400 }
    ]
  },
  {
    id: 'usak', name: '64 Uşak',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 38.68, lon: 29.40, elevation_m: 907 },
      { id: 'banaz', name: 'Banaz', lat: 38.74, lon: 29.75, elevation_m: 915 },
      { id: 'esme', name: 'Eşme (Kilimleri)', lat: 38.40, lon: 28.96, elevation_m: 820 },
      { id: 'sivasli', name: 'Sivaslı', lat: 38.50, lon: 29.68, elevation_m: 900 },
      { id: 'ulubey', name: 'Ulubey (Kanyon Cam Teras)', lat: 38.42, lon: 29.28, elevation_m: 720 },
      { id: 'karahalli', name: 'Karahallı (Clandıras)', lat: 38.32, lon: 29.53, elevation_m: 850 }
    ]
  },
  {
    id: 'van', name: '65 Van',
    districts: [
      { id: 'ipekyolu', name: 'İpekyolu (Merkez/Kale)', lat: 38.48, lon: 43.40, elevation_m: 1727 },
      { id: 'tusba', name: 'Tuşba (Göl Sahili)', lat: 38.54, lon: 43.37, elevation_m: 1675 },
      { id: 'edremit', name: 'Edremit (Akdamar İskelesi)', lat: 38.42, lon: 43.25, elevation_m: 1670 },
      { id: 'ercis', name: 'Erciş (İnci Kefali)', lat: 39.02, lon: 43.35, elevation_m: 1690 },
      { id: 'ozalp', name: 'Özalp', lat: 38.65, lon: 43.98, elevation_m: 2050 },
      { id: 'caldiran', name: 'Çaldıran', lat: 39.14, lon: 43.91, elevation_m: 2050 },
      { id: 'baskale', name: 'Başkale (Travertenler)', lat: 38.04, lon: 44.01, elevation_m: 2460 },
      { id: 'muradiye', name: 'Muradiye (Şelale)', lat: 38.99, lon: 43.76, elevation_m: 1700 },
      { id: 'gurpinar', name: 'Gürpınar (Hoşap Kalesi)', lat: 38.32, lon: 43.41, elevation_m: 1740 },
      { id: 'gevas', name: 'Gevaş (Akdamar Kilisesi)', lat: 38.29, lon: 43.10, elevation_m: 1670 },
      { id: 'saray', name: 'Saray (Kapıköy Sınırı)', lat: 38.65, lon: 44.17, elevation_m: 2100 },
      { id: 'catak', name: 'Çatak (Rafting)', lat: 38.00, lon: 43.05, elevation_m: 1510 },
      { id: 'bahcesaray', name: 'Bahçesaray (Feqiye Teyran)', lat: 38.10, lon: 42.79, elevation_m: 1670 }
    ]
  },
  {
    id: 'yozgat', name: '66 Yozgat',
    districts: [
      { id: 'merkez', name: 'Merkez (Çamlık Milli Parkı)', lat: 39.81, lon: 34.81, elevation_m: 1300 },
      { id: 'sorgun', name: 'Sorgun (Termal)', lat: 39.81, lon: 35.18, elevation_m: 1080 },
      { id: 'akdagmadeni', name: 'Akdağmadeni', lat: 39.66, lon: 35.88, elevation_m: 1350 },
      { id: 'yerkoy', name: 'Yerköy', lat: 39.63, lon: 34.46, elevation_m: 770 },
      { id: 'bogazliyan', name: 'Boğazlıyan', lat: 39.19, lon: 35.24, elevation_m: 1060 },
      { id: 'sarikaya', name: 'Sarıkaya (Roma Hamamı)', lat: 39.49, lon: 35.37, elevation_m: 1170 },
      { id: 'cekerek', name: 'Çekerek', lat: 40.07, lon: 35.49, elevation_m: 850 },
      { id: 'sefaatli', name: 'Şefaatli', lat: 39.50, lon: 34.75, elevation_m: 900 },
      { id: 'saraykent', name: 'Saraykent', lat: 39.69, lon: 35.50, elevation_m: 1100 },
      { id: 'cayiralan', name: 'Çayıralan', lat: 39.30, lon: 35.64, elevation_m: 1350 },
      { id: 'kadissehri', name: 'Kadışehri', lat: 40.05, lon: 35.79, elevation_m: 950 },
      { id: 'aydincik', name: 'Aydıncık (Kazankaya Kanyonu)', lat: 40.16, lon: 35.28, elevation_m: 800 },
      { id: 'yenifakili', name: 'Yenifakılı', lat: 39.20, lon: 35.05, elevation_m: 950 },
      { id: 'candir', name: 'Çandır', lat: 39.24, lon: 35.52, elevation_m: 1200 }
    ]
  },
  {
    id: 'zonguldak', name: '67 Zonguldak',
    districts: [
      { id: 'kdzeregli', name: 'Karadeniz Ereğli', lat: 41.28, lon: 31.42, elevation_m: 15 },
      { id: 'merkez', name: 'Merkez', lat: 41.45, lon: 31.79, elevation_m: 50 },
      { id: 'caycuma', name: 'Çaycuma (Havalimanı/Filyos)', lat: 41.42, lon: 32.07, elevation_m: 25 },
      { id: 'devrek', name: 'Devrek (Baston)', lat: 41.22, lon: 31.95, elevation_m: 100 },
      { id: 'kozlu', name: 'Kozlu (Sahil)', lat: 41.43, lon: 31.75, elevation_m: 20 },
      { id: 'alapli', name: 'Alaplı', lat: 41.18, lon: 31.38, elevation_m: 15 },
      { id: 'kilimli', name: 'Kilimli', lat: 41.48, lon: 31.85, elevation_m: 35 },
      { id: 'gokcebey', name: 'Gökçebey', lat: 41.31, lon: 32.14, elevation_m: 55 }
    ]
  },
  {
    id: 'aksaray', name: '68 Aksaray',
    districts: [
      { id: 'merkez', name: 'Merkez (Ihlara Vadisi)', lat: 38.36, lon: 34.03, elevation_m: 980 },
      { id: 'ortakoy', name: 'Ortaköy', lat: 38.73, lon: 34.03, elevation_m: 1140 },
      { id: 'eskil', name: 'Eskil (Tuz Gölü)', lat: 38.40, lon: 33.41, elevation_m: 930 },
      { id: 'gulagac', name: 'Gülağaç (Narlıgöl)', lat: 38.39, lon: 34.35, elevation_m: 1180 },
      { id: 'guzelyurt', name: 'Güzelyurt (Manastır Vadisi)', lat: 38.27, lon: 34.37, elevation_m: 1485 },
      { id: 'agacoren', name: 'Ağaçören', lat: 38.87, lon: 33.91, elevation_m: 1100 },
      { id: 'sariyahsi', name: 'Sarıyahşi (Hirfanlı Barajı)', lat: 38.98, lon: 33.85, elevation_m: 870 },
      { id: 'sultanhani', name: 'Sultanhanı (Kervansaray)', lat: 38.24, lon: 33.54, elevation_m: 940 }
    ]
  },
  {
    id: 'bayburt', name: '69 Bayburt',
    districts: [
      { id: 'merkez', name: 'Merkez (Baksı Müzesi/Kale)', lat: 40.25, lon: 40.22, elevation_m: 1550 },
      { id: 'demirozu', name: 'Demirözü', lat: 40.16, lon: 39.93, elevation_m: 1650 },
      { id: 'aydintepe', name: 'Aydıntepe (Yeraltı Şehri)', lat: 40.38, lon: 40.14, elevation_m: 1520 }
    ]
  },
  {
    id: 'karaman', name: '70 Karaman',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.17, lon: 33.22, elevation_m: 1033 },
      { id: 'ermenek', name: 'Ermenek (Baraj Gölü)', lat: 36.63, lon: 32.89, elevation_m: 1250 },
      { id: 'sariveliler', name: 'Sarıveliler', lat: 36.70, lon: 32.61, elevation_m: 1500 },
      { id: 'ayranci', name: 'Ayrancı', lat: 37.36, lon: 33.70, elevation_m: 1140 },
      { id: 'kazimkarabekir', name: 'Kazımkarabekir', lat: 37.23, lon: 32.96, elevation_m: 1050 },
      { id: 'basyayla', name: 'Başyayla', lat: 36.75, lon: 32.68, elevation_m: 1350 }
    ]
  },
  {
    id: 'kirikkale', name: '71 Kırıkkale',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 39.84, lon: 33.51, elevation_m: 713 },
      { id: 'yahsihan', name: 'Yahşihan (Üniversite)', lat: 39.83, lon: 33.45, elevation_m: 720 },
      { id: 'keskin', name: 'Keskin (Taş Mektep)', lat: 39.67, lon: 33.61, elevation_m: 1140 },
      { id: 'delice', name: 'Delice (Tuzlası)', lat: 39.95, lon: 34.02, elevation_m: 690 },
      { id: 'bahsili', name: 'Bahşılı (Karaahmetli)', lat: 39.80, lon: 33.43, elevation_m: 710 },
      { id: 'sulakyurt', name: 'Sulakyurt', lat: 40.16, lon: 33.72, elevation_m: 850 },
      { id: 'baliseyh', name: 'Balışeyh', lat: 39.91, lon: 33.71, elevation_m: 870 },
      { id: 'karakecili', name: 'Karakeçili', lat: 39.59, lon: 33.38, elevation_m: 820 },
      { id: 'celebi', name: 'Çelebi', lat: 39.50, lon: 33.55, elevation_m: 1250 }
    ]
  },
  {
    id: 'batman', name: '72 Batman',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.88, lon: 41.12, elevation_m: 540 },
      { id: 'kozluk', name: 'Kozluk', lat: 38.19, lon: 41.48, elevation_m: 875 },
      { id: 'sason', name: 'Sason (Mereto Dağı)', lat: 38.33, lon: 41.41, elevation_m: 900 },
      { id: 'besiri', name: 'Beşiri (Mor Kiryakus)', lat: 37.91, lon: 41.28, elevation_m: 650 },
      { id: 'gercus', name: 'Gercüş', lat: 37.57, lon: 41.38, elevation_m: 950 },
      { id: 'hasankeyf', name: 'Hasankeyf (Antik Kent)', lat: 37.71, lon: 41.41, elevation_m: 510 }
    ]
  },
  {
    id: 'sirnak', name: '73 Şırnak',
    districts: [
      { id: 'cizre', name: 'Cizre (İpek Yolu)', lat: 37.32, lon: 42.18, elevation_m: 377 },
      { id: 'silopi', name: 'Silopi (Habur Sınır Kapısı)', lat: 37.17, lon: 42.47, elevation_m: 510 },
      { id: 'merkez', name: 'Merkez (Cudi Dağı)', lat: 37.51, lon: 42.45, elevation_m: 1350 },
      { id: 'idil', name: 'İdil (Şerafettin Elçi Havalimanı)', lat: 37.34, lon: 41.89, elevation_m: 780 },
      { id: 'uludere', name: 'Uludere', lat: 37.44, lon: 42.86, elevation_m: 1250 },
      { id: 'beytussebap', name: 'Beytüşşebap (Kato Dağı)', lat: 37.57, lon: 43.16, elevation_m: 1550 },
      { id: 'guclukonak', name: 'Güçlükonak (Kaplıca)', lat: 37.49, lon: 41.97, elevation_m: 750 }
    ]
  },
  {
    id: 'bartin', name: '74 Bartın',
    districts: [
      { id: 'merkez', name: 'Merkez (İnkumu)', lat: 41.63, lon: 32.33, elevation_m: 25 },
      { id: 'amasra', name: 'Amasra (Çeşm-i Cihan)', lat: 41.74, lon: 32.38, elevation_m: 15 },
      { id: 'ulus', name: 'Ulus (Küre Dağları)', lat: 41.60, lon: 32.63, elevation_m: 200 },
      { id: 'kurucasile', name: 'Kurucaşile (Ahşap Tekne)', lat: 41.84, lon: 32.72, elevation_m: 15 }
    ]
  },
  {
    id: 'ardahan', name: '75 Ardahan',
    districts: [
      { id: 'merkez', name: 'Merkez (Kura Nehri)', lat: 41.11, lon: 42.70, elevation_m: 1829 },
      { id: 'gole', name: 'Göle', lat: 40.79, lon: 42.61, elevation_m: 2030 },
      { id: 'cildir', name: 'Çıldır (Buz Tutan Göl)', lat: 41.12, lon: 43.13, elevation_m: 1960 },
      { id: 'hanak', name: 'Hanak', lat: 41.23, lon: 42.83, elevation_m: 1820 },
      { id: 'posof', name: 'Posof (Türkgözü Sınırı)', lat: 41.51, lon: 42.73, elevation_m: 1580 },
      { id: 'damal', name: 'Damal (Atatürk Silüeti)', lat: 41.27, lon: 42.84, elevation_m: 2050 }
    ]
  },
  {
    id: 'igdir', name: '76 Iğdır',
    districts: [
      { id: 'merkez', name: 'Merkez (Ağrı Dağı Manzarası)', lat: 39.92, lon: 44.04, elevation_m: 858 },
      { id: 'tuzluca', name: 'Tuzluca (Tuz Terapi Mağarası)', lat: 40.04, lon: 43.66, elevation_m: 1100 },
      { id: 'aralik', name: 'Aralık (Dilucu Nahçıvan Sınırı)', lat: 39.87, lon: 44.52, elevation_m: 830 },
      { id: 'karakoyunlu', name: 'Karakoyunlu', lat: 39.97, lon: 44.17, elevation_m: 850 }
    ]
  },
  {
    id: 'yalova', name: '77 Yalova',
    districts: [
      { id: 'merkez', name: 'Merkez (İDO Feribot/Yürüyen Köşk)', lat: 40.65, lon: 29.26, elevation_m: 10 },
      { id: 'ciftlikkoy', name: 'Çiftlikköy', lat: 40.66, lon: 29.35, elevation_m: 15 },
      { id: 'cinarcik', name: 'Çınarcık (Esenköy/Koru)', lat: 40.64, lon: 29.12, elevation_m: 15 },
      { id: 'altinova', name: 'Altınova (Osmangazi Köprüsü/Hersek)', lat: 40.70, lon: 29.51, elevation_m: 15 },
      { id: 'armutlu', name: 'Armutlu (Termal Kaplıcalar)', lat: 40.52, lon: 28.83, elevation_m: 20 },
      { id: 'termal', name: 'Termal (Tarihi Kaplıcalar)', lat: 40.60, lon: 29.17, elevation_m: 150 }
    ]
  },
  {
    id: 'karabuk', name: '78 Karabük',
    districts: [
      { id: 'safranbolu', name: 'Safranbolu (UNESCO Tarihi Evler)', lat: 41.25, lon: 32.69, elevation_m: 485 },
      { id: 'merkez', name: 'Merkez (Kardemir)', lat: 41.20, lon: 32.62, elevation_m: 270 },
      { id: 'yenice', name: 'Yenice (Şeker Kanyonu/Ormanları)', lat: 41.20, lon: 32.33, elevation_m: 140 },
      { id: 'eskipazar', name: 'Eskipazar (Hadrianapolis)', lat: 40.94, lon: 32.53, elevation_m: 720 },
      { id: 'eflani', name: 'Eflani (Göletler)', lat: 41.44, lon: 32.96, elevation_m: 900 },
      { id: 'ovacik', name: 'Ovacık', lat: 41.05, lon: 32.84, elevation_m: 1100 }
    ]
  },
  {
    id: 'kilis', name: '79 Kilis',
    districts: [
      { id: 'merkez', name: 'Merkez (Öncüpınar Sınır)', lat: 36.71, lon: 37.12, elevation_m: 660 },
      { id: 'musabeyli', name: 'Musabeyli', lat: 36.88, lon: 36.91, elevation_m: 680 },
      { id: 'elbeyli', name: 'Elbeyli (Çobanbey)', lat: 36.67, lon: 37.46, elevation_m: 510 },
      { id: 'polateli', name: 'Polateli', lat: 36.88, lon: 37.07, elevation_m: 800 }
    ]
  },
  {
    id: 'osmaniye', name: '80 Osmaniye',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 37.07, lon: 36.24, elevation_m: 125 },
      { id: 'kadirli', name: 'Kadirli (Karatepe Aslantaş)', lat: 37.37, lon: 36.09, elevation_m: 95 },
      { id: 'duzici', name: 'Düziçi (Harun Reşit Kalesi/Teleferik)', lat: 37.24, lon: 36.45, elevation_m: 350 },
      { id: 'bahce', name: 'Bahçe (Rüzgar Santralleri)', lat: 37.20, lon: 36.57, elevation_m: 620 },
      { id: 'toprakkale', name: 'Toprakkale (Kavşak/Otoyol)', lat: 37.06, lon: 36.14, elevation_m: 65 },
      { id: 'sumbas', name: 'Sumbas', lat: 37.44, lon: 36.03, elevation_m: 130 },
      { id: 'hasanbeyli', name: 'Hasanbeyli', lat: 37.12, lon: 36.56, elevation_m: 750 }
    ]
  },
  {
    id: 'duzce', name: '81 Düzce',
    districts: [
      { id: 'merkez', name: 'Merkez', lat: 40.84, lon: 31.15, elevation_m: 160 },
      { id: 'akcakoca', name: 'Akçakoca (Mavi Bayraklı Plajlar)', lat: 41.08, lon: 31.11, elevation_m: 10 },
      { id: 'kaynasli', name: 'Kaynaşlı (Bolu Dağı Otoyol Tesisleri)', lat: 40.77, lon: 31.31, elevation_m: 320 },
      { id: 'golyaka', name: 'Gölyaka (Efteni Gölü/Güzeldere)', lat: 40.77, lon: 31.02, elevation_m: 130 },
      { id: 'cilimli', name: 'Çilimli', lat: 40.90, lon: 31.05, elevation_m: 180 },
      { id: 'yigilca', name: 'Yığılca (Saklıkent Şelalesi)', lat: 40.96, lon: 31.45, elevation_m: 330 },
      { id: 'gumusova', name: 'Gümüşova', lat: 40.85, lon: 30.94, elevation_m: 170 },
      { id: 'cumayeri', name: 'Cumayeri (Melen Çayı Rafting)', lat: 40.87, lon: 30.96, elevation_m: 140 }
    ]
  }
];