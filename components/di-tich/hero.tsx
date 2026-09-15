import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"TÌM HIỂU\nLỊCH SỬ\nHÀ NỘI"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/di-tich-lich-su/hero-illustration.svg"
      searchPlaceholder="Tìm di tích, danh lam thắng cảnh..."
    />
  );
}
