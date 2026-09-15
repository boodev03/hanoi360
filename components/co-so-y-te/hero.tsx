import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"Y TẾ\nCHUYÊN\nNGHIỆP"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/co-so-y-te/hero-illustration.png"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    />
  );
}
