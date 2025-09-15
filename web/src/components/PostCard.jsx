import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }){
  const tags = post.tags ? post.tags.split(',') : [];
  return (
    <article className="card">
      <h3><Link to={`/post/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.excerpt || post.content.slice(0,150)}</p>
      <div className="meta">
        <span>By {post.author?.name}</span>
        <div className="tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  );
}
