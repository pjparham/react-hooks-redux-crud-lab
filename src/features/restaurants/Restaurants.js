import React from "react";
import Restaurant from "./Restaurant"

function Restaurants({ restaurants }) {
  const displayRestaurants = restaurants.map((restaurant) => {
    return <Restaurant restaurant={restaurant} key={restaurant.id}/>
  })
  return <ul>{displayRestaurants}</ul>;
}

export default Restaurants;
