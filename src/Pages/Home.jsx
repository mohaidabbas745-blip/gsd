import React from 'react';
import Products from '../components/Products';


const Home = () => {


  return (
    <>
  
    <div className='mx-15 mt-10 flex flex-wrap ml-20 items-center gap-12'>
      <img  className='border-2 border-blue-400  w-80 ' src="Frame 768.png" alt="" />
       <div className='ml-70  '>
         <img src="Frame 560.png" alt=""  className='w-300'/>
       </div>
    </div>
    <div className="flex items-center gap-2 mt-5 ml-20">
  <div className="w-4 h-8 bg-red-500 rounded-sm"></div>
  <div className=" text-red-500 px-4 py-1 rounded-md font-semibold"> 
    Today’s
  </div>
</div>
<div className=" font-bold text-5xl p-6 rounded-lg ml-60 "> 
  <h1>Flash Sales</h1>
</div>  
<div className='-mt-10'>
<div className='flex gap-5 ml-150  font-medium '>
<a href="#">Days</a>
<a href="#">Hours</a>
<a href="#">Minutes</a>
<a href="#">Seconds</a>
</div>
<div className=' ml-150  '>
  <a href="#" className='font-bold text-3xl'>03 <span className='text-amber-600 ml-1'>:</span></a>
  <a href="#" className='font-bold text-3xl ml-2'>23 <span className='text-amber-600 ml-'>:</span></a>
  <a href="#" className='font-bold text-3xl ml-6'>19 <span className='text-amber-600'>:</span></a>
  <a href="#" className='font-bold text-3xl ml-7'>56 <span className='text-amber-600'>:</span></a>
  </div>
  <div className="flex ml-40 justify-center gap-10 ">
  <div className="p-6 shadow rounded w-72">
    <img src="Frame.svg" alt="" />
    <h1 className="font-bold mt-2">HAVIT HV-G92 Gamepad</h1>
    <h4 className="text-red-500">
      $120 <span className="text-gray-400 ml-2">$160</span>
    </h4>





    <div className="flex items-center mt-2">
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <p className="text-sm text-gray-600 ml-4">(88)</p>
    </div>
  </div>
  <div className="p-6 shadow rounded w-72">
    <img src="computer.svg" alt="" />
    <h1 className="font-bold mt-2">IPS LCD Gaming Monitor</h1>
    <h4 className="text-red-500 font-medium">
      $370 <span className="text-gray-500 ml-2">$400</span>
    </h4>
    
    <div className="flex items-center mt-2">
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <p className="text-sm text-gray-500 ml-4">(99)</p>
    </div>
  </div>
  <div className="p-6 shadow rounded w-72">
    <img src="keyboard.svg" alt="" />
    <h1 className="font-bold mt-2">AK 900 Wired Keyboard</h1>
    <h4 className="text-red-500 font-medium">
      $960 <span className="text-gray-500 ml-2">$1160</span>
    </h4>
    <div className="flex items-center mt-2">
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="star.svg" alt="" />
      <img src="gray.svg" alt="" />
      <p className="text-sm text-gray-500 ml-4">(75)</p>
    </div>
  </div>
  <div className='p-6 shadow rounded w-72'>
    <img src="chair.svg" alt="" />
    <h1 className='font-bold mt-2'>S Series Comfortable Chair</h1>
    <h4 className='text-red-500 font-medium'>$375 <span className='text-gray-400 ml-4'>
      $400</span></h4>
  </div>
</div>
 <div className='text-center mt-5'>
  <img src="/product.svg" alt="" className='mx-auto' />

 </div>
 <hr />
   <div className='flex items-center gap-2 mt-5 ml-20'>
    <div className='w-4 h-8 bg-red-500 rounded-sm'>
      <div className=' text-red-500 px-4 py-1 rounded-md font-bold'>
Categories
      </div>
    </div>
    </div> 
    <div className='font-bold text-5xl ml-20'>
      Browser By Categories
      </div>
      <div className='flex ml-400 gap-5'>
        <img src="/arrow.svg" alt="" />
         <img src="/let.svg" alt="" />
      </div>
    <div className='flex gap-4 ml-35 justify-center '>
      <div className=' flex p-4 shadow rounded '>
              <img src="/Phone.svg" alt="" />
      </div>
      <div className='flex py-2'>
        <img src="/comp.svg" alt="" />
      </div>
      <div className='flex py-4 '>
        <img src="/watch.svg" alt="" />
      </div>
      <div className='flex  py-3' >
        <img src="/camera.svg" alt="" />
      </div>
      <div className='flex py-3'>
        <img src="/Headphones.svg" alt="" />
      </div>
      <div className='flex py-3'>
        <img src="/Gameing.svg" alt="" />
      </div>
      </div>
    </div>
  <hr/>
    <div className='flex items-center gap-1 mt-5 ml-20'>
      <div className='w-4 h-8 bg-red-500 rounded-sm'>
<div className=' text-red-500 px-4 py-1 rounded-md font-bold'>
<h1>This Month</h1>
</div>
      </div>  
    </div>
    <div className='mt-5'>
      <h1 className='font-bold text-5xl ml-15'>Best Selling Products</h1>
            <img src="/view.svg" alt="" className='flex ml-320' />
    </div>
    <div className="flex ml-40 justify-center gap-3">
      <div className="p-6 shadow rounded w-72">
<img src="/coat.svg" alt="" />
<h1 className=' font-medium'>The North Coat</h1>
<h4 className='text-red-500 font-medium'>$260<span className='text-gray-500 ml-4'>$360</span></h4>
<div className='flex items-center mt-2'>
  <img src="/star.svg" alt="" />
   <img src="/star.svg" alt="" />
    <img src="/star.svg" alt="" />
     <img src="/star.svg" alt="" /> 
     <img src="/star.svg" alt="" />
     <p className='text-sm text-gray-500 ml-4'>(65)</p>
</div>
      </div>
     < div className="flex ml-40 justify-center gap-10">
      <div className="p-6 shadow rounded w-72">
<img src="/bag.svg" alt="" />
<h1 className=' font-medium'>Gucci duffile bag</h1>
<h4 className='text-red-500 font-medium'>$960<span className='text-gray-500 ml-4'>$1160</span></h4>
<div className='flex items-center mt-2'>
  <img src="/star.svg" alt="" />
   <img src="/star.svg" alt="" />
    <img src="/star.svg" alt="" />
     <img src="/star.svg" alt="" /> 
     <img src="/star.svg" alt="" />
     <p className='text-sm text-gray-500 ml-4'>(65)</p>
</div>
      </div>
     < div className="flex ml-40 justify-center gap-10">
      <div className="p-6 shadow rounded w-72">
<img src="/speacker.svg" alt="" />
<h1 className=' font-medium'>RGB liquid CPU Cooker </h1>
<h4 className='text-red-500 font-medium'>$160<span className='text-gray-500 ml-4'>$710</span></h4>
<div className='flex items-center mt-2'>
  <img src="/star.svg" alt="" />
   <img src="/star.svg" alt="" />
    <img src="/star.svg" alt="" />
     <img src="/star.svg" alt="" /> 
     <img src="/star.svg" alt="" />
     <p className='text-sm text-gray-500 ml-4'>(65)</p>
</div>
      </div>
      </div>
< div className="flex ml-40 justify-center gap-10">
      <div className="p-6 shadow rounded w-72">
<img src="/smart.svg" alt="" />
<h1 className=' font-medium'>Smart Bookself </h1>
<h4 className='text-red-500 font-medium'>$360</h4>
<div className='flex items-center mt-2'>
  <img src="/star.svg" alt="" />
   <img src="/star.svg" alt="" />
    <img src="/star.svg" alt="" />
     <img src="/star.svg" alt="" /> 
     <img src="/star.svg" alt="" />
     <p className='text-sm text-gray-500 ml-4'>(65)</p>

</div>
      </div>
      </div>
      
 </div> 
    </div>

    <div className='mt-5 '>
      <img src="/Car.svg" alt="" className='w-350  ml-38 mx-9
     py-5' />
    </div>


<Products/>



   <div className= '  text-center mt-5'>
    <img src="/product.svg" alt="" className='mx-auto' />
   </div>
  <div className=' flex justify-center items-center mt-5'>
    <img src="/woman.svg" alt=""  />
  </div>

  <div className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
    
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <img src="/new.svg" alt="" className="w-8 h-8" />
      </div>
      <h1 className="mt-4 font-bold text-sm uppercase">
        Free and Fast Delivery
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Free delivery for all orders over $140
      </p>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <img src="/old.svg" alt="" className="w-8 h-8" />
      </div>
      <h1 className="mt-4 font-bold text-sm uppercase">
        24/7 Customer Service
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Friendly 24/7 customer support
      </p>
    </div>

    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <img src="/money.svg" alt="" className="w-8 h-8" />
      </div>
      <h1 className="mt-4 font-bold text-sm uppercase">
        Money Back Guarantee
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        We return money within 30 days
      </p>
    </div>

  </div>
  </div>


    

    
    </>

)  
}

export default Home
