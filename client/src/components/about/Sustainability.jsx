import React from 'react'
import { motion } from "framer-motion";
import Climate from  "../../assets/climate.png";
import Community from "../../assets/community.png";
import Water from "../../assets/water_cycle.png";
import Market from "../../assets/market.png";
import Renewable from "../../assets/Renewable.png";
import Resourse from "../../assets/Resourse.png";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

function Sustainability() {
  const items = [
    { img: Water, title: "Circular Water & Waste Reuse Systems" },
    { img: Community, title: "Community Ownership & Inclusive Participation" },
    { img: Resourse, title: "AI-Supported Resource Optimization" },
    { img: Market, title: "Market-Oriented and Data-Driven Production" },
    { img: Climate, title: "Climate-Smart Agriculture & Smart Irrigation" },
    { img: Renewable, title: "Renewable Energy & Environmentally Responsible Operations" }
  ];

  return (
    <div className='py-10 flex flex-col justify-center items-center gap-5 px-10'>
      <h2 className='text-4xl font-bold text-center'>Sustainability</h2>

      {/* Grid layout with animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-10 max-w-6xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="md:w-60 w-40 md:h-60 h-40 object-contain hover:scale-110 transition-transform duration-300"
            />
            <h3 className="md:text-2xl text-xl font-bold mt-4">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Sustainability;
