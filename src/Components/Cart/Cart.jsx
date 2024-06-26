import React from 'react';
import styles from './Cart.module.css';
import svg  from "../../Images/Cart/cartimg.png"
import svg2  from "../../Images/Cart/cartimg2.png"

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <nav className={styles.breadcrumb}>
        <a href="/">Home</a> / <span>Cart</span>
      </nav>
      <table className={styles.cartTable}>
        <thead>
          <tr className={styles.cartTr}> 
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.cartTr}>
            <div className={styles.crtImg}>
          <img src={svg} alt='Cart' id='image' className={styles.cartImg} />
            <td> LCD Monitor</td>
            </div>
            <td>$650</td>
            <td>
              <select defaultValue="1">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </select>
            </td>
            <td>$650</td>
          </tr>
          <tr className={styles.cartTr}>
          <div className={styles.crtImg2}>
          <img src={svg2} alt='Cart' id='image' className={styles.cartImg2} />
          <td>H1 Gamepad</td>
            </div>
            <td>$550</td>
            <td>
              <select defaultValue="2">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </select>
            </td>
            <td>$1100</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btn}>
      <button className={styles.returnButton}>Return To Shop</button>
      <button className={styles.updateButton}>Update Cart</button>
      </div>
      <div className={styles.couponContainer}>
        <input type="text" placeholder="Coupon Code" />
        <button className={styles.couponButton}>Apply Coupon</button>
      </div>
      <div className={styles.crtTotal}>
      <div className={styles.cartTotal}>
        <h4>Cart Total</h4>
      <div className={styles.cartTtl1}>
        <p>Subtotal:</p>
        <p> $1750</p>
        </div>
        <div className={styles.cartTtl2}>
        <p>Shipping:</p>
         <p> Free</p>
         </div>
         <div className={styles.cartTtl3}>
        <p>Total: </p>
        <p>$1750</p>
        </div>
        <button className={styles.checkoutButton}>Process to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;