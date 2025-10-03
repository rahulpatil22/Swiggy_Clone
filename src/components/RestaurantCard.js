import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { restData } = props;
  // console.log(restData)

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    restData?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[345px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>

      <h4>Rating: {avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};

export const withDiscountOffer = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
