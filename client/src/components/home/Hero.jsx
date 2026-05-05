import React, { useState, useEffect } from "react";
import Hero_Pic from "../../assets/greenary.webp";
import Hero_2 from "../../assets/fish.webp";
import Hero_3 from "../../assets/horti_2.jpg";
import Hero_4 from "../../assets/horti.jpg";
import Hero_5 from "../../assets/acuaculture.jpg";
import { Link } from "react-router-dom";

const images = [Hero_Pic, Hero_2, Hero_3, Hero_4, Hero_5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>

      {/* Content layer */}
      <div className="hero-content relative z-10 flex flex-col w-full md:w-3/5 h-full justify-center items-center md:items-start px-4 md:px-10 md:mt-20">
      <h1 className="md:text-8xl text-5xl text-white font-black">AAMAARTII</h1>
        <p className="text-white md:text-xl text-sm font-medium pt-6">
          Building Sustainable Livelihoods Through Integrated Agricultural Prodcution & Eco-Tourism
        </p>

        <div className="flex md:flex-row flex-col gap-5 md:gap-10 py-10 text-center">
          <Link
            to="/about"
            className="bg-green-900 border border-green-900 font-semibold text-lg hover:bg-white hover:text-green-800 text-white px-4 py-2 rounded-sm transition-colors duration-300 shadow cursor-pointer"
          >
            Learn More
          </Link>

          <Link
            to="/services"
            className="bg-white border border-green-900 font-semibold text-lg hover:bg-green-900 hover:text-white text-green-900 px-4 py-2 rounded-sm transition-colors duration-300 shadow cursor-pointer"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
