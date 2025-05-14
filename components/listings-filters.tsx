"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFilters } from "@/lib/filters-context";

export default function ListingsFilters() {
  const { filters, setFilters, clearFilters } = useFilters();

  const handlePriceRangeChange = (value: number[]) => {
    setFilters({ priceRange: value as [number, number] });
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setFilters({ priceRange: [value, filters.priceRange[1]] });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setFilters({ priceRange: [filters.priceRange[0], value] });
  };

  const handleBillsIncludedChange = (checked: boolean) => {
    setFilters({ billsIncluded: checked });
  };

  const handleUniversityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ university: e.target.value });
  };

  const handleDistanceChange = (value: number[]) => {
    setFilters({ distanceToUniversity: value[0] });
  };

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked
      ? [...filters.propertyTypes, type]
      : filters.propertyTypes.filter((t) => t !== type);
    setFilters({ propertyTypes: newTypes });
  };

  const handleBedroomsChange = (value: number) => {
    setFilters({ bedrooms: value });
  };

  const handleBathroomsChange = (value: number) => {
    setFilters({ bathrooms: value });
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const newAmenities = checked
      ? [...filters.amenities, amenity]
      : filters.amenities.filter((a) => a !== amenity);
    setFilters({ amenities: newAmenities });
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["price", "location", "property", "amenities"]}
        className="space-y-3"
      >
        <AccordionItem value="price" className="border-b pb-1">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-base font-medium">Price Range</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6 pt-3 pb-2">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                min={0}
                max={4000000}
                step={50000}
                className="mt-6"
              />
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <Label
                    htmlFor="min-price"
                    className="text-xs text-muted-foreground mb-1 block"
                  >
                    Min Price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      ₦
                    </span>
                    <Input
                      id="min-price"
                      type="number"
                      className="pl-6"
                      value={filters.priceRange[0]}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Label
                    htmlFor="max-price"
                    className="text-xs text-muted-foreground mb-1 block"
                  >
                    Max Price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      ₦
                    </span>
                    <Input
                      id="max-price"
                      type="number"
                      className="pl-6"
                      value={filters.priceRange[1]}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bills-included"
                  checked={filters.billsIncluded}
                  onCheckedChange={handleBillsIncludedChange}
                />
                <label
                  htmlFor="bills-included"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bills included
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location" className="border-b pb-1">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-base font-medium">Location</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-5 pt-3 pb-2">
              <div className="space-y-2">
                <Label htmlFor="university" className="text-sm">
                  University
                </Label>
                <select
                  id="university"
                  className="w-full p-2.5 text-sm border rounded-md bg-background"
                  value={filters.university}
                  onChange={handleUniversityChange}
                >
                  <option>Any University</option>
                  <option>University of Lagos (UNILAG)</option>
                  <option>Yaba College of Technology (YABATECH)</option>
                  <option>Lagos State University (LASU)</option>
                  <option>University of Ibadan (UI)</option>
                  <option>Obafemi Awolowo University (OAU)</option>
                  <option>University of Nigeria (UNN)</option>
                  <option>University of Benin (UNIBEN)</option>
                </select>
              </div>

              <div className="space-y-4">
                <Label className="text-sm">Distance to University</Label>
                <Slider
                  value={[filters.distanceToUniversity]}
                  onValueChange={handleDistanceChange}
                  min={0}
                  max={10}
                  step={0.5}
                  className="mt-6"
                />
                <div className="flex justify-between text-xs text-muted-foreground pt-1">
                  <span>0 miles</span>
                  <span>Within {filters.distanceToUniversity} miles</span>
                  <span>10+ miles</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="property" className="border-b pb-1">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-base font-medium">Property Type</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-3 pt-3 pb-2">
              {[
                "Self Contain",
                "Flat",
                "Mini Flat",
                "Single Room",
                "Face-Me-I-Face-You",
              ].map((type) => (
                <div key={type} className="flex items-center space-x-3">
                  <Checkbox
                    id={type.toLowerCase().replace(/\s+/g, "-")}
                    checked={filters.propertyTypes.includes(type)}
                    onCheckedChange={(checked) =>
                      handlePropertyTypeChange(type, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={type.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rooms" className="border-b pb-1">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-base font-medium">Rooms</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6 pt-3 pb-2">
              <div className="space-y-3">
                <Label className="text-sm">Bedrooms</Label>
                <div className="grid grid-cols-5 gap-2">
                  {[0, 1, 2, 3, 4].map((value) => (
                    <Button
                      key={value}
                      variant={
                        filters.bedrooms === value ? "default" : "outline"
                      }
                      size="sm"
                      className="h-9"
                      onClick={() => handleBedroomsChange(value)}
                    >
                      {value === 0 ? "Any" : `${value}+`}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm">Bathrooms</Label>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((value) => (
                    <Button
                      key={value}
                      variant={
                        filters.bathrooms === value ? "default" : "outline"
                      }
                      size="sm"
                      className="h-9"
                      onClick={() => handleBathroomsChange(value)}
                    >
                      {value === 0 ? "Any" : `${value}+`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amenities" className="border-b pb-1">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-base font-medium">Amenities</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-3 pt-3 pb-2">
              {[
                "Water Supply",
                "24/7 Electricity",
                "Security",
                "Internet",
                "Parking",
                "Furnished",
                "Air Conditioning",
                "Swimming Pool",
                "Gym",
                "Study Room",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-3">
                  <Checkbox
                    id={amenity.toLowerCase().replace(/\s+/g, "-")}
                    checked={filters.amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={amenity.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
