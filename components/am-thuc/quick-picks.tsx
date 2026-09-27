"use client";

import Image from "next/image";
import { useState } from "react";

const PICKS = [
  { label: "Đồ uống", photo: "/am-thuc/quick-picks/do-uong.png" },
  { label: "Cơm", photo: "/am-thuc/quick-picks/com.jpg" },
  { label: "Phở", photo: "/am-thuc/quick-picks/pho.png" },
  { label: "Bún", photo: "/am-thuc/quick-picks/bun.png" },
  { label: "Bánh mỳ", photo: "/am-thuc/quick-picks/banh-mi.png" },
];

export function QuickPicks() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex gap-5 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {PICKS.map((pick) => {
        const isActive = selected === pick.label;
        return (
          <button
            key={pick.label}
            type="button"
            onClick={() => setSelected(isActive ? null : pick.label)}
            className="flex shrink-0 flex-col items-center gap-2"
          >
            <div className="grid size-18 shrink-0 place-items-center">
              <div
                className={`grid place-items-center ${
                  isActive ? "size-18 bg-[#AA6E00] p-0.5" : "size-17 bg-transparent"
                }`}
              >
                <div className={`size-full rounded-lg bg-white ${isActive ? "p-[5px]" : ""}`}>
                  <div className="relative size-full overflow-hidden rounded-lg">
                    <Image src={pick.photo} alt="" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <span
              className="text-center text-xs leading-none text-[#27314D]"
              style={{ fontWeight: isActive ? 600 : 400 }}
            >
              {pick.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
