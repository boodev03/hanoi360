"use client";

import Image from "next/image";
import Link from "next/link";
import { useSavedKeys, useToggleSaved } from "@/lib/store/use-saved-store";
import { BookmarkIcon, CheckIcon, NavigationIcon, PinIcon, SavedIcon } from "../home/icons";
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
  const toggleSaved = useToggleSaved();

  return (
    <div className="relative rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      {!selectMode && item.href && (
        <Link href={item.href} aria-label={item.name} className="absolute inset-0 z-[1] rounded-2xl" />
      )}

      <div className="relative">
        <div className="relative h-[150px] w-full overflow-hidden rounded-t-2xl bg-[#f3f3f3]">
          {item.photo ? (
            <Image src={item.photo} alt={item.name} fill className="object-cover" sizes="100vw" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#d6d6d6] to-[#ae996f]" />
          )}
        </div>

        {selectMode ? (
          <button
            type="button"
            onClick={onToggleSelect}
            aria-label="Chọn địa điểm"
            className="absolute top-3 left-3 z-10 flex h-6 w-6 items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: selected ? "#009b8c" : "rgba(255,255,255,0.9)" }}
          >
            {selected && <CheckIcon className="h-3.5 w-3.5 text-white" />}
          </button>
        ) : (
          <button
            type="button"
            aria-label="Chỉ đường"
            className="absolute right-3 -bottom-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf1db] text-[#aa6e00] shadow-md"
          >
            <NavigationIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="px-3 pt-3 pb-3">
        <p className="truncate text-[15px] font-semibold text-[#252525]">{item.name}</p>
        <p className="mt-0.5 truncate text-[13px] text-[#58585c]">{item.subtitle}</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-1 rounded-full bg-[#f3f3f3] px-2 py-1">
            <PinIcon className="h-3.5 w-3.5 text-[#58585c]" />
            <span className="text-[11px] text-[#58585c]">{item.distance}</span>
          </div>

          {!selectMode && (
            <button
              type="button"
              onClick={() => toggleSaved(item.key)}
              aria-label="Bỏ lưu"
              className="relative z-10 flex h-8 w-8 items-center justify-center text-[#aa6e00]"
            >
              <BookmarkIcon className="h-4 w-4" filled />
            </button>
          )}
        </div>
      </div>
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
