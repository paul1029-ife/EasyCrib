export interface PropertyType {
  id: string;
  title: string;
  description: string;
  price: number;
  paymentPeriod: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  distanceToUnilag: number;
  amenities: string[];
  images: string[];
  rating: number;
  furnished: boolean;
  owner: {
    id: string;
    name: string;
    phone: string;
    email: string;
  };
}
