"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://0d20cf38-1f43-4f30-a384-36eae02c2bc7.frame.claudeusercontent.com/_f/1789550986-d26b/assets/banner_1-BM4ez75K.png",
  "https://0d20cf38-1f43-4f30-a384-36eae02c2bc7.frame.claudeusercontent.com/_f/1789550986-d26b/assets/banner_3-BwW67wNQ.png",
  "https://0d20cf38-1f43-4f30-a384-36eae02c2bc7.frame.claudeusercontent.com/_f/1789550986-d26b/assets/banner_5-bDxzQMdg.png",
  "https://0d20cf38-1f43-4f30-a384-36eae02c2bc7.frame.claudeusercontent.com/_f/1789550986-d26b/assets/banner_2-iFKR3BgZ.png",
  "https://0d20cf38-1f43-4f30-a384-36eae02c2bc7.frame.claudeusercontent.com/_f/1789550986-d26b/assets/banner_4-BMuVoPz4.png",
];

const EASE = "cubic-bezier(0.45, 0, 0.15, 1)";
const TRANSITION = `transform 320ms ${EASE}, opacity 320ms ${EASE}`;

export function Banner() {
  const [active, setActive] = useState(2);
  const dragStartX = useRef<number | null>(null);
  const count = IMAGES.length;

  const go = (dir: number) => setActive((prev) => (prev + dir + count) % count);

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % count), 5000);
    return () => clearInterval(id);
  }, [active, count]);

  return (
    <div
      className="relative isolate h-[406px] w-full overflow-hidden"
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => {
        dragStartX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (dragStartX.current === null) return;
        const dx = e.clientX - dragStartX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        dragStartX.current = null;
      }}
      onPointerCancel={() => {
        dragStartX.current = null;
      }}
    >
      <div
        className="pointer-events-none absolute top-0 left-0 h-[85px] w-full"
        style={{ background: "linear-gradient(rgb(170, 110, 1) 0%, rgb(141, 89, 0) 100%)" }}
      />

      {IMAGES.map((src, i) => {
        let offset = (((i - active) % count) + count) % count;
        if (offset > count / 2) offset -= count;
        const isActive = offset === 0;
        const distance = Math.abs(offset);

        return (
          <div
            key={src}
            className="absolute"
            style={{
              width: 295,
              height: 370,
              top: 23,
              left: "50%",
              marginLeft: -147.5,
              transform: `translateX(${offset * 280}px) scale(${isActive ? 1 : 0.82})`,
              opacity: distance >= 2 ? 0 : 1,
              zIndex: 100 - distance * 10,
              transition: TRANSITION,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            <div
              className="pointer-events-none absolute"
              style={{
                inset: -4,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                opacity: isActive ? 1 : 0,
                transition: TRANSITION,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              draggable={false}
              src={src}
              className="pointer-events-none absolute inset-0 h-full w-full rounded object-cover shadow-xs select-none"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${isActive ? 0 : 0.2})`,
                transition: TRANSITION,
              }}
            />
          </div>
        );
      })}

      <div className="absolute bottom-[2px] left-1/2 z-[200] flex -translate-x-1/2 items-center gap-1">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Đi tới banner ${i + 1}`}
            onClick={() => setActive(i)}
            className="h-1 rounded-[9px]"
            style={{
              width: i === active ? 20 : 12,
              backgroundColor: i === active ? "#aa6e00" : "#d4d4d3",
              transition: `width 320ms ${EASE}, background-color 320ms ${EASE}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
