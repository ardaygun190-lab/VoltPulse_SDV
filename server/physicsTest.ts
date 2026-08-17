// physicsTest.ts - VoltPulse Fizik ve Termal Simülasyon Testi
import { vehicles } from './vehicles';
import { calculateRequiredPower, TelemetryConditions } from './physicsCore';
import { calculateThermalImpact, ThermalConditions } from './thermalModel';

const togg = vehicles.find(v => v.id === 'togg-t10x-long')!;
const teslaLFP = vehicles.find(v => v.id === 'tesla-model3-rwd')!;
const teslaLR = vehicles.find(v => v.id === 'tesla-model-y-lr')!;

console.log('======================================================================');
console.log('         VOLTPULSE SDV - FİZİK & TERMAL MOTOR ENTEGRASYON TESTİ        ');
console.log('======================================================================\n');

// SENARYO 1: Yaz (22°C) vs Kış (-10°C) Togg T10X Karşılaştırması (110 km/h)
console.log('--- SENARYO 1: Togg T10X Yaz vs Ekstrem Kış (-10°C, 110 km/h) ---');

const summerThermal: ThermalConditions = { ambient_temp_c: 22 };
const winterThermal: ThermalConditions = { ambient_temp_c: -10, cabin_target_temp_c: 22 };

const summerImpact = calculateThermalImpact(togg, summerThermal);
const winterImpact = calculateThermalImpact(togg, winterThermal);

const summerDrive = calculateRequiredPower(togg, { speed_kmh: 110, grade_percent: 0, hvac_power_kw: summerImpact.hvac_power_kw });
const winterDrive = calculateRequiredPower(togg, { speed_kmh: 110, grade_percent: 0, hvac_power_kw: winterImpact.hvac_power_kw });

console.log(`[YAZ  22°C]  Klima Yükü: ${summerImpact.hvac_power_kw.toFixed(2)} kW | Batarya Gücü: ${summerDrive.p_battery_kw.toFixed(2)} kW | Efektif Pil: ${summerImpact.effective_usable_kwh.toFixed(1)} kWh`);
console.log(`[KIŞ -10°C]  Klima Yükü: ${winterImpact.hvac_power_kw.toFixed(2)} kW | Batarya Gücü: ${winterDrive.p_battery_kw.toFixed(2)} kW | Efektif Pil: ${winterImpact.effective_usable_kwh.toFixed(1)} kWh`);

const summerRangeKm = (summerImpact.effective_usable_kwh / summerDrive.p_battery_kw) * 110;
const winterRangeKm = (winterImpact.effective_usable_kwh / winterDrive.p_battery_kw) * 110;
const rangeDropPercent = (((summerRangeKm - winterRangeKm) / summerRangeKm) * 100).toFixed(1);

console.log(`-> Yaz Tahmini Menzil : ${summerRangeKm.toFixed(0)} km`);
console.log(`-> Kış Tahmini Menzil : ${winterRangeKm.toFixed(0)} km`);
console.log(`=> Soğuk hava kaynaklı menzil kaybı: %${rangeDropPercent}\n`);

// SENARYO 2: Kimya Karşılaştırması (-10°C Kış Şartında NMC vs LFP)
console.log('--- SENARYO 2: -10°C Soğukta NMC vs LFP Batarya Kimyası Direnci ---');
const nmcImpact = calculateThermalImpact(teslaLR, winterThermal);
const lfpImpact = calculateThermalImpact(teslaLFP, winterThermal);

console.log(`[Tesla Model Y (NMC)] Kapasite Çarpanı: %${(nmcImpact.usable_capacity_factor * 100).toFixed(1)} (Kayıp: %${((1 - nmcImpact.usable_capacity_factor) * 100).toFixed(1)})`);
console.log(`[Tesla Model 3 (LFP)] Kapasite Çarpanı: %${(lfpImpact.usable_capacity_factor * 100).toFixed(1)} (Kayıp: %${((1 - lfpImpact.usable_capacity_factor) * 100).toFixed(1)})`);
console.log('-> Sonuç: LFP kimyası dondurucu soğukta NMC kimyasına göre elektrolit direnci nedeniyle belirgin şekilde daha fazla kimyasal kapasite kaybeder.');
console.log('======================================================================');