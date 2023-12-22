import React, { useContext, useState } from 'react'
import './navbar.css'

import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'


export default function Navbar() {

    const {getTotalCartItems}=useContext(ShopContext)

    const [Menu,setMenu]=useState("Shop")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link to='/' className='linkstyle'>Shop</Link>{Menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link to='/Men' className='linkstyle'>Men</Link>{Menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link to='/Women' className='linkstyle'>Women</Link>{Menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link to='/Kids' className='linkstyle'>Kids</Link>{Menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' className='linkstyle'><button onClick={()=>setMenu('login')}>Login</button></Link>
            <Link to='/cart' className='linkstyle'><img src={cart} alt="" onClick={()=>{setMenu('cart')}}/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
