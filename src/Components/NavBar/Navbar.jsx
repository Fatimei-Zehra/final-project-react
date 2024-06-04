import React from 'react'
import styles from "../NavBar/Navbar.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <nav className={styles.nav} id='nav' >
        <ul className={styles.list}>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list" >
            <Link to="/Home" className={styles.linkName}>
              home
            </Link>
          </li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to='/Contact' className={styles.linkName}>
              contact
            </Link></li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/About" className={styles.linkName}>
              about
            </Link>
          </li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/Login" className={styles.linkName}>
              sign up
            </Link>
          </li>
        </ul>
      </nav>


      {/* NAVBAR MOVILE CODES */}
      {/* <nav className={styles.nav} id='nav' >
        <Link>
          <FontAwesomeIcon icon={faBars} id='menu-icon' onClick={toggleSidebar} />
        </Link>
        <ul className={styles.list}>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list" >
            <Link to="/Home" className={styles.linkName}>
              home
            </Link>
          </li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link>
              contact
            </Link></li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link>
              about
            </Link>
          </li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/Login" className={styles.linkName}>
              sign up
            </Link>
          </li>
        </ul>
      </nav> */}


    </>
  )
}

export default Navbar


