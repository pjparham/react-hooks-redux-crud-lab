import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch()
  function onDeleteClick(){
    dispatch(restaurantRemoved(restaurant.id))
  }


  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={onDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
}

export default Restaurant;
