"use client";

import { useMemo, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryFilter } from "./category-filter";
import { FilterBar } from "./filter-bar";
import { Header } from "./header";
import { Hero } from "./hero";
import { ShopList } from "./shop-list";
import { SHOPS, type ShopCategory } from "./shops";

export function MuaSamScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Set<ShopCategory>>(new Set());

  const toggle = (category: ShopCategory) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const shops = useMemo(() => {
    if (active.size === 0) return SHOPS;
    return SHOPS.filter((shop) => active.has(shop.category));
  }, [active]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <Header scrollContainerRef={scrollRef} />

      <main
        ref={scrollRef}
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <Hero />
        <FilterBar />
        <CategoryFilter active={active} onToggle={toggle} />
        <ShopList shops={shops} />
      </main>

      <BottomNav />
    </div>
  );
}
