"use client";

import { useMemo, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryFilter } from "./category-filter";
import { FilterBar } from "./filter-bar";
import { Header } from "./header";
import { Hero } from "./hero";
import { VenueList } from "./venue-list";
import { VENUES, type VenueCategory } from "./venues";

export function VuiChoiScreen() {
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
        style={{
          paddingBottom: "calc(83px + env(safe-area-inset-bottom))",
          background: "linear-gradient(rgb(250, 248, 245) 0%, rgb(239, 236, 231) 100%)",
        }}
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
