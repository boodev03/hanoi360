import { Hero } from "./hero";
import { SearchBar } from "./search-bar";

type HeroSectionProps = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  illustration?: string;
  searchPlaceholder: string;
};

export function HeroSection({ title, gradientFrom, gradientTo, illustration, searchPlaceholder }: HeroSectionProps) {
  return (
    <>
      <Hero title={title} gradientFrom={gradientFrom} gradientTo={gradientTo} illustration={illustration} />
      <SearchBar placeholder={searchPlaceholder} />
    </>
  );
}
