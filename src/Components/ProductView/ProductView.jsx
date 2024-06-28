import React from 'react'
import ProductViewCss from '../ProductView/ProductView.module.css'
import { Link } from "react-router-dom";
import img1 from '../../Images/ProductView/de638588f27b571d7565fbaacfe57243.png'
import img2 from '../../Images/ProductView/4d31381f7fe4841786f4511bd4849d87.png'
import img3 from '../../Images/ProductView/9b23a76cbe02748d2090a0b9a11cf0a5.png'
import img4 from '../../Images/ProductView/a445f7c73ec2a2153e0e149e85ee9d28.png'
import img5 from '../../Images/ProductView/9e3950aed9181acb44510f859f50d850.png'
import { FaStar } from "react-icons/fa";
import { useState } from 'react'
import { LuEye } from "react-icons/lu";
import WishProduct from "../OurProducts/WishProducts"
import MainSlider from '../MainSlider/MainSlider';

function ProductView() {
    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        setCounter(count => count - 1);
    };

    //reset counter 
    const reset = () => {
        setCounter(0)
    }
    return (
        <div className='container'>
            <div>
                <div className={ProductViewCss.pageLink} id='page-link'>
                    <Link to='/Home' className={ProductViewCss.homePage} id='homePage'>Account /</Link>
                    <Link to='/Home' className={ProductViewCss.homePage} id='homePage'>Gaming /</Link>
                    <p className={ProductViewCss.aboutPage} id='aboutPage'>Havic HV G-92 Gamepad </p>
                </div>
            </div>
            <div className={ProductViewCss.info}>


                <div className={ProductViewCss.leftSide}>
                    <div className={ProductViewCss.firstSide}>
                        <div className={ProductViewCss.frame}>
                            <img src={img1} className={ProductViewCss.img} alt="" />
                        </div>

                        <div className={ProductViewCss.frame}>
                            <img src={img2} className={ProductViewCss.img} alt="" />
                        </div>
                        <div className={ProductViewCss.frame}>
                            <img src={img3} className={ProductViewCss.img} alt="" />
                        </div>
                        <div className={ProductViewCss.frame}>
                            <img src={img4} className={ProductViewCss.img} alt="" />
                        </div>
                    </div>
                    <div className={ProductViewCss.secondSide}>
                        <div className={ProductViewCss.bigFrame}>
                            <img src={img5} className={ProductViewCss.bigImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className={ProductViewCss.rightSide}>
                    <h1 className={ProductViewCss.textH1}>Havic HV G-92 Gamepad</h1>
                    <div>
                        <div className={ProductViewCss.infoStar}>
                            <div>
                                <FaStar className={ProductViewCss.star}></FaStar>
                                <FaStar className={ProductViewCss.star}></FaStar>
                                <FaStar className={ProductViewCss.star}></FaStar>
                                <FaStar className={ProductViewCss.star}></FaStar>
                                <FaStar className={ProductViewCss.starI}></FaStar>
                            </div>

                            {/* </div>
                        <div> */}
                            <span className={ProductViewCss.view}>(150 Reviews)</span>
                            <span>|</span>
                            <span className={ProductViewCss.stock}>In Stock</span>
                        </div>
                        <h2 id='price' className={ProductViewCss.textH2}>$192.00</h2>
                        <p className={ProductViewCss.ps}>PlayStation 5 Controller Skin High quality vinyl with air <br /> channel adhesive for easy bubble free install & mess <br /> free removal Pressure sensitive.</p>
                        <div className={ProductViewCss.square}>
                            <h1 className={ProductViewCss.colourH1}>Colours:</h1>
                            <button className={ProductViewCss.colour1}></button> <button className={ProductViewCss.colour2}></button>
                        </div>
                        <div className={ProductViewCss.sizeInfo}>
                            <h1 className={ProductViewCss.colourH1}>Size:</h1>
                            <div className={ProductViewCss.squares}>
                                <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>XS</h1></div>
                                <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>S</h1></div>
                                <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>M</h1></div>
                                <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>L</h1></div>
                                <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>XL</h1></div>

                            </div>

                        </div>
                        <div className={ProductViewCss.counter}>
                            <div>
                                <div className="btn_container">
                                    <button className={ProductViewCss.control_btn} onClick={decrease}>-</button>
                                    <span className={ProductViewCss.counter_output}>{counter}</span>
                                    <button className={ProductViewCss.control_btnn} onClick={increase}>+</button>
                                </div>
                            </div>
                            <button className={ProductViewCss.buy}>Buy now</button>
                            <div className={ProductViewCss.wish}>
                                <Link to="/ProductView"><WishProduct /></Link>

                            </div>
                        </div>

                    </div>

                    
                </div>
                
            </div>
            <MainSlider/>
        </div>
        
    )
}

export default ProductView 