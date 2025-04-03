import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function ListingsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-40" />
      </div>

      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="sm:w-3/5 p-4 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

