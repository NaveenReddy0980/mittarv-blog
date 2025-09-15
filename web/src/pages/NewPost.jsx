import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useCreatePostMutation } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function NewPost(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagsText, setTagsText] = useState('');
  const [createPost] = useCreatePostMutation();
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const tags = tagsText.split(',').map(t => t.trim()).filter(Boolean);
    const body = { title, content, tags, published: true };
    try {
      const post = await createPost(body).unwrap();
      nav(`/post/${post.slug}`);
    } catch (err) {
      console.error(err);
      alert('Error creating post');
    }
  }

  return (
    <div className="container">
      <h1>New Post</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required/>
        <ReactQuill value={content} onChange={setContent}/>
        <input placeholder="tags (comma separated)" value={tagsText} onChange={e=>setTagsText(e.target.value)} />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
