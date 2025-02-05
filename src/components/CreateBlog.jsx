import React, { useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddBlog = () => {
    console.log(title, description);

    if (title && description) {
      // Retrieve existing blogs from localStorage, or initialize an empty array if none exist
      const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

      const newBlog = {
        id: Date.now(),
        title: title,
        description: description,
      };

      // Add the new blog to the existing list of blogs
      existingBlogs.push(newBlog);

      // Save the updated blogs list back to localStorage
      localStorage.setItem('blogs', JSON.stringify(existingBlogs));

      // Navigate back to the home or blog listing page
      navigate('/');
    }
  };

 

  return (
    <div>
      <NavBar />
      <div className="mt-4">
        <h1 className="font-semibold text-xl">TITLE</h1>
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="border shadow-lg rounded w-screen p-2 mt-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <h1 className="mt-7 font-semibold text-xl">DESCRIPTION</h1>
        <input
          id="content"
          type="text"
          placeholder="Write your Content"
          className="border shadow-lg w-screen mt-2 p-2 mr-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-gray-800 mt-4 text-white px-4 py-2 hover:bg-gray-600"
          onClick={handleAddBlog}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
