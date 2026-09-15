import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"MUA SẮM\nTHOẢ THÍCH"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/mua-sam/hero-illustration.png"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    />
  );
}
