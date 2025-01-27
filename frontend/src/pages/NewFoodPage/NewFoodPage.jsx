import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as foodService from '../../services/foodService';

export default function NewFoodPage({categories}) {
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
        <label>Food Content</label>
        <input
          type="text"
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          required
        />
        <button type="submit">ADD Food</button>
      </form>

      <h3>Category</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Category</label>
        <input
          type="text"
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          required
        />
        <button type="submit">ADD Category</button>
      </form>

    </>
    

  );
}
