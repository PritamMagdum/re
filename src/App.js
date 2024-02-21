import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/product-detail/:id' element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
