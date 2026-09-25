"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Hero } from "./hero";
import { SearchBar } from "./search-bar";

type HeroSectionProps = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  illustration?: string;
  searchPlaceholder: string;
  children?: ReactNode;
};

export function HeroSection({ title, gradientFrom, gradientTo, illustration, searchPlaceholder, children }: HeroSectionProps) {
  const [stuck, setStuck] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const check = () => setStuck(el.getBoundingClientRect().top <= 56);
    check();
    document.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    return () => {
      document.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <>
      <Hero title={title} gradientFrom={gradientFrom} gradientTo={gradientTo} illustration={illustration} />
      <div ref={stickyRef} className="sticky top-[55px] z-30 -mt-6 bg-white">
        <SearchBar placeholder={searchPlaceholder} stuck={stuck} />
        {children}
      </div>
    </>
  );
}
