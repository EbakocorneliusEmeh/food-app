import React, { useState } from 'react';
import { useFood } from '../context/FoodContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { foods, setFoods, deleteFood } = useFood();
  const [form, setForm] = useState({
    name: '',
    description: '',
    calories: '',
    price: '',
    image: '',
  });

  const handleAdd = () => {
    if (
      !form.name ||
      !form.description ||
      !form.calories ||
      !form.price ||
      !form.image
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newFood = {
      id: Date.now(),
      ...form,
      calories: Number(form.calories),
      price: Number(form.price),
      descriptionLong: 'No detailed description provided yet.',
    };

    const updated = [...foods, newFood];
    setFoods(updated);
    setForm({
      name: '',
      description: '',
      calories: '',
      price: '',
      image: '',
    });
  };

  return (
    <div style={{ padding: '20px' }}>

      <div className="admin-dashboard left-align">
  <h2>Admin Dashboard</h2>
  <div className="admin-form">
    <div className="form-group">
      <input
        type="text"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Food Name"
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        placeholder="Short Description"
      />
    </div>
    <div className="form-group">
      <input
        type="number"
        value={form.calories}
        onChange={e => setForm({ ...form, calories: e.target.value })}
        placeholder="Calories"
      />
    </div>
    <div className="form-group">
      <input
        type="number"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
        placeholder="Price"
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        value={form.image}
        onChange={e => setForm({ ...form, image: e.target.value })}
        placeholder="Image URL"
      />
    </div>
    <button className="add-food-button" onClick={handleAdd}>➕ Add Food</button>
  </div>
</div>

      <h3>All Foods</h3>
      <ul>
        {foods.map(food => (
          <li key={food.id} style={{ marginBottom: '10px' }}>
            <strong>{food.name}</strong> - ${food.price}
            <button
              onClick={() => deleteFood(food.id)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
