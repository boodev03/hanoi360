import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"Khám phá\nBảo tàng"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/bao-tang/hero-illustration.svg"
      searchPlaceholder="Tìm bảo tàng, di tích lịch sử..."
    />
  );
}