import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as foodService from '../../services/foodService';

export default function NewFoodPage() {
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const food = await foodService.create(content);
      navigate('/foods');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h2>New Food</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Food List</label>
        <input
          type="text"
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          required
        />
        <button type="submit">ADD Food</button>
      </form>
    </>
  );
}
