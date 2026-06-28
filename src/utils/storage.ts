const VEHICLE_KEY = 'vehicleProfile';
const FUEL_KEY = 'fuelEntries';

export interface VehicleProfile {
  make: string;
  model: string;
  year?: number;
  mileage?: number;
}

export interface FuelEntry {
  odometer: number;
  liters: number;
  date: string; // ISO string
}

export function getVehicleProfile(): VehicleProfile | null {
  const data = localStorage.getItem(VEHICLE_KEY);
  return data ? JSON.parse(data) : null;
}
export function setVehicleProfile(profile: VehicleProfile): void {
  localStorage.setItem(VEHICLE_KEY, JSON.stringify(profile));
}

export function getFuelEntries(): FuelEntry[] {
  const data = localStorage.getItem(FUEL_KEY);
  return data ? JSON.parse(data) : [];
}
export function addFuelEntry(entry: FuelEntry): void {
  const entries = getFuelEntries();
  entries.push(entry);
  // Keep chronological order
  entries.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  localStorage.setItem(FUEL_KEY, JSON.stringify(entries));
}
