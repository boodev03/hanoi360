import Image from "next/image";
import type { ReactNode } from "react";

export type DetailTextPart = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export type DetailBlock =
  | { type: "text"; parts: DetailTextPart[] }
  | { type: "list"; ordered?: boolean; items: DetailTextPart[][] }
  | { type: "image"; src: string; alt?: string }
  | { type: "vr"; src: string; title?: string };

function renderParts(parts: DetailTextPart[]) {
  return parts.map((part, index) => {
    let node: ReactNode = part.text;
    if (part.bold) node = <strong className="leading-6 font-semibold">{node}</strong>;
    if (part.italic) node = <em>{node}</em>;
    return <span key={index}>{node}</span>;
  });
}

export function DetailContent({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <div className="flex flex-col gap-4 px-3 pb-8">
      {blocks.map((block, index) => {
        if (block.type === "image") {
          return (
            <div key={index} className="relative h-[236px] w-full overflow-hidden bg-[#f3f3f3]">
              <Image
                src={block.src}
                alt={block.alt ?? ""}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          );
        }

        if (block.type === "vr") {
          return (
            <div key={index}>
              <h2 className="text-base font-semibold text-[#252525]">{block.title ?? "Tour VR 360°"}</h2>
              <div className="mt-3 h-[236px] w-full overflow-hidden rounded-lg bg-[#f3f3f3]">
                <iframe
                  src={block.src}
                  title={block.title ?? "Tour VR 360°"}
                  className="h-full w-full border-0"
                  allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`flex flex-col gap-1.5 pl-5 text-base leading-[22px] text-[#19264E] ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderParts(item)}</li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={index} className="text-base leading-[22px] text-[#19264E]">
            {renderParts(block.parts)}
          </p>
        );
      })}
    </div>
  );
}
