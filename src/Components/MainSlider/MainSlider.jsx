import React from 'react'
import styles from './MainSlider.module.css'
import ImageConsol from '../../Images/MainSliderImages/50752d55f8b60f2aa2923183dadbc135.png'
import ImageKeyboard from '../../Images/MainSliderImages/8cc24eeff489863523b63971c3ff8e4a.png'
import ImageTv from '../../Images/MainSliderImages/db5174aff99bb9337d2dc9598a0b44e4.png'
import ImageChair from '../../Images/MainSliderImages/273c46e1c3dc0a8915c4b031d0345347.png'
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";


function MainSlider() {
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className={styles.slider}>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={ImageConsol} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    <span className={styles.saleProcent}>-40%</span>
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                            <button className={styles.buttonActive}>{t( "Add To Card")}</button>
                        </div>

                    </div>
                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("HAVIT HV-G92 Gamepad")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$120</span>
                            <span className={styles.line}>$160</span>
                        </div>
                        <div className={styles.infoDown}>
                            <div className={styles.starIcons}>
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                            </div>
                            <div className={styles.numberDown}>
                                <span>(88)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={ImageKeyboard} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    <span className={styles.saleProcent}>-35%</span>
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                            <button className={styles.buttonActive}>{t( "Add To Card")}</button>
                        </div>


                    </div>

                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("AK-900 Wired Keyboard")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$960</span>
                            <span className={styles.line}>$1160</span>

                        </div>
                        <div className={styles.infoDown}>
                            <div className={styles.starIcons}>
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.starColor} />
                            </div>
                            <div className={styles.numberDown}>
                                <span>(75)</span>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={ImageTv} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    <span className={styles.saleProcent}>-30%</span>
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                            <button className={styles.buttonActive}>{t( "Add To Card")}</button>
                        </div>


                    </div>

                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("IPS LCD Gaming Monitor")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$370</span>
                            <span className={styles.line}>$400</span>

                        </div>
                        <div className={styles.infoDown}>
                            <div className={styles.starIcons}>
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                            </div>
                            <div className={styles.numberDown}>
                                <span>(99)</span>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={ImageChair} alt="" />

                            <div className={styles.buttons}>
                                <div>
                                    <span className={styles.saleProcent}>-25%</span>
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                            <button style={styles.buttonActive}>{t( "Add To Card")}</button>
                        </div>


                    </div>

                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("S-Series Comfort Chair")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$375</span>
                            <span className={styles.line}>$400</span>

                        </div>
                        <div className={styles.infoDown}>
                            <div className={styles.starIcons}>
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.starGradient} />
                            </div>
                            <div className={styles.numberDown}>
                                <span>(99)</span>
                            </div>
                        </div>

                    </div>
                </div>



                {/* //// */}

                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={ImageConsol} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    <span className={styles.saleProcent}>-40%</span>
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                            <button className={styles.buttonActive}>{t( "Add To Card")}</button>
                        </div>

                    </div>
                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("HAVIT HV-G92 Gamepad")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$120</span>
                            <span className={styles.line}>$160</span>
                        </div>
                        <div className={styles.infoDown}>
                            <div className={styles.starIcons}>
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                            </div>
                            <div className={styles.numberDown}>
                                <span>(88)</span>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={ImageConsol} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    <span className={styles.saleProcent}>-40%</span>
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                            <button className={styles.buttonActive}>{t( "Add To Card")}</button>
                        </div>

                    </div>
                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("HAVIT HV-G92 Gamepad")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$120</span>
                            <span className={styles.line}>$160</span>
                        </div>
                        <div className={styles.infoDown}>
                            <div className={styles.starIcons}>
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                                <FaStar className={styles.star} />
                            </div>
                            <div className={styles.numberDown}>
                                <span>(88)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.view}>
                <button >{t( "View Products All")}</button>
            </div>
        </div>

    )
}

export default MainSlider