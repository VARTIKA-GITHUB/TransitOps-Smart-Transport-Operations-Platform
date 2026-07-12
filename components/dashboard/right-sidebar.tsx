import {
  CloudSun,
  TrafficCone,
  HeartPulse,
  CalendarDays,
  MapPin,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { upcomingTrips } from "@/lib/dashboard-data"

function WeatherWidget() {
  return (
    <Card className="rounded-2xl border-border shadow-sm">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm text-muted-foreground">Mumbai HQ</p>
          <p className="mt-1 text-3xl font-semibold tracking-tight">31&deg;</p>
          <p className="text-sm text-muted-foreground">Partly Cloudy</p>
        </div>
        <div className="flex size-14 items-center justify-center rounded-2xl bg-warning/10 text-warning">
          <CloudSun className="size-7" />
        </div>
      </CardContent>
    </Card>
  )
}

function TrafficWidget() {
  return (
    <Card className="rounded-2xl border-border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <TrafficCone className="size-4 text-warning" />
          Traffic Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          { route: "Mumbai – Pune", level: "Moderate", pct: 55, tone: "bg-warning" },
          { route: "Delhi – Jaipur", level: "Clear", pct: 22, tone: "bg-success" },
          { route: "Chennai Ring Rd", level: "Heavy", pct: 84, tone: "bg-destructive" },
        ].map((t) => (
          <div key={t.route} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{t.route}</span>
              <span className="font-medium text-foreground">{t.level}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div className={`h-full rounded-full ${t.tone}`} style={{ width: `${t.pct}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function FleetHealthWidget() {
  return (
    <Card className="rounded-2xl border-border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <HeartPulse className="size-4 text-success" />
          Fleet Health
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-semibold">94%</span>
            <span className="text-xs text-success">Excellent</span>
          </div>
          <Progress value={94} className="mt-2 h-2" />
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="rounded-xl bg-secondary p-3">
            <p className="text-lg font-semibold">96</p>
            <p className="text-xs text-muted-foreground">Healthy</p>
          </div>
          <div className="rounded-xl bg-secondary p-3">
            <p className="text-lg font-semibold text-warning">12</p>
            <p className="text-xs text-muted-foreground">Needs Care</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function UpcomingTripsWidget() {
  return (
    <Card className="rounded-2xl border-border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="size-4 text-primary" />
          Upcoming Trips
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingTrips.map((t) => (
          <div key={t.id} className="flex items-start gap-3">
            <div className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{t.route}</p>
              <p className="text-xs text-muted-foreground">
                {t.id} &middot; {t.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function CalendarWidget() {
  const today = 12
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  const marked = [14, 16, 21, 24]
  return (
    <Card className="rounded-2xl border-border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <CalendarDays className="size-4 text-primary" />
          July 2026
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-muted-foreground">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i} className="py-1 font-medium">
              {d}
            </span>
          ))}
          {days.map((d) => {
            const isToday = d === today
            const isMarked = marked.includes(d)
            return (
              <span
                key={d}
                className={[
                  "flex aspect-square items-center justify-center rounded-lg text-xs transition-colors",
                  isToday
                    ? "bg-primary font-semibold text-primary-foreground"
                    : isMarked
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-foreground hover:bg-secondary",
                ].join(" ")}
              >
                {d}
              </span>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export function RightSidebar() {
  return (
    <div className="space-y-4">
      <WeatherWidget />
      <TrafficWidget />
      <FleetHealthWidget />
      <UpcomingTripsWidget />
      <CalendarWidget />
    </div>
  )
}
