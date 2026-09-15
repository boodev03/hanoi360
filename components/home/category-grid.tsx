"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  { label: "Di tích lịch sử", icon: "/home/categories/di-tich.svg", href: "/di-tich" },
  { label: "Ẩm thực", icon: "/home/categories/am-thuc.svg", href: "/am-thuc" },
  { label: "Bảo tàng", icon: "/home/categories/bao-tang.svg", href: "/bao-tang" },
  { label: "Làng nghề", icon: "/home/categories/lang-nghe.svg", href: "/lang-nghe" },
  { label: "Giải trí", icon: "/home/categories/giai-tri.svg", href: "/giai-tri" },
  { label: "Vui chơi", icon: "/home/categories/vui-choi.svg", href: "/vui-choi" },
  { label: "Mua sắm", icon: "/home/categories/mua-sam.svg", href: "/mua-sam" },
  { label: "Cơ sở Y tế", icon: "/home/categories/co-so-y-te.svg", href: "/co-so-y-te" },
];

export function CategoryGrid() {
  const router = useRouter();

  return (
    <div className="relative grid grid-cols-4 gap-x-2 gap-y-4 px-3">
      <div className="pointer-events-none absolute inset-x-3 top-0 bottom-0">
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#d6d6d6]" />
        <span className="absolute top-0 bottom-0 left-1/4 w-px -translate-x-1/2 bg-[#d6d6d6]" />
        <span className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-[#d6d6d6]" />
        <span className="absolute top-0 bottom-0 left-3/4 w-px -translate-x-1/2 bg-[#d6d6d6]" />

        <span className="absolute top-1/2 left-1/4 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#d6d6d6]" />
        <span className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#d6d6d6]" />
        <span className="absolute top-1/2 left-3/4 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#d6d6d6]" />
      </div>

      {CATEGORIES.map((category) => (
        <button
          key={category.label}
          type="button"
          onClick={() => category.href && router.push(category.href)}
          className="flex flex-col items-center gap-2 active:opacity-70"
        >
          <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-lg">
            <Image src={category.icon} alt="" width={72} height={72} className="h-full w-full object-contain" />
          </div>
          <span className="text-center text-xs leading-tight text-[#252525]">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
