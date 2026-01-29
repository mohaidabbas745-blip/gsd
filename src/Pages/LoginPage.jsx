import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full font-sans flex-col md:flex-row">
      
      <div className="flex flex-1 items-center justify-center bg-cyan-50 p-4 md:p-0 min-h-[30vh] md:min-h-0">
        <div className="flex h-full w-[80%] items-center justify-center rounded-lg  text-sm font-semibold p-4 text-center">
    <img src="dl.beatsnoop 1.png" alt="" />  
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-white p-6 md:p-10">
        <div className="w-full max-w-sm sm:max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">Log in to Exculsive</h1>
          <p className="text-gray-500 mb-6 sm:mb-8">Start your digital journey below</p>
          <form className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Email or Phone Number" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="mt-2 p-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              
              <a href="/login" className="font-bold text-blue-600 hover:text-blue-800 ml-1">
                Forget Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage
