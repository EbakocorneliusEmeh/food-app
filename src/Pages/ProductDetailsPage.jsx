import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFood } from '../context/FoodContext';
import './ProductDetailsPage.css';
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { foods, addToCart } = useFood();

  const food = foods.find(f => f.id === Number(id));

  if (!food) return <p>Food not found</p>;

  const handleBuyNow = () => {
    addToCart(food);
    navigate('/checkout-success');
    toast.success("🎉 Order placed successfully!. Thank you for your purchase.")
  };

  return (
    <div className="product-detail">
      <img src={food.image} alt={food.name} className="product-image" />
      <div className="product-info">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p>{food.descriptionLong || 'No detailed description available.'}</p>
        <p><strong>Calories:</strong> {food.calories} kcal</p>
        <p><strong>Price:</strong> ${food.price}</p>
        <button onClick={() => {
  addToCart(food);
  navigate('/cart');
}}>
  Add to Cart
</button>

<button onClick={handleBuyNow}>
  Buy Now
</button>

      </div>
    </div>
  );
};

export default ProductDetailsPage;
