import React from 'react'
import { Link } from 'react-router-dom';
import Logo_2 from "../assets/aamaartii_logo2.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section>
        <div className='bg-green-900 flex p-5 justify-between' >
        <div className='w-1/3 bg-white py-5 flex flex-col justify-center items-center gap-5'>
            <Link to="/" ><img src={Logo_2} alt='logo 2' className='w-50' /></Link>
            <h3 className='font-serif text-gray-500'>Integrated Agricultural Production & Eco-Tourism</h3>
            <div>
                <h2 className='font-bold text-center text-xl'>Subscribe to Newsletter</h2>
                <div className='my-5'>
                    <input type='email' placeholder='Your Email' className='border border-green-900 rounded-l-sm px-4'/>
                    <button className='bg-green-900 border border-green-900 text-semibold text-white rounded-r-sm hover:bg-white hover:text-green-900 transition-color duration-300 cursor-pointer px-4'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='flex text-white py-20 my-5 mx-10 justify-between items-center border-l-2 border-white gap-20 w-2/3 px-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='font-bold text-lg'>Core Services</h4>
                <p className='font-light'>Fish Production (Aquaculture)<br />Poultry Production<br />Integrated Horticulture<br />Eco-Tourism & Recreation<br />Training & Knowledge Sharing</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='font-bold text-lg'>Quick Links</h4>
                <Link to="#" className='text-white text-sm hover:white/70'>Home</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>About</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>Services</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>Eco-Tourism</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>Training</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>Posts & Updates</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>Contact</Link>
                <Link to="#" className='text-white text-sm hover:white/70'>FAQ</Link>
            </div>
            <div className='flex flex-col gap-5 items-end'>
                <h4 className='font-bold underline text-lg'>Find Us</h4>
                <a href='#' className='cursor-pointer items-baseline transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white'><FaFacebook /></a>
                <a href='#' className='cursor-pointer items-baseline transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white'><FaInstagram /></a>
                <a href='#' className='cursor-pointer items-baseline transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white'><FaLinkedin /></a>
                <a href='#' className='cursor-pointer items-baseline transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white'><FaTiktok /></a>
                <a href='#' className='cursor-pointer items-baseline transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white'><FaXTwitter /></a>
            </div>
        </div>
    </div>
        <div className="bg-white w-full p-2 flex justify-around">
          <p className="font-light text-center">&copy; {new Date().getFullYear()}</p>
          <p>Aamaartii PLC. All Rights Reserved</p>
        </div>
    </section>
    
  )
}

export default Footer;