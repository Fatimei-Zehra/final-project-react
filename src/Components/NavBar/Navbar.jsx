import React from 'react'
import styles from "../NavBar/Navbar.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={styles.nav} id='nav' >
        <ul className={styles.list}>
            <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list" >
              <Link to="/Home" className={styles.linkName}>
                home
              </Link>
            </li>
            <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">contact</li>
            <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">about</li>
            <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
              <Link to="/Login" className={styles.linkName}>
                sign up
              </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar