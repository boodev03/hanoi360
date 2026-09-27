import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getVenue } from "@/components/vui-choi/venues";
import { getVenueContent } from "@/components/vui-choi/venue-content";

export default async function EntertainmentDetailPage(props: PageProps<"/giai-tri/[id]">) {
  const { id } = await props.params;
  const venue = getVenue(Number(id));

  if (!venue) notFound();

  return (
    <DetailScreen
      item={{
        id: venue.id,
        name: venue.name,
        photo: venue.photo,
        address: venue.address,
        description: venue.address,
        distance: venue.distance,
        content: getVenueContent(venue),
      }}
      savedKey={`venue:${venue.id}`}
    />
  );
}
