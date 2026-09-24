import { SearchIcon } from "../home/icons";

type SearchBarProps = {
  placeholder: string;
  onClick?: () => void;
};

export function SearchBar({ placeholder, onClick }: SearchBarProps) {
  return (
    <div className="bg-white px-4 py-3">
      <button
        type="button"
        onClick={onClick}
        className="flex h-12 w-full items-center gap-2.5 rounded border border-[#e5e5e4] bg-[#E3E2E0] px-4 transition-transform active:scale-[0.98]"
      >
        <SearchIcon className="h-4 w-4 shrink-0 text-[#58585c]" />
        <span className="flex-1 truncate text-left text-sm text-[#58585c]/70">{placeholder}</span>
      </button>
    </div>
  );
}
