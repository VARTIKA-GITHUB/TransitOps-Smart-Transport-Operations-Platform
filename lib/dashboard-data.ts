import {
  Truck,
  CircleCheck,
  Wrench,
  Package,
  Users,
  Fuel,
  Wallet,
  Gauge,
  type LucideIcon,
} from "lucide-react"

export type Trend = "up" | "down"

export interface Kpi {
  id: string
  label: string
  value: string
  trend: Trend
  change: string
  icon: LucideIcon
  tone: "primary" | "success" | "warning" | "destructive" | "sky"
}

export const kpis: Kpi[] = [
  { id: "active-vehicles", label: "Active Vehicles", value: "128", trend: "up", change: "5%", icon: Truck, tone: "primary" },
  { id: "available-vehicles", label: "Available Vehicles", value: "96", trend: "up", change: "8%", icon: CircleCheck, tone: "success" },
  { id: "maintenance", label: "In Maintenance", value: "12", trend: "down", change: "3%", icon: Wrench, tone: "warning" },
  { id: "active-trips", label: "Active Trips", value: "54", trend: "up", change: "11%", icon: Package, tone: "sky" },
  { id: "drivers-on-duty", label: "Drivers On Duty", value: "82", trend: "up", change: "6%", icon: Users, tone: "primary" },
  { id: "fuel-cost", label: "Fuel Cost Today", value: "₹48,250", trend: "down", change: "2%", icon: Fuel, tone: "success" },
  { id: "operational-cost", label: "Operational Cost", value: "₹2.35M", trend: "up", change: "4%", icon: Wallet, tone: "destructive" },
  { id: "utilization", label: "Fleet Utilization", value: "92%", trend: "up", change: "7%", icon: Gauge, tone: "primary" },
]

export const vehicleUsage = [
  { day: "Mon", trips: 42, idle: 12 },
  { day: "Tue", trips: 51, idle: 9 },
  { day: "Wed", trips: 48, idle: 14 },
  { day: "Thu", trips: 63, idle: 8 },
  { day: "Fri", trips: 58, idle: 11 },
  { day: "Sat", trips: 39, idle: 18 },
  { day: "Sun", trips: 27, idle: 22 },
]

export const fuelTrend = [
  { date: "Wk 1", liters: 3200 },
  { date: "Wk 2", liters: 3650 },
  { date: "Wk 3", liters: 3410 },
  { date: "Wk 4", liters: 3980 },
  { date: "Wk 5", liters: 3720 },
  { date: "Wk 6", liters: 4210 },
]

export const vehicleStatusDist = [
  { name: "Available", value: 96, fill: "var(--color-chart-2)" },
  { name: "On Trip", value: 54, fill: "var(--color-chart-1)" },
  { name: "Maintenance", value: 12, fill: "var(--color-chart-3)" },
  { name: "Retired", value: 6, fill: "var(--color-chart-5)" },
]

export type TripStatus = "Draft" | "Dispatched" | "Completed" | "Cancelled"

export interface Trip {
  id: string
  source: string
  destination: string
  vehicle: string
  driver: string
  cargo: string
  status: TripStatus
  eta: string
}

export const trips: Trip[] = [
  { id: "TRP-1042", source: "Mumbai", destination: "Pune", vehicle: "Truck-12", driver: "Rajesh Kumar", cargo: "Electronics", status: "Dispatched", eta: "2h 15m" },
  { id: "TRP-1041", source: "Delhi", destination: "Jaipur", vehicle: "Container-03", driver: "Amit Sharma", cargo: "Textiles", status: "Completed", eta: "Delivered" },
  { id: "TRP-1040", source: "Bengaluru", destination: "Chennai", vehicle: "Van-08", driver: "Alex Fernandes", cargo: "Pharma", status: "Dispatched", eta: "4h 40m" },
  { id: "TRP-1039", source: "Ahmedabad", destination: "Surat", vehicle: "Mini Truck-15", driver: "Suresh Patel", cargo: "FMCG", status: "Draft", eta: "—" },
  { id: "TRP-1038", source: "Kolkata", destination: "Ranchi", vehicle: "Truck-21", driver: "Manoj Das", cargo: "Machinery", status: "Cancelled", eta: "—" },
  { id: "TRP-1037", source: "Hyderabad", destination: "Nagpur", vehicle: "Container-07", driver: "Vikram Reddy", cargo: "Auto Parts", status: "Completed", eta: "Delivered" },
]

