import Link from "next/link";
import { ArrowRightIcon, DecorationLineIcon, FlowerIcon } from "./icons";

export function HistoryBanner() {
  return (
    <section className="relative mx-3 h-36.5 overflow-hidden text-[#ddb86b]">
      <div className="absolute inset-x-0 bottom-0 h-25 bg-[#863800]" />

      <div className="relative flex h-full items-stretch p-0.75">
        <div className="h-full w-34 shrink-0 overflow-hidden rounded-[5px] rounded-tr-[69px] bg-[#02D5BF]">
          <img
            src="/home/van-mieu-decor.png"
            alt=""
            className="h-full w-full select-none object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 pl-0.5 pt-3">
          <div className="flex items-center justify-end gap-2.75">
            <span className="text-sm font-semibold leading-none text-[#863F00]">
              Ngược Dòng Thời Gian
            </span>
            <Link
              href="/di-tich"
              className="grid h-7 w-12.5 place-items-center rounded-[60px] border border-[#863F00] text-[#863F00]"
              aria-label="Khám phá"
            >
              <ArrowRightIcon className="h-3 w-4.5" />
            </Link>
          </div>
          <h2 className="relative left-2 text-xl font-bold leading-6">
            Khám Phá Trọn Vẹn Lịch Sử Hà Nội
          </h2>

          <div className="mt-auto flex items-center gap-0.5 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) =>
              i % 2 === 0 ? (
                <div
                  key={i}
                  className="grid size-7.5 shrink-0 place-items-center rounded-[5px] bg-[#00D5C0] p-0.75 text-[#863F00]"
                >
                  <FlowerIcon className="size-6.5" />
                </div>
              ) : (
                <div
                  key={i}
                  className="h-7.5 min-w-0 flex-1 overflow-hidden rounded-[5px] bg-[#00D5C0] p-0.75 text-[#863F00]"
                >
                  <DecorationLineIcon className="h-full w-full" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
