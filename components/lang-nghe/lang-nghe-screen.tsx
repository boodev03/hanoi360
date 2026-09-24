"use client";

import { useMemo, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryFilter } from "./category-filter";
import { Header } from "./header";
import { Hero } from "./hero";
import { VillageList } from "./village-list";
import { VILLAGES, type VillageCategory } from "./villages";

export function LangNgheScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Set<VillageCategory>>(new Set());

  const toggle = (category: VillageCategory) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const villages = useMemo(() => {
    if (active.size === 0) return VILLAGES;
    return VILLAGES.filter((village) => active.has(village.category));
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
          <CategoryFilter active={active} onToggle={toggle} />
        </Hero>
        <VillageList villages={villages} />
      </main>

      <BottomNav />
    </div>
  );
}
