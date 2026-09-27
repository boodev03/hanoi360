import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"TÌM HIỂU\nLỊCH SỬ\nHÀ NỘI"}
      gradientFrom="#DDB86B"
      gradientTo="#AA6E00"
      illustration="/di-tich-lich-su/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    >
      {children}
    </HeroSection>
  );
}
