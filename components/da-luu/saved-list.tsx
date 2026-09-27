"use client";

import { useSavedKeys } from "@/lib/store/use-saved-store";
import { CardItem } from "../shared/card-item";
import { CheckIcon, SavedIcon } from "../home/icons";
import { parseDistanceMeters, resolveSavedItem, type SavedDisplayItem } from "./saved-items";
import type { FilterType, SortBy } from "./saved-toolbar";

function SavedCard({
  item,
  selectMode,
  selected,
  onToggleSelect,
}: {
  item: SavedDisplayItem;
  selectMode: boolean;
  selected: boolean;
  onToggleSelect: () => void;
}) {
  return (
    <div className="relative">
      <CardItem
        layout="vertical"
        item={{
          id: item.key,
          name: item.name,
          subtitle: item.subtitle,
          distance: item.distance,
          photo: item.photo,
        }}
        savedKey={item.key}
        href={selectMode ? undefined : item.href}
      />

      {selectMode && (
        <button
          type="button"
          onClick={onToggleSelect}
          aria-label="Chọn địa điểm"
          aria-pressed={selected}
          className="absolute inset-0 z-20"
        >
          <span
            className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: selected ? "#009b8c" : "rgba(255,255,255,0.9)" }}
          >
            {selected && <CheckIcon className="h-3.5 w-3.5 text-white" />}
          </span>
        </button>
      )}
    </div>
  );
}

export function SavedList({
  filterType,
  sortBy,
  selectMode,
  selectedKeys,
  onToggleSelect,
}: {
  filterType: FilterType;
  sortBy: SortBy;
  selectMode: boolean;
  selectedKeys: Set<string>;
  onToggleSelect: (key: string) => void;
}) {
  const keys = useSavedKeys();
  let items = keys.map(resolveSavedItem).filter((item) => item !== null);

  if (filterType !== "all") {
    items = items.filter((item) => item.type === filterType);
  }

  items =
    sortBy === "nearest"
      ? [...items].sort((a, b) => parseDistanceMeters(a.distance) - parseDistanceMeters(b.distance))
      : [...items].reverse();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 px-6 py-20 text-center">
        <SavedIcon className="h-9 w-9 text-[#c7c7c6]" />
        <p className="text-base font-semibold text-[#252525]">Chưa có địa điểm nào được lưu</p>
        <p className="text-sm text-[#58585c]">Nhấn biểu tượng bookmark trên một địa điểm để lưu lại tại đây.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-4 pt-1 pb-6">
      {items.map((item) => (
        <SavedCard
          key={item.key}
          item={item}
          selectMode={selectMode}
          selected={selectedKeys.has(item.key)}
          onToggleSelect={() => onToggleSelect(item.key)}
        />
      ))}
    </div>
  );
}
