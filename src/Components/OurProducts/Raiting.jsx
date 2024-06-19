import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductRating = () => {
  const [rating, setRating] = useState(0); // State to store the current rating

  const handleRatingClick = (value) => {
    // Update the rating state when a star is clicked
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleRatingClick(ratingValue)}
            color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
            size={18}
            style={{ cursor: 'pointer' }}
          />
        );
      })}
    </div>
  );
};

export default ProductRating;
