"use client";

import { useMemo, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryFilter } from "./category-filter";
import { FilterBar } from "./filter-bar";
import { Header } from "./header";
import { Hero } from "./hero";
import { MuseumList } from "./museum-card";
import { MUSEUMS, type MuseumCategory } from "./museums";

export function BaoTangScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Set<MuseumCategory>>(new Set());

  const toggle = (category: MuseumCategory) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const museums = useMemo(() => {
    if (active.size === 0) return MUSEUMS;
    return MUSEUMS.filter((museum) => active.has(museum.category));
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
        <MuseumList museums={museums} />
      </main>

      <BottomNav />
    </div>
  );
}
