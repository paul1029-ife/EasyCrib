"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Filters {
  priceRange: [number, number];
  billsIncluded: boolean;
  university: string;
  distanceToUniversity: number;
  propertyTypes: string[];
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
}

interface FiltersContextType {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  clearFilters: () => void;
}

const defaultFilters: Filters = {
  priceRange: [0, 1000000],
  billsIncluded: false,
  university: "Any University",
  distanceToUniversity: 2,
  propertyTypes: [],
  bedrooms: 0,
  bathrooms: 0,
  amenities: [],
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<Filters>(defaultFilters);

  const setFilters = (newFilters: Partial<Filters>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFiltersState(defaultFilters);
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilters, clearFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
}
