import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import cartStyle from "../Cart/Cart.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
        <Link to="/Cart">
        <FontAwesomeIcon icon={faCartShopping}  className={cartStyle.cartIcon} id='cart'/>
        </Link>
    </div>
  )
}

export default Cart