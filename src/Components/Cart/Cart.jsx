import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import cartStyle from "../Cart/Cart.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"

function Cart() {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping}  className={cartStyle.cartIcon} id='cart'/>
    </div>
  )
}

export default Cart