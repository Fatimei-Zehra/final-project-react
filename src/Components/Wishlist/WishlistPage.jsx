import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import wishlistStyle from "../Wishlist/Wishlist.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import product1 from "../../Images/OurProducts/img6.png"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import { FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import products from "../../Server/Products";



const Wishlist = ({ wishlist }) => {
 
  return (
    <div className={wishlistStyle.wishlist}>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((productId) => {
          const product = products.find(p => p.id === productId);
          if (!product) return null; // Handle case where product is not found
          return (
            <li key={product.id}>
              <div>
                <img src={product.image} alt={product.name} className={wishlistStyle.imageItem} />
              </div>
              <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
