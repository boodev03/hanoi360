"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  { title: "Triển lãm nghệ thuật", subtitle: "Bảo tàng Mỹ thuật Việt Nam" },
  { title: "Từ Tính Tứ Linh", subtitle: "Văn Miếu - Quốc Tử Giám" },
  { title: "Workshop Hoạ - Gốm", subtitle: "An Café Thuận An" },
  { title: "Lễ hội ẩm thực", subtitle: "Phố ẩm thực Tống Duy Tân" },
  { title: "Chợ đêm cuối tuần", subtitle: "Chợ Đồng Xuân" },
];

export function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("init", onSelect);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="pt-2">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, i) => (
            <div key={slide.title} className="min-w-0 flex-[0_0_74%] px-1.5">
              <div
                className="relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-2xl transition-all duration-300 ease-out"
                style={{
                  transform: i === selected ? "scale(1)" : "scale(0.86)",
                  opacity: i === selected ? 1 : 0.75,
                }}
              >
                <Image
                  src="/home/hero-1.png"
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="74vw"
                  priority={i === 0}
                />
                <div className="relative z-10 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
                  <p className="text-lg leading-snug font-bold text-[#f3ebd9]">{slide.title}</p>
                  <p className="text-sm text-[#f3ebd9]/85">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Đi tới banner ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className="h-1 w-3 rounded-full transition-colors duration-300"
            style={{ backgroundColor: i === selected ? "#aa6e00" : "#d4d4d3" }}
          />
        ))}
      </div>
    </div>
  );
}
