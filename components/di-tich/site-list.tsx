"use client";

import Image from "next/image";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { DirectionsButton } from "../shared/directions-button";
import { BookmarkIcon, PinIcon } from "../home/icons";
import type { Site } from "./sites";

function SiteCard({ site }: { site: Site }) {
  const key = `site:${site.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative h-[160px] w-full overflow-hidden rounded-t-lg rounded-b-[20px] bg-[#f3f3f3]">
        <Image
          src={site.photo}
          alt={site.name}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 560px, 100vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <DirectionsButton
        query={`${site.name}, ${site.subtitle}, Hà Nội`}
        className="absolute top-[160px] right-6 z-10 -translate-y-1/2"
      />

      <div className="px-3.5 pt-3 pb-1">
        <p className="truncate text-[16px] leading-tight font-bold text-[#252525]">{site.name}</p>
        <p className="mt-1 truncate text-[13px] text-[#58585c]">{site.subtitle}</p>

        <div className="mt-2.5 flex items-center justify-between">
          <div className="inline-flex items-center gap-1">
            <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
            <span className="text-[12px] text-[#58585c]">{site.distance}</span>
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

export function SiteList({ sites }: { sites: Site[] }) {
  if (sites.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-4 px-4 pt-1 pb-6">
      {sites.map((site) => (
        <SiteCard key={site.id} site={site} />
      ))}
    </div>
  );
}
