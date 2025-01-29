import { Link } from "react-router";
import "./FoodItem.css";

export default function FoodItem({handleDelete,food }) {
  return (
    <article className='FoodItem'>
      <h4>{food.name} ({food.category.name})</h4>
      <Link to={`/foods/${food._id}`}>Details</Link>
    </article>
  );
}
