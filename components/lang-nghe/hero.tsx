import { HeroSection } from "@/components/shared/hero-section";

export function Hero() {
  return (
    <HeroSection
      title={"TINH HOA\nLÀNG NGHỀ"}
      gradientFrom="#f2d79f"
      gradientTo="#aa6e00"
      illustration="/lang-nghe/hero-illustration.png"
      searchPlaceholder="Tìm địa điểm bạn muốn đến"
    />
  );
}
