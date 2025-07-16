import React, { useEffect } from 'react';
import { useFood } from '../context/FoodContext';
import { useNavigate } from 'react-router-dom';
import "./CartPage.css";


const defaultItems = [
  {
    id: 1,
    name: 'Classic Burger',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    description: 'Juicy grilled beef patty with fresh lettuce and tomato',
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    price: 12.49,
    image:   'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740',
    description: 'Traditional pizza with tomato, mozzarella, and basil',
  },
    {
          id: 3,
          name: 'Salad',
          description: 'Healthy fresh salad with tomatoes and cucumbers.',
          descriptionLong:
            'A refreshing mix of lettuce, cucumbers, cherry tomatoes, and vinaigrette. Light, healthy, and perfect for any meal. Best served chilled and fresh.',
          calories: 250,
          price: 6,
          image:
            'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=600&q=80',
        },
];


const CartPage = () => {
  const { cart, clearCart, setCart } = useFood();
  const navigate = useNavigate();


  useEffect(() => {
    if (cart.length === 0) {
      setCart(defaultItems);
    }
  }, [cart, setCart]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/checkout-success');
  };

  if (cart.length === 0) return <p style={{ padding: 20 }}>Your cart is empty.</p>;

return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cart.map((item, idx) => (
          <li key={idx} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p><strong>Price:</strong> ${item.price}</p>
            </div>
            <div className="cart-actions">
  <button
    onClick={() => handlePlaceOrder(idx)}
    className="place-order-button"
  >
    Place Order
  </button>
  <button
    onClick={() => handleRemove(idx)}
    className="remove-button"
  >
    Remove
  </button>
</div>
          </li>
        ))}
      </ul>
      <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
    </div>
  );
};




export default CartPage;
