import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"DẠO BƯỚC\nQUA KÝ ỨC"}
      gradientFrom="#009B8C"
      gradientTo="#004942"
      illustration="/bao-tang/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm"
    >
      {children}
    </HeroSection>
  );
}