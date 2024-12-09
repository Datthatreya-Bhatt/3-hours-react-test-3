import React from 'react';
import Cart from './Cart';
import Input from './Input';

const Header = () => {
  return (
    <header>
      <h1>Candy Shop</h1>
      <Input />
      <Cart />
    </header>
  );
};

export default Header;
