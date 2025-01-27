export default function FoodItem({ food }) {
  return (
    <article>
      <h4>{new Date(food.createdAt).toLocaleDateString()}</h4>
      <p>{food.name}</p>
      <h4>{food.category.name}</h4>
    </article>
  );
}
