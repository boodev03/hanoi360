"use client";

import { FoodTourIcon, HeritageIcon, ItineraryIcon, SeasonFestivalIcon } from "./icons";

const TABS = [
  { key: "itinerary", label: "Lịch trình\ngợi ý", Icon: ItineraryIcon },
  { key: "heritage", label: "Hành trình\ndi sản", Icon: HeritageIcon },
  { key: "season", label: "Mùa và\nlễ hội", Icon: SeasonFestivalIcon },
  { key: "food", label: "Ẩm thực\ntour", Icon: FoodTourIcon },
] as const;

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: (typeof TABS)[number]["key"];
  onCategoryChange: (key: (typeof TABS)[number]["key"]) => void;
}) {
  const activeIndex = TABS.findIndex((tab) => tab.key === activeCategory);

  return (
    <div className="px-4 pt-4 pb-8">
      <div className="relative flex gap-2">
        {TABS.map(({ key, label, Icon }) => {
          const isActive = key === activeCategory;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onCategoryChange(key)}
              className="flex flex-1 flex-col items-center gap-1"
            >
              <div className={`shrink-0 p-0.5 ${isActive ? "bg-[#9B9B9B] animate-[tab-pop_0.3s_ease-in-out]" : "bg-transparent"}`}>
                <div className="h-18 w-18 rounded-lg bg-white">
                  <Icon className="h-full w-full" />
                </div>
              </div>
              <span
                className="flex-1 text-center text-[11px] leading-tight whitespace-pre-line text-[#252525]"
                style={{ fontWeight: isActive ? 600 : 500 }}
              >
                {label}
              </span>
            </button>
          );
        })}
        <span
          aria-hidden
          className="absolute -bottom-8 h-0 w-0 -translate-x-1/2 border-x-12 border-b-12 border-x-transparent border-b-[#E3E2E0] transition-[left] duration-300 ease-in-out"
          style={{
            left: `calc(${(2 * activeIndex + 1)} * (100% - 24px) / 8 + ${8 * activeIndex}px)`,
          }}
        />
      </div>
    </div>
  );
}
