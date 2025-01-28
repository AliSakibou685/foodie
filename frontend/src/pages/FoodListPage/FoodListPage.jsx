import { useState, useEffect } from 'react';
import * as foodService from '../../services/foodService';
import './FoodListPage.css';
import FoodItem from '../../components/FoodItem/FoodItem';

export default function FoodListPage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const foods = await foodService.index();
      setFoods(foods);
    }
    fetchFoods();
  }, []);

  const foodItems = foods.map((f) => (
    <FoodItem key={f._id} food={f} handleDelete={handleDelete} />
  ));

  async function handleDelete(foodId) {
    try {
      await foodService.deleteFood(foodId);
      const updatedFoods = foods.filter((f) => f._id !== foodId);
      setFoods(updatedFoods);
    } catch (err) {
        console.log(err);
    }

  
  }

  return (
    <>
      <h1>Food List</h1>
      <section className="food-item-container">{foodItems}</section>
    </>
  );
}
