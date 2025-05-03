import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, MapPin } from "lucide-react";
import { getFeaturedListings } from "@/lib/data";

export default function FeaturedListings() {
  // In a real app, this would fetch from an API or database
  const listings = getFeaturedListings();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {listings.map((listing) => (
        <Link key={listing.id} href={`/listings/${listing.id}`}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src={listing.images[0] || "/placeholder.svg"}
                alt={listing.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary">
                  ₦{listing.price}/{listing.paymentPeriod}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg line-clamp-1">
                {listing.title}
              </h3>
              <div className="flex items-center mt-1 text-muted-foreground text-sm">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span className="line-clamp-1">{listing.location}</span>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{listing.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{listing.bathrooms} Baths</span>
                </div>
                <div>
                  <span>{listing.propertyType}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-sm">
              <div className="text-muted-foreground">
                {listing.distanceToUniversity} to {listing.nearestUniversity}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
