"use client";

import Image from "next/image";
import { FilterSection } from "../shared/filter-section";
import { CATEGORIES, type MuseumCategory } from "./museums";

export function CategoryFilter({
  active,
  onToggle,
}: {
  active: Set<MuseumCategory>;
  onToggle: (category: MuseumCategory) => void;
}) {
  return (
    <FilterSection gapClassName="gap-2" className="pb-3">
      {CATEGORIES.map((category) => {
        const isActive = active.has(category.key);
        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onToggle(category.key)}
            className="flex flex-1 shrink-0 flex-col items-center gap-1"
          >
            <span className={`shrink-0 p-0.5 ${isActive ? "bg-[#9B9B9B]" : "bg-transparent"}`}>
              <span className="relative block h-18 w-18 overflow-hidden rounded bg-white">
                <Image src={category.image} alt="" fill className="object-cover" sizes="72px" />
              </span>
            </span>
            <span
              className="text-center text-[11px] leading-tight whitespace-pre-line text-[#252525]"
              style={{ fontWeight: isActive ? 600 : 500 }}
            >
              {category.label}
            </span>
          </button>
        );
      })}
    </FilterSection>
  );
}
