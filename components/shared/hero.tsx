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
      className="flex h-[294px] flex-col overflow-hidden rounded-b-2xl"
      style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}
    >
      <div className="h-14 shrink-0" />

      <div className="relative flex-1">
        {illustration && <Image src={illustration} alt="" fill className="object-cover" priority />}
        <h1 className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[28px] leading-[1.1] font-extrabold whitespace-pre-line text-white uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
