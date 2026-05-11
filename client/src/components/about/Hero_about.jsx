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
        <h1 className="text-4xl md:text-8xl font-black font-serif text-white mb-6">
          About Aamaartii PLC
        </h1>
        <p className="text-sm md:text-lg text-white leading-relaxed">
          Aamaartii PLC is an integrated agricultural production and eco-tourism
          enterprise dedicated to improving livelihoods, nutrition, and
          environmental sustainability.
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
          <p className="text-sm md:text-lg text-white leading-relaxed">
            Aamaartii PLC is implementing an Integrated Fish–Poultry–Horticulture–Eco-Tourism
            Project that combines sustainable aquaculture, poultry farming,
            horticultural crop production, and eco-tourism services to promote
            efficient and circular use of water and land resources. The project
            generates income and improves nutrition for project partners, local
            communities, and urban consumers, while also serving as a practical
            learning and demonstration site for students, farmers, and
            development practitioners, offering hands-on training and
            field-based learning on integrated farming systems, climate-smart
            agriculture, agribusiness management, and eco-tourism operations to
            support knowledge transfer and adoption of sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero_about;
