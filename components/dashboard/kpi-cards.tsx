import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { kpis, type Kpi } from "@/lib/dashboard-data"

const toneStyles: Record<Kpi["tone"], string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  destructive: "bg-destructive/10 text-destructive",
  sky: "bg-chart-4/10 text-chart-4",
}

function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = kpi.icon
  const isUp = kpi.trend === "up"
  return (
    <Card className="group rounded-2xl border-border p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
            toneStyles[kpi.tone],
          )}
        >
          <Icon className="size-[22px]" />
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-2 py-1 text-xs font-medium",
            isUp ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
          )}
        >
          {isUp ? (
            <ArrowUpRight className="size-3" />
          ) : (
            <ArrowDownRight className="size-3" />
          )}
          {kpi.change}
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight tabular-nums">
        {kpi.value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{kpi.label}</p>
    </Card>
  )
}

export function KpiCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </section>
  )
}
