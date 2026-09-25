import Image from "next/image";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { DirectionsButton } from "../shared/directions-button";
import { BookmarkIcon, PinIcon } from "../home/icons";

export type Museum = {
  id: number;
  title: string;
  address: string;
  image: string;
  distance: string;
};

function MuseumCard({ museum }: { museum: Museum }) {
  const key = `museum:${museum.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative h-44 w-full overflow-hidden rounded-t-lg rounded-b-[20px] bg-[#c0c0c0]">
        <Image
          src={museum.image}
          alt={museum.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 560px, 100vw"
        />
      </div>

      <DirectionsButton
        query={`${museum.title}, ${museum.address}, Hà Nội`}
        className="absolute top-44 right-6 z-10 -translate-y-1/2"
      />

      <div className="px-3 pt-3 pb-1">
        <h3 className="text-base font-bold text-[#252525]">{museum.title}</h3>
        <p className="mt-1 text-sm text-[#58585c]">{museum.address}</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-1">
            <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
            <span className="text-xs text-[#58585c]">{museum.distance}</span>
          </div>

          <button
            type="button"
            onClick={() => toggleSaved(key)}
            aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
            aria-pressed={saved}
            className="-mr-1.5 flex h-11 w-11 items-center justify-center text-[#27314D] transition-transform duration-150 select-none active:scale-90"
          >
            <BookmarkIcon className="h-4.5 w-4.5" filled={saved} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function MuseumList({ museums }: { museums: Museum[] }) {
  return (
    <div className="flex flex-col gap-4 px-4 pt-1 pb-6">
      {museums.map((museum) => (
        <MuseumCard key={museum.id} museum={museum} />
      ))}
    </div>
  );
}
