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
import Protected from './features/auth/components/Protected';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route element={<Protected />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/product-detail/:id' element={<ProductDetailPage />} />
          </Route>
          <Route exact path='/' element={<Protected><Home /></Protected>} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route exact path='/login' element={<LoginPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
