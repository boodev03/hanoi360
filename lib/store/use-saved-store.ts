import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SavedStore = {
  savedIds: Record<string, boolean>;
  isSaved: (key: string) => boolean;
  toggleSaved: (key: string) => void;
};

export const useSavedStore = create<SavedStore>()(
  persist(
    (set, get) => ({
      savedIds: {},
      isSaved: (key) => Boolean(get().savedIds[key]),
      toggleSaved: (key) =>
        set((state) => {
          const savedIds = { ...state.savedIds };
          if (savedIds[key]) delete savedIds[key];
          else savedIds[key] = true;
          return { savedIds };
        }),
    }),
    { name: "hanoivibe-saved-places" },
  ),
);

/**
 * The persisted value only exists in localStorage, so the server always
 * renders "not saved". Ignoring the store until after the first client
 * render commits keeps that initial render in sync with the server HTML,
 * avoiding a hydration mismatch, then swaps in the real value right after.
 */
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function useIsSaved(key: string) {
  const saved = useSavedStore((state) => state.isSaved(key));
  return useHydrated() && saved;
}

export function useToggleSaved() {
  return useSavedStore((state) => state.toggleSaved);
}

export function useSavedKeys() {
  const savedIds = useSavedStore((state) => state.savedIds);
  const hydrated = useHydrated();
  if (!hydrated) return [];
  return Object.keys(savedIds);
}
