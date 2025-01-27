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

  const foodItems = foods.map((f) => <FoodItem key={p._id} food={f} />);

  return (
    <>
      <h1>Food List</h1>
      <section className="food-item-container">{foodItems}</section>
    </>
  );
}
