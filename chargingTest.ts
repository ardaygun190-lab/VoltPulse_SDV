// chargingTest.ts - Şarj Teşhisi ve Protokol Testleri
import { vehicles } from './vehicles';
import { runChargingDiagnostics, ChargerStation, ChargingPointTelemetry } from './server/chargingDiagnostics';

const togg = vehicles.find(v => v.id === 'togg-t10x-long')!;
const taycan = vehicles.find(v => v.id === 'porsche-taycan-plus')!;

// 300 kW Sıvı Soğutmalı Yüksek Hızlı Şarj İstasyonu (HPC)
const hpcCharger: ChargerStation = {
  id: 'trugo-hpc-300',
  name: 'Trugo 300kW Ultra Fast Charger',
  max_power_kw: 300,
  max_current_a: 500,
  voltage_range_v: [200, 1000],
  cooling_type: 'Liquid'
};

console.log('======================================================================');
console.log('         VOLTPULSE SDV - ŞARJ TEŞHİSİ VE ISO 15118 PROTOKOL TESTİ     ');
console.log('======================================================================\n');

// SENARYO 1: Normal Şarj Başlangıcı (%20 SoC) - 400V Togg vs 800V Taycan
console.log('--- SENARYO 1: 300 kW HPC İstasyonunda %20 SoC Şarj Gücü Karşılaştırması ---');
const normalTelemetry: ChargingPointTelemetry = {
  current_soc_percent: 20,
  pack_temp_c: 28,
  cp_pwm_duty_cycle: 50,
  insulation_resistance_kohm: 1200
};

const toggDiag = runChargingDiagnostics(togg, hpcCharger, normalTelemetry);
const taycanDiag = runChargingDiagnostics(taycan, hpcCharger, normalTelemetry);

console.log(`[Togg T10X - 400V]    Durum: ${toggDiag.active_phase} | Güç: ${toggDiag.actual_charge_power_kw} kW | Kısıtlayan: ${toggDiag.limiting_factor}`);
console.log(`[Taycan Plus - 800V]  Durum: ${taycanDiag.active_phase} | Güç: ${taycanDiag.actual_charge_power_kw} kW | Kısıtlayan: ${taycanDiag.limiting_factor}\n`);

// SENARYO 2: Batarya Doygunluğu (%88 SoC - CV Modu Kısılması)
console.log('--- SENARYO 2: Batarya Doygunluğu (%88 SoC - CV Modu) ---');
const highSocTelemetry: ChargingPointTelemetry = { ...normalTelemetry, current_soc_percent: 88 };
const toggHighSoc = runChargingDiagnostics(togg, hpcCharger, highSocTelemetry);

console.log(`[Togg T10X %88 SoC] Güç: ${toggHighSoc.actual_charge_power_kw} kW | Kısıtlayan: ${toggHighSoc.limiting_factor}`);
console.log('-> Sonuç: %80 üzeri SoC değerinde hücre sağlığını korumak için güç agresif şekilde kısılır.\n');

// SENARYO 3: Arıza Teşhisi (Düşük İzolasyon Direnci & Aşırı Sıcaklık)
console.log('--- SENARYO 3: Arıza & Güvenlik Kilidi Simülasyonu ---');
const faultyTelemetry: ChargingPointTelemetry = {
  current_soc_percent: 40,
  pack_temp_c: 58, // Aşırı sıcak (>55°C)
  cp_pwm_duty_cycle: 0, // CP Sinyali koptu
  insulation_resistance_kohm: 250 // İzolasyon kaçağı (<500 kOhm)
};
const faultDiag = runChargingDiagnostics(togg, hpcCharger, faultyTelemetry);

console.log(`Güvenli mi?: ${faultDiag.is_safe_to_charge ? 'EVET' : 'HAYIR'}`);
console.log(`Aktif Durum: ${faultDiag.active_phase}`);
console.log('Tespit Edilen Hatalar:');
faultDiag.fault_codes.forEach(code => console.log(`  ❌ ${code}`));
console.log('======================================================================');