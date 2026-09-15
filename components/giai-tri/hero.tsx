import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"Giải trí\nĐa dạng"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/vui-choi/hero-illustration.svg"
      searchPlaceholder="Tìm điểm vui chơi, giải trí..."
    />
  );
}
