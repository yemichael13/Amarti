import React, { useState } from "react";
import About_Pic from "../../assets/fish.webp";

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
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center px-6 md:px-5">
        <h1 className="text-4xl md:text-6xl font-black font-serif text-white mb-6">
          About Aamaartii PLC
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

        {/* Expanded text with smooth transition */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showMore ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm  text-white leading-relaxed">
            Aamaartii PLC is implementing an AI-driven Integrated Fish–Poultry–Horticulture–Eco-Tourism Project that combines sustainable aquaculture, poultry farming, horticultural crop production, eco-tourism services, and smart farming technologies to promote efficient and circular use of water, energy, and land resources.

The project integrates IoT-based monitoring systems, agricultural data analytics, climate-smart irrigation technologies, and intelligent farm management practices to optimize productivity, reduce operational costs, and improve environmental sustainability. By leveraging innovation and resource integration, the system improves income generation, strengthens food and nutritional security, and supports resilient local economies.

In addition to production and recreation services, Aamaartii PLC serves as a practical learning, research, and demonstration hub for students, farmers, development practitioners, and institutions by providing hands-on training in integrated farming systems, AI and IoT applications in agriculture, agribusiness management, climate-smart agriculture, environmental conservation, and eco-tourism operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero_about;
