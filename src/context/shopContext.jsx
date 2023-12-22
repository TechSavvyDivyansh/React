import React, { createContext, useState } from 'react'
import all_products from '../components/assets/all_product.js'

export const ShopContext =createContext(null)
const getDefaultCart=()=>{
    let cart={}
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index]=0        
    }
    return cart
}



const ShopContextProvider=(props)=>{

    const [CartItem,setCartItem]=useState(getDefaultCart())
    

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(CartItem)
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const contextValue={all_products,CartItem,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

