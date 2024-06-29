import React from 'react'
import styles from './Selling.module.css'
import Coat from '../../Images/Selling/1e9f94261b28e16ea21bacb4144473e8.png'
import Bag from '../../Images/Selling/2722dbdf98f25179d3c0b785988c513d.png'
import Cooler from '../../Images/Selling/c218c97b645d616c8188a4f2e6aaf84b.png'
import BookShelf from '../../Images/Selling/2757d20a14861e2e0ebd4e9889693f59.png'
import { useTranslation } from "react-i18next";



import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
function Selling() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className={styles.firstSelling}>
            <div className={styles.selling}>
                <div className={styles.rectangle}>
                    <div className={styles.red}></div>
                    <h1>{t("This Month")}</h1>

                </div>
                <h1 className={styles.browsing}>{t("Best Selling Products")}</h1>
            </div>
            <div className={styles.view}>
                <button>{t("View All")}</button>
            </div>
            </div>
            <div className={styles.slider}>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={Coat} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    {/* <span className={styles.saleProcent}>-40%</span> */}
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("The north coat")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$260</span>
                            <span className={styles.line}>$360</span>
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
                                <span>(65)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderBoxes}>
                        <div className={styles.upSide}>
                            <img src={Bag} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    {/* <span className={styles.saleProcent}>-35%</span> */}
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t("Gucci duffle bag")}</h1>
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
                            <img src={Cooler} alt="" />
                            <div className={styles.buttons}>
                                <div>
                                    {/* <span className={styles.saleProcent}>-30%</span> */}
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t( "RGB liquid CPU Cooler")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$160</span>
                            <span className={styles.line}>$170</span>

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
                            <img src={BookShelf} alt="" />

                            <div className={styles.buttons}>
                                <div>
                                    {/* <span className={styles.saleProcent}>-25%</span> */}
                                </div>
                                <div className={styles.iconsBox}>
                                    <CiHeart className={styles.svg} />
                                    <LuEye className={styles.svg} />

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={styles.downSide}>
                        <h1 className={styles.downSideText}>{t( "Small BookSelf")}</h1>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>$360</span>
                         

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
                                <span>(65)</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Selling