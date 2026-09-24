"use client";

import { useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { CategoryTabs } from "./category-tabs";
import { GuideList } from "./guide-list";
import { GUIDES } from "./guides";

export function CamNangScreen() {
  const [activeCategory, setActiveCategory] = useState<"itinerary" | "heritage" | "season" | "food">("itinerary");

  const filteredGuides = GUIDES.filter(guide => guide.category === activeCategory);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto bg-[#E3E2E0]"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div
          className="sticky top-0 z-20 bg-white"
          style={{ paddingTop: "calc(16px + env(safe-area-inset-top))" }}
        >
          <h1 className="pb-3 text-center text-lg font-bold text-[#252525]">Cẩm nang du lịch Hà Nội</h1>
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>

        <GuideList guides={filteredGuides} />
      </main>

      <BottomNav />
    </div>
  );
}
