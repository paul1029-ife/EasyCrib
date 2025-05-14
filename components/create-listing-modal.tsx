"use client";
import { Home, MapPin, FileText, X, Upload, Loader2 } from "lucide-react";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateProperty, PropertyType } from "@/lib/hooks/use-properties";
import { toast } from "sonner";

// Define the form schema using Zod
const propertySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .string()
    .refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Please enter a valid price",
    }),
  location: z.string().min(1, "Location is required"),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  propertyType: z.enum(["House", "Apartment", "Condo", "Townhouse", "Land"]),
  amenities: z.array(z.string()),
  imageUrl: z.string().optional(),
  paymentPeriod: z.enum(["month", "year", "semester"]),
  furnishing: z.enum(["Furnished", "Unfurnished", "Partially Furnished"]),
  internet: z.enum(["Included", "Available", "Not Available"]),
  parking: z.enum(["Available", "Not Available", "Street Parking"]),
  billsIncluded: z.boolean(),
  deposit: z
    .string()
    .refine((val: string) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Please enter a valid deposit amount",
    }),
  minimumStay: z
    .string()
    .refine((val: string) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Please enter a valid minimum stay period",
    }),
  availableFrom: z.string().min(1, "Available from date is required"),
  landlord: z.object({
    name: z.string().min(1, "Landlord name is required"),
    phone: z.string().min(1, "Landlord phone number is required"),
    responseRate: z.number().min(0).max(100),
    responseTime: z.string(),
  }),
  distanceToUniversity: z.string().min(1, "Distance to university is required"),
  nearestUniversity: z.string().min(1, "Nearest university is required"),
  nearbyFacilities: z.array(
    z.object({
      name: z.string(),
      distance: z.string(),
      type: z.string(),
    })
  ),
});

type PropertyFormData = z.infer<typeof propertySchema>;

