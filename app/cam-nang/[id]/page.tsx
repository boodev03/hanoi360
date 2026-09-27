import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getGuide } from "@/components/cam-nang/guides";
import { getGuideContent } from "@/components/cam-nang/guide-content";

export default async function GuideDetailPage(props: PageProps<"/cam-nang/[id]">) {
  const { id } = await props.params;
  const guide = getGuide(Number(id));

  if (!guide) notFound();

  return (
    <DetailScreen
      item={{
        id: guide.id,
        name: guide.title,
        photo: guide.photo,
        logoBg: guide.accentColor,
        content: getGuideContent(guide),
      }}
      savedKey={`guide:${guide.id}`}
      hideAddress
      hideActions
      squareHero
    />
  );
}
