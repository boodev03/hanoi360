"use client";

import { useRef } from "react";
import { BottomNav } from "../home/bottom-nav";
import { FilterBar } from "./filter-bar";
import { Header } from "./header";
import { Hero } from "./hero";
import { QuickPicks } from "./quick-picks";
import { RestaurantList } from "./restaurant-list";

export function AmThucScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        </Hero>
        <QuickPicks />
        <RestaurantList />
      </main>

      <BottomNav />
    </div>
  );
}