interface CreateListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateListingModal({
  isOpen,
  onClose,
}: CreateListingModalProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      location: "",
      bedrooms: "",
      bathrooms: "",
      propertyType: "House",
      amenities: [],
      imageUrl: "",
      paymentPeriod: "month",
      furnishing: "Unfurnished",
      internet: "Not Available",
      parking: "Not Available",
      billsIncluded: false,
      deposit: "",
      minimumStay: "",
      availableFrom: "",
      landlord: {
        name: "",
        phone: "",
        responseRate: 0,
        responseTime: "24 hours",
      },
      distanceToUniversity: "",
      nearestUniversity: "",
      nearbyFacilities: [],
    },
  });

  // Available amenities
  const availableAmenities = [
    "Parking",
    "Air Conditioning",
    "Swimming Pool",
    "Gym",
    "Security System",
    "Backyard",
    "Furnished",
    "Pet Friendly",
    "Washer/Dryer",
  ] as const;

  // Property types
  const propertyTypes = [
    "House",
    "Apartment",
    "Hostel",
    "Condo",
    "Townhouse",
    "Land",
  ] as const;

  // Payment periods
  const paymentPeriods = ["month", "year", "semester"] as const;

  // Furnishing options
  const furnishingOptions = [
    "Furnished",
    "Unfurnished",
    "Partially Furnished",
  ] as const;

  // Internet options
  const internetOptions = ["Included", "Available", "Not Available"] as const;

  // Parking options
  const parkingOptions = [
    "Available",
    "Not Available",
    "Street Parking",
  ] as const;

  const { mutate: createListing, status } = useCreateProperty();

  const onSubmit = async (data: PropertyFormData) => {
    const propertyData = {
      ...data,
      id: Date.now(),
      price: Number(data.price),
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
      deposit: Number(data.deposit),
      minimumStay: Number(data.minimumStay),
      imageUrl: data.imageUrl || "",
      nearbyFacilities: data.nearbyFacilities.map((facility) => ({
        name: facility.name,
        distance: facility.distance,
        type: facility.type,
      })),
      propertyType: data.propertyType as PropertyType,
    };

    await createListing(propertyData);
    if (status === "success") {
      toast.success("Listing created successfully");
      handleDialogClose();
    } else {
      toast.error("Failed to create listing");
    }
  };

  const handleDialogClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleDialogClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Home className="mr-2" size={20} />
            Create New Listing
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new property listing.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Name */}
            <div className="col-span-full">
              <Label htmlFor="name" className="mb-1">
                Property Name*
              </Label>
              <Controller
                name="name"
                control={control}
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<PropertyFormData, "name">;
                }) => (
                  <Input
                    {...field}
                    id="name"
                    placeholder="Enter property name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div className="col-span-full">
              <Label htmlFor="image" className="mb-1">
                Property Image
              </Label>
              <Controller
                name="imageUrl"
                control={control}
                render={({ field }) => (
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;

                          // Validate file size (5MB limit)
                          if (file.size > 5 * 1024 * 1024) {
                            setUploadError("File size must be less than 5MB");
                            return;
                          }

                          // Validate file type
                          if (!file.type.startsWith("image/")) {
                            setUploadError("Please upload an image file");
                            return;
                          }

                          setIsUploading(true);
                          setUploadError(null);

                          try {
                            const formData = new FormData();
                            formData.append("file", file);
                            formData.append("upload_preset", "EASYCRIB_UPLOAD");

                            const response = await fetch(
                              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                              {
                                method: "POST",
                                body: formData,
                              }
                            );

                            if (!response.ok) {
                              throw new Error("Upload failed");
                            }

                            const data = await response.json();
                            if (data.secure_url) {
                              field.onChange(data.secure_url);
                            }
                          } catch (error) {
                            console.error("Upload error:", error);
                            setUploadError(
                              "Failed to upload image. Please try again."
                            );
                          } finally {
                            setIsUploading(false);
                          }
                        }}
                      />
                      <label
                        htmlFor="image"
                        className={`relative cursor-pointer transition-all duration-200 border-2 border-dashed rounded-lg p-8 flex flex-col justify-center items-center gap-4 text-neutral-600 hover:border-primary/50 hover:bg-primary/5 ${
                          isUploading ? "opacity-50 cursor-not-allowed" : ""
                        } ${
                          uploadError ? "border-red-500" : "border-neutral-300"
                        }`}
                      >
                        {isUploading ? (
                          <>
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            <div className="font-semibold text-lg text-primary">
                              Uploading...
                            </div>
                          </>
                        ) : (
                          <>
                            <Upload size={50} className="text-neutral-400" />
                            <div className="text-center">
                              <div className="font-semibold text-lg mb-1">
                                Click to upload
                              </div>
                              <p className="text-sm text-neutral-500">
                                PNG, JPG up to 5MB
                              </p>
                            </div>
                          </>
                        )}
                      </label>
                      {uploadError && (
                        <p className="mt-2 text-sm text-red-600">
                          {uploadError}
                        </p>
                      )}
                    </div>
                    {field.value && (
                      <div className="relative w-full h-[200px] rounded-lg overflow-hidden group">
                        <img
                          src={field.value}
                          alt="Property"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <button
                          type="button"
                          onClick={() => {
                            field.onChange("");
                            setUploadError(null);
                          }}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition opacity-0 group-hover:opacity-100"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Property Type */}
            <div>
              <Label htmlFor="propertyType" className="mb-1">
                Property Type*
              </Label>
              <Controller
                name="propertyType"
                control={control}
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<
                    PropertyFormData,
                    "propertyType"
                  >;
                }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      id="propertyType"
                      className={errors.propertyType ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.propertyType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.propertyType.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <Label htmlFor="price" className="mb-1">
                Price (₦)*
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">₦</span>
                </div>
                <Controller
                  name="price"
                  control={control}
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<PropertyFormData, "price">;
                  }) => (
                    <Input
                      {...field}
                      id="price"
                      type="text"
                      inputMode="decimal"
                      className={`pl-8 ${errors.price ? "border-red-500" : ""}`}
                      placeholder="0.00"
                    />
                  )}
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location" className="mb-1">
                Location*
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <MapPin size={16} className="text-gray-400" />
                </div>
                <Controller
                  name="location"
                  control={control}
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<PropertyFormData, "location">;
                  }) => (
                    <Input
                      {...field}
                      id="location"
                      className={`pl-8 ${
                        errors.location ? "border-red-500" : ""
                      }`}
                      placeholder="City, State"
                    />
                  )}
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Bedrooms */}
            <div>
              <Label htmlFor="bedrooms" className="mb-1">
                Bedrooms
              </Label>
              <Controller
                name="bedrooms"
                control={control}
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<PropertyFormData, "bedrooms">;
                }) => (
                  <Input
                    {...field}
                    id="bedrooms"
                    type="number"
                    min="0"
                    placeholder="Number of bedrooms"
                  />
                )}
              />
            </div>

            {/* Bathrooms */}
            <div>
              <Label htmlFor="bathrooms" className="mb-1">
                Bathrooms
              </Label>
              <Controller
                name="bathrooms"
                control={control}
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<PropertyFormData, "bathrooms">;
                }) => (
                  <Input
                    {...field}
                    id="bathrooms"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="Number of bathrooms"
                  />
                )}
              />
            </div>

            {/* Description */}
            <div className="col-span-full">
              <Label htmlFor="description" className="mb-1">
                Description*
              </Label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FileText size={16} className="text-gray-400" />
                </div>
                <Controller
                  name="description"
                  control={control}
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<
                      PropertyFormData,
                      "description"
                    >;
                  }) => (
                    <Textarea
                      {...field}
                      id="description"
                      className={`pl-8 min-h-[100px] ${
                        errors.description ? "border-red-500" : ""
                      }`}
                      placeholder="Describe your property..."
                    />
                  )}
                />
              </div>
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Amenities */}
            <div className="col-span-full">
              <div className="mb-2">
                <Label>Amenities</Label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Controller
                  name="amenities"
                  control={control}
                  render={({
                    field,
                  }: {
                    field: ControllerRenderProps<PropertyFormData, "amenities">;
                  }) => (
                    <>
                      {availableAmenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center space-x-2 rounded-md border p-2"
                        >
                          <Checkbox
                            id={`amenity-${amenity}`}
                            checked={field.value.includes(amenity)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, amenity]
                                : field.value.filter((a) => a !== amenity);
                              field.onChange(newValue);
                            }}
                          />
                          <Label
                            htmlFor={`amenity-${amenity}`}
                            className="text-sm cursor-pointer"
                          >
                            {amenity}
                          </Label>
                        </div>
                      ))}
                    </>
                  )}
                />
              </div>
            </div>

            {/* Payment Period */}
            <div>
              <Label htmlFor="paymentPeriod" className="mb-1">
                Payment Period*
              </Label>
              <Controller
                name="paymentPeriod"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      id="paymentPeriod"
                      className={errors.paymentPeriod ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select payment period" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentPeriods.map((period) => (
                        <SelectItem key={period} value={period}>
                          {period.charAt(0).toUpperCase() + period.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.paymentPeriod && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.paymentPeriod.message}
                </p>
              )}
            </div>

            {/* Furnishing Status */}
            <div>
              <Label htmlFor="furnishing" className="mb-1">
                Furnishing Status*
              </Label>
              <Controller
                name="furnishing"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      id="furnishing"
                      className={errors.furnishing ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select furnishing status" />
                    </SelectTrigger>
                    <SelectContent>
                      {furnishingOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.furnishing && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.furnishing.message}
                </p>
              )}
            </div>

            {/* Internet Status */}
            <div>
              <Label htmlFor="internet" className="mb-1">
                Internet Status*
              </Label>
              <Controller
                name="internet"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      id="internet"
                      className={errors.internet ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select internet status" />
                    </SelectTrigger>
                    <SelectContent>
                      {internetOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.internet && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.internet.message}
                </p>
              )}
            </div>

            {/* Parking Status */}
            <div>
              <Label htmlFor="parking" className="mb-1">
                Parking Status*
              </Label>
              <Controller
                name="parking"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      id="parking"
                      className={errors.parking ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select parking status" />
                    </SelectTrigger>
                    <SelectContent>
                      {parkingOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.parking && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.parking.message}
                </p>
              )}
            </div>

            {/* Bills Included */}
            <div>
              <Label htmlFor="billsIncluded" className="mb-1">
                Bills Included
              </Label>
              <Controller
                name="billsIncluded"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="billsIncluded"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="billsIncluded">
                      Bills are included in the rent
                    </Label>
                  </div>
                )}
              />
            </div>

            {/* Deposit */}
            <div>
              <Label htmlFor="deposit" className="mb-1">
                Deposit Amount
              </Label>
              <Controller
                name="deposit"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="deposit"
                    type="number"
                    min="0"
                    placeholder="Enter deposit amount"
                    className={errors.deposit ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.deposit && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.deposit.message}
                </p>
              )}
            </div>

            {/* Minimum Stay */}
            <div>
              <Label htmlFor="minimumStay" className="mb-1">
                Minimum Stay (months)
              </Label>
              <Controller
                name="minimumStay"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="minimumStay"
                    type="number"
                    min="1"
                    placeholder="Enter minimum stay period"
                    className={errors.minimumStay ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.minimumStay && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.minimumStay.message}
                </p>
              )}
            </div>

            {/* Available From */}
            <div>
              <Label htmlFor="availableFrom" className="mb-1">
                Available From
              </Label>
              <Controller
                name="availableFrom"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="availableFrom"
                    type="date"
                    className={errors.availableFrom ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.availableFrom && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.availableFrom.message}
                </p>
              )}
            </div>

            {/* Landlord Name */}
            <div>
              <Label htmlFor="landlord.name" className="mb-1">
                Landlord Name
              </Label>
              <Controller
                name="landlord.name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="landlord.name"
                    placeholder="Enter landlord name"
                    className={errors.landlord?.name ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.landlord?.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.landlord.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="landlord.phone" className="mb-1">
                Landlord Phone Number
              </Label>
              <Controller
                name="landlord.phone"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="landlord.phone"
                    placeholder="Enter landlord phone number"
                    className={errors.landlord?.phone ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.landlord?.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.landlord.phone.message}
                </p>
              )}
            </div>
            {/* Distance to University */}
            <div>
              <Label htmlFor="distanceToUniversity" className="mb-1">
                Distance to University
              </Label>
              <Controller
                name="distanceToUniversity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="distanceToUniversity"
                    placeholder="e.g., 5 minutes walk"
                    className={
                      errors.distanceToUniversity ? "border-red-500" : ""
                    }
                  />
                )}
              />
              {errors.distanceToUniversity && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.distanceToUniversity.message}
                </p>
              )}
            </div>

            {/* Nearest University */}
            <div>
              <Label htmlFor="nearestUniversity" className="mb-1">
                Nearest University
              </Label>
              <Controller
                name="nearestUniversity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="nearestUniversity"
                    placeholder="Enter nearest university"
                    className={errors.nearestUniversity ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.nearestUniversity && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nearestUniversity.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="sm:justify-between gap-2">
            <p className="text-xs text-gray-500">* Required fields</p>
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleDialogClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Listing"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
