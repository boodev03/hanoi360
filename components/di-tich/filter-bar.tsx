"use client";

import { useState } from "react";
import { FilterIcon } from "../home/icons";
import { FilterSection } from "../shared/filter-section";
import { FilterSheet } from "./filter-sheet";
import { useHasActiveFilters } from "./use-filter-store";

export function FilterBar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const sortActive = useHasActiveFilters();

  return (
    <>
      <FilterSection topClassName="top-32">
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-medium transition-colors duration-150"
          style={{
            borderColor: sortActive ? "#aa6e00" : "#e5e5e4",
            backgroundColor: sortActive ? "#fbf1db" : "#ffffff",
            color: sortActive ? "#aa6e00" : "#252525",
          }}
        >
          <FilterIcon className="h-3.5 w-3.5" />
          Lọc theo
        </button>
      </FilterSection>

      {sheetOpen && <FilterSheet onClose={() => setSheetOpen(false)} />}
    </>
  );
}
