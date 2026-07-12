"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Truck,
  UserRound,
  MapPin,
  Wrench,
  Fuel,
  Wallet,
  TrendingUp,
  Settings,
  LogOut,
  Boxes,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  icon: LucideIcon
}

const nav: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Vehicles", icon: Truck },
  { label: "Drivers", icon: UserRound },
  { label: "Trips", icon: MapPin },
  { label: "Maintenance", icon: Wrench },
  { label: "Fuel Logs", icon: Fuel },
  { label: "Expenses", icon: Wallet },
  { label: "Reports", icon: TrendingUp },
  { label: "Settings", icon: Settings },
]

export function Sidebar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="hidden lg:flex h-screen w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar sticky top-0">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
          <Boxes className="size-5" />
        </div>
        <div className="leading-tight">
          <p className="text-base font-semibold tracking-tight">TransitOps</p>
          <p className="text-xs text-muted-foreground">Smart Transport Ops</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {nav.map((item) => {
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={cn(
                "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <item.icon
                className={cn(
                  "size-[18px] transition-transform group-hover:scale-110",
                  isActive ? "text-primary" : "",
                )}
              />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-xl px-2 py-2">
          <Avatar className="size-9">
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
              FM
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-medium">Fleet Manager</p>
            <p className="truncate text-xs text-muted-foreground">ops@transitops.io</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="mt-1 w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
        >
          <LogOut className="size-[18px]" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
