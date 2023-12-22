import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/breadcrums/Breadcrum'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/relatedProducts/RelatedProducts'

export default function Product() {
  
  const {all_products}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_products.find((e)=>e.id===Number(productId))


  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}
