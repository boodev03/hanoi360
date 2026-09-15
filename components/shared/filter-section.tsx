import type { ReactNode } from "react";

type FilterSectionProps = {
  /** Tailwind sticky offset class, e.g. "top-14", "top-32" — matches the page's header/hero height. */
  topClassName: string;
  /** Tailwind gap-* class between filter items. */
  gapClassName?: string;
  children: ReactNode;
};

export function FilterSection({ topClassName, gapClassName = "gap-2", children }: FilterSectionProps) {
  return (
    <div className={`sticky z-20 bg-white pt-5 pb-3 ${topClassName}`}>
      <div className={`flex ${gapClassName} overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
        {children}
      </div>
    </div>
  );
}
