import type { ReactNode } from "react";
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
  return (
    <>
      <Hero title={title} gradientFrom={gradientFrom} gradientTo={gradientTo} illustration={illustration} />
      <div className="sticky top-[55px] z-30 -mt-6 bg-white">
        <SearchBar placeholder={searchPlaceholder} />
        {children}
      </div>
    </>
  );
}
