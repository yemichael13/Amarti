import React from 'react'
import { Link } from "react-router-dom";
import Call from "../../assets/call.png";
import Email from "../../assets/email.webp";
import Location from "../../assets/location.png";


function Contact() {
  return (
    <div className='flex flex-col gap-10 py-5'>
        <h2 className='text-4xl font-black text-center'>Let's Build Sustainable Livelihoods Together</h2>
        <div className='flex justify-center items center gap-20'>
            <Link className='text-lg rounded-sm bg-green-900 text-white font-semibold px-6 py-2 hover:text-green-900 hover:bg-white transition-color duration-300 border border-green-900 cursor-pointer'>Become A Partner</Link>
            <Link className='text-lg rounded-sm bg-white text-green-900 font-semibold px-6 py-2 hover:text-white hover:bg-green-900 transition-color duration-300 border border-green-900 cursor-pointer'>Plan A Visit</Link>
        </div>
        <div className='flex justify-between px-20'>
            <div className='flex justify-between items-center gap-5'>
                <img src={Call} alt='call' className='w-8 h-8 object-contain' />
                <p className='text-lg font-bold'>+ 251-XXX-XXX-XXX</p>
            </div>
            <div className='flex justify-between items-center gap-5'>
                <img src={Email} alt='email' className='w-8 h-8 object-contain' />
                <p className='text-lg font-bold'>info@aamaartii.org</p>
            </div>
            <div className='flex justify-between items-center gap-5'>
                <img src={Location} alt='location' className='w-8 h-8 object-contain' />
                <p className='text-lg font-bold'>123, Street, Addis Ababa</p>
            </div>
        </div>
    </div>
  )
}

export default Contact