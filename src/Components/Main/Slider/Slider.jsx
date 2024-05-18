import React from 'react'
import SliderStyle from "../Slider/Slider.module.css";
import MediaStyle from "../../GlobalCss/Media/media.css"
import appleImg from "../../../Images/MainImages/Apple_logo.png"
import iphoneImg from "../../../Images/MainImages/iphone.jpg"
import GlobalModuleCss from "../../GlobalCss/global.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Slider() {
    return (
            <div className={SliderStyle.slider} id='slider'>
                <div className={SliderStyle.sliderLeftItems} id='slider-left-items'>
                    <div className={SliderStyle.sliderLeftFirstItems}>
                        <img src={appleImg} alt="photo"  id='img-logo'/>
                        <p className={`${SliderStyle.phoneModel} ${GlobalModuleCss.fontPopppins}`} id='phone-series'>iPhone 14 Series</p>
                    </div>

                    <div className={SliderStyle.saleInfo}>
                        <h1 className={`${SliderStyle.phoneAbout} ${GlobalModuleCss.fontInter}`} id='about-sale'>Up to 10% <br /> off Voucher</h1>
                    </div>

                    <div className={SliderStyle.shopNowIphone}>
                        <div className={SliderStyle.shop}>
                        <p className={`${SliderStyle.shopText} ${GlobalModuleCss.fontPopppins}`} id='shop-now'>Shop Now</p>
                        </div>
                       
                        <FontAwesomeIcon icon={faArrowRight}  className={SliderStyle.rightIcon}/>
                    </div>
                </div>

                <div className={SliderStyle.sliderRightItems} id='slider-right-items'>
                    <img src={iphoneImg} alt="" className={SliderStyle.sliderImg} id='phone-model' />
                </div>

            </div>
    )
}

export default Slider



// import React from "react";
// import Sliderstyles from "../Slider/Slider.module.css";
// import IphoneLogo from "../../../Images/MainImages/Apple_logo.png";
// import Iphone14Pro from "../../../Images/MainImages/iphone.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// function Slider() {
//   return (
//     <div>
//       <div className={Sliderstyles.sliderBackground}>
//         <div className={Sliderstyles.allbox}>
//           <div>
//             <div className={Sliderstyles.a}>
//               <img src={IphoneLogo} alt="" />
//               <p className={Sliderstyles.IphoneSeria}>iPhone 14 Series</p>
//             </div>
//             <p className={Sliderstyles.iphoneUP}>
//               Up to 10% <br /> off Voucher
//             </p>
//             <a className={Sliderstyles.Now} href="#">
//               Shop Now
//               <span>
//                 <FontAwesomeIcon icon={faArrowRight} className={Sliderstyles.NowIconRight} />
//               </span>
//             </a>
//           </div>
//           <div className="pt-10">
//             <img src={Iphone14Pro} alt="" />
//           </div>
//         </div>
//         <div className="flex gap-3 justify-center items-center    ">
//             <span className={Sliderstyles.round}></span>
//             <span className={Sliderstyles.round}></span>
//             <span className={Sliderstyles.round}></span>
//             <span className={Sliderstyles.round}></span>
//             <span className={Sliderstyles.round}></span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slider;