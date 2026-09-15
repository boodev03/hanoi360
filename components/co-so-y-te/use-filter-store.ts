import { create } from "zustand";

export type FacilityFilterKey = "open-now" | "24-7";

type FilterStore = {
  filters: Set<FacilityFilterKey>;
  toggleFilter: (key: FacilityFilterKey) => void;
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
