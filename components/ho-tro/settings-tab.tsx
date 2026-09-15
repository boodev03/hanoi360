"use client";

import { useState } from "react";
import { CheckIcon } from "../home/icons";
import { useGeoPermission } from "../home/use-geo-permission";

const LANGUAGES = [
  { key: "vi", label: "Vietnamese", enabled: true },
  { key: "en", label: "English", enabled: true },
  { key: "zh", label: "Chinese", enabled: false },
] as const;

function LocationToggle() {
  const { status, requestLocation } = useGeoPermission();
  const enabled = status === "granted";

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#252525]">Cho phép truy cập vị trí của bạn</p>
        <p className="mt-0.5 text-xs text-[#58585c]">Dùng để gợi ý các địa điểm gần bạn nhất</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label="Cho phép truy cập vị trí của bạn"
        onClick={() => !enabled && requestLocation()}
        className="relative h-6 w-11 shrink-0 rounded-full transition-colors"
        style={{ backgroundColor: enabled ? "#aa6e00" : "#d4d4d3" }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform"
          style={{ transform: enabled ? "translateX(22px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}

export function SettingsTab() {
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]["key"]>("vi");

  return (
    <div className="flex flex-col">
      <LocationToggle />

      <div className="mt-2 flex flex-col">
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.key;
          return (
            <button
              key={lang.key}
              type="button"
              disabled={!lang.enabled}
              onClick={() => setLanguage(lang.key)}
              className="flex items-center justify-between gap-2 border-b border-[#ececec] px-4 py-3.5 text-left last:border-b-0 disabled:opacity-40"
            >
              <span className="text-sm" style={{ color: isActive ? "#aa6e00" : "#252525", fontWeight: isActive ? 600 : 400 }}>
                {lang.label}
              </span>
              {isActive && <CheckIcon className="h-4 w-4 text-[#aa6e00]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
