export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  paymentPeriod: string;
  location: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  nearestUniversity: string;
  distanceToUniversity: string;
  availableFrom: string;
  minimumStay: string;
  deposit: number;
  billsIncluded: boolean;
  internet: string;
  furnishing: string;
  parking: string;
  amenities: string[];
  security: string[];
  tags: string[];
  landlord: string;
  responseRate: string;
  locationDescription: string;
  nearbyFacilities: Array<{
    name: string;
    distance: string;
  }>;
};

// Mock data
const mockListings: Listing[] = [
  {
    id: "1",
    title: "Modern Studio Apartment Near Campus",
    description:
      "This bright and modern studio apartment is perfect for students. Located just a short walk from campus, it offers convenience and comfort with all the amenities you need for a great student life.",
    price: 250000,
    paymentPeriod: "year",
    location: "23 University Road, Akoka, Lagos",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Self-Contain",
    nearestUniversity: "University of Lagos",
    distanceToUniversity: "5 min walk",
    availableFrom: "September 1, 2023",
    minimumStay: "1 year",
    deposit: 250000,
    billsIncluded: false,
    internet: "Available (subscription required)",
    furnishing: "Partially furnished",
    parking: "Compound parking available",
    amenities: [
      "Water supply",
      "Partially furnished",
      "Prepaid meter",
      "Study desk",
      "Kitchenette",
      "Ceiling fan",
      "Wardrobe",
    ],
    security: [
      "Gated compound",
      "Security guard",
      "Burglary proof",
      "On-site caretaker",
    ],
    tags: ["Self-Contain", "Near Campus", "Prepaid Meter", "Furnished"],
    landlord: "Lagos Student Housing",
    responseRate: "95% within 24 hours",
    locationDescription:
      "Located in Akoka, this apartment is ideally situated for UNILAG students. It's just a 5-minute walk to the University of Lagos campus and close to restaurants, cafes, and shops.",
    nearbyFacilities: [
      {
        name: "Unilag Main Gate",
        distance: "7 min walk",
      },
      {
        name: "Jaja Hall",
        distance: "10 min walk",
      },
      {
        name: "Shoprite Yaba",
        distance: "15 min drive",
      },
    ],
  },
  {
    id: "2",
    title: "Spacious 2-Bedroom Flat with Generator",
    description:
      "Share this spacious 2-bedroom flat with a roommate. Features a large living area, kitchen, and reliable generator. Perfect for students who want more space and comfort.",
    price: 600000,
    paymentPeriod: "year",
    location: "15 Moremi Street, Yaba, Lagos",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "Flat",
    nearestUniversity: "University of Lagos",
    distanceToUniversity: "15 min walk",
    availableFrom: "August 15, 2023",
    minimumStay: "1 year",
    deposit: 600000,
    billsIncluded: false,
    internet: "Fiber optic available",
    furnishing: "Partially furnished",
    parking: "Compound parking available",
    amenities: [
      "Generator (12 hours daily)",
      "Water tank",
      "Prepaid electricity meter",
      "Large wardrobes",
      "Tiled floors",
      "Ceiling fans",
      "Balcony",
    ],
    security: [
      "Gated compound",
      "Security personnel",
      "Burglary proof windows",
      "Solid doors with good locks",
    ],
    tags: ["2 Bedroom", "Generator", "Prepaid Meter", "Water Tank"],
    landlord: "Yaba Rentals",
    responseRate: "90% within 12 hours",
    locationDescription:
      "This flat is located in a quiet residential area in Yaba, yet still close to campus. The neighborhood is safe and popular with students and young professionals.",
    nearbyFacilities: [
      {
        name: "Yaba Market",
        distance: "10 min walk",
      },
      {
        name: "UNILAG Sports Center",
        distance: "20 min walk",
      },
      {
        name: "Domino's Pizza",
        distance: "5 min walk",
      },
    ],
  },
  {
    id: "3",
    title: "Cozy Private Room in Shared Apartment",
    description:
      "Private room in a friendly shared apartment with 3 other students. Common areas include a kitchen, living room, and small balcony. Great for socializing and making new friends.",
    price: 180000,
    paymentPeriod: "year",
    location: "7 Barika Close, Abule Oja, Lagos",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    bedrooms: 1,
    bathrooms: 2,
    propertyType: "Shared Apartment",
    nearestUniversity: "University of Lagos",
    distanceToUniversity: "10 min walk",
    availableFrom: "September 1, 2023",
    minimumStay: "1 year",
    deposit: 180000,
    billsIncluded: true,
    internet: "WiFi included",
    furnishing: "Furnished bedroom",
    parking: "Limited street parking",
    amenities: [
      "Shared kitchen",
      "Small balcony",
      "Prepaid electricity",
      "Study desk",
      "Living room with TV",
      "Water tank",
      "Ceiling fans",
    ],
    security: [
      "Gated compound",
      "Burglary proof",
      "Lockable bedroom doors",
      "Security lights",
    ],
    tags: ["Private Room", "Shared Apartment", "Bills Included", "Near Campus"],
    landlord: "Student Living Co-op",
    responseRate: "98% within 6 hours",
    locationDescription:
      "Located in Abule Oja, this apartment is perfect for those who want to experience authentic student life. It's close to campus and surrounded by other student accommodations.",
    nearbyFacilities: [
      {
        name: "Unilag Second Gate",
        distance: "8 min walk",
      },
      {
        name: "Amala Joint",
        distance: "5 min walk",
      },
      {
        name: "Unilag Medical Center",
        distance: "12 min walk",
      },
    ],
  },
  {
    id: "4",
    title: "Premium Student Apartment with 24/7 Power",
    description:
      "Modern premium apartment in a purpose-built student complex. Features high-end finishes, a fully equipped kitchen, and 24/7 power supply with backup generator and inverter system.",
    price: 950000,
    paymentPeriod: "year",
    location: "25 Herbert Macaulay Way, Sabo, Lagos",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Premium Apartment",
    nearestUniversity: "University of Lagos",
    distanceToUniversity: "20 min walk",
    availableFrom: "August 20, 2023",
    minimumStay: "1 year",
    deposit: 950000,
    billsIncluded: true,
    internet: "High-speed fiber internet",
    furnishing: "Fully furnished",
    parking: "Secure parking available",
    amenities: [
      "24/7 power supply",
      "Air conditioning",
      "Water heater",
      "Study area",
      "In-building laundry",
      "Smart home features",
      "DSTV connection",
    ],
    security: [
      "24/7 security personnel",
      "CCTV cameras",
      "Electronic access cards",
      "Secure parking",
      "Controlled building access",
    ],
    tags: ["Premium", "24/7 Power", "Furnished", "Air Conditioned"],
    landlord: "Premium Student Living",
    responseRate: "100% within 3 hours",
    locationDescription:
      "Located in Sabo, this apartment offers the perfect balance between student life and city living. It's within walking distance to campus and close to shopping, dining, and entertainment options.",
    nearbyFacilities: [
      {
        name: "Sabo Market",
        distance: "5 min walk",
      },
      {
        name: "GTBank",
        distance: "3 min walk",
      },
      {
        name: "E-Center Mall",
        distance: "10 min walk",
      },
    ],
  },
  {
    id: "5",
    title: "Budget-Friendly Face-Me-I-Face-You",
    description:
      "Affordable single room in a Face-Me-I-Face-You compound. Great for students on a tight budget who still want to be close to campus and enjoy a social atmosphere.",
    price: 120000,
    paymentPeriod: "year",
    location: "10 Abeokuta Street, Iwaya, Lagos",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    bedrooms: 1,
    bathrooms: 2,
    propertyType: "Face-Me-I-Face-You",
    nearestUniversity: "University of Lagos",
    distanceToUniversity: "15 min walk",
    availableFrom: "September 1, 2023",
    minimumStay: "1 year",
    deposit: 120000,
    billsIncluded: false,
    internet: "Not included",
    furnishing: "Not furnished",
    parking: "Limited street parking",
    amenities: [
      "Shared kitchen",
      "Shared bathroom",
      "Ceiling fan",
      "Water from well",
      "Prepaid electricity meter",
      "Small veranda",
      "Community environment",
    ],
    security: [
      "Compound gate",
      "Burglary proof windows",
      "Community vigilance",
      "Lockable doors",
    ],
    tags: ["Budget", "Single Room", "Shared Facilities", "Close to Campus"],
    landlord: "Iwaya Properties",
    responseRate: "90% within 24 hours",
    locationDescription:
      "This accommodation is located in Iwaya, a bustling student area close to UNILAG. The area is lively, affordable, and filled with student-friendly amenities.",
    nearbyFacilities: [
      {
        name: "Iwaya Market",
        distance: "5 min walk",
      },
      {
        name: "Local Canteen",
        distance: "2 min walk",
      },
      {
        name: "UNILAG Third Gate",
        distance: "15 min walk",
      },
    ],
  },
  {
    id: "6",
    title: "Newly Built Mini Flat with Steady Water",
    description:
      "Brand new mini flat with reliable water supply and good power connection. Perfect for students who want privacy and comfort at a reasonable price.",
    price: 350000,
    paymentPeriod: "year",
    location: "5 Alagomeji Street, Yaba, Lagos",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Mini Flat",
    nearestUniversity: "Yaba College of Technology",
    distanceToUniversity: "10 min walk",
    availableFrom: "August 25, 2023",
    minimumStay: "1 year",
    deposit: 350000,
    billsIncluded: false,
    internet: "Available (subscription required)",
    furnishing: "Not furnished",
    parking: "Compound parking",
    amenities: [
      "Reliable water supply",
      "Prepaid electricity meter",
      "Newly built",
      "Tiled floors",
      "Good ventilation",
      "Private kitchen",
      "Private bathroom",
    ],
    security: [
      "Gated compound",
      "Security lights",
      "Burglary proof",
      "Solid doors with good locks",
    ],
    tags: ["Mini Flat", "Newly Built", "Water Supply", "Prepaid Meter"],
    landlord: "Yaba Modern Homes",
    responseRate: "95% within 12 hours",
    locationDescription:
      "Located in Yaba, this mini flat is perfect for YABATECH students. The area is well-connected, with good transport links and plenty of amenities nearby.",
    nearbyFacilities: [
      {
        name: "Yabatech Main Gate",
        distance: "10 min walk",
      },
      {
        name: "Tejuosho Market",
        distance: "15 min walk",
      },
      {
        name: "First Bank",
        distance: "7 min walk",
      },
    ],
  },
];

// Helper functions to retrieve data
export function getListings(): Listing[] {
  return mockListings;
}

export function getFeaturedListings(): Listing[] {
  // In a real app, you might have a featured flag or algorithm
  return mockListings.slice(0, 3);
}

export function getListingById(id: string): Listing | undefined {
  return mockListings.find((listing) => listing.id === id);
}

export function getSimilarListings(currentId: string): Listing[] {
  // In a real app, you would have an algorithm to find similar listings
  // For now, just return other listings
  return mockListings.filter((listing) => listing.id !== currentId).slice(0, 3);
}
