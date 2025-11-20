import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
function CartItems() {
    const {all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default CartItems