"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckIcon, CloseIcon } from "../home/icons";
import { useFilterStore } from "./use-filter-store";

const CUISINES = ["Ấn Độ", "Hàn Quốc", "Hi Lạp", "Hồng Kông", "Nhật Bản", "Parkistan", "Singapore", "Thái Lan", "Trung Quốc"];

function FilterRow({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-3 border-b border-[#ececec] py-3.5 text-left last:border-b-0"
    >
      <span className="text-sm text-[#252525]">{label}</span>
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border transition-colors"
        style={{
          borderColor: checked ? "#aa6e00" : "#c7c7c6",
          backgroundColor: checked ? "#aa6e00" : "transparent",
        }}
      >
        {checked && <CheckIcon className="h-3.5 w-3.5 text-white" />}
      </span>
    </button>
  );
}

export function FilterSheet({ onClose }: { onClose: () => void }) {
  const discountOnly = useFilterStore((state) => state.discountOnly);
  const cuisines = useFilterStore((state) => state.cuisines);
  const toggleDiscount = useFilterStore((state) => state.toggleDiscount);
  const toggleCuisine = useFilterStore((state) => state.toggleCuisine);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(raf);
    };
  }, []);

  const hasSelection = discountOnly || cuisines.size > 0;

  const dismiss = (after: () => void) => {
    setEntered(false);
    window.setTimeout(after, 300);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-white transition-transform duration-300 ease-out"
      style={{ transform: entered ? "translateY(0)" : "translateY(100%)" }}
    >
      <div
        className="flex h-14 shrink-0 items-center justify-between border-b border-[#ececec] px-4"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <button
          type="button"
          onClick={() => dismiss(onClose)}
          aria-label="Đóng"
          className="flex h-9 w-9 items-center justify-center"
          style={{ color: "#252525" }}
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <button
          type="button"
          disabled={!hasSelection}
          onClick={() => dismiss(onClose)}
          className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: hasSelection ? "#aa6e00" : "#f3f3f3",
            color: hasSelection ? "#f3ebd9" : "#a8a8a7",
          }}
        >
          Áp dụng
        </button>
      </div>

      <div
        className="flex-1 overflow-y-auto px-4 pb-6"
        style={{ paddingBottom: "calc(24px + env(safe-area-inset-bottom))" }}
      >
        <h3 className="pt-5 pb-1 text-sm font-semibold text-[#aa6e00]">Ưu đãi</h3>
        <FilterRow label="Có mã giảm giá" checked={discountOnly} onToggle={toggleDiscount} />

        <h3 className="pt-5 pb-1 text-sm font-semibold text-[#aa6e00]">Ẩm thực thế giới</h3>
        {CUISINES.map((cuisine) => (
          <FilterRow
            key={cuisine}
            label={cuisine}
            checked={cuisines.has(cuisine)}
            onToggle={() => toggleCuisine(cuisine)}
          />
        ))}
      </div>
    </div>,
    document.body,
  );
}
