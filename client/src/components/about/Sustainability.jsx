import React from 'react'
import Climate from  "../../assets/climate.png";
import Community from "../../assets/community.png";
import Water from "../../assets/water_cycle.png";
import Market from "../../assets/market.png";

function Sustainability() {
  return (
    <div className='py-10 flex flex-col justify-center items-center gap-5'>
        <h2 className='text-4xl font-bold text-center '>Sustainability</h2>
        <div className='flex  justify-center items-center gap-5 md:gap-50'>
            <div className='flex flex-col items-center justify-center mx-auto'>
                <img src={Water} alt="Water" className='md:w-60 w-40 md:h-60 h-40 object-contain hover:scale-110 transition-transform duration-300' />
                <h3 className='md:text-2xl text-xl font-bold text-center'>Circular Water Use</h3>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={Community} alt="Community" className='md:w-60 w-40 md:h-60 h-40 object-contain hover:scale-110 transition-transform duration-300' />
                <h3 className='md:text-2xl text-xl font-bold text-center'>Community Ownership</h3>
            </div>
        </div>
        <div className='flex  justify-center items-center gap-5 md:gap-50'>
            <div className='flex flex-col items-center justify-center'>
                <img src={Market} alt="Market" className='md:w-60 w-40 md:h-60 h-40 object-contain hover:scale-110 transition-transform duration-300' />
                <h3 className='md:text-2xl text-xl font-bold text-center'>Market-Oriented Production</h3>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={Climate} alt="Climate" className='md:w-60 w-40 md:h-60 h-40 object-contain hover:scale-110 transition-transform duration-300' />
                <h3 className='md:text-2xl text-xl font-bold text-center'>Climate-Smart Agriculture</h3>
            </div>
        </div>
    </div>
  )
}

export default Sustainability