import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import CartPage from '../Pages/CartPage';
import CheckoutSuccessPage from '../Pages/CheckoutSuccessPage';
import AdminDashboard from '../Pages/AdminDashboard';
import { useAuth } from '../context/AuthContext';

const AppRoutes = () => {
  const { isAdmin } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      <Route
        path="/admin"
        element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
