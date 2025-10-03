import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const dummy = "Dummy Data";

  const restInfo = useRestaurantMenu(resID);

  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    restInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  const categories = cards.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines && cuisines.length > 0
          ? cuisines.join(", ")
          : "Cuisines not available"}{" "}
        - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          index={index}
          showItems={index === showIndex}
          setShowIndex={() => {
            setShowIndex((prevIndex) => (prevIndex === index ? null : index));
          }}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
