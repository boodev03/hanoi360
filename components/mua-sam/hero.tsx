import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"MUA SẮM\nTHOẢ THÍCH"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/mua-sam/hero-illustration.png"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    >
      {children}
    </HeroSection>
  );
}
