import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// THIS FILE CONSITS OF CODE FOR RATING IN TERMS OF STARS
// IT SHOWS RATING OF PRODUCTS AND HELPS US TO CHOOSE WHICH PRODUCT IS BETTER

const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#f21170" : "grey"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <div>rating: {rating}.0</div>
    </div>
  );
};

export default StarRating;
