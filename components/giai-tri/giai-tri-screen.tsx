"use client";

import { useMemo, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryFilter } from "../vui-choi/category-filter";
import { FilterBar } from "../vui-choi/filter-bar";
import { VenueList } from "../vui-choi/venue-list";
import { VENUES, type VenueCategory } from "../vui-choi/venues";
import { Header } from "./header";
import { Hero } from "./hero";

export function GiaiTriScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Set<VenueCategory>>(new Set());

  const toggle = (category: VenueCategory) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const venues = useMemo(() => {
    if (active.size === 0) return VENUES;
    return VENUES.filter((venue) => active.has(venue.category));
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
        <VenueList venues={venues} />
      </main>

      <BottomNav />
    </div>
  );
}
