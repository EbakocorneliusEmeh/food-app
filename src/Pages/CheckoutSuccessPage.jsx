import React, { useEffect } from 'react';
import { useFood } from '../context/FoodContext';
import "./CheckoutSuccessPage.css";

const CheckoutSuccessPage = () => {
  const { clearCart } = useFood();

  useEffect(() => {

    clearCart();
    
  }, []);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>🎉 Order placed successfully!</h2>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default CheckoutSuccessPage;
