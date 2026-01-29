import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  return (
    <div>
      <h1 className="font-bold text-xl">Cart Items</h1>

      {cart.length === 0 && <p>Cart empty hai</p>}

      {cart.map(item => (
        <div key={item.id} className="flex justify-between border p-2 mt-2">
          <span>{item.name}</span>

          <button
            className="bg-red-500 text-white px-2"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
