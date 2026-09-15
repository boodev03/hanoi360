"use client";

import { useState } from "react";
import { useSavedKeys, useToggleSaved } from "@/lib/store/use-saved-store";
import { BottomNav } from "../home/bottom-nav";
import { SavedList } from "./saved-list";
import { SavedToolbar, type FilterType, type SortBy } from "./saved-toolbar";

export function DaLuuScreen() {
  const keys = useSavedKeys();
  const toggleSaved = useToggleSaved();

  const [filterType, setFilterType] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortBy>("recent");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const toggleSelectMode = () => {
    setSelectMode((v) => !v);
    setSelectedKeys(new Set());
  };

  const toggleSelectKey = (key: string) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const bulkRemove = () => {
    selectedKeys.forEach((key) => toggleSaved(key));
    setSelectedKeys(new Set());
    setSelectMode(false);
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div
          className="sticky top-0 z-20 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          style={{ paddingTop: "calc(16px + env(safe-area-inset-top))" }}
        >
          <h1 className="pb-3 text-center text-lg font-bold text-[#252525]">Đã lưu</h1>

          <SavedToolbar
            disabled={keys.length === 0}
            filterType={filterType}
            onFilterChange={setFilterType}
            sortBy={sortBy}
            onSortChange={setSortBy}
            selectMode={selectMode}
            onToggleSelectMode={toggleSelectMode}
            selectedCount={selectedKeys.size}
            onBulkRemove={bulkRemove}
          />
        </div>

        <SavedList
          filterType={filterType}
          sortBy={sortBy}
          selectMode={selectMode}
          selectedKeys={selectedKeys}
          onToggleSelect={toggleSelectKey}
        />
      </main>

      <BottomNav />
    </div>
  );
}
