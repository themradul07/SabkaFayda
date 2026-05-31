import React from 'react'
import { useData } from '../context/appContext'
import { AnimatePresence, motion } from 'framer-motion';


const CartSidebar = () => {
  const { cart, removeItem, cartOpen, setCartOpen } = useData();
  const total = cart.reduce((sum, e) => {
    return sum += parseInt(e.price)
  }, 0);


  return (
      <><div className="top-0 right-0 w-80 bg-white border shadow-2xl z-100 h-screen flex flex-col">



      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={() => setCartOpen(false)}>X</button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.map((item) => (

          <div key={item.id} className="mb-4 rounded border p-3 flex justify-between">
            <div>

            <h3 className="font-semibold">{item.title}</h3>
            <p>₹{item.price}</p>
           

            <button
              onClick={() => removeItem(item.id)}
              className="mt-2 text-red-500"
              >
              Remove
            </button>
              </div>
              <div>
                <img src={item.images[0]} className='w-14 h-14 object-fill' alt="" />
              </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="flex justify-between mb-3">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="w-full rounded bg-black py-2 text-white">
          Checkout
        </button>
      </div>
        </div>

    </>

  )
}

export default CartSidebar
