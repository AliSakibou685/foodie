import { useState, useEffect } from 'react';
import * as postService from '../../services/postService';
import './FoodListPage.css';
import PostItem from '../../components/PostItem/PostItem';

export default function FoodListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const posts = await postService.index();
      setFoods(foods);
    }
    fetchPosts();
  }, []);

  const postItems = posts.map((p) => <PostItem key={p._id} post={p} />);

  return (
    <>
      <h1>Food List</h1>
      <section className="post-item-container">{postItems}</section>
    </>
  );
}
