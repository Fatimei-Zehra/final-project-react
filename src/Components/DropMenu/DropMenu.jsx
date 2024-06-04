import React from 'react'
import GlobalCss from "../GlobalCss/global.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import DropMenuStyle from "../DropMenu/DropMenu.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { useState } from 'react'



function DropMenu() {

  // const [drawerOpen, setDrawerOpen] = useState(false);

  // function handleOpenDrawerButton() {
  //   setDrawerOpen(!drawerOpen);
  // }

  // function handleBackdropClick() {
  //   setDrawerOpen(false);
  // }

  return (

    <div>
      <FontAwesomeIcon icon={faBars} className={DropMenuStyle.menuIcon}  />

      <nav className={DropMenuStyle.mobileNav} id='nav' >
        <ul className={DropMenuStyle.list}>
          <li className={`${DropMenuStyle.mobileListLi} ${GlobalModuleCss.fontPoppins} `} responsive="list" >
            <Link to="/Home" className={DropMenuStyle.mobileLinkName} style={{color:"white"}}>
              home
            </Link>
          </li>
          <li className={`${DropMenuStyle.mobileListLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to='/Contact' className={DropMenuStyle.linkName}>
              contact
            </Link></li>
          <li className={`${DropMenuStyle.mobileListLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/About" className={DropMenuStyle.mobileLinkName}>
              about
            </Link>
          </li>
          <li className={`${DropMenuStyle.mobileListLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/Login" className={DropMenuStyle.mobileLinkName}>
              sign up
            </Link>
          </li>
        </ul>
      </nav>
    
    </div>
  )
}

export default DropMenu