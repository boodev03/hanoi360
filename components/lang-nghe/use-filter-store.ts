import { create } from "zustand";

export type VillageFilterKey = "may-tre-non-mu" | "luong-thuc-thuc-pham" | "thu-cong-my-nghe" | "det-may-theu";

type FilterStore = {
  filters: Set<VillageFilterKey>;
  toggleFilter: (key: VillageFilterKey) => void;
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
