import type { ReactNode } from "react";

type FilterSectionProps = {
  /** Tailwind gap-* class between filter items. */
  gapClassName?: string;
  children: ReactNode;
};

export function FilterSection({ gapClassName = "gap-2", children }: FilterSectionProps) {
  return (
    <div className="bg-white pt-2 pb-3 shadow-xs">
      <div className={`flex ${gapClassName} overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
        {children}
      </div>
    </div>
  );
}
