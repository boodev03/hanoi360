import { NavigationIcon } from "../home/icons";

export function DirectionsButton({ query, className }: { query: string; className?: string }) {
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chỉ đường"
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EBD9] text-[#727273] ${className ?? ""}`}
    >
      <NavigationIcon className="h-5.25 w-5.25" />
    </a>
  );
}
