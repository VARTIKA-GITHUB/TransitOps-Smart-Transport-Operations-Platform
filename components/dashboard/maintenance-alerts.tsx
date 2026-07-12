import { Wrench } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { serviceAlerts } from "@/lib/dashboard-data"

const severityStyles = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-warning/10 text-warning",
  low: "bg-success/10 text-success",
}

export function MaintenanceAlerts() {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-base">Upcoming Services</CardTitle>
      </CardHeader>
      <ul className="space-y-3">
        {serviceAlerts.map((s) => (
          <li key={s.id} className="flex items-center gap-3">
            <div
              className={cn(
                "flex size-9 items-center justify-center rounded-xl",
                severityStyles[s.severity],
              )}
            >
              <Wrench className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{s.service}</p>
              <p className="truncate text-xs text-muted-foreground">{s.vehicle}</p>
            </div>
            <span className="shrink-0 text-xs font-medium text-muted-foreground">{s.date}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
