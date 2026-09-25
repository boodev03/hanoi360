"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { BackIcon, BookmarkIcon, ClockIcon, NavigationIcon, PinIcon } from "../home/icons";
import { BottomNav } from "../home/bottom-nav";
import type { Restaurant } from "./restaurants";

export function ShopDetailScreen({ restaurant }: { restaurant: Restaurant }) {
  const router = useRouter();
  const key = `restaurant:${restaurant.id}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div className="relative h-[260px] w-full bg-[#e5e5e4]">
          {restaurant.photo ? (
            <Image src={restaurant.photo} alt={restaurant.name} fill className="object-cover" priority />
          ) : (
            <div className="absolute inset-0" style={{ backgroundColor: restaurant.logoBg }} />
          )}

          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Quay lại"
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#252525] shadow-md"
            style={{ top: "calc(12px + env(safe-area-inset-top))" }}
          >
            <BackIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="relative z-10 -mt-8 px-4">
          <div className="relative rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
            <button
              type="button"
              aria-label="Chỉ đường"
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f3ebd9] text-[#727273] shadow-md transition-colors active:bg-[#eaddc0]"
            >
              <NavigationIcon className="h-4 w-4" />
            </button>

            <h1 className="pr-10 text-lg font-bold text-[#252525]">{restaurant.name}</h1>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-[#58585c]">
                  <ClockIcon className="h-4 w-4" />
                  <span className="text-xs font-medium">Mở cửa</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-[#252525]">{restaurant.hours ?? "8h00 – 22h00"}</p>
                <p className="text-xs text-[#58585c]">{restaurant.hoursNote ?? "Thứ 2 – Chủ nhật"}</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#58585c]">
                  <PinIcon className="h-4 w-4" />
                  <span className="text-xs font-medium">Địa chỉ</span>
                </div>
                <p className="mt-1 text-sm leading-snug text-[#252525]">{restaurant.address ?? "Hà Nội"}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleSaved(key)}
            aria-label="Lưu địa điểm"
            className="mt-3 h-9 w-9 text-[#27314D]"
          >
            <BookmarkIcon className="h-5 w-5" filled={saved} />
          </button>
        </div>

        <p
          className={`px-4 text-sm leading-relaxed text-[#58585c] ${restaurant.dishes?.length ? "" : "pb-8"}`}
        >
          {restaurant.detail ?? restaurant.description}
        </p>

        {restaurant.dishes && restaurant.dishes.length > 0 && (
          <div className="mt-5 px-4 pb-8">
            <h2 className="text-base font-semibold text-[#252525]">Món nổi bật</h2>

            <div className="mt-3 flex flex-col gap-5">
              {restaurant.dishes.map((dish, index) => (
                <div key={`${dish.name}-${index}`}>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-[#f3f3f3]">
                    <Image src={dish.photo} alt={dish.name} fill className="object-cover" sizes="100vw" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-[#252525]">{dish.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
