import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

export default function Breadcrum(props) {
    
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {props.product.category} <img src={arrow_icon} alt="" /> {props.product.name}
    </div>
  )
}
