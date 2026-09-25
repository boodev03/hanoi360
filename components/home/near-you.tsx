"use client";

import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { BookmarkIcon, LocationOffIcon, NavigationIcon, PinIcon } from "./icons";
import { PLACES, type Place } from "./places";
import { useGeoPermission } from "./use-geo-permission";

function PlaceCard({ place }: { place: Place }) {
  const key = `place:${place.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <div className="w-[287px] shrink-0 snap-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative h-[138px] w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-[#d6d6d6] to-[#ae996f]">
        <button
          type="button"
          aria-label="Chỉ đường"
          className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf1db] text-[#aa6e00] shadow-md"
        >
          <NavigationIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="px-3 pt-3 pb-1">
        <p className="truncate text-base font-semibold text-[#363636]">{place.title}</p>
        <p className="mt-1 truncate text-sm text-[#363636]/80">{place.address}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-1">
            <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
            <span className="text-[11px] text-[#58585c]">{place.distance}</span>
          </div>

          <button
            type="button"
            onClick={() => toggleSaved(key)}
            aria-label="Lưu địa điểm"
            className="flex h-8 w-8 items-center justify-center text-[#27314D]"
          >
            <BookmarkIcon className="h-5 w-5" filled={saved} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function NearYou() {
  const { status, requestLocation } = useGeoPermission();

  if (status !== "granted") {
    return (
      <div className="mx-6 flex flex-col items-center gap-3 rounded-xl px-4 py-6 text-center">
        <LocationOffIcon className="h-7 w-7 text-[#9e6c1a]" />
        {status === "denied" ? (
          <p className="text-sm text-[#58585c]">
            Vị trí đã bị chặn. Vui lòng bật quyền truy cập vị trí trong cài đặt trình duyệt để xem địa điểm gần bạn.
          </p>
        ) : (
          <>
            <p className="text-sm text-[#58585c]">
              Bật vị trí để khám phá những địa điểm gần bạn nhất
            </p>
            <button
              type="button"
              onClick={requestLocation}
              className="rounded-full bg-[#aa6e00] px-5 py-2 text-sm font-semibold text-[#f3ebd9]"
            >
              Cho phép truy cập vị trí
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="pb-6">
      <h2 className="px-6 text-base font-semibold text-[#58585c]">Gần bạn nhất</h2>
      <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {PLACES.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
