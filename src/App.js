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
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "./features/auth/authSlice";
import PageNotFound from "./pages/PageNotFound";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminHome from "./pages/AdminHome";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);
  // console.log("This is comes from app.js file ------>", user);
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      // console.log("This is comes from app.js file ------>", user);
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      {userChecked && (
        <Provider template={AlertTemplate} {...options}>
          <Router>
            <Routes>
              {/* User Protected Routes */}
              <Route element={<Protected />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/my-orders" element={<UserOrdersPage />} />
                <Route exact path="/profile" element={<UserProfilePage />} />

                <Route
                  exact
                  path="/"
                  element={
                    <Protected>
                      <Home />
                    </Protected>
                  }
                />
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

              {/* Admin Protected Routes */}
              <Route element={<ProtectedAdmin />}>
                <Route exact path="/admin" element={<AdminHome />} />
                <Route
                  exact
                  path="/admin/orders"
                  element={<AdminOrdersPage />}
                />
                <Route
                  exact
                  path="/admin/product-form"
                  element={<AdminProductFormPage />}
                />
                <Route
                  exact
                  path="/admin/product-form/edit/:id"
                  element={<AdminProductFormPage />}
                />
                <Route
                  exact
                  path="/admin/product-detail/:id"
                  element={<AdminProductDetailPage />}
                />
              </Route>

              <Route exact path="/signup" element={<SignupPage />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/forgot" element={<ForgotPasswordPage />} />
              <Route exact path="/about" element={<AboutUsPage />} />
              <Route exact path="/contact" element={<ContactUsPage />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </Provider>
      )}
    </div>
  );
}

export default App;
