import React, { useContext } from 'react'
import './css/shopCategory.css'
import { ShopContext } from '../context/shopContext'

import Item from '../components/item/Item.jsx'

import dropdown_icon from '../components/assets/dropdown_icon.png'

export default function ShopCategory(props) 
{
  
  const {all_products}=useContext(ShopContext)
  
  return (
    <div className='shopCategory'>
        <img src={props.banner} className='shopcategory-banner' alt="" />
        <div className="shopCategory-indexSort">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>

        <div className="shopcategory-products">
          {all_products.map((item,i)=>{
              if(props.category===item.category)
              {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else
              {
                return null;
              }
          })}
        </div>

        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div>
  )
}
