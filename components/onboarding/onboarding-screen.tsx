"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowNarrowRightIcon } from "./icons";
import { LogoAnimation } from "./logo-animation";

type Slide = {
  image: string;
  alt: string;
  heading: [string, string];
  subheading: string;
};

const SLIDES: Slide[] = [
  {
    image: "/onboarding/slide-1.png",
    alt: "Hoàng hôn trên Hồ Tây với chùa Trấn Quốc",
    heading: ["Chào mừng", "đến với Hà Nội"],
    subheading: "Bắt đầu hành trình của bạn",
  },
  {
    image: "/onboarding/slide-2.png",
    alt: "Một bát phở bò Hà Nội truyền thống",
    heading: ["Nếm vị", "của Hà Nội"],
    subheading: "Từ gánh phở sớm mai đến ly cà phê phố Cổ",
  },
  {
    image: "/onboarding/slide-3.jpg",
    alt: "Khuê Văn Các tại Văn Miếu - Quốc Tử Giám",
    heading: ["Chạm vào", "ngàn năm văn hiến"],
    subheading: "Mỗi địa danh kể một câu chuyện",
  },
  {
    image: "/onboarding/slide-4.jpg",
    alt: "Cầu Long Biên với dòng người qua lại",
    heading: ["Hoà vào", "nhịp sống phố thị"],
    subheading: "Nơi truyền thống và hiện đại cùng hiện diện",
  },
];

const DRAG_THRESHOLD = 60;
const WHEEL_THRESHOLD = 40;
const WHEEL_LOCK_MS = 550;
const SWIPE_CONFIRM_RATIO = 0.72;
const CIRCLE_SIZE = 54;
const MORPH_EASE = "cubic-bezier(0.22,1,0.36,1)";

