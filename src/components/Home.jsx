import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    function createblognavi(){
        navigate("/createblog");

    }

  return (
    <div>
     <NavBar/>
    <div className="relative h-screen">
        <img src="https://psdlearning.com/wp-content/uploads/2020/04/2173df74a356e89b40b18897e1b8655d.jpeg"  className ="w-full h-full object-cover"/>

        <div className ="absolute inset-0 flex items-center justify-center mt-100">
            <button onClick = {createblognavi} className ="px-8 py-3 bg-gray-800 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-600">
                Create your Blog
            </button>
        </div>


    </div>
    </div>
  )
}

export default Home