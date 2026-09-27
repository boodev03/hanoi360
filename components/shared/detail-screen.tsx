"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { BackIcon, BookmarkIcon, CalendarIcon, FacebookIcon, InstagramIcon, PinIconV2 } from "../home/icons";
import { DirectionsButton } from "./directions-button";
import { DetailContent, type DetailBlock } from "./detail-content";
import { BottomNav } from "../home/bottom-nav";

export type DetailItem = {
  id: number | string;
  name: string;
  photo?: string;
  logoBg?: string;
  address?: string;
  distance?: string;
  description?: string;
  detail?: string;
  hours?: string;
  hoursNote?: string;
  dishes?: { name: string; photo: string }[];
  content?: DetailBlock[];
};

export function DetailScreen({
  item,
  savedKey,
  hideAddress,
  hideActions,
  squareHero,
  socials,
  cta,
}: {
  item: DetailItem;
  savedKey: string;
  hideAddress?: boolean;
  hideActions?: boolean;
  squareHero?: boolean;
  socials?: boolean;
  cta?: { label: string; href: string };
}) {
  const router = useRouter();
  const saved = useIsSaved(savedKey);
  const toggleSaved = useToggleSaved();
  const cardRef = useRef<HTMLDivElement>(null);
  const [overlap, setOverlap] = useState(56);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const update = () => setOverlap(el.offsetHeight / 2);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div
          className={`relative h-[392px] w-full overflow-hidden bg-[#e5e5e4] ${squareHero ? "" : "rounded-b-[20px]"}`}
        >
          {item.photo ? (
            <Image src={item.photo} alt={item.name} fill className="object-cover" priority />
          ) : (
            <div className="absolute inset-0" style={{ backgroundColor: item.logoBg ?? "#eef1ee" }} />
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

        <div className="relative z-10 px-6" style={{ marginTop: -overlap }}>
          <div
            ref={cardRef}
            className={`relative w-full rounded-2xl bg-white/80 p-4 backdrop-blur-[30px] ${hideAddress ? "" : "min-h-[115px]"}`}
          >
            {!hideActions && (
              <DirectionsButton
                query={`${item.name}${item.address ? `, ${item.address}` : ""}, Hà Nội`}
                className="absolute top-0 right-2 -translate-y-1/2 shadow-md"
              />
            )}

            <h1 className={`${hideActions ? "" : "pr-10"} text-xl leading-none font-semibold text-[#141E3F]`}>
              {item.name}
            </h1>

            {!hideAddress && (
              <div className="mt-4 flex items-start gap-4">
                {item.hours && (
                  <div className="w-1/2 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="h-5 w-5 text-[#19264E]" />
                      <span className="text-xs leading-none font-semibold text-[#141E3F]">Mở cửa</span>
                    </div>
                    <p className="mt-2 text-sm leading-none text-[#141E3F]">{item.hours}</p>
                    {item.hoursNote && (
                      <p className="mt-1.5 text-sm leading-none text-[#141E3F]">{item.hoursNote}</p>
                    )}
                  </div>
                )}
                <div className={`min-w-0 ${item.hours ? "w-1/2" : ""}`}>
                  <div className="flex items-center gap-1.5">
                    <PinIconV2 className="h-5 w-5 shrink-0 text-[#19264E]" />
                    <span className="text-xs leading-none font-semibold text-[#141E3F]">Địa chỉ</span>
                  </div>
                  <p className="mt-2 text-sm leading-snug text-[#141E3F]">{item.address ?? "Hà Nội"}</p>
                </div>
              </div>
            )}

            {socials && (
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleSaved(savedKey)}
                  aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
                  aria-pressed={saved}
                  className="flex h-10 w-10 items-center justify-center text-[#27314D] transition-transform duration-150 select-none active:scale-90"
                >
                  <BookmarkIcon className="h-5 w-5" filled={saved} />
                </button>
                <div className="flex items-center gap-3 text-[#27314D]">
                  <InstagramIcon className="h-8 w-8" />
                  <FacebookIcon className="h-8 w-8" />
                </div>
              </div>
            )}
          </div>

          {!hideActions && !socials && (
            <button
              type="button"
              onClick={() => toggleSaved(savedKey)}
              aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
              aria-pressed={saved}
              className="flex h-10 w-10 items-center justify-center text-[#27314D] transition-transform duration-150 select-none active:scale-90"
            >
              <BookmarkIcon className="h-5 w-5" filled={saved} />
            </button>
          )}
        </div>

        {item.content ? (
          <DetailContent blocks={item.content} />
        ) : (
          <p
            className={`px-3 pt-4 text-sm leading-relaxed text-[#141E3F] ${item.dishes?.length ? "" : "pb-8"}`}
          >
            {item.detail ?? item.description}
          </p>
        )}

        {item.dishes && item.dishes.length > 0 && (
          <div className="mt-5 px-3 pb-8">
            <h2 className="text-base font-semibold text-[#252525]">Món nổi bật</h2>

            <div className="mt-3 flex flex-col gap-5">
              {item.dishes.map((dish, index) => (
                <div key={`${dish.name}-${index}`}>
                  <div className="relative h-[236px] w-full overflow-hidden bg-[#f3f3f3]">
                    <Image src={dish.photo} alt={dish.name} fill className="object-cover" sizes="100vw" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-[#252525]">{dish.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {cta && (
          <div className="px-3 pb-8">
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-lg bg-[#AA6E00] text-base font-semibold text-white transition-transform duration-150 select-none active:scale-[0.98]"
            >
              {cta.label}
            </a>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
