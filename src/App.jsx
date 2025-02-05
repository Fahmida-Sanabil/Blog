import { useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import CreateBlog from './components/CreateBlog';
import Blogs from './components/Blogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [blogs, setBlogs] = useState([]);

  // Function to add new blog
  const addBlog = (title, description) => {
    setBlogs([
      ...blogs,
      { id: Date.now(), title, description }
    ]);
  };

  return (
    <BrowserRouter>
      {/* Global NavBar */}
     

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Pass addBlog as a prop to CreateBlog */}
        <Route path="/createblog" element={<CreateBlog addBlog={addBlog} />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
