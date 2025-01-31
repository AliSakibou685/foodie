import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as foodService from '../../services/foodService';
import * as categoryService from '../../services/categoryService';
import './NewFoodPage.css';
export default function NewFoodPage({ categories, setCategories }) {
  const [formData, setFormData] = useState({
    name: '',
    expires: '',
    category: categories[0]?._id
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isAddingCat, setIsAddingCat] = useState(false);
  const [catName, setCatName] = useState('');

  useEffect(() => {
    if (categories.length) setFormData({...formData, category: categories[0]._id})
  }, [categories])

  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setErrorMsg('');
  }
  async function handleCatBtnClick(evt) {
    evt.preventDefault();
    if (isAddingCat) {
      try {
        const updatedCats = await categoryService.create({name: catName});
        setCategories(updatedCats);
        setCatName('');
        setIsAddingCat(false);
        setErrorMsg('');
      } catch {
        setErrorMsg('Category Already Exists')
      }
    } else {
      setIsAddingCat(true);
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const food = await foodService.create(formData);
      navigate('/foods');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='new-food-page'>
      <h2 className='page-title'>New Food</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Food Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Expiration Date</label>
        <input
          type="date"
          name="expires"
          value={formData.expires}
          onChange={handleChange}
          required
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option value={cat._id} key={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button onClick={handleCatBtnClick}>
          {isAddingCat ? 'Save Category' : 'New Category'}
        </button>
        {isAddingCat && (
          <input
            type="text"
            onChange={(evt) => setCatName(evt.target.value)}
            value={catName}
          />
        )}
        <button type="submit">ADD Food</button>
      </form>
      <p className="error-message">&nbsp;{errorMsg}</p>
    </div>
  );
}
