import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import * as foodService from '../../services/foodService';

export default function FoodDetailPage() {
  const [food, setFood] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFood() {
      const fetchedFood = await foodService.getOne(id);
      setFood(fetchedFood);
    }
    fetchFood();
  }, [id]);

  async function handleDelete() {
    try {
      await foodService.deleteFood(id);
      navigate('/foods');
    } catch (err) {
      console.log(err);
    }
  }

  if (!food) return null;
  return (
    <>
      <h1>Food Details </h1>
      <article className="FoodItem">
        <h4>{new Date(food.expires).toLocaleDateString()}</h4>
        <p>{food.name}</p>
        <h4>{food.category.name}</h4>
        <button onClick={handleDelete}>🗑️</button>
      </article>
    </>
  );
}
