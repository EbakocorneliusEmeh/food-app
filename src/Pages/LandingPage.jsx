import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFood } from '../context/FoodContext';
import './LandingPage.css';

const LandingPage = () => {
  const { foods } = useFood();
  const navigate = useNavigate();

  if (foods.length === 0) return <p>Loading food items...</p>;

  return (
    <div className="food-list">
      {foods.map(food => (
        <div
          className="food-card"
          key={food.id}
          onClick={() => navigate(`/product/${food.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <img src={food.image} alt={food.name} className="food-image" />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <p><strong>Price:</strong> ${food.price}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
