import React from 'react'
import SliderStyle from "../Slider/Slider.module.css";
import MediaStyle from "../../GlobalCss/Media/media.css"
import appleImg from "../../../Images/MainImages/Apple_logo.png"
import iphoneImg from "../../../Images/MainImages/iphone.jpg"
import GlobalModuleCss from "../../GlobalCss/global.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const sliderData = [
//     {
//         logo: appleImg,
//         series: "iPhone 14 Series",
//         description: "Up to 10% off Voucher",
//         image: iphoneImg,
//     },
//     {
//         logo: appleImg,
//         series: "iPhone 15 Series",
//         description: "Up to 5% off Voucher",
//         image: iphoneImg,
//     },
//     {
//         logo: appleImg,
//         series: "iPhone New Series",
//         description: "Up to 0% off Voucher",
//         image: iphoneImg,
//     },
//     {
//         logo: appleImg,
//         series: "iPhone 11 Series",
//         description: "Up to 40% off Voucher",
//         image: iphoneImg,
//     },
//     {
//         logo: appleImg,
//         series: "iPhone 10 Series",
//         description: "Up to 45% off Voucher",
//         image: iphoneImg,
//     },
// ];


function Slider() {
    return (
        <div className={SliderStyle.slider} id='slider'>
            <div className={SliderStyle.sliderLeftItems} id='slider-left-items'>
                <div className={SliderStyle.sliderLeftFirstItems}>
                    <img src={appleImg} alt="photo" id='img-logo' />
                    <p className={`${SliderStyle.phoneModel} ${GlobalModuleCss.fontPopppins}`} id='phone-series'>iPhone 14 Series</p>
                </div>

                <div className={SliderStyle.saleInfo}>
                    <h1 className={`${SliderStyle.phoneAbout} ${GlobalModuleCss.fontInter}`} id='about-sale'>Up to 10% <br /> off Voucher</h1>
                </div>

                <div className={SliderStyle.shopNowIphone}>
                    <div className={SliderStyle.shop}>
                        <p className={`${SliderStyle.shopText} ${GlobalModuleCss.fontPopppins}`} id='shop-now'>Shop Now</p>
                    </div>

                    <FontAwesomeIcon icon={faArrowRight} className={SliderStyle.rightIcon} />
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



// import React, { useState, useEffect } from "react";
// import Sliderstyles from "../Slider/Slider.module.css";
// import IphoneLogo from "../../../Images/MainImages/iphone.jpg";
// import Iphone14Pro from "../../../Images/MainImages/iphone.jpg";
// import Iphone2 from "../../../Images/MainImages/iphone.jpg";
// import Iphone3 from "../../../Images/MainImages/iphone.jpg";
// import Iphone4 from "../../../Images/MainImages/iphone.jpg";
// import Iphone5 from "../../../Images/MainImages/iphone.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from "react-i18next";
// const sliderData = [
//   {
//     logo: IphoneLogo,
//     series: "iPhone 14 Series",
//     description: "Up to 10% off Voucher",
//     image: Iphone14Pro,
//   },
//   {
//     logo: IphoneLogo,
//     series: "iPhone 15 Series",
//     description: "Up to 5% off Voucher",
//     image: Iphone2,
//   },
//   {
//     logo: IphoneLogo,
//     series: "iPhone New Series",
//     description: "Up to 0% off Voucher",
//     image: Iphone3,
//   },
//   {
//     logo: IphoneLogo,
//     series: "iPhone 11 Series",
//     description: "Up to 40% off Voucher",
//     image: Iphone4,
//   },
//   {
//     logo: IphoneLogo,
//     series: "iPhone 10 Series",
//     description: "Up to 45% off Voucher",
//     image: Iphone5,
//   },
// ];
// function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);
//   const { t } = useTranslation();
//   return (
//     <div className={Sliderstyles.sliderContainer}>
//       <div
//         className={Sliderstyles.slider}
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {sliderData.map((slide, index) => (
//           <div key={index} className={Sliderstyles.slide}>
//             <div className={Sliderstyles.textContainer}>
//               <div className={Sliderstyles.header}>
//                 <img src={slide.logo} alt="Logo" />
//                 <p className={Sliderstyles.series}>{slide.series}</p>
//               </div>
//               <p className={Sliderstyles.description}>{slide.description}</p>
//               <a className={Sliderstyles.shopNow} href="#">
//                 {t("Shop Now")}
//                 <span>
//                   <FontAwesomeIcon
//                     icon={faArrowRight}
//                     className={Sliderstyles.shopNowIcon}
//                   />
//                 </span>
//               </a>
//             </div>
//             <div className={Sliderstyles.imageContainer}>
//               <img src={slide.image} alt="Slide" />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={Sliderstyles.dotsContainer}>
//         {sliderData.map((_, index) => (
//           <span
//             key={index}
//             className={`${Sliderstyles.dot} ${
//               index === currentIndex ? Sliderstyles.active : ""
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Slider;
