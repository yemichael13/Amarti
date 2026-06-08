import React, { useState } from "react";
import About_Pic from "../../assets/fish.webp";
import PageMotion from "../../components/motion/PageMotion";
import Reveal from "../../components/motion/Reveal";

const Hero_about = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={About_Pic}
        alt="background pond"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Fade to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white to-transparent"></div>
      <PageMotion>
      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center px-6 md:px-5">
        <Reveal>
        <h1 className="text-4xl md:text-6xl font-black font-serif text-white mb-6">
          About Aamaartii
        </h1>
        <p className="text-sm md:text-lg text-white leading-relaxed">
          Aamaartii PLC is an integrated aqua-agro-eco-tourism and innovation 
          enterprise committed to improving livelihoods, food security, environmental 
          sustainability, and smart agricultural transformation through AI-enabled and 
          climate-smart farming systems.
          <span
            onClick={() => setShowMore(!showMore)}
            className="ml-2 text-green-300 font-semibold cursor-pointer hover:underline"
          >
            {showMore ? "Show Less" : "Read More"}
          </span>
        </p>
        </Reveal>
        {/* Expanded text with smooth transition */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showMore ? "max-h-250 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <Reveal>
          <p className="text-sm  text-white leading-relaxed">
           Aamaartii PLC is a forward-looking integrated farming, eco-tourism, and innovation enterprise established to demonstrate how agriculture, technology, renewable energy, and environmental stewardship can work together to create sustainable livelihoods.

The enterprise combines aquaculture, poultry, dairy, horticulture, eco-tourism, biogas systems, vermicomposting, Black Soldier Fly protein production, and smart agriculture technologies into one interconnected ecosystem designed for Ethiopia's highland environmen
          </p>
          </Reveal>
        </div>
        
      </div>
      </PageMotion>
    </section>
  );
};

export default Hero_about;
