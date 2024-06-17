// import React from 'react'
// import OurProductsStyle from "../OurProducts/OurProducts.module.css"
// import GlobalModuleCss from "../GlobalCss/global.module.css"
// import MediaStyle from "../GlobalCss/Media/media.css"
// import product1 from "../../Images/OurProducts/img6.png"
// import product2 from "../../Images/OurProducts/img2.png"
// import product3 from "../../Images/OurProducts/img3.png"
// import { LuEye } from "react-icons/lu";
// import { CiHeart } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import firebase from 'firebase/app';
// import { useState } from 'react'

import React from "react";
import products from "../../Server/Products";

const ProductList = () => {
  console.log("salam")
  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
