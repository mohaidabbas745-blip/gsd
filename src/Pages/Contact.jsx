import React from 'react'

const Contact = () => {
  return (
   <>
   <div className='bg-white p-9 rounded shadow w-[350px]  mt-5 space-y-6  ml-30'>
    <div className='flex items-start gap-4 '>
      <img src="/us.svg" alt="" className='w-8 h-8 mt-1' />
      <div >
      <h1 className='font-bold text-lg '>Call To Us</h1>
        <p className='text-gray-800 font-medium'>We are avaiable 24/7,  7 day of week  week</p>
        <p className='text-gray-800 font-medium'>
          Phone : +8801611112222
        </p>
        <hr />
      </div>
    </div>
 
    <div className='flex  items-start gap-4'>
          <img src="/msg.svg" alt="" className='w-8 h-8 mt-1' />
          <div>
            <h1 className=' text-lg font-bold'> Write To Us</h1>
            <p className='text-gray-800 font-medium'>Fill out our form and we will contact you within 24 houes</p>
            <br />
            <p className='text-gray-800 font-medium'>Email : customer@exclusive.com</p>
            
            <p className='text-gray-800 font-medium'>Email : support@exclusive.com</p>
          </div>
        </div>
   </div>

   <div className='max-w-5xl mx-auto bg-white p-8 rounded shadow  -mt-80'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
<input type="text" placeholder='Your Name'  className='bg-gray-100 px-4 py-3 rounded outline-none'/>
<input type="text" placeholder='Your Phone'  className='bg-gray-100 px-4 py-3 rounded outline-none'/>
    </div>
    <textarea
        rows="6"
        placeholder="Your Message"
        className="w-full bg-gray-100 px-4 py-3 rounded outline-none mt-5 resize-none"
      ></textarea>

<div className="flex justify-end mt-6">
        <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition">
          Send Message
        </button>
      </div>
      

   </div>
   
   
   
   
   
   
   </>
  )
}

export default Contact
