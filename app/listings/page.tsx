import { Suspense } from "react";
import ListingsGrid from "@/components/listings-grid";
import ListingsFilters from "@/components/listings-filters";
import ListingsSkeleton from "@/components/listings-skeleton";
import { Separator } from "@/components/ui/separator";
import { FiltersProvider } from "@/lib/filters-context";

export default function ListingsPage() {
  return (
    <FiltersProvider>
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Student Accommodations
            </h1>
            <p className="text-muted-foreground">
              Browse and filter through available student accommodations
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 h-fit lg:sticky lg:top-8">
              <div className="rounded-lg shadow-sm p-6 bg-gray-200">
                <ListingsFilters />
              </div>
            </aside>
            <main className="lg:col-span-3">
              <Suspense fallback={<ListingsSkeleton />}>
                <ListingsGrid />
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </FiltersProvider>
  );
}
