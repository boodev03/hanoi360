"use client";

import Image from "next/image";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { BookmarkIcon, NavigationIcon, PinIcon } from "../home/icons";
import type { Facility } from "./facilities";

function FacilityCard({ facility }: { facility: Facility }) {
  const key = `facility:${facility.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <div className="relative flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative h-[132px] w-[132px] shrink-0 overflow-hidden bg-white">
        <Image src={facility.photo} alt={facility.name} fill className="object-cover" sizes="132px" />
      </div>

      <div className="min-w-0 flex-1 py-1">
        <button
          type="button"
          onClick={() => toggleSaved(key)}
          aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
          aria-pressed={saved}
          className="flex h-11 w-11 items-center justify-center text-[#58585c] transition-transform duration-150 select-none active:scale-90"
        >
          <BookmarkIcon className="h-4.5 w-4.5" filled={saved} />
        </button>

        <div className="min-w-0 px-3 pr-11">
          <p className="truncate text-base font-bold text-[#252525]">{facility.name}</p>
          <p className="mt-0.5 line-clamp-2 text-sm text-[#58585c]">{facility.address}</p>
        </div>

        <div className="mt-2 inline-flex items-center gap-1 px-3">
          <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
          <span className="text-[11px] text-[#58585c]">{facility.distance}</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="Chỉ đường"
        className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f3ebd9] text-[#727273] shadow-md transition-transform duration-150 select-none active:scale-90"
      >
        <NavigationIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export function FacilityList({ facilities }: { facilities: Facility[] }) {
  if (facilities.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-3 px-4 pt-1 pb-6">
      {facilities.map((facility) => (
        <FacilityCard key={facility.id} facility={facility} />
      ))}
    </div>
  );
}
