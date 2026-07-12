import { Truck } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { vehicleStatus, type VehicleState } from "@/lib/dashboard-data"

const stateStyles: Record<VehicleState, { badge: string; dot: string }> = {
  Available: { badge: "bg-success/10 text-success", dot: "bg-success" },
  "On Trip": { badge: "bg-primary/10 text-primary", dot: "bg-primary" },
  Maintenance: { badge: "bg-warning/10 text-warning", dot: "bg-warning" },
}

export function VehicleStatusPanel() {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-base">Vehicle Status</CardTitle>
      </CardHeader>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {vehicleStatus.map((v) => {
          const styles = stateStyles[v.state]
          return (
            <div
              key={v.name}
              className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:bg-secondary/60"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                <Truck className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{v.name}</p>
                <p className="truncate text-xs text-muted-foreground">{v.type}</p>
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                  styles.badge,
                )}
              >
                <span className={cn("size-1.5 rounded-full", styles.dot)} />
                {v.state}
              </span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
