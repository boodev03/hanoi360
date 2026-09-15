import { create } from "zustand";

export type ExtraFilterKey = "discount" | "under-12" | "12-18" | "open-now";

type FilterStore = {
  filters: Set<ExtraFilterKey>;
  toggleFilter: (key: ExtraFilterKey) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filters: new Set(),
  toggleFilter: (key) =>
    set((state) => {
      const next = new Set(state.filters);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return { filters: next };
    }),
}));

export const useHasActiveFilters = () => useFilterStore((state) => state.filters.size > 0);
