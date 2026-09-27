import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"GIẢI TRÍ\nĐA DẠNG"}
      gradientFrom="#009B8C"
      gradientTo="#004942"
      illustration="/giai-tri/hero-illustration.svg"
      searchPlaceholder="Tìm điểm vui chơi, giải trí..."
    >
      {children}
    </HeroSection>
  );
}
