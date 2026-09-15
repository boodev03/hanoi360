import { create } from "zustand";

export type MuseumFilterKey = "culture-art" | "history-society" | "military-security" | "natural-science";

type FilterStore = {
  filters: Set<MuseumFilterKey>;
  toggleFilter: (key: MuseumFilterKey) => void;
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