export type VehicleState = "Available" | "On Trip" | "Maintenance"

export interface VehicleStatus {
  name: string
  type: string
  state: VehicleState
  load: number
}

export const vehicleStatus: VehicleStatus[] = [
  { name: "Truck-12", type: "Heavy Duty", state: "Available", load: 0 },
  { name: "Van-08", type: "Light Cargo", state: "On Trip", load: 78 },
  { name: "Mini Truck-15", type: "Compact", state: "Maintenance", load: 0 },
  { name: "Container-03", type: "Container", state: "Available", load: 0 },
]

export interface ServiceAlert {
  id: string
  service: string
  vehicle: string
  date: string
  severity: "high" | "medium" | "low"
}

export const serviceAlerts: ServiceAlert[] = [
  { id: "1", service: "Oil Change", vehicle: "Truck-12", date: "Jul 14, 2026", severity: "medium" },
  { id: "2", service: "Brake Inspection", vehicle: "Van-08", date: "Jul 16, 2026", severity: "high" },
  { id: "3", service: "Tyre Replacement", vehicle: "Container-03", date: "Jul 21, 2026", severity: "low" },
  { id: "4", service: "Battery Check", vehicle: "Mini Truck-15", date: "Jul 24, 2026", severity: "low" },
]

export interface LicenseRecord {
  driver: string
  license: string
  expiry: string
  daysLeft: number
}

export const licenseExpiry: LicenseRecord[] = [
  { driver: "Alex Fernandes", license: "DL-0420", expiry: "Jul 19, 2026", daysLeft: 7 },
  { driver: "Suresh Patel", license: "DL-1187", expiry: "Jul 28, 2026", daysLeft: 16 },
  { driver: "Manoj Das", license: "DL-0934", expiry: "Aug 09, 2026", daysLeft: 28 },
]

export const fuelPanels = [
  { label: "Today's Fuel", value: "₹48,250", sub: "1,240 L", trend: "down" as Trend, change: "2%" },
  { label: "Weekly Fuel", value: "₹3.1L", sub: "8,650 L", trend: "up" as Trend, change: "5%" },
  { label: "Monthly Fuel", value: "₹12.8L", sub: "34,200 L", trend: "up" as Trend, change: "9%" },
  { label: "Avg. Efficiency", value: "6.8 km/L", sub: "Fleet average", trend: "up" as Trend, change: "3%" },
]

export type ActivityType = "trip" | "driver" | "complete" | "maintenance" | "fuel" | "expense"

export interface Activity {
  id: string
  type: ActivityType
  text: string
  time: string
}

export const activities: Activity[] = [
  { id: "1", type: "trip", text: "Vehicle Van-08 dispatched to Chennai", time: "12 min ago" },
  { id: "2", type: "driver", text: "Driver Alex assigned to Trip #1040", time: "24 min ago" },
  { id: "3", type: "complete", text: "Trip #1041 completed successfully", time: "1h ago" },
  { id: "4", type: "maintenance", text: "Maintenance started on Mini Truck-15", time: "2h ago" },
  { id: "5", type: "fuel", text: "Fuel log added for Truck-12 (180 L)", time: "3h ago" },
  { id: "6", type: "expense", text: "Expense of ₹12,400 approved", time: "5h ago" },
]

export const upcomingTrips = [
  { id: "TRP-1045", route: "Mumbai → Nashik", time: "Today, 4:30 PM" },
  { id: "TRP-1046", route: "Delhi → Agra", time: "Today, 6:00 PM" },
  { id: "TRP-1047", route: "Chennai → Madurai", time: "Tomorrow, 8:15 AM" },
]
