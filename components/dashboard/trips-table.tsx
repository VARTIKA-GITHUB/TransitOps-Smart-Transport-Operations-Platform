import { MoreHorizontal } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { trips, type TripStatus } from "@/lib/dashboard-data"

const statusStyles: Record<TripStatus, string> = {
  Draft: "bg-secondary text-secondary-foreground",
  Dispatched: "bg-primary/10 text-primary",
  Completed: "bg-success/10 text-success",
  Cancelled: "bg-destructive/10 text-destructive",
}

export function TripsTable() {
  return (
    <Card className="overflow-hidden rounded-2xl border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">Recent Trips</CardTitle>
        <CardDescription>Latest dispatches across the fleet</CardDescription>
      </CardHeader>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Trip ID</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>ETA</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trips.map((trip) => (
              <TableRow key={trip.id} className="transition-colors hover:bg-secondary/60">
                <TableCell className="font-medium">{trip.id}</TableCell>
                <TableCell className="text-muted-foreground">{trip.source}</TableCell>
                <TableCell className="text-muted-foreground">{trip.destination}</TableCell>
                <TableCell>{trip.vehicle}</TableCell>
                <TableCell>{trip.driver}</TableCell>
                <TableCell className="text-muted-foreground">{trip.cargo}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                      statusStyles[trip.status],
                    )}
                  >
                    {trip.status}
                  </span>
                </TableCell>
                <TableCell className="tabular-nums text-muted-foreground">{trip.eta}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontal className="size-4" />
                    <span className="sr-only">Trip actions</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
