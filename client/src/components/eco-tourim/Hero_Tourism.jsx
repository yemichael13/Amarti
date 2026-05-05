import React from 'react'
import Horticulcure from "../../assets/horti_2.jpg";

function Hero_Tourism() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
        src={Horticulcure}
        alt="background pond"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-6xl text-center px-6 md:px-5 text-white">
        <h1 className='md:text-6xl text-4xl font-black mb-5'>Experience Nature, Farming & Sustainabily</h1>
        <h4 className='text-lg font-medium'>Discover how integrated agriculture and eco-tourism work together in a real-world setting.</h4>
      </div>
    </div>
  )
}

export default Hero_Tourism