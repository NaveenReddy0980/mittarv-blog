import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewPost from './pages/NewPost';
import PostView from './pages/PostView';
import TopNav from './components/TopNav';

function App() {
  return (
    <Router>
      <TopNav />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/post/:slug" element={<PostView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
