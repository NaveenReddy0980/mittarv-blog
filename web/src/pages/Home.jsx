import React from 'react';
import { useGetPostsQuery } from '../services/api';
import PostCard from '../components/PostCard';

export default function Home(){
  const { data: posts = [], isLoading } = useGetPostsQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container">
      <h1>Feed</h1>
      <div className="post-grid">
        {posts.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </div>
  );
}
