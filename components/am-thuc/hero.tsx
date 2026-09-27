import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"KHÁM PHÁ\nẨM THỰC"}
      gradientFrom="#DDB86B"
      gradientTo="#AA6E00"
      illustration="/am-thuc/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm, quán ăn, nhà hàng..."
    >
      {children}
    </HeroSection>
  );
}
