import { Skeleton } from "@/components/ui/skeleton";

export default function HowItWorksLoading() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Skeleton className="h-16 w-16" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            <Skeleton className="h-64 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
