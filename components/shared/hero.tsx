import Image from "next/image";

type HeroProps = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  illustration?: string;
};

export function Hero({ title, gradientFrom, gradientTo, illustration }: HeroProps) {
  return (
    <div
      className="flex h-64.5 flex-col overflow-hidden rounded-b-[20px]"
      style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}
    >
      <div className="h-14 shrink-0" />

      <div className="relative flex-1">
        {illustration && (
          <Image
            src={illustration}
            alt=""
            width={393}
            height={174}
            className="absolute bottom-5 left-0 h-auto w-full"
            priority
          />
        )}
        <h1 className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[28px] leading-[40px] font-extrabold whitespace-pre-line text-white uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
