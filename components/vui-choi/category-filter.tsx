"use client";

import Image from "next/image";
import { CATEGORIES, type VenueCategory } from "./venues";
import { FilterSection } from "../shared/filter-section";

export function CategoryFilter({
  active,
  onToggle,
}: {
  active: Set<VenueCategory>;
  onToggle: (category: VenueCategory) => void;
}) {
  return (
    <FilterSection gapClassName="gap-4">
      {CATEGORIES.map((category) => {
        const isActive = active.has(category.key);
        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onToggle(category.key)}
            className="flex w-16 shrink-0 flex-col items-center gap-2"
          >
            <span
              className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full transition-all"
              style={{
                boxShadow: isActive ? "0 0 0 2px #009b8c" : "0 0 0 1px #e5e5e4",
                opacity: isActive ? 1 : 0.85,
              }}
            >
              <Image src={category.icon} alt="" fill className="object-cover" sizes="56px" />
            </span>
            <span
              className="text-center text-[11px] leading-tight"
              style={{ color: isActive ? "#009b8c" : "#58585c", fontWeight: isActive ? 600 : 500 }}
            >
              {category.label}
            </span>
          </button>
        );
      })}
    </FilterSection>
  );
}
