import React from 'react'
import Horticulture from '../../assets/holticulture.png';
import PageMotion from "../../components/motion/PageMotion";
import Reveal from "../../components/motion/Reveal";

function Hero_Training() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
        src={Horticulture}
        alt="background pond"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <PageMotion>
      <div className="relative z-10 max-w-5xl text-center px-6 md:px-5 text-white">
        <Reveal>
        <h1 className='md:text-6xl text-4xl font-black mb-5'>Training & Demonstration Programs</h1>
        <h4 className='text-lg font-medium'>We serve as a practical learning and demonstration hub for integrated farming and eco-tourism systems.</h4>
        </Reveal>
      </div>
      </PageMotion>
    </div>
  )
}

export default Hero_Training