import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  BatteryCharging, 
  ShieldCheck, 
  AlertTriangle, 
  Gauge, 
  Leaf, 
  CheckCircle2, 
  XCircle 
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

  // --- 800V & ULTRA HIZLI ŞARJ MODELLERİ ---
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
    id: 'kia-ev9-awd',
    make: 'Kia',
    model: 'EV9 GT-Line 7-Seater (800V)',
    cell_type: 'NMC',
    mass_kg: 2560,
    drag_coefficient: 0.28,
    frontal_area_m2: 3.10,
    rolling_resistance_coeff: 0.0115,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 99.8, usable_capacity_kwh: 95.2, voltage_v: 800, max_dc_charge_kw: 210 }
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

  // --- BLADE & LFP KİMYALI MODELLER ---
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
    id: 'byd-dolphin',
    make: 'BYD',
    model: 'Dolphin Comfort (Blade LFP)',
    cell_type: 'LFP',
    mass_kg: 1658,
    drag_coefficient: 0.31,
    frontal_area_m2: 2.38,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.91,
    battery: { total_capacity_kwh: 60.4, usable_capacity_kwh: 60.4, voltage_v: 400, max_dc_charge_kw: 88 }
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

  // --- AVRUPA PREMİUM & KOMPAKT MODELLER ---
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
    id: 'bmw-ix-xdrive50',
    make: 'BMW',
    model: 'iX xDrive50 Flagship SUV',
    cell_type: 'NMC',
    mass_kg: 2510,
    drag_coefficient: 0.25,
    frontal_area_m2: 2.82,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.92,
    battery: { total_capacity_kwh: 111.5, usable_capacity_kwh: 105.2, voltage_v: 400, max_dc_charge_kw: 195 }
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
  },
  {
    id: 'renault-zoe-ze50',
    make: 'Renault',
    model: 'Zoe E-Tech R135 ZE50',
    cell_type: 'NMC',
    mass_kg: 1502,
    drag_coefficient: 0.31,
    frontal_area_m2: 2.35,
    rolling_resistance_coeff: 0.011,
    drivetrain_efficiency: 0.89,
    battery: { total_capacity_kwh: 54.7, usable_capacity_kwh: 52.0, voltage_v: 400, max_dc_charge_kw: 50 }
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'charging' | 'passport'>('telemetry');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('togg-t10x-long');
  const [loading, setLoading] = useState<boolean>(false);

  // Telemetri Parametreleri
  const [speed, setSpeed] = useState<number>(110);
  const [ambientTemp, setAmbientTemp] = useState<number>(20);
  const [grade, setGrade] = useState<number>(0);
  const [telemetryResult, setTelemetryResult] = useState<any>(null);

  // Şarj Teşhisi Parametreleri
  const [soc, setSoc] = useState<number>(30);
  const [packTemp, setPackTemp] = useState<number>(32);
  const [insulationRes, setInsulationRes] = useState<number>(1200);
  const [chargingResult, setChargingResult] = useState<any>(null);

  // Batarya Pasaportu Parametreleri
  const [ageYears, setAgeYears] = useState<number>(4);
  const [cycles, setCycles] = useState<number>(350);
  const [fastChargeRatio, setFastChargeRatio] = useState<number>(0.3);
  const [passportResult, setPassportResult] = useState<any>(null);

  const selectedVehicle = VEHICLES.find(v => v.id === selectedVehicleId) || VEHICLES[0];

  // Fizik Motoru Hesaplama
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

  // Şarj Teşhisi Hesaplama
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

  // Batarya Pasaportu Hesaplama
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
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-10 font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">VoltPulse SDV</h1>
            <p className="text-xs text-slate-400">Software-Defined Vehicle Diagnostic & Telemetry Suite</p>
          </div>
        </div>

        {/* Araç Seçici */}
        <div className="w-full md:w-auto flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 rounded-xl">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-2 whitespace-nowrap">Model:</span>
          <select 
            value={selectedVehicleId} 
            onChange={(e) => setSelectedVehicleId(e.target.value)}
            className="w-full md:w-auto bg-slate-800 text-white font-medium text-sm rounded-lg px-3 py-1.5 outline-none border border-slate-700 focus:border-emerald-500 cursor-pointer"
          >
            {VEHICLES.map(v => (
              <option key={v.id} value={v.id}>
                {v.make} {v.model} ({v.cell_type} - {v.battery.voltage_v}V)
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Navigasyon Tab Bar */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-2 border-b border-slate-800/80 pb-4">
        <button
          onClick={() => setActiveTab('telemetry')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'telemetry' 
              ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Activity className="w-4 h-4" /> Telemetri & Fizik Motoru
        </button>
        <button
          onClick={() => setActiveTab('charging')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'charging' 
              ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <BatteryCharging className="w-4 h-4" /> ISO 15118 Şarj Teşhisi
        </button>
        <button
          onClick={() => setActiveTab('passport')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'passport' 
              ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <ShieldCheck className="w-4 h-4" /> Dijital Batarya Pasaportu
        </button>
      </div>

      {/* Ana Ekran */}
      <main className="max-w-7xl mx-auto mt-8">
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