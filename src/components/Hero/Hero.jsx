import React from 'react'
import './hero.css'
import handIcon from '../assets/hand_icon.png'
import arrowIcon from '../assets/arrow.png'
import heroImg from '../assets/hero_image.png'

export default function Hero() {
  return (
    <div className='hero'>

        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={handIcon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="" />
            </div>
        </div>


        <div className="hero-right">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}
