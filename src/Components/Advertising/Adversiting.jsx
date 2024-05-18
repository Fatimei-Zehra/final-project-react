import React from 'react'
// import imgFirst from "../../Images/Adversiting/Ellipse 23.png"
import imgSecond from "../../Images/Adversiting/Frame 694.png"
import AdvertisingStyle from "../Advertising/Adversiting.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"

function Adversiting() {
    return (
        <div className="container">
            <div className={AdvertisingStyle.sectionAdvertising} id='section-advertiising'>
                <div className={AdvertisingStyle.advertisingItems} id='advertising-item'>
                    <p className={`${AdvertisingStyle.categoriesText} ${GlobalModuleCss.fontPoppins}`} id='categories-title'>Categories</p>
                    <h2 className={`${AdvertisingStyle.aboutProduct} ${GlobalModuleCss.fontInter}`} id='about-product'>Enhance Your Music Experience</h2>

                    <div className={AdvertisingStyle.advertisingDate}  id='advertising-date'>
                        <div className={AdvertisingStyle.advertisingDateItems} id='days'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>05</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>Days</span>
                        </div>

                        <div className={AdvertisingStyle.advertisingDateItems} id='hours'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>23</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>Hours</span>
                        </div>

                        <div className={AdvertisingStyle.advertisingDateItems} id='minute'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>59</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>Minutes</span>
                        </div>

                        <div className={AdvertisingStyle.advertisingDateItems} id='second'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>35</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>Second</span>
                        </div>
                    </div>
                    <button className={AdvertisingStyle.advertisingBtn} id='advertising-btn'>Buy Now!</button>
                </div>

                <div className={AdvertisingStyle.advertisingProduct} id='advetising-product'>
                    {/* <img src={imgFirst} alt="" /> */}
                    <img src={imgSecond} className={AdvertisingStyle.secondProd} alt="" />
                </div>
            </div>         
        </div>

    )
}

export default Adversiting