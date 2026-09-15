"use client";

import { Lottie } from "lottie-react";
import animationData from "./logo-animation.json";

type LogoAnimationProps = {
  size?: number;
  className?: string;
};

export function LogoAnimation({ size = 88, className }: LogoAnimationProps) {
  return (
    <Lottie
      src={animationData}
      loop={false}
      autoplay
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
