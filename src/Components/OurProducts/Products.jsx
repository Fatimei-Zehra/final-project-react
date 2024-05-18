import React from 'react'
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import product1 from "../../Images/OurProducts/img6.png"
import product2 from "../../Images/OurProducts/img2.png"
import product3 from "../../Images/OurProducts/img3.png"
import product4 from "../../Images/OurProducts/img1.png"

function Products() {
  return (
    <div className='container'>
      <div className={OurProductsStyle.rectangle}>
        <div className={OurProductsStyle.red}></div>
        <h1 className={`${GlobalModuleCss.fontPoppins} ${OurProductsStyle.rectangleText}`}>Our Products</h1>
      </div>

         <div className="section-our-products">
            <div className="section-ourProducts">
                <h1 className={OurProductsStyle.sectionProductsText}>Explore Our Products</h1>
            </div>

            <div className={OurProductsStyle.products}>
              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>

              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>


              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>


              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>

              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>

              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>

              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>

              <div className='product-items'>
                <div className={OurProductsStyle.productBg}>
                  <div className={OurProductsStyle.productImg}>
                  <img src={product1} alt="photo" className={OurProductsStyle.imageItem}/>
                  </div>
                
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Products