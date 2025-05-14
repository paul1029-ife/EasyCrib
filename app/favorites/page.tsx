"use client";
import { useUser } from "@clerk/nextjs";
import { useFavorites } from "@/context/use-favorites";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/hooks/use-properties";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, MapPin, Calendar, Wifi, Car, BookOpen } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default function FavoritesPage() {
  const { user, isLoaded: userLoaded } = useUser();
  const { favorites, removeFavorite } = useFavorites();

  // Handle loading state
  if (!userLoaded) {
    return <FavoritesLoadingState />;
  }

  // Handle user not signed in
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="p-8 bg-gray-50 rounded-lg text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sign in Required</h2>
          <p className="text-gray-600 mb-6">
            Please sign in to view and manage your favorite properties.
          </p>
          <Link href="/sign-in">
            <Button size="lg">Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Handle empty favorites
  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
        <p className="text-gray-600 mb-6">
          You have no favorite properties yet.
        </p>
      </div>
    );
  }

  // Format price per payment period
  const formatPrice = (price: number, period: string) => {
    return (
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(price) + `/${period}`
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Your Favorites</h1>
        <p className="text-gray-600 mt-2">
          You have {favorites.length} favorite{" "}
          {favorites.length === 1 ? "property" : "properties"}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((property: Property) => (
          <Card
            key={property.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Property Image */}
            <div className="relative h-48 w-full bg-gray-200">
              {property.imageUrl ? (
                <img
                  src={property.imageUrl}
                  alt={property.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full w-full bg-gray-200">
                  <p className="text-gray-500">No image available</p>
                </div>
              )}
              <Badge className="absolute top-2 right-2">
                {property.propertyType}
              </Badge>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{property.name}</CardTitle>
                <div className="text-xl font-bold text-primary">
                  {formatPrice(property.price, property.paymentPeriod)}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Property Features */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1 text-gray-500" />
                  <span>
                    {property.bedrooms}{" "}
                    {property.bedrooms === 1 ? "Bed" : "Beds"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1 text-gray-500" />
                  <span>
                    {property.bathrooms}{" "}
                    {property.bathrooms === 1 ? "Bath" : "Baths"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                  <span>Min. {property.minimumStay} months</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2">
                {property.furnishing && (
                  <Badge variant="outline" className="text-xs">
                    {property.furnishing}
                  </Badge>
                )}
                {property.internet && (
                  <Badge variant="outline" className="text-xs">
                    <Wifi className="w-3 h-3 mr-1" />
                    {property.internet}
                  </Badge>
                )}
                {property.parking && (
                  <Badge variant="outline" className="text-xs">
                    <Car className="w-3 h-3 mr-1" />
                    {property.parking}
                  </Badge>
                )}
                {property.billsIncluded && (
                  <Badge variant="outline" className="text-xs">
                    Bills Included
                  </Badge>
                )}
              </div>

              {/* University Distance */}
              {property.nearestUniversity && (
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>
                    {property.distanceToUniversity} to{" "}
                    {property.nearestUniversity}
                  </span>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => removeFavorite(property)}
              >
                Remove from Favorites
              </Button>
              <Link href={`/listings/${property.id}`} className="flex-1">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Loading state component
function FavoritesLoadingState() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
