import { RESTAURANTS } from "@/components/am-thuc/restaurants";
import { PLACES } from "@/components/home/places";
import { VENUES } from "@/components/vui-choi/venues";

export type SavedItemType = "restaurant" | "venue" | "place";

export type SavedDisplayItem = {
  key: string;
  type: SavedItemType;
  name: string;
  subtitle: string;
  distance: string;
  photo?: string;
  href?: string;
};

export function resolveSavedItem(key: string): SavedDisplayItem | null {
  const [type, idStr] = key.split(":");
  const id = Number(idStr);

  if (type === "restaurant") {
    const restaurant = RESTAURANTS.find((item) => item.id === id);
    if (!restaurant) return null;
    return {
      key,
      type,
      name: restaurant.name,
      subtitle: restaurant.description,
      distance: restaurant.distance,
      photo: restaurant.photo,
      href: `/am-thuc/${restaurant.id}`,
    };
  }

  if (type === "venue") {
    const venue = VENUES.find((item) => item.id === id);
    if (!venue) return null;
    return {
      key,
      type,
      name: venue.name,
      subtitle: venue.address,
      distance: venue.distance,
      photo: venue.photo,
    };
  }

  if (type === "place") {
    const place = PLACES.find((item) => item.id === id);
    if (!place) return null;
    return {
      key,
      type,
      name: place.title,
      subtitle: place.address,
      distance: place.distance,
    };
  }

  return null;
}

export function parseDistanceMeters(distance: string): number {
  const trimmed = distance.trim().toLowerCase();
  const value = parseFloat(trimmed);
  if (Number.isNaN(value)) return Number.POSITIVE_INFINITY;
  return trimmed.includes("km") ? value * 1000 : value;
}
