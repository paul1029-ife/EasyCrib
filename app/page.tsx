import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FeaturedListings from "@/components/featured-listings";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px:6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Student Home in Nigeria
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover comfortable and affordable accommodation near top
                    Nigerian universities. No stress, no hassle.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/listings"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Browse Listings
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    How It Works
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md space-y-2 p-4 bg-background rounded-xl shadow-lg">
                  <div className="text-xl font-semibold">Quick Search</div>
                  <div className="space-y-3">
                    <div>
                      <Input
                        type="text"
                        placeholder="Enter university or location"
                        className="w-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Input
                          type="number"
                          placeholder="Min price"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Input
                          type="number"
                          placeholder="Max price"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <Button className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px:6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured Accommodations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our handpicked selection of student accommodations
                  near top universities.
                </p>
              </div>
            </div>
            <FeaturedListings />
            <div className="flex justify-center mt-8">
              <Link
                href="/listings"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View All Listings
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px:6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Finding your perfect student accommodation is easy with our
                  simple process.
                </p>
              </div>
            </div>
            <HowItWorks />
            <div className="flex justify-center mt-12">
              <Link
                href="/how-it-works"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More About How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
