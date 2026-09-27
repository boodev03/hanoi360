import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getFacility } from "@/components/co-so-y-te/facilities";
import { getFacilityContent } from "@/components/co-so-y-te/facility-content";

export default async function FacilityDetailPage(props: PageProps<"/co-so-y-te/[id]">) {
  const { id } = await props.params;
  const facility = getFacility(Number(id));

  if (!facility) notFound();

  return (
    <DetailScreen
      item={{
        ...facility,
        description: facility.address,
        content: getFacilityContent(facility),
      }}
      savedKey={`facility:${facility.id}`}
    />
  );
}
