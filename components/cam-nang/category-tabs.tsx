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
  return (
    <div className="px-4 pt-4 pb-8">
      <div className="flex gap-3">
        {TABS.map(({ key, label, Icon }) => {
          const isActive = key === activeCategory;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onCategoryChange(key)}
              className="flex flex-1 flex-col items-center gap-1"
            >
              <div className={`h-18 w-18 shrink-0 rounded-lg bg-white ${isActive ? 'border-2 border-[#9B9B9B]' : ''}`}>
                <Icon className="h-full w-full" />
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
      </div>
    </div>
  );
}
