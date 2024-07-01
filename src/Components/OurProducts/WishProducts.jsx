import React, { useState, useEffect,useRef } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { db } from "../../firebase/firebase";
import OurProductsStyle from "./OurProducts.module.css";
import products from "../../Server/Products";
import { setDoc, collection, addDoc } from "firebase/firestore";


const HeartIconToggle = () => {
  const [isClicked, setIsClicked] = useState(false);

//   const idRef = useRef(null);
//   const emailRef = useRef(null);
//   const priceRef = useRef(null);
//   const descriptionRef = useRef(null);

//   const clickProducts = async (e) => {
//     e.preventDefault();
//     const productId = idRef;
//     const productName = emailRef;
//     const productPrice = priceRef;
//     const productDescription = descriptionRef;

//     const productData = {
//       id: productId,
//       name: productName,
//       price: productPrice,
//       description: productDescription,
//     }

//     await addDoc(collection(db, "Wishlist"), productData);

const handleClick = () => {
    setIsClicked(!isClicked);
}
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {isClicked ? (
        <IoMdHeart
          color="red"
          size={30}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
        />
      ) : (
        <IoMdHeartEmpty
          color="black"
          size={30}
          fontWeight={700}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
        />
      )}
    </div>
  );
};

export default HeartIconToggle;









