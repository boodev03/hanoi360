import { CardItem } from "../shared/card-item";
import type { Museum } from "./museums";

export function MuseumList({ museums }: { museums: Museum[] }) {
  return (
    <div className="flex flex-col gap-4 px-4 pt-1 pb-6">
      {museums.map((museum) => (
        <CardItem
          key={museum.id}
          layout="vertical"
          item={{
            id: museum.id,
            name: museum.title,
            subtitle: museum.address,
            distance: museum.distance,
            photo: museum.image,
          }}
          savedKey={`museum:${museum.id}`}
          href={`/bao-tang/${museum.id}`}
        />
      ))}
    </div>
  );
}
