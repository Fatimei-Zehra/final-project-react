import React from 'react'
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import product1 from "../../Images/OurProducts/img6.png"
import product2 from "../../Images/OurProducts/img2.png"
import product3 from "../../Images/OurProducts/img3.png"
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import firebase from 'firebase/app';

import { useState } from 'react'


function Products() {
  const [favorites, setFavorites] = useState([]);


  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  return (
    <div className='container'>

      <div className={OurProductsStyle.rectangle}>
        <div className={OurProductsStyle.red}></div>
        <h1 className={`${GlobalModuleCss.fontPoppins} ${OurProductsStyle.rectangleText}`}>Our Products</h1>
      </div>

      <div className="section-our-products">
        <div className="section-ourProducts">
          <h1 className={OurProductsStyle.sectionProductsText} id='section-products-text'>Explore Our Products</h1>
        </div>


        <div className={OurProductsStyle.products}>
          {/* FIRST PRODUCT */}

          < div className={OurProductsStyle.productItems} >
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product1} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon1'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Havic HV G-92 Gamepad</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>

          {/* SECOND PRODUCT */}
          <div className={OurProductsStyle.productItems}>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product2} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon2'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>

          {/* THIRD PRODUCT */}
          <div className={OurProductsStyle.productItems}>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product3} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon3'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>

          {/* FOURST PRODUCT */}
          <div className={OurProductsStyle.productItems}>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product3} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon4'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>

          {/* FIVETH PRODUCT */}
          <div className={OurProductsStyle.productItems}>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product3} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon5'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>
          {/* SEXTH PRODUCT */}
          <div className={OurProductsStyle.productItems}>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product3} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon6'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>

          {/* SEVENTH PRODUCT */}
          <div className={OurProductsStyle.productItems} id='productItems7'>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product3} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon7'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>

          {/* EIGHTH PRODUCT */}
          <div className={OurProductsStyle.productItems} id='productItems8'>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product3} alt="photo" className={OurProductsStyle.imageItem} />
              </div>
              <div className={OurProductsStyle.iconsBox} id='prod-icon8'>
                <CiHeart className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
                <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} />
              </div>
              <button className={OurProductsStyle.addToCart}>Add To Cart</button>
            </div>
            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">Lorem ipsum dolor</h1>
            </div>

            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>$124</p>
              </div>

              <div className='stars-product'>
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
                <FaStar className={OurProductsStyle.star} />
              </div>

              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={OurProductsStyle.viewAllProducts}>
        <button className={OurProductsStyle.viewButton}>View All Products</button>
      </div>
    </div >
  )
}

export default Products

