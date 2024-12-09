import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandyProvider from './context/CandyConext';
import Header from './components/Header';
import Body from './components/Body';
import Cart from './components/Cart';

function App() {
  return (
    <CandyProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Cart />
      </Router>
    </CandyProvider>
  );
}

export default App;
