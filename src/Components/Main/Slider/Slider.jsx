import React from 'react'
import SliderStyle from "../Slider/Slider.module.css";
import appleImg from "../../../Images/MainImages/Apple_logo.png"
import iphoneImg from "../../../Images/MainImages/iphone.jpg"
import GlobalModuleCss from "../../GlobalCss/global.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    return (
            <div className={SliderStyle.slider}>
                <div className={SliderStyle.sliderLeftItems}>
                    <div className={SliderStyle.sliderLeftFirstItems}>
                        <img src={appleImg} alt="photo" />
                        <p className={`${SliderStyle.phoneModel} ${GlobalModuleCss.fontPopppins}`}>iPhone 14 Series</p>
                    </div>

                    <div className={SliderStyle.saleInfo}>
                        <h1 className={`${SliderStyle.phoneAbout} ${GlobalModuleCss.fontInter}`}>Up to 10% off Voucher</h1>
                    </div>

                    <div className={SliderStyle.shopNowIphone}>
                        <div className={SliderStyle.shop}>
                        <p className={`${SliderStyle.shopText} ${GlobalModuleCss.fontPopppins}`}>Shop Now</p>
                        </div>
                       
                        <FontAwesomeIcon icon={faArrowRight}  className={SliderStyle.rightIcon}/>
                    </div>
                </div>

                <div className="slider-right-items">
                    <img src={iphoneImg} alt="" className={SliderStyle.sliderImg} />
                </div>

            </div>
    )
}

export default Slider