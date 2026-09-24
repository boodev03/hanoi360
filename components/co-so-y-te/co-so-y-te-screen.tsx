"use client";

import { useMemo, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryFilter } from "./category-filter";
import { FACILITIES, type FacilityCategory } from "./facilities";
import { FacilityList } from "./facility-list";
import { FilterBar } from "./filter-bar";
import { Header } from "./header";
import { Hero } from "./hero";

export function CoSoYTeScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Set<FacilityCategory>>(new Set());

  const toggle = (category: FacilityCategory) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const facilities = useMemo(() => {
    if (active.size === 0) return FACILITIES;
    return FACILITIES.filter((facility) => active.has(facility.category));
  }, [active]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <Header scrollContainerRef={scrollRef} />

      <main
        ref={scrollRef}
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <Hero>
          <FilterBar />
          <CategoryFilter active={active} onToggle={toggle} />
        </Hero>
        <FacilityList facilities={facilities} />
      </main>

      <BottomNav />
    </div>
  );
}
