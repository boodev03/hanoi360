"use client";

import Image from "next/image";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { DirectionsButton } from "../shared/directions-button";
import { BookmarkIcon, PinIcon } from "../home/icons";
import type { Venue } from "./venues";

function VenueCard({ venue }: { venue: Venue }) {
  const key = `venue:${venue.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative h-[178px] w-full overflow-hidden rounded-t-lg rounded-b-[20px] bg-[#c0c0c0]">
        <Image
          src={venue.photo}
          alt={venue.name}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 560px, 100vw"
        />
      </div>

      <DirectionsButton
        query={`${venue.name}, ${venue.address}, Hà Nội`}
        className="absolute top-[178px] right-6 z-10 -translate-y-1/2"
      />

      <div className="p-3">
        <div className="flex items-center gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-[#252525]">{venue.name}</p>
            <p className="mt-1 text-sm text-[#58585c]">{venue.address}</p>
          </div>

          <button
            type="button"
            onClick={() => toggleSaved(key)}
            aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
            aria-pressed={saved}
            className="-mr-1.5 flex h-10 w-10 shrink-0 items-center justify-center text-[#58585c] transition-transform duration-150 select-none active:scale-90"
          >
            <BookmarkIcon className="h-5 w-5" filled={saved} />
          </button>
        </div>

        <div className="mt-2 inline-flex items-center gap-1">
          <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
          <span className="text-[11px] text-[#58585c]">{venue.distance}</span>
        </div>
      </div>
    </div>
  );
}

export function VenueList({ venues }: { venues: Venue[] }) {
  if (venues.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-3 px-4 pt-1 pb-6">
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
