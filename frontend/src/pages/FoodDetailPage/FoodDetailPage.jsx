import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import * as foodService from '../../services/foodService';

export default function FoodDetailPage({categories}) {
  const [food, setFood] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [foodData, setFoodData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFood() {
      const fetchedFood = await foodService.getOne(id);
      setFood(fetchedFood);
    }
    fetchFood();
  }, [id]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const updatedFood = await foodService.update(id, foodData);
      setFood(updatedFood);
      setIsEditing(false);
    } catch (err) {
      console.log(err)
    }
  }

  function handleEditClick() {
    const foodData = { ...food };
    delete foodData._id;
    delete foodData.user;
    delete foodData.createdAt;
    delete foodData.updatedAt;
    foodData.expires = foodData.expires.slice(0, 10)
    setFoodData(foodData);
    setIsEditing(true);
  }

  function handleChange(evt) {
    setFoodData({ ...foodData, [evt.target.name]: evt.target.value });
  }

  async function handleDelete() {
    try {
      await foodService.deleteFood(id);
      navigate('/foods');
    } catch (err) {
      console.log(err);
    }
  }

  if (!food) return null;
  console.log(food)
  return (
    <>
      <h1>Food Details </h1>
      {isEditing ? (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={foodData.name}
            onChange={handleChange}
          />
          <input
            type="date"
            name="expires"
            placeholder='Expiration'
            value={foodData.expires}
            onChange={handleChange}
          />
          <select
            name="category"
            value={foodData.category}
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <option value={cat._id} key={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button type="submit">Save Food</button>
        </form>
      ) : (
        <article className="FoodItem">
          <h4>{new Date(food.expires).toLocaleDateString()}</h4>
          <p>{food.name}</p>
          <h4>{food.category.name}</h4>
          <button onClick={handleDelete}>🗑️</button>
          <button onClick={handleEditClick}>✏️</button>
        </article>
      )}
    </>
  );
}
