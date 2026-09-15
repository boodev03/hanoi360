"use client";

import Image from "next/image";
import { FilterSection } from "../shared/filter-section";
import { CATEGORIES, type VillageCategory } from "./villages";

export function CategoryFilter({
  active,
  onToggle,
}: {
  active: Set<VillageCategory>;
  onToggle: (category: VillageCategory) => void;
}) {
  return (
    <FilterSection topClassName="top-32" gapClassName="gap-4">
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
                boxShadow: isActive ? "0 0 0 2px #aa6e00" : "0 0 0 1px #e5e5e4",
                opacity: isActive ? 1 : 0.85,
              }}
            >
              <Image src={category.icon} alt="" fill className="object-cover" sizes="56px" />
            </span>
            <span
              className="whitespace-pre-line text-center text-[11px] leading-tight"
              style={{ color: isActive ? "#aa6e00" : "#58585c", fontWeight: isActive ? 600 : 500 }}
            >
              {category.label}
            </span>
          </button>
        );
      })}
    </FilterSection>
  );
}
