"use client";

import { CardItem } from "../shared/card-item";
import { RESTAURANTS } from "./restaurants";

export function RestaurantList() {
  return (
    <div className="flex flex-col gap-1 px-4 pb-6">
      {RESTAURANTS.map((restaurant) => (
        <CardItem
          key={restaurant.id}
          layout="horizontal"
          item={restaurant}
          savedKey={`restaurant:${restaurant.id}`}
          href={`/am-thuc/${restaurant.id}`}
          directionsIconClassName="text-[#727273]"
        />
      ))}
    </div>
  );
}
