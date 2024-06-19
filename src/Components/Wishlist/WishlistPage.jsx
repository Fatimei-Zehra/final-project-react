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
// import product2 from "../../Images/OurProducts/img2.png"
// import product3 from "../../Images/OurProducts/img3.png"

// function WishlistPage() {
//     return (
//         <div className={wishlistStyle.wishlist}>
//             <div className="container">
//                 <div className={wishlistStyle.wishlistItems}>
//                     <p className={wishlistStyle.wishlistCount}>Wishlist (4)</p>
//                     <button className={wishlistStyle.wishlistAddToBag}>Move All To Bag</button>
//                 </div>

//                 <div className={wishlistStyle.wishlistProducts}>
//                     <div className={wishlistStyle.productItems}>
//                         <div className={wishlistStyle.productBg}>
//                             <div className={wishlistStyle.productImg}>
//                                 <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                             </div>
//                             <div className={wishlistStyle.iconsBox}>
//                                 <RiDeleteBin6Line className={`${wishlistStyle.svg} ${wishlistStyle.svgBin}`} />
//                             </div>
//                             <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                         </div>
//                         <div className="product-about">
//                             <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                         </div>

//                         <div className={wishlistStyle.priceStar}>
//                             <div className="price-product">
//                                 <p className={wishlistStyle.productPrice}>$124</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={wishlistStyle.productItems}>
//                         <div className={wishlistStyle.productBg}>
//                             <div className={wishlistStyle.productImg}>
//                                 <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                             </div>
//                             <div className={wishlistStyle.iconsBox}>
//                                 <RiDeleteBin6Line className={`${wishlistStyle.svg} ${wishlistStyle.svgBin}`} />
//                             </div>
//                             <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                         </div>
//                         <div className="product-about">
//                             <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                         </div>

//                         <div className={wishlistStyle.priceStar}>
//                             <div className="price-product">
//                                 <p className={wishlistStyle.productPrice}>$124</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={wishlistStyle.productItems}>
//                         <div className={wishlistStyle.productBg}>
//                             <div className={wishlistStyle.productImg}>
//                                 <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                             </div>
//                             <div className={wishlistStyle.iconsBox}>
//                                 <RiDeleteBin6Line className={`${wishlistStyle.svg} ${wishlistStyle.svgBin}`} />
//                             </div>
//                             <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                         </div>
//                         <div className="product-about">
//                             <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                         </div>

//                         <div className={wishlistStyle.priceStar}>
//                             <div className="price-product">
//                                 <p className={wishlistStyle.productPrice}>$124</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={wishlistStyle.productItems}>
//                         <div className={wishlistStyle.productBg}>
//                             <div className={wishlistStyle.productImg}>
//                                 <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                             </div>
//                             <div className={wishlistStyle.iconsBox}>
//                                 <RiDeleteBin6Line className={`${wishlistStyle.svg} ${wishlistStyle.svgBin}`} />
//                             </div>
//                             <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                         </div>
//                         <div className="product-about">
//                             <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                         </div>

//                         <div className={wishlistStyle.priceStar}>
//                             <div className="price-product">
//                                 <p className={wishlistStyle.productPrice}>$124</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 <div className={wishlistStyle.justForYou}>
//                     <div className={wishlistStyle.rectangle}>
//                         <div className={wishlistStyle.rectangleJustForYou}>
//                             <div className={wishlistStyle.red}></div>
//                             <h1 className={`${GlobalModuleCss.fontPoppins} ${wishlistStyle.rectangleText}`}>Just For You</h1>
//                         </div>
//                         <button className={wishlistStyle.justForYouBtn}>See All</button>
//                     </div>


//                     <div className={wishlistStyle.wishlistProducts}>
//                         <div className={wishlistStyle.productItems}>
//                             <div className={wishlistStyle.productBg}>
//                                 <div className={wishlistStyle.productImg}>
//                                     <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                                 </div>
//                                 <div className={wishlistStyle.iconsBox}>
//                                 <LuEye className={`${wishlistStyle.svg} ${wishlistStyle.svgEyes}`}/>
//                                 </div>
//                                 <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                             </div>
//                             <div className="product-about">
//                                 <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                             </div>

//                             <div className={wishlistStyle.priceStar}>
//                                 <div className="price-product">
//                                     <p className={wishlistStyle.productPrice}>$124</p>
//                                 </div>

//                                 <div className='stars-product'>
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                 </div>

//                                 <div className={wishlistStyle.quanlity}>
//                                     <p>(38)</p>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className={wishlistStyle.productItems}>
//                             <div className={wishlistStyle.productBg}>
//                                 <div className={wishlistStyle.productImg}>
//                                     <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                                 </div>
//                                 <div className={wishlistStyle.iconsBox}>
//                                 <LuEye className={`${wishlistStyle.svg} ${wishlistStyle.svgEyes}`}/>
//                                 </div>
//                                 <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                             </div>
//                             <div className="product-about">
//                                 <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                             </div>

//                             <div className={wishlistStyle.priceStar}>
//                                 <div className="price-product">
//                                     <p className={wishlistStyle.productPrice}>$124</p>
//                                 </div>

//                                 <div className='stars-product'>
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                 </div>

//                                 <div className={wishlistStyle.quanlity}>
//                                     <p>(38)</p>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className={wishlistStyle.productItems}>
//                             <div className={wishlistStyle.productBg}>
//                                 <div className={wishlistStyle.productImg}>
//                                     <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                                 </div>
//                                 <div className={wishlistStyle.iconsBox}>
//                                 <LuEye className={`${wishlistStyle.svg} ${wishlistStyle.svgEyes}`}/>
//                                 </div>
//                                 <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                             </div>
//                             <div className="product-about">
//                                 <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                             </div>

//                             <div className={wishlistStyle.priceStar}>
//                                 <div className="price-product">
//                                     <p className={wishlistStyle.productPrice}>$124</p>
//                                 </div>

//                                 <div className='stars-product'>
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                 </div>

//                                 <div className={wishlistStyle.quanlity}>
//                                     <p>(38)</p>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className={wishlistStyle.productItems}>
//                             <div className={wishlistStyle.productBg}>
//                                 <div className={wishlistStyle.productImg}>
//                                     <img src={product1} alt="photo" className={wishlistStyle.imageItem} />
//                                 </div>
//                                 <div className={wishlistStyle.iconsBox}>
//                                 <LuEye className={`${wishlistStyle.svg} ${wishlistStyle.svgEyes}`}/>
//                                 </div>
//                                 <button className={wishlistStyle.addToCart}>Add To Cart</button>
//                             </div>
//                             <div className="product-about">
//                                 <h1 className={wishlistStyle.productAboutText}>Havic HV G-92 Gamepad</h1>
//                             </div>

//                             <div className={wishlistStyle.priceStar}>
//                                 <div className="price-product">
//                                     <p className={wishlistStyle.productPrice}>$124</p>
//                                 </div>

//                                 <div className='stars-product'>
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                     <FaStar className={wishlistStyle.star} />
//                                 </div>

//                                 <div className={wishlistStyle.quanlity}>
//                                     <p>(38)</p>
//                                 </div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WishlistPage




const Wishlist = ({ wishlist }) => {
  if (!wishlist || wishlist.length === 0) {
    return (
      <div className={wishlistStyle.wishlist}>
        <h2>Wishlist</h2>
        <p>Your wishlist is empty.</p>
      </div>
    );
  }


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
