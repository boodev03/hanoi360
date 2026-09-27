import { DetailScreen } from "../shared/detail-screen";
import type { Restaurant } from "./restaurants";

export function ShopDetailScreen({ restaurant }: { restaurant: Restaurant }) {
  return <DetailScreen item={restaurant} savedKey={`restaurant:${restaurant.id}`} />;
}
