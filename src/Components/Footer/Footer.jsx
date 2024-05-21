import React from 'react'
import GlobalModuleCss from "../GlobalCss/global.module.css"
import FooterStyle from "../Footer/Footer.module.css"
import QrImg from "../../Images/Footer/Qrcode 1.png"
import GooglePlay from "../../Images/Footer/GooglePlay.png"
import AppleStore from "../../Images/Footer/download-appstore.png"
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";


function Footer() {
    return (
        <div>
            <footer className={FooterStyle.footer}>
                <div className='container'>
                    <div className={FooterStyle.footerItems}>
                        <div className="footer-list-items">
                            <h2 className={FooterStyle.footerLogo}>Exclusive</h2>
                            <p className={FooterStyle.subscribeText}>Subscribe</p>
                            <p className={FooterStyle.firstOrderSale}>Get 10% off your first order</p>
                            <form className={FooterStyle.formForEmail}>
                                <input type="text" placeholder='Enter your email' className={FooterStyle.inputForEmail} />
                                <FaAngleRight />
                            </form>
                        </div>

                        <ul className='footer-list-items'>
                            <h4 className={FooterStyle.footerTittle}>Support</h4>
                            <li className={FooterStyle.footerList}>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
                            <li className={FooterStyle.footerList}>exclusive@gmail.com</li>
                            <li className={FooterStyle.footerList}>+88015-88888-9999</li>
                        </ul>


                        <ul className='footer-list-items'>
                            <h4 className={FooterStyle.footerTittle} >Account</h4>
                            <li className={FooterStyle.footerList}>My Account</li>
                            <li className={FooterStyle.footerList}>Login / Register</li>
                            <li className={FooterStyle.footerList}>Cart</li>
                            <li className={FooterStyle.footerList}>Wishlist</li>
                            <li className={FooterStyle.footerList}>Shop</li>
                        </ul>

                        <ul className='footer-list-items'>
                            <h4 className={FooterStyle.footerTittle} >Quick Link</h4>
                            <li className={FooterStyle.footerList}>Privacy Policy</li>
                            <li className={FooterStyle.footerList}>Terms Of Use</li>
                            <li className={FooterStyle.footerList}>FAQ</li>
                            <li className={FooterStyle.footerList}>Contact</li>
                        </ul>

                        <ul>
                            <h4 className={FooterStyle.footerTittle} >Download App</h4>
                            <p className={FooterStyle.newUserSuggest}>Save $3 with App New User Only</p>
                            <div className={FooterStyle.footerImages}>
                                <img src={QrImg} alt="" />

                                <div className={FooterStyle.appStores}>
                                    <img src={GooglePlay} alt="" />
                                    <img src={AppleStore} alt="" />
                                </div>
                            </div>

                            <div className={FooterStyle.footerIcons}>
                                <FaFacebookF className={FooterStyle.socialIcons} />
                                <FiTwitter className={FooterStyle.socialIcons} />
                                <FaInstagram className={FooterStyle.socialIcons} />
                                <FaLinkedinIn className={FooterStyle.socialIcons} />
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer