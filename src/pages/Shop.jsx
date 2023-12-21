import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offer/Offers'
import NewCollections from '../components/newCollection/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

export default function shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}


