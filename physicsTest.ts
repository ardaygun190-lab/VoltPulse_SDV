// physicsTest.ts - VoltPulse Fizik & Telemetri Çekirdeği Simülasyon Testi
import { vehicles } from './vehicles';
import { calculateRequiredPower, TelemetryConditions } from './physicsCore';

// Test edilecek araçları seçelim
const togg = vehicles.find(v => v.id === 'togg-t10x-long')!;
const tesla = vehicles.find(v => v.id === 'tesla-model-y-lr')!;
const lucid = vehicles.find(v => v.id === 'lucid-air-dream-r')!;
const cybertruck = vehicles.find(v => v.id === 'tesla-cybertruck-awd')!;

console.log('======================================================================');
console.log('            VOLTPULSE SDV - TELEMETRİ FİZİK ÇEKİRDEĞİ TESTİ           ');
console.log('======================================================================\n');

// SENARYO 1: 120 km/h Otoban Sürüşü (Düz Yol, Rüzgarsız)
console.log('--- SENARYO 1: 120 km/h Otoban Sürüşü (Düz Yol) ---');
const highwayCond: TelemetryConditions = { speed_kmh: 120, grade_percent: 0, headwind_kmh: 0 };

const toggHw = calculateRequiredPower(togg, highwayCond);
const teslaHw = calculateRequiredPower(tesla, highwayCond);

console.log(`[Togg T10X]   Cd: ${togg.cd}  | Faero: ${toggHw.f_aero_n.toFixed(1)} N | Batarya Gücü: ${toggHw.p_battery_kw.toFixed(2)} kW`);
console.log(`[Tesla Mod Y] Cd: ${tesla.cd}  | Faero: ${teslaHw.f_aero_n.toFixed(1)} N | Batarya Gücü: ${teslaHw.p_battery_kw.toFixed(2)} kW`);
const diffPercent = (((toggHw.p_battery_kw - teslaHw.p_battery_kw) / teslaHw.p_battery_kw) * 100).toFixed(1);
console.log(`-> Sonuç: Aerodinamik fark nedeniyle Togg otobanda Tesla'dan %${diffPercent} daha fazla güç çekiyor.\n`);

// SENARYO 2: %4 Eğimli Yokuş Tırmanışı (100 km/h)
console.log('--- SENARYO 2: %4 Eğimli Yokuş Tırmanışı (100 km/h) ---');
const hillCond: TelemetryConditions = { speed_kmh: 100, grade_percent: 4, headwind_kmh: 0 };
const toggHill = calculateRequiredPower(togg, hillCond);

console.log(`[Togg T10X] Toplam Direnç Kuvveti: ${toggHill.f_total_n.toFixed(1)} N`);
console.log(`  - Hava Sürtünmesi : ${toggHill.f_aero_n.toFixed(1)} N`);
console.log(`  - Yuvarlanma      : ${toggHill.f_roll_n.toFixed(1)} N`);
console.log(`  - Eğim (Yerçekimi): ${toggHill.f_gravity_n.toFixed(1)} N`);
console.log(`  => Bataryadan Çekilen Güç: ${toggHill.p_battery_kw.toFixed(2)} kW\n`);

// SENARYO 3: Ekstrem Aerodinamik Kıyaslama (130 km/h) - Lucid Air vs Cybertruck
console.log('--- SENARYO 3: Ekstrem Kıyaslama (130 km/h) [Lucid Air vs Cybertruck] ---');
const speedCond: TelemetryConditions = { speed_kmh: 130, grade_percent: 0, headwind_kmh: 0 };
const lucidRes = calculateRequiredPower(lucid, speedCond);
const cyberRes = calculateRequiredPower(cybertruck, speedCond);

console.log(`[Lucid Air]   Cd: ${lucid.cd}  | Faero: ${lucidRes.f_aero_n.toFixed(1)} N | Batarya: ${lucidRes.p_battery_kw.toFixed(2)} kW`);
console.log(`[Cybertruck]  Cd: ${cybertruck.cd}  | Faero: ${cyberRes.f_aero_n.toFixed(1)} N | Batarya: ${cyberRes.p_battery_kw.toFixed(2)} kW\n`);

// SENARYO 4: Yokuş Aşağı Rejeneratif Frenleme (-%5 Eğim, 80 km/h)
console.log('--- SENARYO 4: Rejeneratif Frenleme (-%5 Eğim, 80 km/h) ---');
const downhillCond: TelemetryConditions = { speed_kmh: 80, grade_percent: -5, headwind_kmh: 0 };
const toggDownhill = calculateRequiredPower(togg, downhillCond);

console.log(`[Togg T10X] Tekerlek Gücü: ${toggDownhill.p_wheel_kw.toFixed(2)} kW`);
console.log(`[Togg T10X] Bataryaya Geri Kazanılan Net Güç: ${toggDownhill.p_battery_kw.toFixed(2)} kW`);
console.log('======================================================================');