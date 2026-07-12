import { Sidebar } from "@/components/dashboard/sidebar"
import { Navbar } from "@/components/dashboard/navbar"
import { RightSidebar } from "@/components/dashboard/right-sidebar"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { ChartsSection } from "@/components/dashboard/charts-section"
import { TripsTable } from "@/components/dashboard/trips-table"
import { VehicleStatusPanel } from "@/components/dashboard/vehicle-status"
import { MaintenanceAlerts } from "@/components/dashboard/maintenance-alerts"
import { LicenseExpiry } from "@/components/dashboard/license-expiry"
import { FuelPanel } from "@/components/dashboard/fuel-panel"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { Footer } from "@/components/dashboard/footer"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />

        <div className="flex min-w-0 flex-1">
          <main className="min-w-0 flex-1 px-4 py-6 sm:px-6">
            <div className="mx-auto max-w-[1400px] space-y-6">
              <header>
                <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  Good Morning, Fleet Manager
                </h2>
                <p className="mt-1 text-muted-foreground text-pretty">
                  Today&apos;s fleet overview and operational insights.
                </p>
              </header>

              <KpiCards />
              <ChartsSection />
              <TripsTable />

              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <VehicleStatusPanel />
                <FuelPanel />
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <MaintenanceAlerts />
                <LicenseExpiry />
                <RecentActivities />
              </div>

              <QuickActions />
              <Footer />
            </div>
          </main>

          <aside className="hidden w-80 shrink-0 border-l border-border bg-background px-4 py-6 2xl:block">
            <RightSidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}
