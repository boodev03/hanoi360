import Image from "next/image";

const PICKS = [
  { label: "Đồ uống", photo: "/am-thuc/quick-picks/do-uong.png" },
  { label: "Cơm", photo: "/am-thuc/quick-picks/com.jpg" },
  { label: "Phở", photo: "/am-thuc/quick-picks/pho.png" },
  { label: "Bún", photo: "/am-thuc/quick-picks/bun.png" },
  { label: "Bánh mỳ", photo: "/am-thuc/quick-picks/banh-mi.png" },
];

export function QuickPicks() {
  return (
    <div className="flex gap-5 overflow-x-auto px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {PICKS.map((pick) => (
        <button key={pick.label} type="button" className="flex shrink-0 flex-col items-center gap-2">
          <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-[#f3f3f3]">
            <Image src={pick.photo} alt="" fill className="object-cover" />
          </div>
          <span className="text-xs text-[#58585c]">{pick.label}</span>
        </button>
      ))}
    </div>
  );
}
