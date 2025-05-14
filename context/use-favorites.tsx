import { Property } from "@/lib/hooks/use-properties";
import { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favorites: Property[];
  addFavorite: (listing: Property) => void;
  removeFavorite: (listing: Property) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Property[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const addFavorite = (listing: Property) => {
    setFavorites([...favorites, listing]);
    localStorage.setItem("favorites", JSON.stringify([...favorites, listing]));
  };

  const removeFavorite = (listing: Property) => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((l) => l.id !== listing.id))
    );
    setFavorites(favorites.filter((l) => l.id !== listing.id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
