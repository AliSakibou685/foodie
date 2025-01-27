import { useState, useEffect } from 'react';
import * as postService from '../../services/foodService';
import './FoodListPage.css';
import FoodItem from '../../components/FoodItem/FoodItem';

export default function FoodListPage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const posts = await postService.index();
      setFoods(foods);
    }
    fetchPosts();
  }, []);

  const postItems = foods.map((f) => <FoodItem key={p._id} food={p} />);

  return (
    <>
      <h1>Food List</h1>
      <section className="food-item-container">{foodItems}</section>
    </>
  );
}
