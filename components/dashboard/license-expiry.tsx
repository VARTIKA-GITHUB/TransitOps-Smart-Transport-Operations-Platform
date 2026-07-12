import { AlertTriangle } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { licenseExpiry } from "@/lib/dashboard-data"

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
}

export function LicenseExpiry() {
  return (
    <Card className="rounded-2xl border-border p-5 shadow-sm">
      <CardHeader className="flex-row items-center justify-between p-0 pb-4">
        <CardTitle className="text-base">License Expiry</CardTitle>
        <span className="flex size-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
          <AlertTriangle className="size-4" />
        </span>
      </CardHeader>
      <ul className="space-y-3">
        {licenseExpiry.map((l) => {
          const urgent = l.daysLeft <= 10
          return (
            <li key={l.license} className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className="bg-secondary text-xs font-semibold text-foreground">
                  {initials(l.driver)}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{l.driver}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {l.license} &middot; {l.expiry}
                </p>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium",
                  urgent ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning",
                )}
              >
                {l.daysLeft}d left
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
