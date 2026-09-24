import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"Khám phá\nẨm thực"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/am-thuc/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm, quán ăn, nhà hàng..."
    >
      {children}
    </HeroSection>
  );
}
