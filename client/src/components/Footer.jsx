import React from 'react'
import { Link } from 'react-router-dom';
import Logo_2 from "../assets/amarti_logo_2.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


function Footer() {
  return (
    <section>
      {/* Top Section */}
      <div className="bg-green-900 flex flex-col md:flex-row p-5 md:justify-between">
        
        {/* Left Column */}
        <div className="w-full md:w-1/3 bg-white py-5 flex flex-col justify-center items-center gap-5">
          <Link to="/">
            <img src={Logo_2} alt="logo 2" className="w-40 md:w-50" />
          </Link>
          <h3 className="font-serif text-gray-500 text-center px-4">
            Integrated Agricultural Production & Eco-Tourism
          </h3>
          <div className="w-full px-4 md:px-0">
            <h2 className="font-bold text-center text-lg md:text-xl">Subscribe to Newsletter</h2>
            <div className="my-5 flex justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-green-900 rounded-l-sm px-4 py-2 w-2/3 md:w-auto"
              />
              <button className="bg-green-900 border border-green-900 font-semibold text-white rounded-r-sm hover:bg-white hover:text-green-900 transition-colors duration-300 cursor-pointer px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:flex-row text-white py-10 md:py-20 my-5 md:my-0 md:mx-10 justify-between items-start md:items-center border-t-2 md:border-t-0 md:border-l-2 border-white gap-10 md:gap-20 w-full md:w-2/3 px-5 md:px-20">
          
          {/* Core Services */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-lg">Core Services</h4>
            <p className="font-light text-sm md:text-base">
              Fish Production (Aquaculture)<br />
              Poultry Production<br />
              Integrated Horticulture<br />
              Eco-Tourism & Recreation<br />
              Training & Knowledge Sharing
            </p>
          </div>
          <div className='flex gap-25'>
            {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <Link to="/" className="text-white text-sm hover:text-white/70">Home</Link>
            <Link to="/about" className="text-white text-sm hover:text-white/70">About</Link>
            <Link to="/services" className="text-white text-sm hover:text-white/70">Services</Link>
            <Link to="eco-tourism" className="text-white text-sm hover:text-white/70">Eco-Tourism</Link>
            <Link to="/training" className="text-white text-sm hover:text-white/70">Training</Link>
            <Link to="news" className="text-white text-sm hover:text-white/70">Posts & Updates</Link>
            <Link to="/contact" className="text-white text-sm hover:text-white/70">Contact</Link>
            <Link to="/faq" className="text-white text-sm hover:text-white/70">FAQ</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-5 items-start md:items-end">
            <h4 className="font-bold underline text-lg">Find Us</h4>
            <a href="https://web.facebook.com/profile.php?id=61589387694921&sk=about" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white"><FaFacebook /></a>
            <a href="https://instagram.com/aamaartii_farm" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white"><FaInstagram /></a>
            <a href="https://tiktok.com/@aamaartii_farm" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white"><FaTiktok /></a>
            <a href="https://t.me/aamaartii_farm" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex gap-2 text-white"><FaTelegramPlane /></a>
          </div>
        </div>
      </div>

          </div>

          
      {/* Bottom Section */}
      <div className="bg-white w-full p-2 flex flex-col md:flex-row justify-around items-center gap-2">
        <p className="font-light text-center">&copy; {new Date().getFullYear()}</p>
        <p className="text-center">Aamaartii PLC. All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Footer;
