import { create } from "zustand";

type FilterStore = {
  discountOnly: boolean;
  cuisines: Set<string>;
  toggleDiscount: () => void;
  toggleCuisine: (cuisine: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  discountOnly: false,
  cuisines: new Set(),
  toggleDiscount: () => set((state) => ({ discountOnly: !state.discountOnly })),
  toggleCuisine: (cuisine) =>
    set((state) => {
      const next = new Set(state.cuisines);
      if (next.has(cuisine)) next.delete(cuisine);
      else next.add(cuisine);
      return { cuisines: next };
    }),
}));

export const useHasActiveFilters = () => useFilterStore((state) => state.discountOnly || state.cuisines.size > 0);
