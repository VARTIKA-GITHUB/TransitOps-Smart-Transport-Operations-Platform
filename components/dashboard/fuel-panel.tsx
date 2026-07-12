import { Fuel, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { fuelPanels } from "@/lib/dashboard-data"

export function FuelPanel() {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-sm">
      <CardHeader className="flex-row items-center gap-2 p-0 pb-4">
        <span className="flex size-8 items-center justify-center rounded-lg bg-success/10 text-success">
          <Fuel className="size-4" />
        </span>
        <CardTitle className="text-base">Fuel Expenses</CardTitle>
      </CardHeader>
      <div className="grid grid-cols-2 gap-3">
        {fuelPanels.map((f) => {
          const isUp = f.trend === "up"
          return (
            <div key={f.label} className="rounded-xl border border-border p-3">
              <p className="text-xs text-muted-foreground">{f.label}</p>
              <p className="mt-1 text-xl font-semibold tabular-nums">{f.value}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{f.sub}</span>
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 text-xs font-medium",
                    isUp ? "text-success" : "text-destructive",
                  )}
                >
                  {isUp ? (
                    <ArrowUpRight className="size-3" />
                  ) : (
                    <ArrowDownRight className="size-3" />
                  )}
                  {f.change}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
