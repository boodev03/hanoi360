import { SearchIcon } from "../home/icons";

type SearchBarProps = {
  placeholder: string;
  onClick?: () => void;
  /** True when the sticky header group is pinned to the top. */
  stuck?: boolean;
};

export function SearchBar({ placeholder, onClick, stuck = false }: SearchBarProps) {
  return (
    <div className={`mx-4 pb-0 transition-transform duration-200 ${stuck ? "" : "-mb-5 -translate-y-1/2"}`}>
      <button
        type="button"
        onClick={onClick}
        className={`flex h-10 w-full items-center gap-2.5 rounded border border-[#e5e5e4] px-4 transition-[background-color,box-shadow] duration-200 ${
          stuck ? "bg-[#E3E2E0]" : "bg-white shadow-[0px_4px_4px_0px_#00000017]"
        }`}
      >
        <SearchIcon className="h-4 w-4 shrink-0 text-[#58585c]" />
        <span className="flex-1 truncate text-left text-sm text-[#58585c]/70">{placeholder}</span>
      </button>
    </div>
  );
}
