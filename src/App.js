import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./pages/PageNotFound";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  // console.log("This is comes from app.js file ------>", user);
  useEffect(() => {
    if (user) {
      // console.log("This is comes from app.js file ------>", user);
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Protected />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<UserOrdersPage />} />
            <Route exact path="/profile" element={<UserProfilePage />} />
            <Route
              exact
              path="/product-detail/:id"
              element={<ProductDetailPage />}
            />
            <Route
              exact
              path="/order-success/:id"
              element={<OrderSuccessPage />}
            />
          </Route>
          <Route
            exact
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/forgot" element={<ForgotPasswordPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
