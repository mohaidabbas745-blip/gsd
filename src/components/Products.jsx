import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'



const products=[
    {id:1, name:'HAVIT HV-G92 Gamepad',price:120},
    {id:2,name:'IPS LCD Gaming Moniter',price:370},
    {id:3,name:'S Series Comfortable Chair',price:375},
        {id:4,name:'AK 900 Wired Keyborad',price:960},
]


const Products = () => {
const dispatch = useDispatch();

  return (
    <div className='flex gap-6'>
       {products.map(product=>(
        <div key={product.id} className='border p-4 w-48' > 
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button className='bg-blue-500 text-white px-3 py-1 mt-2' 
        onClick={()=>dispatch(addToCart(product))}
        >
            Add To Cart

        </button>
        

        </div>

       ))}
       
    </div>
  )
}

export default Products