export function OnboardingScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTrackWidth, setDragTrackWidth] = useState(1);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const wheelLocked = useRef(false);
  const wheelAccum = useRef(0);

  const [pillOffset, setPillOffset] = useState(0);
  const [isPillDragging, setIsPillDragging] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pillNaturalWidth, setPillNaturalWidth] = useState(0);
  const [pillTrackWidth, setPillTrackWidth] = useState(0);
  const pillTrackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLButtonElement>(null);
  const pillDragStartX = useRef(0);
  const pillMoved = useRef(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (pillRef.current) setPillNaturalWidth(pillRef.current.getBoundingClientRect().width);
      if (pillTrackRef.current) setPillTrackWidth(pillTrackRef.current.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const isLast = index === SLIDES.length - 1;

  const goTo = (next: number) => {
    setIndex(Math.min(Math.max(next, 0), SLIDES.length - 1));
  };

  const finishOnboarding = () => {
    router.push("/home");
  };

  const handleNext = () => {
    if (isLast) {
      finishOnboarding();
    } else {
      goTo(index + 1);
    }
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStartX.current = event.clientX;
    setDragTrackWidth(trackRef.current?.offsetWidth || 1);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (!isDragging) return;
    const ratio = dragOffset / dragTrackWidth;
    if (ratio <= -0.12 || dragOffset <= -DRAG_THRESHOLD) {
      handleNext();
    } else if (ratio >= 0.12 || dragOffset >= DRAG_THRESHOLD) {
      goTo(index - 1);
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleWheel = (event: React.WheelEvent) => {
    const horizontal =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : 0;
    if (!horizontal || wheelLocked.current) return;
    wheelAccum.current += horizontal;
    if (Math.abs(wheelAccum.current) < WHEEL_THRESHOLD) return;

    wheelLocked.current = true;
    if (wheelAccum.current > 0) {
      handleNext();
    } else {
      goTo(index - 1);
    }
    wheelAccum.current = 0;
    window.setTimeout(() => {
      wheelLocked.current = false;
    }, WHEEL_LOCK_MS);
  };

  const dragPercent = isDragging ? (dragOffset / dragTrackWidth) * 100 : 0;

  const getMaxPillOffset = () => {
    const trackWidth = pillTrackRef.current?.offsetWidth || 0;
    return Math.max(trackWidth - CIRCLE_SIZE, 0);
  };

  const handlePillPointerDown = (event: React.PointerEvent) => {
    if (isConfirmed) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pillDragStartX.current = event.clientX;
    pillMoved.current = false;
    setIsPillDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePillPointerMove = (event: React.PointerEvent) => {
    if (!isPillDragging) return;
    const delta = event.clientX - pillDragStartX.current;
    if (Math.abs(delta) > 4) pillMoved.current = true;
    const max = getMaxPillOffset();
    setPillOffset(Math.min(Math.max(delta, 0), max));
  };

  const handlePillPointerUp = () => {
    if (!isPillDragging) return;
    const max = getMaxPillOffset();
    setIsPillDragging(false);
    if (max > 0 && pillOffset >= max * SWIPE_CONFIRM_RATIO) {
      setPillOffset(max);
      setIsConfirmed(true);
      window.setTimeout(finishOnboarding, 220);
    } else {
      setPillOffset(0);
    }
  };

  const handlePillClick = () => {
    if (pillMoved.current) {
      pillMoved.current = false;
      return;
    }
    if (isConfirmed) return;
    const max = getMaxPillOffset();
    setPillOffset(max);
    setIsConfirmed(true);
    window.setTimeout(finishOnboarding, 380);
  };

  const maxPillOffset = Math.max(pillTrackWidth - CIRCLE_SIZE, 0);
  const pillProgress = maxPillOffset > 0 ? Math.min(Math.max(pillOffset / maxPillOffset, 0), 1) : 0;
  const pillWidth =
    pillNaturalWidth > 0
      ? pillNaturalWidth - pillProgress * (pillNaturalWidth - CIRCLE_SIZE)
      : undefined;
  const pillTextOpacity = 1 - Math.min(pillProgress / 0.35, 1);
  const pillIconOpacity = Math.max((pillProgress - 0.55) / 0.45, 0);

  return (
    <div className="relative h-svh max-h-dvh w-full overflow-hidden overscroll-none bg-black font-heading">
      <div
        ref={trackRef}
        className="flex h-full w-full touch-none select-none"
        style={{
          transform: `translateX(${-index * 100 + dragPercent}%)`,
          transition: isDragging ? "none" : "transform 500ms cubic-bezier(0.22,1,0.36,1)",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onWheel={handleWheel}
        onDragStart={(event) => event.preventDefault()}
      >
        {SLIDES.map((slide, i) => (
          <div key={slide.image} className="relative h-full w-full shrink-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              draggable={false}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 via-45% to-transparent" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 transition-opacity duration-300"
          style={{
            top: "max(3.5rem, env(safe-area-inset-top))",
            opacity: index === 0 ? 1 : 0,
          }}
        >
          <LogoAnimation size={88} />
        </div>

        <div
          className="pointer-events-auto flex flex-col gap-4 px-6"
          style={{ paddingBottom: "max(1.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="space-y-1.5">
            <h1 className="text-[32px] font-bold leading-[1.15] text-[#eaebf2]/90">
              <span className="block">{SLIDES[index].heading[0]}</span>
              <span className="block">{SLIDES[index].heading[1]}</span>
            </h1>
            <p className="text-[15px] font-medium text-[#eaebf2]/80">
              {SLIDES[index].subheading}
            </p>
          </div>

          <div className="flex gap-1.5" role="tablist" aria-label="Điều hướng giới thiệu">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Đi tới slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-1 w-6 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: i === index ? "#f2d79f" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          <div
            ref={pillTrackRef}
            className="relative h-[62px] w-full rounded-full backdrop-blur-sm select-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(217, 217, 217, 0.45) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-y-1 right-[76px] left-[152px] flex items-center justify-center"
              style={{
                animation: "swipe-hint 1.6s ease-in-out infinite",
                animationPlayState: isPillDragging || pillProgress > 0 ? "paused" : "running",
                opacity: pillProgress > 0 ? 0 : 1,
                transition: "opacity 150ms",
              }}
            >
              <div className="-mr-6">
                <ArrowNarrowRightIcon width={40} height={40} opacity={0.09} />
              </div>
              <div className="-mr-6">
                <ArrowNarrowRightIcon width={40} height={40} opacity={0.22} />
              </div>
              <ArrowNarrowRightIcon width={40} height={40} opacity={0.38} />
            </div>

            <div
              className="pointer-events-none absolute top-1 right-0 flex size-13.5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-200"
              style={{ transform: isConfirmed ? "scale(0.001)" : "scale(1)" }}
            >
              <Image src="/onboarding/chevron.svg" alt="" width={13} height={8} />
            </div>

            <button
              ref={pillRef}
              type="button"
              onPointerDown={handlePillPointerDown}
              onPointerMove={handlePillPointerMove}
              onPointerUp={handlePillPointerUp}
              onPointerCancel={handlePillPointerUp}
              onClick={handlePillClick}
              aria-label="Vuốt hoặc nhấn để khám phá ngay"
              className="absolute top-1 left-0 flex h-[54px] shrink-0 cursor-grab touch-none items-center justify-center overflow-hidden rounded-full bg-[#aa6e00] text-[15px] font-semibold whitespace-nowrap text-[#f3ebd9] active:cursor-grabbing"
              style={{
                width: pillWidth,
                transform: `translateX(${pillOffset}px) scale(${isConfirmed ? 1.06 : 1})`,
                transition: isPillDragging
                  ? "none"
                  : `transform 320ms ${MORPH_EASE}, width 320ms ${MORPH_EASE}`,
              }}
            >
              <span
                className="shrink-0 px-8"
                style={{ opacity: pillTextOpacity, transition: isPillDragging ? "none" : "opacity 200ms" }}
              >
                Khám phá ngay
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: pillIconOpacity, transition: isPillDragging ? "none" : "opacity 200ms" }}
              >
                <Image src="/onboarding/chevron.svg" alt="" width={13} height={8} className="invert" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
