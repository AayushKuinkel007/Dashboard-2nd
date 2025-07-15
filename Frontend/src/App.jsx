import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Admin/DashboardPage";
import ProductsPage from "./pages/Admin/ProductsPage";
import CreateProduct from "./pages/Admin/CreateProduct";
import Signup from "./pages/Common/Signup";
import Login from "./pages/Common/Login";
import Homepage from "./pages/Common/Homepage";
import Profile from "./pages/Common/Profile";
import PrivateRoute from "../routes/Privateroute";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import UserAccount from "./pages/User/UserAccount";
import ProductDetail from "./pages/Common/ProductDetail";
import CartPage from "./pages/User/CartPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prod_details" element={<ProductDetail />} />
          {/* Should be in private route */}

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* user */}
          <Route
            path="/user"
            element={
              <PrivateRoute role="user">
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-account"
            element={
              <PrivateRoute>
                <UserAccount />
              </PrivateRoute>
            }
          />
          {/* Admin */}
          <Route
            path="/admin"
            element={
              <PrivateRoute role="admin">
                <DashboardPage />
              </PrivateRoute>
            }
          />

          {/* seller */}
          <Route
            path="/seller"
            element={
              <PrivateRoute role="seller">
                <SellerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/product-list"
            element={
              <PrivateRoute role="admin">
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-product"
            element={
              <PrivateRoute role="admin">
                <CreateProduct />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
