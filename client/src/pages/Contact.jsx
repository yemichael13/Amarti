import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact_Img from "../assets/contact.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
        src={Contact_Img}
        alt="background pond"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Navbar />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-5xl text-center px-6 md:px-5 text-white">
        <h1 className='md:text-8xl text-6xl font-black mb-5'>CONTACT US</h1>
        <div className="text-2xl flex flex-col gap-5 justify-center items-center">
          <a href="#" className="flex gap-5 hover:translate-x-2 duration-300"><FaLocationDot /> Sheno, Ethiopia</a>
          <a href="#" className="flex gap-5 hover:translate-x-2 duration-300"><IoMdMail /> info@aamaartii.org.et</a>
          <p className="flex gap-5 "><IoCall /> + 251-XXX-XXX-XXX</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Contact;