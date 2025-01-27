export default function FoodItem({ food }) {
  return (
    <article>
      <h4>{new Date(food.createdAt).toLocaleDateString()}</h4>
      <p>{food.content}</p>
      <h4>🕺{food.user.name}</h4>
    </article>
  );
}
