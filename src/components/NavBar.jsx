import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end space-x-6">
        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link to="/createblog" className="text-white hover:text-green-600">Create Blog</Link></li>
        <li><Link to="/blogs" className="text-white hover:text-green-600">Blogs</Link></li>
        <li><Link to="/about" className="text-white hover:text-green-600">About</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar