import React from 'react'
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import firebase from 'firebase/app';
import { useState } from 'react'
import products from "../../Server/Products";
import Raiting from "./Raiting"
import WishProduct from "./WishProducts"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";




const ProductList = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={OurProductsStyle.rectangle}>
        <div className={OurProductsStyle.red}></div>
        <h1 className={`${GlobalModuleCss.fontPoppins} ${OurProductsStyle.rectangleText}`}>{t("Our Products")}</h1>
      </div>

      <div className="section-our-products">
        <div className="section-ourProducts">
          <h1 className={OurProductsStyle.sectionProductsText} id='section-products-text'>{t("Explore Our Products")}</h1>
        </div>
      </div>

      <div className={OurProductsStyle.products}>
        {products.map((product) => (
          <div key={product.id} id='productMobCodes'>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product.image} alt={product.name} className={OurProductsStyle.imageItem} />
              </div>

              <div className={OurProductsStyle.iconsBox} id='prod-icon1'>

                <WishProduct />
                {/* <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} /> */}

               
                <Link to="/ProductView"> <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`}  /></Link>

              </div>

              <button className={OurProductsStyle.addToCart}>{t("Add To Cart")}</button>
            </div>

            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">{product.name}</h1>
            </div>


            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>${product.price}</p>
              </div>

              <div className='stars-product'>
                <Raiting />
              </div>


              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={OurProductsStyle.viewAllProducts}>
        <button className={OurProductsStyle.viewButton}>{t("View Products All")}</button>
      </div>

    </div>


  );
};

export default ProductList;
