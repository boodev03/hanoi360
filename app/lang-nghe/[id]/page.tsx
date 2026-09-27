import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getVillage } from "@/components/lang-nghe/villages";
import { getVillageContent } from "@/components/lang-nghe/village-content";

export default async function VillageDetailPage(props: PageProps<"/lang-nghe/[id]">) {
  const { id } = await props.params;
  const village = getVillage(Number(id));

  if (!village) notFound();

  return (
    <DetailScreen
      item={{
        id: village.id,
        name: village.name,
        photo: village.photo,
        address: village.address,
        description: village.address,
        distance: village.distance,
        content: getVillageContent(village),
      }}
      savedKey={`village:${village.id}`}
    />
  );
}
