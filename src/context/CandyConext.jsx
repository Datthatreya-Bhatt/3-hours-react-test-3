import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const CandyContext = createContext();

const CandyProvider = ({ children }) => {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState([]);
  const apiUrl = "http://localhost:3000";

  useEffect(() => {
    async function getData() {
      // Fetch candies from API on load
      const res = await axios.get(`${apiUrl}/get`);
      console.log(res.data, 'This is get')
      setCandies(res.data);
    }
    getData()
  }, []);

  // Add chocolate item to the candies list
  const addCandy = async (newCandy) => {
    let res = await axios.post("http://localhost:3000/create", {
      ...newCandy,
    });
    setCandies(prevCandies => [...prevCandies, {...newCandy}]);
  };

  // Add item to cart
  const addToCart = (item, quantity) => {
    if (item.quantity >= quantity) {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
      setCandies((prevCandies) =>
        prevCandies.map((candy) =>
          candy.id === item.id
            ? { ...candy, quantity: candy.quantity - quantity }
            : candy
        )
      );
    } else {
      alert("Quantity is low");
    }
  };

  return (
    <CandyContext.Provider value={{ candies, addCandy, addToCart, cart }}>
      {children}
    </CandyContext.Provider>
  );
};

export default CandyProvider;
