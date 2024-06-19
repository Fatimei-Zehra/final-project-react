import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import OurProductsStyle from "../OurProducts/OurProducts.module.css"




const HeartIconToggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state on click
  };

  return (
    <div>
      {isClicked ? (
        <IoMdHeart 
          onClick={handleClick}
          color="red"
          size={30}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}    />
      ) : (
        <CiHeart
          onClick={handleClick}
          color="black"
          size={30}
          fontWeight={700}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}  />
      )}
    </div>
  );
};

export default HeartIconToggle;
