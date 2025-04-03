"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Bath,
  Bed,
  Building,
  Check,
  Clock,
  MapPin,
  School,
  Shield,
} from "lucide-react";
import { getListingById } from "@/lib/data";
import SimilarListings from "@/components/similar-listings";
import { useParams } from "next/navigation";

export default function ListingDetailPage() {
  const params = useParams<{ id: string }>();
  const listing = getListingById(params.id || "1");

  if (!listing) {
    return (
      <div className="container px-4 md:px-6 py-8 md:py-12 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold">Listing not found</h1>
        <p className="text-muted-foreground mb-4">
          The listing you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/listings">
          <Button>Back to listings</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <Link
        href="/listings"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {listing.title}
            </h1>
            <div className="flex items-center mt-2 space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{listing.location}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                {listing.distanceToUniversity} to {listing.nearestUniversity}
              </span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg relative">
            <Image
              src={listing.images[0] || "/placeholder.svg"}
              alt={listing.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {listing.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg relative"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${listing.title} - image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {listing.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <h2 className="text-xl font-semibold">
                About this accommodation
              </h2>
              <p>{listing.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Bed className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">
                    {listing.bedrooms} Bedrooms
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Bath className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">
                    {listing.bathrooms} Bathrooms
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Building className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">
                    {listing.propertyType}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Clock className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">
                    Available {listing.availableFrom}
                  </span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="amenities" className="space-y-4 pt-4">
              <h2 className="text-xl font-semibold">Amenities and Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold mt-6">Security Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {listing.security.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="location" className="space-y-4 pt-4">
              <h2 className="text-xl font-semibold">Location</h2>
              <p>{listing.locationDescription}</p>

              <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center mt-4">
                <div className="text-center p-4">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Map view would be displayed here
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-6">Nearby</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <School className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">{listing.nearestUniversity}</p>
                    <p className="text-sm text-muted-foreground">
                      {listing.distanceToUniversity} away
                    </p>
                  </div>
                </div>
                {listing.nearbyFacilities.map((facility, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">{facility.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {facility.distance} away
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">₦{listing.price}</div>
                  <div className="text-muted-foreground">
                    per {listing.paymentPeriod}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium">Availability</h3>
                  <p className="text-sm">
                    Available from {listing.availableFrom}
                  </p>
                  <p className="text-sm">Minimum stay: {listing.minimumStay}</p>
                </div>

                <Button className="w-full">Contact Landlord</Button>
                <Button variant="outline" className="w-full">
                  Save to Favorites
                </Button>

                <div className="text-sm text-muted-foreground">
                  <p>Listed by {listing.landlord}</p>
                  <p>Response rate: {listing.responseRate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-2">Key Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Deposit</span>
                  <span className="font-medium">₦{listing.deposit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bills included</span>
                  <span className="font-medium">
                    {listing.billsIncluded ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Internet</span>
                  <span className="font-medium">{listing.internet}</span>
                </div>
                <div className="flex justify-between">
                  <span>Furnishing</span>
                  <span className="font-medium">{listing.furnishing}</span>
                </div>
                <div className="flex justify-between">
                  <span>Parking</span>
                  <span className="font-medium">{listing.parking}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
        <SimilarListings currentId={params.id} />
      </div>
    </div>
  );
}
