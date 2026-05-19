import React, { useState, useEffect } from "react";
import Hero_Pic from "../../assets/greenary.webp";
import Hero_2 from "../../assets/fish.webp";
import Hero_3 from "../../assets/horti_2.jpg";
import Hero_4 from "../../assets/horti.jpg";
import Hero_5 from "../../assets/acuaculture.jpg";
import { Link } from "react-router-dom";
import TextType from '../animations/TextType';
import PageMotion from "../../components/motion/PageMotion";
import Reveal from "../../components/motion/Reveal";

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
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* 
        Ensured motion containers take full width and height 
        so flex centering works correctly on the screen 
      */}
      <PageMotion className="h-full w-full">
        <Reveal className="h-full w-full flex justify-center items-center">
          
          {/* Content layer: Centered vertically using items-center and justify-center */}
          <div className="hero-content relative z-10 flex flex-col w-full md:w-3/5 h-full justify-center items-center text-center px-4 md:px-10 mx-auto">
            
            <h1 className="md:text-8xl text-6xl text-white font-black">AAMAARTII</h1>

            <TextType 
              text={["Building Sustainable Livelihoods", "Through Integrated Agricultural Production & Eco-Tourism!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              className="text-white md:text-xl text-lg max-w-3/4 text-center font-medium pt-6"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />

            <div className="flex md:flex-row flex-col gap-5 md:gap-10 py-10 justify-center items-center w-full">
              <Link
                to="/about"
                className="bg-green-900 border border-green-900 font-semibold text-lg hover:bg-white hover:text-green-800 text-white px-6 py-2 rounded-sm transition-colors duration-300 shadow cursor-pointer min-w-[160px]"
              >
                Learn More
              </Link>

              <Link
                to="/services"
                className="bg-white border border-green-900 font-semibold text-lg hover:bg-green-900 hover:text-white text-green-900 px-6 py-2 rounded-sm transition-colors duration-300 shadow cursor-pointer min-w-[160px]"
              >
                View Services
              </Link>
            </div>
            
          </div>
        </Reveal>
      </PageMotion>
    </section>
  );
};

export default Hero;
