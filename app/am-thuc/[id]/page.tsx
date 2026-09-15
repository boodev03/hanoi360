import { notFound } from "next/navigation";
import { ShopDetailScreen } from "@/components/am-thuc/shop-detail-screen";
import { getRestaurant } from "@/components/am-thuc/restaurants";

export default async function ShopDetailPage(props: PageProps<"/am-thuc/[id]">) {
  const { id } = await props.params;
  const restaurant = getRestaurant(Number(id));

  if (!restaurant) notFound();

  return <ShopDetailScreen restaurant={restaurant} />;
}
