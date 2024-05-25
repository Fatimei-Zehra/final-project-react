import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import wishlistStyle from "../Wishlist/Wishlist.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"


function Wishlist() {
  return (
    <div>
      <FontAwesomeIcon icon={faHeart} className={wishlistStyle.wishlistIcon} id='wishlist' />
    </div>
  )
}

export default Wishlist