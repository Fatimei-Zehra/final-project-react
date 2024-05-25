import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import wishlistStyle from "../Wishlist/Wishlist.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import product1 from "../../Images/OurProducts/img6.png"
// import product2 from "../../Images/OurProducts/img2.png"
// import product3 from "../../Images/OurProducts/img3.png"

function WishlistPage() {
  return (
    <div className={wishlistStyle.wishlist}>
    <div className="container">
      <div className={wishlistStyle.wishlistItems}>
        <p className={wishlistStyle.wishlistCount}>Wishlist (4)</p>
        <button className={wishlistStyle.wishlistAddToBag}>Move All To Bag</button>
      </div>

      <div className={wishlistStyle.wishlistProducts}>
        <div className={wishlistStyle.productItems}>
          <div className={wishlistStyle.productBg}>
            <div className={wishlistStyle.productImg}>
              <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
            </div>
            <div className={wishlistStyle.iconsBox}>
              <RiDeleteBin6Line className={wishlistStyle.svg} />
            </div>
          </div>
          <div className="product-about">
            <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
          </div>

          <div className={wishlistStyle.priceStar}>
            <div className="price-product">
              <p className={wishlistStyle.productPrice}>$124</p>
            </div>
          </div>
        </div>


        <div className={wishlistStyle.productItems}>
          <div className={wishlistStyle.productBg}>
            <div className={wishlistStyle.productImg}>
              <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
            </div>
            <div className={wishlistStyle.iconsBox}>
              <RiDeleteBin6Line className={wishlistStyle.svg} />
            </div>
          </div>
          <div className="product-about">
            <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
          </div>

          <div className={wishlistStyle.priceStar}>
            <div className="price-product">
              <p className={wishlistStyle.productPrice}>$124</p>
            </div>
          </div>
        </div>


        <div className={wishlistStyle.productItems}>
          <div className={wishlistStyle.productBg}>
            <div className={wishlistStyle.productImg}>
              <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
            </div>
            <div className={wishlistStyle.iconsBox}>
              <RiDeleteBin6Line className={wishlistStyle.svg} />
            </div>
          </div>
          <div className="product-about">
            <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
          </div>

          <div className={wishlistStyle.priceStar}>
            <div className="price-product">
              <p className={wishlistStyle.productPrice}>$124</p>
            </div>
          </div>
        </div>


        <div className={wishlistStyle.productItems}>
          <div className={wishlistStyle.productBg}>
            <div className={wishlistStyle.productImg}>
              <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
            </div>
            <div className={wishlistStyle.iconsBox}>
              <RiDeleteBin6Line className={wishlistStyle.svg} />
            </div>
          </div>
          <div className="product-about">
            <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
          </div>

          <div className={wishlistStyle.priceStar}>
            <div className="price-product">
              <p className={wishlistStyle.productPrice}>$124</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WishlistPage