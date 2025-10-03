import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantItemList = ({ items, dummy }) => {

  const dispatch = useDispatch();

  const handleAddItem=(item)=>{
   // Dispatch an action
dispatch(addItem(item));
// {
  //when it will dispatch action , it will go with this in reducer action.payload-cartSlice
//   payload:"pizza"/"item"
// }

  }
  return (
    <div>
      {items.map((item) => (
        <div
        data-testid="fooditems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {(item.card.info.defaultPrice ?? item.card.info.price ?? 0) /
                  100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" 
              onClick={()=>handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemList;
