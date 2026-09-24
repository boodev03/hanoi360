import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"Y TẾ\nCHUYÊN\nNGHIỆP"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/co-so-y-te/hero-illustration.png"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    >
      {children}
    </HeroSection>
  );
}
