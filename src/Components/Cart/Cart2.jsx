
// import React, { useState } from 'react';
// import './Cart.css';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([
//       { id: 1, name: 'LCD Monitor', price: 650, quantity: 1 },
//       { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2 }
//     ]);
//     const [coupon, setCoupon] = useState('');
//     const handleQuantityChange = (id, quantity) => {
//       setCartItems(cartItems.map(item =>
//         item.id === id ? { ...item, quantity: quantity } : item
//       ));
//     };
//     const handleCouponChange = (e) => {
//       setCoupon(e.target.value);
//     };
//     const handleApplyCoupon = () => {
//       // Kupon kodunu uygulama işlevselliği
//       console.log('Applying coupon:', coupon);
//     };
//     const handleUpdateCart = () => {
//       // Sepeti güncelleme işlevselliği
//       console.log('Updating cart:', cartItems);
//     };
//     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     const shipping = subtotal > 0 ? 'Free' : '$0.00';
//     const total = subtotal;
//     return (
//       <div className="cart-container">
//         <div className="cart-header">
//           <h2>Cart</h2>
//           <p>Home / Cart</p>
//         </div>
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map(item => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>${item.price}</td>
//                 <td>
//                   <select
//                     value={item.quantity}
//                     onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                   >
//                     {[...Array(10).keys()].map(x => (
//                       <option key={x + 1} value={x + 1}>{x + 1}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>${item.price * item.quantity}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="cart-actions">
//           <button className="return-to-shop">Return To Shop</button>
//           <button className="update-cart" onClick={handleUpdateCart}>Update Cart</button>
//         </div>
//         <div className="coupon-section">
//           <input
//             type="text"
//             placeholder="Coupon Code"
//             value={coupon}
//             onChange={handleCouponChange}
//           />
//           <button onClick={handleApplyCoupon}>Apply Coupon</button>
//         </div>
//         <div className="cart-total">
//           <p>Cart Total</p>
//           <div className="total-item">
//             <span>Subtotal:</span>
//             <span>${subtotal}</span>
//           </div>
//           <div className="total-item">
//             <span>Shipping:</span>
//             <span>{shipping}</span>
//           </div>
//           <div className="total-item">
//             <span>Total:</span>
//             <span>${total}</span>
//           </div>
//           <button className="checkout-button">Proceed to checkout</button>
//         </div>
//       </div>
//     );
//   };
//   export default Cart;