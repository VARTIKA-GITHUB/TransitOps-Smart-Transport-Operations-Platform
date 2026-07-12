"use client"

import { Search, Bell, MessageSquare, ChevronRight, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </Button>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1 text-xs text-muted-foreground"
            >
              <span>Home</span>
              <ChevronRight className="size-3" />
              <span className="text-foreground">Dashboard</span>
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search trips, drivers, vehicles..."
              className="h-10 w-56 rounded-xl bg-secondary pl-9 lg:w-72"
            />
          </div>

          <Button variant="outline" size="icon" className="relative rounded-xl">
            <Bell className="size-[18px]" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive ring-2 ring-background" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon" className="relative rounded-xl">
            <MessageSquare className="size-[18px]" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background" />
            <span className="sr-only">Messages</span>
          </Button>

          <Avatar className="size-10 border border-border">
            <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
              FM
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
