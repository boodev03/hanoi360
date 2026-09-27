import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"TRẢI NGHIỆM\nVUI CHƠI\nHẤP DẪN"}
      gradientFrom="#009B8C"
      gradientTo="#004942"
      illustration="/vui-choi/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    >
      {children}
    </HeroSection>
  );
}
