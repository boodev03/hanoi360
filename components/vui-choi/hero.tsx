import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"TRẢI NGHIỆM\nVUI CHƠI\nHẤP DẪN"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/vui-choi/hero-illustration.svg"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    />
  );
}
