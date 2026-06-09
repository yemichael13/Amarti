import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact_Img from "../assets/contact.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <Seo
        title="Contact"
        description="Get in touch with Aamaartii PLC in Sheno, Ethiopia. Plan a visit, become a partner, or reach our team for inquiries."
        path="/contact"
      />
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
          <a href="https://www.google.com/maps/place/Aamaartii+PLC/@9.3033512,39.2601065,974m/data=!3m1!1e3!4m6!3m5!1s0x164bd5701a88ff8f:0x343dd2d19ae30f34!8m2!3d9.3032387!4d39.2626712!16s%2Fg%2F11ytckh1wp?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex gap-5 hover:translate-x-2 duration-300"><FaLocationDot /> Sheno, Ethiopia</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aamaartii33@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-5 hover:translate-x-2 duration-300"><IoMdMail /> aamaartii33@gmail.com</a>
          <p className="flex gap-5 "><IoCall /> + 251-910-099-955</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Contact;