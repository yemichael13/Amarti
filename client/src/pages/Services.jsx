import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fish from "../assets/fish_2.png";
import Poultry from "../assets/poultry_production.jpg";
import Horticulture from "../assets/holti7.webp";
import Visitors from "../assets/visitors.jpg";
import Training from "../assets/training.png";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const services = [
  {
    img: Fish,
    title: "Aquaculture",
    desc: "Cold-water fish farming with carp and tilapia, using circular waste flows to reduce feed costs and improve protein supply."
  },
  {
    img: Poultry,
    title: "Poultry Production",
    desc: "Dual-purpose Koekoek and Sasso breeds producing meat and eggs, integrated with fish ponds and organic compost systems."
  },
  {
    img: Horticulture,
    title: "Horticulture",
    desc: "High-value vegetables grown in plastic tunnels and open fields, irrigated with pond water and fertilized with organic compost."
  },
  {
    img: Visitors,
    title: "Eco-Tourism",
    desc: "Recreation hub with swimming, boating, cycling, and a cafeteria — generating income while promoting environmental education."
  },
  {
    img: Training,
    title: "Training & Knowledge Sharing",
    desc: "Hands-on farmer training, field days, and demonstration programs to catalyze new integrated farms and build local capacity."
  }
];

const Services = () => {
  return (
    <div>
      <PageMotion>
      <Navbar />
      <Reveal>
      <div className="pt-28 flex flex-col justify-center items-center gap-5 bg-green-900 text-white px-6 py-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Core Services</h1>
        <p className="text-lg md:w-3/5 w-full text-center">
          We provide integrated agricultural production and eco-tourism services designed to generate income, improve nutrition, and protect natural resources.
        </p>
      </div>
      </Reveal>
      {/* Service Cards */}
      <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
        </Reveal>
      <Reveal>
      <Footer />
      </Reveal>
      </PageMotion>
    </div>
  );
};

export default Services;
