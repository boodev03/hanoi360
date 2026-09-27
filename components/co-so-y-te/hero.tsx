import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"Y TẾ\nCHUYÊN\nNGHIỆP"}
      gradientFrom="#009B8C"
      gradientTo="#004942"
      illustration="/co-so-y-te/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    >
      {children}
    </HeroSection>
  );
}
