import Image from "next/image";
import { SearchIcon } from "./icons";

export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 flex items-end gap-2 bg-gradient-to-b from-[#ddb86b] to-[#aa6e00] px-4 pb-3"
      style={{ paddingTop: "calc(2rem + env(safe-area-inset-top))" }}
    >
      <Image src="/onboarding/logo.svg" alt="Hanoi 360" width={48} height={48} className="shrink-0" />

      <div className="flex h-10 flex-1 items-center gap-3 rounded bg-white px-2 shadow-[0px_4px_4px_rgba(0,0,0,0.09)]">
        <SearchIcon className="h-5 w-5 shrink-0 text-[#58585c]" />
        <span className="truncate text-xs leading-[15px] text-[#58585c]/70">Tìm địa điểm bạn muốn đến</span>
      </div>

      <button
        type="button"
        className="flex h-8 shrink-0 items-center justify-center rounded border border-white/70 px-3 text-sm font-medium text-white"
      >
        VNE
      </button>
    </header>
  );
}
