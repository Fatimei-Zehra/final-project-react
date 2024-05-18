import React from 'react'
import GlobalCss from "../GlobalCss/global.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import DropMenuStyle from "../DropMenu/DropMenu.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';


function DropMenu() {
  return (
    <div>
        <FontAwesomeIcon icon={faBars}  className={DropMenuStyle.menuIcon}/>
    </div>
  )
}

export default DropMenu