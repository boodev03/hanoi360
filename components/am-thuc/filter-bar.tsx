"use client";

import { useState } from "react";
import { FilterIcon } from "../home/icons";
import { FilterSheet } from "./filter-sheet";
import { useHasActiveFilters } from "./use-filter-store";
import { FilterSection } from "../shared/filter-section";

const FILTERS = [
  { key: "500m", label: "<500m" },
  { key: "1km", label: "<1km" },
  { key: "veggie", label: "Đồ chay" },
];

export function FilterBar() {
  const [active, setActive] = useState<Set<string>>(new Set());
  const [sheetOpen, setSheetOpen] = useState(false);
  const sortActive = useHasActiveFilters();

  const toggle = (key: string) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <>
      <FilterSection>
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-medium transition-colors duration-150"
          style={{
            borderColor: sortActive ? "#009b8c" : "#e5e5e4",
            backgroundColor: "#ffffff",
            color: sortActive ? "#009b8c" : "#252525",
          }}
        >
          <FilterIcon className="h-5 w-5 text-[#141E3F]" />
          Lọc theo
        </button>

        {FILTERS.map((filter) => {
          const isActive = active.has(filter.key);
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => toggle(filter.key)}
              className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-medium transition-colors duration-150"
              style={{
                borderColor: isActive ? "#009b8c" : "#e5e5e4",
                backgroundColor: "#ffffff",
                color: isActive ? "#009b8c" : "#252525",
              }}
            >
              {filter.label}
            </button>
          );
        })}
      </FilterSection>

      {sheetOpen && <FilterSheet onClose={() => setSheetOpen(false)} />}
    </>
  );
}
