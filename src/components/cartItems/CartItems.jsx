import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../context/shopContext'


import remove_icon from '../assets/cart_cross_icon.png'

export default function CartItems() {

    const {all_products,CartItem,addToCart,removeFromCart}=useContext(ShopContext)

  return (
    <div className='cartItem'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if(CartItem[e.id]>0)
            {
                return <div>
                            <div className="cartitems-format cartItems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity' onClick={()=>{addToCart(e.id)}}>{CartItem[e.id]}</button>
                                <p>${e.new_price*CartItem[e.id]}</p>
                                <img src={remove_icon} className='cartItems-removeicon' onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promocode,Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='Promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}
