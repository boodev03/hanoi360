"use client";

import { useRef } from "react";
import { BottomNav } from "../home/bottom-nav";
import { FilterBar } from "./filter-bar";
import { Header } from "./header";
import { Hero } from "./hero";
import { MuseumList } from "./museum-card";
import { MUSEUMS } from "./museums";

export function BaoTangScreen() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        <MuseumList museums={MUSEUMS} />
      </main>

      <BottomNav />
    </div>
  );
}