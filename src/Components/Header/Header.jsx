import React from 'react'
import GlobalCss from "../GlobalCss/global.css"
import styles from "../Header/Header.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../NavBar/Navbar"
import Search from '../Search/Search'
import Wishlist from '../Wishlist/Wishlist'
import Cart from '../Cart/Cart'
import DropMenu from '../DropMenu/DropMenu'
import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <div>
            {/* LAYER CODES START */}
            <div className={styles.headerLayer} id='header-layer'>
                <div className="container">
                    <div className={styles.headerLayerItems}>
                        <div className={styles.layer} id='layer'>
                            <p className={`${styles.headerLayerP} ${GlobalModuleCss.fontPoppins}`} id='layer-p'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <a href="#" className={styles.headerLayerA} id='layer-a'>ShopNow</a>
                        </div>


                        <select className={styles.languages} id='languages'>
                            <option value="english">English</option>
                            <option value="azerbaijan">Azerbaijan</option>
                            <option value="russian">Russian</option>
                        </select>

                    </div>
                </div>
            </div>
            {/* LAYER CODES END */}



            {/* HEADER CODES START */}
            <header className={styles.header} id='header'>
                <div className="container">
                    <div className={styles.headerNav}>
                        <Link to="/Home">
                        <h1 className={`${styles.brand} ${GlobalModuleCss.fontInter}`} id='brand'>exclusive</h1>
                        </Link>
                        <Navbar />

                        {/* PLANSET HEADER SEARCH CODES........................................................................ */}

                        <div id='planset-header-search' className={styles.plansetSearch}>
                            <Search />
                        </div>

                        <div id='planset-header-icons' className={styles.plansetHeaderIcons}>
                            <Wishlist />
                            <Cart />
                            <DropMenu />
                        </div>


                        {/* PLANSET HEADER SEARCH CODES END........................................................................ */}

                        <div className={styles.headerComponents} id='header-components'>
                            <Search />
                            <Wishlist />
                            <Cart />
                        </div>

                    </div>
                </div>
            </header>



            {/* MOBILE RESPONSIVE CODES HEADER ...................................................................................*/}
            <div className={styles.mobileHeader} id='mobileHeader'>
                <header id='mobile-header'>
                    <div className="container">
                        <div id='mobile-header-items'>
                            <h1 className={`${styles.brand} ${GlobalModuleCss.fontInter}`} id='brand-mobile'>exclusive</h1>

                            <select className={styles.languages} id='languages-mobile'>
                                <option value="english">En</option>
                                <option value="azerbaijan">Az</option>
                                <option value="russian">Rus</option>
                            </select>
                        </div>

                    </div>
                </header>

                <div id='header-mobile-nav'>
                    <div className="container">
                        <div id='mobile-nav-items'>
                            <div id='mobile-nav-icon'>
                                <FontAwesomeIcon icon={faBars} id='menu-icon' />
                                {/* <DropMenu/> */}
                            </div>

                            <div id='mobile-right-icon'>
                                <FontAwesomeIcon icon={faSearch} />
                                <Wishlist />
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}
