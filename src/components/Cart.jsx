import React, { useState, useContext } from 'react';
import { CandyContext } from '../context/CandyConext';

const Cart = () => {
  const { cart } = useContext(CandyContext);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div>
      <button onClick={toggleCart}>Cart ({cart.length})</button>
      {showCart && (
        <div className="modal">
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} x Rs.{item.price} = Rs.{item.quantity * item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
