import { Truck, UserRound, MapPin, Fuel, Wrench, Wallet, type LucideIcon } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

interface Action {
  label: string
  icon: LucideIcon
}

const actions: Action[] = [
  { label: "Add Vehicle", icon: Truck },
  { label: "Add Driver", icon: UserRound },
  { label: "Create Trip", icon: MapPin },
  { label: "Fuel Entry", icon: Fuel },
  { label: "Maintenance", icon: Wrench },
  { label: "Expense", icon: Wallet },
]

export function QuickActions() {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-base">Quick Actions</CardTitle>
      </CardHeader>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {actions.map((a) => (
          <button
            key={a.label}
            className="group flex flex-col items-center gap-2 rounded-xl border border-border p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/50 hover:shadow-sm"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <a.icon className="size-5" />
            </span>
            <span className="text-xs font-medium">{a.label}</span>
          </button>
        ))}
      </div>
    </Card>
  )
}
