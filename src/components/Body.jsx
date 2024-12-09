import React, { useContext } from "react";
import { CandyContext } from "../context/CandyConext";

const Body = () => {
  const { candies, addToCart } = useContext(CandyContext);

  const handleBuy = (item, quantity) => {
    addToCart(item, quantity);
  };

  return (
    <div>
      <h2>Available Chocolates</h2>
      <ul>
        {candies.map((candy) => (
          <li key={candy.id}>
            <h3>{candy.name}</h3>
            <p>{candy.description}</p>
            <p>Price: Rs. {candy.price}</p>
            <p>Available Quantity: {candy.quantity}</p>
            <button onClick={() => handleBuy(candy, 1)}>Buy 1</button>
            <button onClick={() => handleBuy(candy, 2)}>Buy 2</button>
            <button onClick={() => handleBuy(candy, 3)}>Buy 3</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
