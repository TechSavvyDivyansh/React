import React, { useContext } from 'react'
import './productDisplay.css'

import star_icon from '../assets/star_icon.png'
import startdull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/shopContext'

export default function ProductDisplay(props) {

    const {addToCart}=useContext(ShopContext)

  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productdisplay-img-list">
                <img src={props.product.image} alt="" />
                <img src={props.product.image} alt="" />
                <img src={props.product.image} alt="" />
                <img src={props.product.image} alt="" />
            </div>
            <div className="productdisplay-image">
                <img src={props.product.image} alt="" className='productdislay-main-img'/>
            </div>
        </div>

        <div className="productDisplay-right">
            <h1>{props.product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={startdull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="old-price">${props.product.old_price}</div>
                <div className="new-price">${props.product.new_price}</div>
            </div>

            <div className="productdisplay-right-desc">
            Discover stylish jackets for every occasion. Timeless designs, ultimate comfort. Elevate your wardrobe effortlessly.
            </div>

            <div className="productDisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>

            <button onClick={()=>{addToCart(props.product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>{props.product.category} T-shirt,jackets</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern,Latest</p>

        </div>
    </div>
  )
}
