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

export default function ListingsFilters() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <Button variant="outline" size="sm" className="w-full">
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
                defaultValue={[200000, 600000]}
                min={0}
                max={1000000}
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
                      defaultValue={200000}
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
                      defaultValue={600000}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="bills-included" />
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
                  defaultValue={[2]}
                  min={0}
                  max={10}
                  step={0.5}
                  className="mt-6"
                />
                <div className="flex justify-between text-xs text-muted-foreground pt-1">
                  <span>0 miles</span>
                  <span>Within 2 miles</span>
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
              <div className="flex items-center space-x-3">
                <Checkbox id="self-contain" />
                <label
                  htmlFor="self-contain"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Self Contain
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="flat" />
                <label
                  htmlFor="flat"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Flat
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="mini-flat" />
                <label
                  htmlFor="mini-flat"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mini Flat
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="single-room" />
                <label
                  htmlFor="single-room"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Single Room
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="face-me-i-face-you" />
                <label
                  htmlFor="face-me-i-face-you"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Face-Me-I-Face-You
                </label>
              </div>
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
                  <Button variant="outline" size="sm" className="h-9">
                    Any
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    1+
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    2+
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    3+
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    4+
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm">Bathrooms</Label>
                <div className="grid grid-cols-4 gap-2">
                  <Button variant="outline" size="sm" className="h-9">
                    Any
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    1+
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    2+
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    3+
                  </Button>
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
              <div className="flex items-center space-x-3">
                <Checkbox id="water-supply" />
                <label
                  htmlFor="water-supply"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Water Supply
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="generator" />
                <label
                  htmlFor="generator"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Generator
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="prepaid-meter" />
                <label
                  htmlFor="prepaid-meter"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Prepaid Meter
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="water-heater" />
                <label
                  htmlFor="water-heater"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Water Heater
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="furnished" />
                <label
                  htmlFor="furnished"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Furnished
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="ac" />
                <label
                  htmlFor="ac"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Air Conditioning
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="security" />
                <label
                  htmlFor="security"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Security
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="tiled" />
                <label
                  htmlFor="tiled"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tiled Floors
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability" className="border-b pb-1">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-base font-medium">Availability</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-5 pt-3 pb-2">
              <div className="space-y-2">
                <Label htmlFor="move-in-date" className="text-sm">
                  Move-in Date
                </Label>
                <Input
                  id="move-in-date"
                  type="date"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Minimum Stay</Label>
                <select className="w-full p-2.5 text-sm border rounded-md bg-background">
                  <option>Any</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>9 months</option>
                  <option>12 months</option>
                </select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-8">Apply Filters</Button>
    </div>
  );
}
