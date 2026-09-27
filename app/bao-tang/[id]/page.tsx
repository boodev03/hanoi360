import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getMuseum } from "@/components/bao-tang/museums";
import { getMuseumContent } from "@/components/bao-tang/museum-content";

export default async function MuseumDetailPage(props: PageProps<"/bao-tang/[id]">) {
  const { id } = await props.params;
  const museum = getMuseum(Number(id));

  if (!museum) notFound();

  return (
    <DetailScreen
      item={{
        id: museum.id,
        name: museum.title,
        photo: museum.image,
        address: museum.address,
        description: museum.address,
        distance: museum.distance,
        content: getMuseumContent(museum),
      }}
      savedKey={`museum:${museum.id}`}
    />
  );
}
