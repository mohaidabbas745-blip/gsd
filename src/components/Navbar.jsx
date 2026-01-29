import React from 'react'
import { Link } from 'react-router-dom'
import {Heart, Search, ShoppingCart} from "lucide-react"
const Navbar = () => {
  return (
    <>
<nav className='bg-white flex items-center justify-between mx-6   border-dotted border-red-500  '>
    <h1 className='font-semibold'>Exclusive</h1>
    <div className='flex items-center   gap-4'>

<Link  className='font-medium hover:bg-red-400 underline' to="/">Home </Link>
<Link  className='font-medium  hover:bg-red-400 underline' to="/about"> About</Link>
<Link className='font-medium  hover:bg-red-400 underline' to="/contact">Contact </Link>
<Link  className='font-medium  hover:bg-red-400 underline' to="/SignupPage">SignupPage </Link>

<Link  className='font-medium  hover:bg-red-400 underline' to="/cart">Cart </Link>

     
        
        <div className="relative flex items-center">

  <Search className="absolute left-3 text-gray-400" size={18} />

  
  <input
    type="text"
    placeholder="What are you looking for?"
    className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
  />

  
  <Heart className="ml-3 cursor-pointer text-gray-700 hover:text-red-500" />

    <ShoppingCart/>
  

</div>


        

    </div>
</nav>

         <hr  className='h-9px w-full bg-red-500 mt-2'/> 




    </>
  )
}

export default Navbar
