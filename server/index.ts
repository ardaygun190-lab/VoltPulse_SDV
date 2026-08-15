// server/index.ts - VoltPulse SDV REST API Servisi
import express, { Request, Response } from 'express';
import cors from 'cors';
import { vehicles } from '../vehicles';
import { calculateRequiredPower, TelemetryConditions } from '../physicsCore';
import { calculateThermalImpact, ThermalConditions } from '../thermalModel';
import { runChargingDiagnostics, ChargerStation, ChargingPointTelemetry } from './chargingDiagnostics';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. Uç Nokta: Tüm araç listesini getir
app.get('/api/vehicles', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: vehicles.length,
    data: vehicles
  });
});

// 2. Uç Nokta: Tek bir aracın teknik verilerini getir
app.get('/api/vehicles/:id', (req: Request, res: Response) => {
  const vehicle = vehicles.find(v => v.id === req.params.id);
  if (!vehicle) {
    return res.status(404).json({ success: false, error: 'Araç bulunamadı.' });
  }
  return res.json({ success: true, data: vehicle });
});

// 3. Uç Nokta: Telemetri & Fizik Simülasyonu
interface SimulationRequest {
  vehicleId: string;
  speed_kmh: number;
  grade_percent?: number;
  ambient_temp_c?: number;
  headwind_kmh?: number;
  cabin_target_temp_c?: number;
}

app.post('/api/telemetry/simulate', (req: Request<{}, {}, SimulationRequest>, res: Response) => {
  const {
    vehicleId,
    speed_kmh,
    grade_percent = 0,
    ambient_temp_c = 20,
    headwind_kmh = 0,
    cabin_target_temp_c = 21
  } = req.body;

  const vehicle = vehicles.find(v => v.id === vehicleId);
  if (!vehicle) {
    return res.status(404).json({ success: false, error: 'Geçersiz vehicleId.' });
  }

  const thermalConditions: ThermalConditions = { ambient_temp_c, cabin_target_temp_c };
  const thermalResult = calculateThermalImpact(vehicle, thermalConditions);

  const telemetryConditions: TelemetryConditions = {
    speed_kmh,
    grade_percent,
    headwind_kmh,
    hvac_power_kw: thermalResult.hvac_power_kw
  };
  const powerResult = calculateRequiredPower(vehicle, telemetryConditions);

  let consumption_kwh_100km = 0;
  let estimated_range_km = 0;

  if (speed_kmh > 0 && powerResult.p_battery_kw > 0) {
    consumption_kwh_100km = (powerResult.p_battery_kw / speed_kmh) * 100;
    estimated_range_km = (thermalResult.effective_usable_kwh / powerResult.p_battery_kw) * speed_kmh;
  }

  return res.json({
    success: true,
    vehicle: {
      id: vehicle.id,
      make: vehicle.make,
      model: vehicle.model,
      cell_type: vehicle.cell_type
    },
    inputs: { speed_kmh, grade_percent, ambient_temp_c, headwind_kmh },
    thermal: thermalResult,
    physics: powerResult,
    metrics: {
      consumption_kwh_100km: Number(consumption_kwh_100km.toFixed(2)),
      estimated_range_km: Number(estimated_range_km.toFixed(1))
    }
  });
});

// 4. Uç Nokta: ISO 15118 Şarj Teşhisi ve Güvenlik Analizi
interface ChargeDiagnosticRequest {
  vehicleId: string;
  charger: ChargerStation;
  telemetry: ChargingPointTelemetry;
}

app.post('/api/charging/diagnose', (req: Request<{}, {}, ChargeDiagnosticRequest>, res: Response) => {
  const { vehicleId, charger, telemetry } = req.body;

  const vehicle = vehicles.find(v => v.id === vehicleId);
  if (!vehicle) {
    return res.status(404).json({ success: false, error: 'Geçersiz vehicleId.' });
  }

  const result = runChargingDiagnostics(vehicle, charger, telemetry);

  return res.json({
    success: true,
    vehicle: {
      id: vehicle.id,
      make: vehicle.make,
      model: vehicle.model,
      voltage_architecture: `${vehicle.battery.voltage_v}V`
    },
    charger: {
      id: charger.id,
      name: charger.name,
      max_power_kw: charger.max_power_kw
    },
    diagnostic: result
  });
});

app.listen(PORT, () => {
  console.log(`⚡ VoltPulse SDV API Sunucusu http://localhost:${PORT} üzerinde çalışıyor.`);
});