import type { ReactNode } from "react";
import { HeroSection } from "@/components/shared/hero-section";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <HeroSection
      title={"TINH HOA\nLÀNG NGHỀ"}
      gradientFrom="#DDB86B"
      gradientTo="#AA6E00"
      illustration="/lang-nghe/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    >
      {children}
    </HeroSection>
  );
}
