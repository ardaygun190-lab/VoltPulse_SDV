// chargingDiagnostics.ts - VoltPulse Şarj Teşhisi & ISO 15118 Protokol Motoru
import { Vehicle } from '../types';

// ISO 15118 Standart Durum Fazları (Handshake)
export type ProtocolPhase = 
  | 'SECC_DISCOVERY'            // Şarj kontrolcüsü arama
  | 'SESSION_SETUP'             // Oturum başlatma
  | 'AUTHENTICATION'            // Yetkilendirme / Plug & Charge sertifikası
  | 'PARAMETER_DISCOVERY'       // Voltaj, akım ve güç limitleri takası
  | 'CABLE_CHECK'               // İzolasyon testi ve kilit kontrolü
  | 'POWER_DELIVERY'            // Aktif DC şarj fazı
  | 'SESSION_STOP';             // Güvenli şarj sonlandırma

export interface ChargerStation {
  id: string;
  name: string;
  max_power_kw: number;         // İstasyon tepe gücü (Örn: 300 kW HPC)
  max_current_a: number;        // Maksimum kablo akımı (Örn: 500 A)
  voltage_range_v: [number, number]; // Desteklenen voltaj aralığı (Örn: [200, 1000])
  cooling_type: 'Liquid' | 'Air';    // Sıvı soğutmalı veya hava soğutmalı kablo
}

export interface ChargingPointTelemetry {
  current_soc_percent: number;  // Anlık batarya doluluk oranı (%)
  pack_temp_c: number;          // Anlık batarya sıcaklığı (°C)
  cp_pwm_duty_cycle: number;    // Control Pilot (CP) sinyali duty cycle (%5 - %100)
  insulation_resistance_kohm: number; // İzolasyon direnci (Standard minimum: 500 kOhm)
}

export interface DiagnosticResult {
  is_safe_to_charge: boolean;
  active_phase: ProtocolPhase;
  actual_charge_power_kw: number;
  limiting_factor: 'VEHICLE_BMS' | 'CHARGER_LIMIT' | 'THERMAL_THROTTLING' | 'CABLE_AMPERAGE' | 'NONE';
  fault_codes: string[];
}

/**
 * ISO 15118 Güvenlik ve İletişim Kontrolleri (Diagnostic & Fault Detection)
 */
export function runChargingDiagnostics(
  vehicle: Vehicle,
  charger: ChargerStation,
  telemetry: ChargingPointTelemetry
): DiagnosticResult {
  const faultCodes: string[] = [];

  // 1. İzolasyon Direnci Kontrolü (Safety Check)
  if (telemetry.insulation_resistance_kohm < 500) {
    faultCodes.push('ERR_INSULATION_FAULT: İzolasyon direnci 500 kOhm altında!');
  }

  // 2. Control Pilot (CP) Sinyal Bütünlüğü
  if (telemetry.cp_pwm_duty_cycle <= 0 || telemetry.cp_pwm_duty_cycle > 100) {
    faultCodes.push('ERR_CP_SIGNAL_LOSS: Control Pilot PWM haberleşme sinyali kesildi.');
  }

  // 3. Batarya Aşırı Sıcaklık Koruması (Thermal Runaway Risk)
  if (telemetry.pack_temp_c >= 55) {
    faultCodes.push('ERR_THERMAL_CRITICAL: Batarya sıcaklığı kritik limitin (55°C) üstünde.');
  }

  // 4. Voltaj Uyumluluk Kontrolü
  const [minV, maxV] = charger.voltage_range_v;
  if (vehicle.battery.voltage_v < minV || vehicle.battery.voltage_v > maxV) {
    faultCodes.push(`ERR_VOLTAGE_MISMATCH: İstasyon voltaj aralığı (${minV}-${maxV}V) araç mimarisiyle (${vehicle.battery.voltage_v}V) uyumsuz.`);
  }

  // Eğer kritik hata varsa şarjı başlatma
  if (faultCodes.length > 0) {
    return {
      is_safe_to_charge: false,
      active_phase: 'SESSION_STOP',
      actual_charge_power_kw: 0,
      limiting_factor: 'NONE',
      fault_codes: faultCodes
    };
  }

  // --- DC Şarj Gücü Hesaplama (CC/CV & Sınırlandırma Algoritması) ---
  let targetPowerKw = vehicle.battery.max_dc_charge_kw;
  let limitingFactor: DiagnosticResult['limiting_factor'] = 'VEHICLE_BMS';

  // İstasyon tepe gücü kısıtlaması
  if (charger.max_power_kw < targetPowerKw) {
    targetPowerKw = charger.max_power_kw;
    limitingFactor = 'CHARGER_LIMIT';
  }

  // Kablo akım kısıtlaması: P = (V * I) / 1000
  const maxCablePowerKw = (vehicle.battery.voltage_v * charger.max_current_a) / 1000;
  if (maxCablePowerKw < targetPowerKw) {
    targetPowerKw = maxCablePowerKw;
    limitingFactor = 'CABLE_AMPERAGE';
  }

  // Batarya Doluluk Oranına (SoC) Göre DC Şarj Eğrisi (CC/CV Kısılması)
  const soc = telemetry.current_soc_percent;
  if (soc > 80) {
    // 80-100% arası sert voltaj doygunluk düşüşü (CV Modu)
    const factor = Math.max(0.15, 1.0 - ((soc - 80) / 20) * 0.75);
    targetPowerKw *= factor;
    limitingFactor = 'VEHICLE_BMS';
  } else if (soc > 60) {
    // 60-80% arası kademeli akım düşüşü
    const factor = 1.0 - ((soc - 60) / 20) * 0.25;
    targetPowerKw *= factor;
  }

  // Batarya Sıcaklığına Göre Kısılma (Thermal Throttling: 45°C - 55°C arası)
  if (telemetry.pack_temp_c > 45) {
    const thermalDerating = 1.0 - ((telemetry.pack_temp_c - 45) / 10) * 0.50;
    targetPowerKw *= thermalDerating;
    limitingFactor = 'THERMAL_THROTTLING';
  }

  return {
    is_safe_to_charge: true,
    active_phase: 'POWER_DELIVERY',
    actual_charge_power_kw: Number(targetPowerKw.toFixed(1)),
    limiting_factor: limitingFactor,
    fault_codes: []
  };
}