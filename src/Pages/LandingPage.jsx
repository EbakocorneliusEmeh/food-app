import React from 'react';
import { Link } from 'react-router-dom';
import { useFood } from '../context/FoodContext';
import '../styles/landing.css';

const LandingPage = () => {
  const { foods } = useFood();

  return (
    <div className="landing">
      <h1>Our Foods</h1>
      <div className="food-list">
        {foods.map(food => (
          <div key={food.id} className="food-card">
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Calories: {food.calories}</p>
            <p>Price: ${food.price}</p>
            <Link to={`/product/${food.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
