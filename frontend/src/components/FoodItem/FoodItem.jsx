import "./FoodItem.css";

export default function FoodItem({handleDelete,food }) {
  return (
    <article className='FoodItem'>
      <h4>{new Date(food.expires).toLocaleDateString()}</h4>
      <p>{food.name}</p>
      <h4>{food.category.name}</h4>
      <button onClick={() => handleDelete(food._id)}>🗑️</button>
    </article>
  );
}
