"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { BookmarkIcon, NavigationIcon, PinIcon } from "../home/icons";
import { RESTAURANTS, type Restaurant } from "./restaurants";

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const key = `restaurant:${restaurant.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();
  const isDark = restaurant.logoBg.toLowerCase() !== "#eef1ee" && !restaurant.logoBg.startsWith("#f") && !restaurant.logoBg.startsWith("#e");

  return (
    <div className="relative flex gap-3 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-black/5">
      <Link href={`/am-thuc/${restaurant.id}`} aria-label={restaurant.name} className="absolute inset-0 z-[1] rounded-2xl" />

      <div
        className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-xl"
        style={{ backgroundColor: restaurant.photo ? "#f3f3f3" : restaurant.logoBg }}
      >
        {restaurant.photo ? (
          <Image src={restaurant.photo} alt={restaurant.name} fill className="object-cover" sizes="104px" />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center px-2.5 text-center text-sm leading-tight font-bold"
            style={{ color: isDark ? "#ffffff" : "#3c3a2e" }}
          >
            {restaurant.logoText}
          </span>
        )}
        {restaurant.hasVoucher && (
          <span className="absolute bottom-0 left-0 rounded-tr-lg bg-[#009b8c] px-2 py-0.5 text-[10px] font-semibold text-white">
            +voucher
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-0.5">
        <div className="flex items-start gap-2">
          <p className="min-w-0 flex-1 truncate text-[15px] font-semibold text-[#252525]">{restaurant.name}</p>
          <button
            type="button"
            onClick={() => toggleSaved(key)}
            aria-label="Lưu địa điểm"
            className="relative z-10 -mt-1 -mr-1 flex h-8 w-8 shrink-0 items-center justify-center text-[#58585c]"
          >
            <BookmarkIcon className="h-4 w-4" filled={saved} />
          </button>
        </div>

        <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-[#58585c]">{restaurant.description}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="inline-flex items-center gap-1 rounded-full bg-[#f3f3f3] px-2 py-1">
            <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
            <span className="text-[11px] text-[#58585c]">{restaurant.distance}</span>
          </div>

          <button
            type="button"
            aria-label="Chỉ đường"
            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3ebd9] text-[#727273] transition-colors active:bg-[#eaddc0]"
          >
            <NavigationIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function RestaurantList() {
  return (
    <div className="flex flex-col gap-3 px-4 pt-1 pb-6">
      {RESTAURANTS.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
