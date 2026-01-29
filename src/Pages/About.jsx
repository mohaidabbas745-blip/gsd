
import React from 'react';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-7'>
      <h1 className='text-3xl font-semibold mt-4'>Our Story</h1>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-6">
        <div className="md:w-1/2">
          <p className='text-gray-600 leading-relaxed'>
            Launched in 2024, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
            Supported by wide range of tailored marketing ,data and service solution,Exclsive has 10,500 salers and 300 brands and serves 3 million customer across region
          </p>
        </div>

        <div className="md:w-1/2">
          <img src="Shopping.png.png" alt="shopping" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      
      <div className="flex flex-wrap gap-6 mt-10 justify-center  ">
        <div className="w-72 h-72 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 bg-white                 hover:shadow-lg hover:scale-105 transition transform duration-300">

          <div className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center'>
            <img src="/Services.png" alt="" />
          </div>
          <h1 className='text-4xl font-bold'>10.5k</h1>
          <p className='text-gray-600 text-center'>Sellers active on our site</p>
        </div>

        <div className="w-72 h-72 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 bg-red-500                 hover:shadow-lg hover:scale-105 transition transform duration-300">
          <div className='w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center'>
            <img src="Icon-Sale.png" alt="" />
          </div>
          <h1 className='text-4xl font-bold'>33k</h1>
          <p className='text-gray-600 text-center'>Monthly product sell</p>
        </div>

        <div className="w-72 h-72 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 bg-white                 hover:shadow-lg hover:scale-105 transition transform duration-300">

          <div className='w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center'>
            <img src="Icon-Shopping bag.png" alt="" />
          </div>
          <h1 className='text-4xl font-bold'>45.5k</h1>
          <p className='text-gray-600 text-center'>Customers active on our site</p>
        </div>

        <div className="w-72 h-72 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 bg-white                 hover:shadow-lg hover:scale-105 transition transform duration-300">

          <div className='w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center'>
            <img src="/Icon-Moneybag.png" alt="" />
          </div>
          <h1 className='text-4xl font-bold'>25k</h1>
          <p className='text-gray-600 text-center'>Revenue generated</p>
        </div>


<div className="mt-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

  
    <div className="border rounded-md overflow-hidden text-center bg-white">
      <img
        src="Frame 874.png"
        alt="Tom Cruise"
        className="w-full h-[350px] object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold">Tom Cruise</h2>
        <p className="text-gray-500">Founder & Chairman</p>

        <div className="flex justify-center gap-4 mt-4">
          <img src="/Icon-Twitter.png" className="w-5 cursor-pointer" />
          <img src="/icon-instagram.png" className="w-5 cursor-pointer" />
          <img src="/Icon-Linkedin.png" className="w-5 cursor-pointer" />
        </div>
      </div>
    </div>


    <div className="border rounded-md overflow-hidden text-center bg-white">
      <img
        src="Frame 875.png"
        alt="Emma Watson"
        className="w-full h-[350px] object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold">Emma Watson</h2>
        <p className="text-gray-500">Managing Director</p>

        <div className="flex justify-center gap-4 mt-4">
          <img src="/Icon-Twitter.png" className="w-5 cursor-pointer" />
          <img src="/icon-instagram.png" className="w-5 cursor-pointer" />
          <img src="/Icon-Linkedin.png" className="w-5 cursor-pointer" />
        </div>
      </div>
    </div>

    <div className="border rounded-md overflow-hidden text-center bg-white">
      <img
        src="Frame 876.png"
        alt="Will Smith"
        className="w-full h-[350px] object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold">Will Smith</h2>
        <p className="text-gray-500">Product Designer</p>

        <div className="flex justify-center gap-4 mt-4">
          <img src="/Icon-Twitter.png" className="w-5 cursor-pointer" />
          <img src="/icon-instagram.png" className="w-5 cursor-pointer" />
          <img src="/Icon-Linkedin.png" className="w-5 cursor-pointer" />
        </div>



    
      </div>
    </div>

  </div>
</div>

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

  </div>




      
    

    
  );
};

export default About;
