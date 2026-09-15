"use client";

import { useState } from "react";
import { InfoIcon, PhoneIcon, SettingsIcon } from "../home/icons";
import { BottomNav } from "../home/bottom-nav";
import { EmergencyTab } from "./emergency-tab";
import { LegalTab } from "./legal-tab";
import { SettingsTab } from "./settings-tab";

const TABS = [
  { key: "settings", label: "Cài đặt", Icon: SettingsIcon, color: "#7c6fc4" },
  { key: "emergency", label: "Khẩn cấp", Icon: PhoneIcon, color: "#009b8c" },
  { key: "legal", label: "Pháp lý", Icon: InfoIcon, color: "#aa6e00" },
] as const;

export function HoTroScreen() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("settings");

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div
          className="sticky top-0 z-20 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          style={{ paddingTop: "calc(16px + env(safe-area-inset-top))" }}
        >
          <h1 className="pb-3 text-center text-lg font-bold text-[#252525]">Hỗ trợ</h1>

          <div className="flex items-center justify-center gap-3 px-4 pb-3">
            {TABS.map(({ key, label, Icon, color }) => {
              const isActive = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className="flex flex-1 flex-col items-center gap-1 rounded-xl border px-2 py-2.5 transition-colors"
                  style={{
                    borderColor: isActive ? color : "#e5e5e4",
                    backgroundColor: isActive ? `${color}14` : "#ffffff",
                  }}
                >
                  <span style={{ color: isActive ? color : "#58585c" }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium" style={{ color: isActive ? color : "#58585c" }}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {tab === "settings" && <SettingsTab />}
        {tab === "emergency" && <EmergencyTab />}
        {tab === "legal" && <LegalTab />}
      </main>

      <BottomNav />
    </div>
  );
}
