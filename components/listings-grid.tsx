import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, MapPin, Home } from "lucide-react";
import { getListings } from "@/lib/data";

export default function ListingsGrid() {
  // In a real app, this would fetch from an API or database with filters applied
  const listings = getListings();

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <p className="text-muted-foreground font-medium">
          {listings.length} properties found
        </p>
        <div className="w-full sm:w-auto">
          <select className="w-full sm:w-auto p-2 text-sm border rounded-md bg-background">
            <option>Sort: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Distance to University</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((listing) => (
          <Link
            key={listing.id}
            href={`/listings/${listing.id}`}
            className="block group h-full"
          >
            <Card className="overflow-hidden h-full border transition-all duration-300 group-hover:shadow-md">
              <div className="flex flex-col h-full">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={listing.images[0] || "/placeholder.svg"}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground font-medium py-1 px-3">
                      ₦{listing.price.toLocaleString()}/{listing.paymentPeriod}
                    </Badge>
                  </div>
                </div>
                <CardContent className="flex flex-col flex-grow p-5">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span className="line-clamp-1">{listing.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 mb-auto line-clamp-2">
                    {listing.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1.5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm">{listing.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1.5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm">
                          {listing.bathrooms} Baths
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Home className="h-4 w-4 mr-1.5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm line-clamp-1">
                          {listing.propertyType}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {listing.distanceToUniversity} to{" "}
                      {listing.nearestUniversity}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
