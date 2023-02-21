import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities);

  function handleResturantSubmit(name){
    dispatch(restaurantAdded(name))
  }
  return (
    <div>
      <RestaurantInput handleResturantSubmit={handleResturantSubmit}/>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
