import React from 'react'
import GlobalModuleCss from "../GlobalCss/global.module.css"
import FooterStyle from "../Footer/Footer.module.css"
import QrImg from "../../Images/Footer/Qrcode 1.png"
import GooglePlay from "../../Images/Footer/GooglePlay.png"
import AppleStore from "../../Images/Footer/AppStore.png"
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { db } from "../../firebase/firebase"
import { useState } from 'react'
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";



function Footer() {

    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    console.log(setEmail)

    const handleSaveEmail = () => {
        db.collection('emails').add({
            email: email
        })
            .then(() => {
                console.log("hersey okeydir fatya.");
            })
            .catch((error) => {
                console.error("sennen developer olcey? ", error);
            });
    };

    console.log(db)

    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div>
            <footer className={FooterStyle.footer}>
                <div className='container'>
                    <div className={FooterStyle.footerItems} id='footer-items'>
                        <div className={FooterStyle.footerListItems}>
                            <h2 className={FooterStyle.footerLogo} id='footer-logo'>Exclusive</h2>
                            <p className={FooterStyle.subscribeText} id='subscribe-text'>Subscribe</p>
                            <p className={FooterStyle.firstOrderSale} id='first-order-sale'>Get 10% off your first order</p>
                            <form className={FooterStyle.formForEmail} id='form'>
                                <input type="text" placeholder='Enter your email' className={FooterStyle.inputForEmail} id='input-mail' onChange={handleInputChange} />
                                <FaAngleRight onClick={handleSaveEmail} style={{ cursor: 'pointer' }} />
                            </form>
                        </div>

                        <ul className='footer-list-items'>
                            <h4 className={FooterStyle.footerTittle} title="footer-list-title">Support</h4>
                            <li className={FooterStyle.footerList} list="footer-list">111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
                            <li className={FooterStyle.footerList} list="footer-list">exclusive@gmail.com</li>
                            <li className={FooterStyle.footerList} list="footer-list">+88015-88888-9999</li>
                        </ul>


                        <ul className='footer-list-items'>
                            <h4 className={FooterStyle.footerTittle} title="footer-list-title" >Account</h4>
                            <li className={FooterStyle.footerList} list="footer-list">My Account</li>
                            <li className={FooterStyle.footerList} list="footer-list">Login / Register</li>
                            <li className={FooterStyle.footerList} list="footer-list">Cart</li>
                            <li className={FooterStyle.footerList} list="footer-list">Wishlist</li>
                            <li className={FooterStyle.footerList} list="footer-list">Shop</li>
                        </ul>

                        <ul className='footer-list-items'>
                            <h4 className={FooterStyle.footerTittle} title="footer-list-title" >Quick Link</h4>
                            <li className={FooterStyle.footerList} list="footer-list">Privacy Policy</li>
                            <li className={FooterStyle.footerList} list="footer-list">Terms Of Use</li>
                            <li className={FooterStyle.footerList} list="footer-list">FAQ</li>
                            <li className={FooterStyle.footerList} list="footer-list">Contact</li>
                        </ul>

                        <ul className={FooterStyle.footerLatItem}>
                            <h4 className={FooterStyle.footerTittle} title="footer-list-title">Download App</h4>
                            <p className={FooterStyle.newUserSuggest} id='new-user-suggest'>Save $3 with App New User Only</p>
                            <div className={FooterStyle.footerImages}>
                                <img src={QrImg} alt="" id='qr-img' />

                                <div className={FooterStyle.appStores}>
                                    <img src={GooglePlay} alt="" id='google-play' />
                                    <img src={AppleStore} alt="" id='apple-store' />
                                </div>
                            </div>

                            <div className={FooterStyle.footerIcons} id='footer-icons'>
                                {/* <FaFacebookF className={`${FooterStyle.socialIcons} ${FooterStyle.facebook}`} />
                                <FiTwitter className={`${FooterStyle.socialIcons} ${FooterStyle.twitter}`} />
                                <FaInstagram className={`${FooterStyle.socialIcons} ${FooterStyle.instagram}`} />
                                <FaLinkedinIn className={`${FooterStyle.socialIcons} ${FooterStyle.linkedin}`} /> */}
                                <div className={FooterStyle.footerIcons} id='footer-icons'>
                                    <FaFacebookF
                                        className={`${FooterStyle.socialIcons} ${FooterStyle.facebook}`}
                                        onClick={() => handleIconClick('https://www.facebook.com/')}
                                    />
                                    <FiTwitter
                                        className={`${FooterStyle.socialIcons} ${FooterStyle.twitter}`}
                                        onClick={() => handleIconClick('https://twitter.com/')}
                                    />
                                    <FaInstagram
                                        className={`${FooterStyle.socialIcons} ${FooterStyle.instagram}`}
                                        onClick={() => handleIconClick('https://www.instagram.com/')}
                                    />
                                    <FaLinkedinIn
                                        className={`${FooterStyle.socialIcons} ${FooterStyle.linkedin}`}
                                        onClick={() => handleIconClick('https://www.linkedin.com/')}
                                    />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer