import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fish from "../assets/fish_2.png";
import Poultry from "../assets/poultry_production.jpg";
import Horticulture from "../assets/holti7.webp";
import Visitors from "../assets/visitors.jpg";
import Training from "../assets/training.png";
import Reveal from "../components/motion/Reveal";

const services = [
  {
    img: Fish,
    title: "Smart Aquaculture",
    desc: "AI-assisted aquaculture systems with IoT-enabled water quality monitoring, pond aeration, fish health tracking, and sustainable feed management designed to improve productivity and reduce environmental impact."
  },
  {
    img: Poultry,
    title: "AI-Enabled Poultry Production",
    desc: "Integrated poultry systems utilizing smart monitoring, improved biosecurity practices, sustainable feeding strategies, and resource recycling to enhance production efficiency and profitability."
  },
  {
    img: Horticulture,
    title: "Intelligent Horticulture",
    desc: "Climate-smart horticulture using greenhouse technologies, efficient irrigation systems, organic nutrient recycling, and smart environmental monitoring for sustainable crop production."
  },
  {
    img: Visitors,
    title: "Eco-Tourism & Recreation",
    desc: "Eco-friendly recreational and educational experiences including farm visits, cycling paths, recreational activities, environmental awareness programs, and organic food experiences."
  },
  {
    img: Training,
    title: "Training, Innovation & Knowledge Services",
    desc: "Hands-on training and demonstration services in integrated farming systems, agribusiness, AI and IoT in agriculture, climate-smart practices, environmental sustainability, and eco-tourism management."
  }
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Services = () => {
  return (
    <div>
      <Navbar />

      {/* Green background header section */}
      <div className="pt-28 flex flex-col justify-center items-center gap-5 bg-green-900 text-white px-6 py-10 text-center">
        <Reveal>
        <h1 className="text-4xl md:text-6xl font-bold text-center">Core Services</h1>
        <p className="text-lg md:text-xl md:w-3/5 w-full text-center mx-auto mt-5">
          We provide integrated agricultural production and eco-tourism services
          designed to generate income, improve nutrition, and protect natural
          resources.
        </p>
        </Reveal>
      </div>

      {/* Service Cards with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
