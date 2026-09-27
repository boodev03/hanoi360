"use client";

import { usePathname, useRouter } from "next/navigation";
import { GuideIcon, HomeIcon, MapIcon, SavedIcon, SupportIcon } from "./icons";

const NAV_ITEMS = [
  { key: "home", label: "Trang chủ", Icon: HomeIcon, href: "/home" },
  { key: "map", label: "Bản đồ", Icon: MapIcon, href: null },
  { key: "guide", label: "Cẩm nang", Icon: GuideIcon, href: "/cam-nang" },
  { key: "saved", label: "Đã lưu", Icon: SavedIcon, href: "/da-luu" },
  { key: "support", label: "Hỗ trợ", Icon: SupportIcon, href: "/ho-tro" },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-start justify-between rounded-t-2xl bg-white px-6 pt-3"
      style={{
        paddingBottom: "12px",
        boxShadow: "0 -8px 24px rgba(0,0,0,0.08)",
      }}
    >
      {NAV_ITEMS.map(({ key, label, Icon, href }) => {
        const isActive = href ? pathname === href : false;
        const color = isActive ? "text-[#aa6e00]" : "text-[#58585c]";
        return (
          <button
            key={key}
            type="button"
            onClick={() => href && router.push(href)}
            className={`flex flex-col items-center gap-1 ${color}`}
          >
            <Icon className="h-7 w-7" filled={isActive} />
            <span className={`text-[11px] ${isActive ? "font-medium text-[#9e6c1a]" : ""}`}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
