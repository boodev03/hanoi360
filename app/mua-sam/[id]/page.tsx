import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getShop } from "@/components/mua-sam/shops";
import { getShopContent } from "@/components/mua-sam/shop-content";

export default async function ShopDetailPage(props: PageProps<"/mua-sam/[id]">) {
  const { id } = await props.params;
  const shop = getShop(Number(id));

  if (!shop) notFound();

  return (
    <DetailScreen
      item={{
        ...shop,
        description: shop.address,
        content: getShopContent(shop),
      }}
      savedKey={`shop:${shop.id}`}
    />
  );
}
