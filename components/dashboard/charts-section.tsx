"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { vehicleUsage, fuelTrend, vehicleStatusDist } from "@/lib/dashboard-data"

const usageConfig = {
  trips: { label: "Trips", color: "var(--color-chart-1)" },
  idle: { label: "Idle", color: "var(--color-chart-3)" },
} satisfies ChartConfig

const fuelConfig = {
  liters: { label: "Liters", color: "var(--color-chart-2)" },
} satisfies ChartConfig

const statusConfig = {
  Available: { label: "Available", color: "var(--color-chart-2)" },
  "On Trip": { label: "On Trip", color: "var(--color-chart-1)" },
  Maintenance: { label: "Maintenance", color: "var(--color-chart-3)" },
  Retired: { label: "Retired", color: "var(--color-chart-5)" },
} satisfies ChartConfig

export function ChartsSection() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="rounded-2xl border-border shadow-sm lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-base">Vehicle Usage</CardTitle>
          <CardDescription>Trips vs idle time over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={usageConfig} className="h-[280px] w-full">
            <BarChart data={vehicleUsage} barGap={4}>
              <CartesianGrid vertical={false} strokeDasharray="4 4" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="trips" fill="var(--color-trips)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="idle" fill="var(--color-idle)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Fuel Consumption</CardTitle>
          <CardDescription>Trend over the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={fuelConfig} className="h-[280px] w-full">
            <LineChart data={fuelTrend} margin={{ left: 4, right: 8, top: 8 }}>
              <CartesianGrid vertical={false} strokeDasharray="4 4" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="liters"
                type="monotone"
                stroke="var(--color-liters)"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "var(--color-liters)" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-border shadow-sm lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-base">Vehicle Status Distribution</CardTitle>
          <CardDescription>Current breakdown across the fleet</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:justify-around">
          <ChartContainer config={statusConfig} className="h-[240px] w-full max-w-[280px]">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
              <Pie
                data={vehicleStatusDist}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={90}
                paddingAngle={3}
                strokeWidth={2}
              >
                {vehicleStatusDist.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            {vehicleStatusDist.map((s) => (
              <div key={s.name} className="flex items-center gap-3 rounded-xl border border-border p-3">
                <span className="size-3 rounded-full" style={{ backgroundColor: s.fill }} />
                <div>
                  <p className="text-lg font-semibold leading-none tabular-nums">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.name}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
