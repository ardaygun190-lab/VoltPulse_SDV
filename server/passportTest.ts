// passportTest.ts - Batarya Pasaportu & Yaşlanma Doğrulama Testi
import { vehicles } from './vehicles';
import { calculateBatteryHealth, BatteryUsageHistory } from './server/batteryPassport';

const togg = vehicles.find(v => v.id === 'togg-t10x-long')!; // NMC Kimyası
const teslaLFP = vehicles.find(v => v.id === 'tesla-model3-rwd')!; // LFP Kimyası

console.log('======================================================================');
console.log('         VOLTPULSE SDV - BATARYA PASAPORTU & SOH YAŞLANMA TESTİ       ');
console.log('======================================================================\n');

// SENARYO 1: 5 Yıllık Normal Kullanım Karşılaştırması (NMC Togg vs LFP Tesla)
console.log('--- SENARYO 1: 5 Yıl / 120.000 km / 450 Döngü (%30 DC Şarj) ---');
const standardUsage: BatteryUsageHistory = {
  vehicle_age_years: 5,
  total_mileage_km: 120000,
  charge_cycles: 450,
  fast_charge_ratio: 0.30,
  average_storage_soc: 70
};

const toggPassport = calculateBatteryHealth(togg, standardUsage);
const teslaPassport = calculateBatteryHealth(teslaLFP, standardUsage);

console.log(`[Togg T10X (NMC)]  SOH: %${toggPassport.state_of_health_percent} | Kalan Pil: ${toggPassport.current_capacity_kwh} / ${toggPassport.original_capacity_kwh} kWh`);
console.log(`  -> Döngü Kaybı: %${toggPassport.degradation_breakdown.cycle_aging_percent} | Takvim Kaybı: %${toggPassport.degradation_breakdown.calendar_aging_percent} | DC Stresi: %${toggPassport.degradation_breakdown.fast_charge_stress_percent}`);
console.log(`  -> Durum: ${toggPassport.second_life_status}\n`);

console.log(`[Tesla M3 (LFP)]   SOH: %${teslaPassport.state_of_health_percent} | Kalan Pil: ${teslaPassport.current_capacity_kwh} / ${teslaPassport.original_capacity_kwh} kWh`);
console.log(`  -> Döngü Kaybı: %${teslaPassport.degradation_breakdown.cycle_aging_percent} | Takvim Kaybı: %${teslaPassport.degradation_breakdown.calendar_aging_percent} | DC Stresi: %${teslaPassport.degradation_breakdown.fast_charge_stress_percent}`);
console.log(`  -> Durum: ${teslaPassport.second_life_status}\n`);

// SENARYO 2: Ağır Ticari / Filo Kullanımı (8 Yıl, 1800 Döngü, %80 DC Şarj - Emeklilik Eşiği)
console.log('--- SENARYO 2: Ağır Ticari Filo Kullanımı (8 Yıl / 1800 Döngü / %80 DC) ---');
const heavyFleetUsage: BatteryUsageHistory = {
  vehicle_age_years: 8,
  total_mileage_km: 450000,
  charge_cycles: 1800,
  fast_charge_ratio: 0.80,
  average_storage_soc: 90
};

const fleetTogg = calculateBatteryHealth(togg, heavyFleetUsage);
console.log(`[Filo Togg T10X]   Pasaport ID: ${fleetTogg.passport_id}`);
console.log(`  -> Sağlık (SOH): %${fleetTogg.state_of_health_percent}`);
console.log(`  -> Karbon İzi : ${fleetTogg.carbon_footprint_kg_co2_kwh} kg CO2/kWh`);
console.log(`  -> 2. Hayat Durumu: ${fleetTogg.second_life_status}`);
console.log('======================================================================');