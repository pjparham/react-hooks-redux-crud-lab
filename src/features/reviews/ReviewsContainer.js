import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useDispatch, useSelector } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewsContainer({ restaurant }) {
  const dispatch = useDispatch()
  const reviews = useSelector((state) => state.reviews.entities);
  const restaurantReviews = reviews.filter((review) => review.restaurantId === restaurant.id)

  function handleReviewSubmit(comment){
    dispatch(reviewAdded({comment: comment, restaurantId: restaurant.id}))
  }

  return (
    <div>
      <ReviewInput restaurant={restaurant} handleReviewSubmit={handleReviewSubmit}/>
      <Reviews reviews={restaurantReviews} />
    </div>
  );
}

export default ReviewsContainer;
