"use client";
import { Home, DollarSign, MapPin, FileText, X, Upload } from "lucide-react";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CldUploadWidget } from "next-cloudinary";

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
import { useCreateProperty } from "@/lib/hooks/use-properties";
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
  propertyType: z.string().min(1, "Property type is required"),
  amenities: z.array(z.string()),
  imageUrl: z.string().optional(),
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
      imageUrl: "",
      bathrooms: "",
      propertyType: "",
      amenities: [],
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
    "Condo",
    "Townhouse",
    "Land",
  ] as const;

  const { mutate: createListing } = useCreateProperty();

  const onSubmit = async (data: PropertyFormData) => {
    await createListing({
      ...data,
      id: Date.now(),
      price: Number(data.price),
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
    });
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
                    <CldUploadWidget
                      uploadPreset="NIBO_UPLOAD"
                      onSuccess={(result) => {
                        if (
                          result.info &&
                          typeof result.info === "object" &&
                          "secure_url" in result.info
                        ) {
                          field.onChange(result.info.secure_url);
                        }
                      }}
                    >
                      {({ open }) => (
                        <div
                          onClick={() => open()}
                          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
                        >
                          <Upload size={50} />
                          <div className="font-semibold text-lg">
                            Click to upload
                          </div>
                        </div>
                      )}
                    </CldUploadWidget>
                    {field.value && (
                      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                        <img
                          src={field.value}
                          alt="Property"
                          className="object-cover w-full h-full"
                        />
                        <button
                          type="button"
                          onClick={() => field.onChange("")}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
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
                Price ($)*
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <DollarSign size={16} className="text-gray-400" />
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
