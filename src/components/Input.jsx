import React, { useState, useContext } from 'react';
import { CandyContext } from '../context/CandyConext';

const Input = () => {
  const { addCandy } = useContext(CandyContext);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddCandy = () => {
    const newCandy = {
        id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };
    addCandy(newCandy);
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Chocolate Name" 
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
      />
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Price" 
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        placeholder="Quantity" 
      />
      <button onClick={handleAddCandy}>Add Chocolate</button>
    </div>
  );
};

export default Input;
