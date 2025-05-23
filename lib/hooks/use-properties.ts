import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export type PropertyType =
  | "House"
  | "Apartment"
  | "Condo"
  | "Townhouse"
  | "Land";
export type PaymentPeriod = "month" | "year" | "semester";
export type FurnishingStatus =
  | "Furnished"
  | "Unfurnished"
  | "Partially Furnished";
export type InternetStatus = "Included" | "Available" | "Not Available";
export type ParkingStatus = "Available" | "Not Available" | "Street Parking";

export interface Property {
  id: number;
  name: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  propertyType: PropertyType;
  amenities: string[];
  imageUrl: string;
  // Additional fields
  paymentPeriod: PaymentPeriod;
  furnishing: FurnishingStatus;
  internet: InternetStatus;
  parking: ParkingStatus;
  billsIncluded: boolean;
  deposit: number;
  minimumStay: number;
  availableFrom: string;
  landlord: {
    name: string;
    phone: string;
    responseRate: number;
    responseTime: string;
  };
  nearbyFacilities: {
    name: string;
    distance: string;
    type: string;
  }[];
  distanceToUniversity: string;
  nearestUniversity: string;
}

export function useHouses() {
  return useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const { data } = await apiClient.get<Property[]>("/api/houses");
      return data;
    },
  });
}

export function useProperty(id: number) {
  return useQuery({
    queryKey: ["houses", id],
    queryFn: async () => {
      const { data } = await apiClient.get<Property>(`/api/houses/${id}`);
      return data;
    },
  });
}

// Create a new property
export function useCreateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newProperty: Property) => {
      const { data } = await apiClient.post<Property>(
        "/api/houses",
        newProperty
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["houses"] });
    },
  });
}

// Update a property
// NOTE: update and delete req aren't available on the backenc yet.
export function useUpdateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...property }: Property) => {
      const { data } = await apiClient.put<Property>(
        `/api/houses/${id}`,
        property
      );
      return data;
    },
    onSuccess: (data) => {
      // Update both the list and the individual property
      queryClient.invalidateQueries({ queryKey: ["houses"] });
      queryClient.invalidateQueries({ queryKey: ["houses", data.id] });
    },
  });
}

// Delete a property
export function useDeleteProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await apiClient.delete(`/api/houses/${id}`);
    },
    onSuccess: (_, id) => {
      // Remove from both the list and individual property cache
      queryClient.invalidateQueries({ queryKey: ["houses"] });
      queryClient.removeQueries({ queryKey: ["houses", id] });
    },
  });
}
