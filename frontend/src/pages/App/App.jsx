import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../services/authService';
import * as categoryService from '../../services/categoryService';
import './App.css';
import HomePage from '../HomePage/HomePage';
import FoodListPage from '../FoodListPage/FoodListPage';
import NewFoodPage from '../NewFoodPage/NewFoodPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const categories = await categoryService.index();
      setCategories(categories);
    }
    fetchCategories();
   
  }, []);
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foods" element={<FoodListPage />} />
            <Route
              path="/foods/new"
              element={
                <NewFoodPage
                  categories={categories}
                  setCategories={setCategories}
                />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
          </Routes>
        )}
      </section>
    </main>
  );
}
