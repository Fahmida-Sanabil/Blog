import React, { useEffect, useState } from 'react';
import { Trash2, Eye } from 'lucide-react';
import NavBar from './NavBar';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0)



  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);


  function countt(){
    setCount((count)=>(count+1));
    console.log("count",count);
    
  }


  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  }







  return (
    <div>
      <NavBar/>
   
    <div className="bg-blue-50 h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Blog Posts</h1>

        
        {blogs.length === 0 ? (
          <p className="text-lg text-center text-gray-500">No blogs available. Please create a blog.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Display each blog */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-6 rounded-lg shadow-lg">


                <div className = "flex justify-between">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">{blog.title}</h2>
                <div className = "flex space-x-3">
                  <div onClick = {countt} className='cursor-pointer flex gap-4'>
                <Eye/>
              <h1 className='text-bold text-xl'>  {count}</h1>
                </div>
                <div
                onClick={() => deleteBlog(blog.id)}>
                <Trash2 />
                </div>
                </div>
                </div>
                <p className="text-gray-700">{blog.description}</p>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Blogs;
