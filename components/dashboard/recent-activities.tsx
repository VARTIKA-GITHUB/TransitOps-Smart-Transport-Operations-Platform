import {
  Truck,
  UserPlus,
  CircleCheck,
  Wrench,
  Fuel,
  Wallet,
  type LucideIcon,
} from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { activities, type ActivityType } from "@/lib/dashboard-data"

const typeMeta: Record<ActivityType, { icon: LucideIcon; tone: string }> = {
  trip: { icon: Truck, tone: "bg-primary/10 text-primary" },
  driver: { icon: UserPlus, tone: "bg-chart-4/10 text-chart-4" },
  complete: { icon: CircleCheck, tone: "bg-success/10 text-success" },
  maintenance: { icon: Wrench, tone: "bg-warning/10 text-warning" },
  fuel: { icon: Fuel, tone: "bg-success/10 text-success" },
  expense: { icon: Wallet, tone: "bg-destructive/10 text-destructive" },
}

export function RecentActivities() {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-sm">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-base">Recent Activities</CardTitle>
      </CardHeader>
      <ol className="relative space-y-5 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-1.5rem)] before:w-px before:bg-border">
        {activities.map((a) => {
          const meta = typeMeta[a.type]
          const Icon = meta.icon
          return (
            <li key={a.id} className="relative flex gap-3">
              <span
                className={cn(
                  "z-10 flex size-8 shrink-0 items-center justify-center rounded-full ring-4 ring-card",
                  meta.tone,
                )}
              >
                <Icon className="size-4" />
              </span>
              <div className="pt-0.5">
                <p className="text-sm">{a.text}</p>
                <p className="text-xs text-muted-foreground">{a.time}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Card>
  )
}
