import React from "react";
import { motion } from "framer-motion";
import Water from "../../assets/water_use.png";
import Nutrition from "../../assets/nutrition.png";
import Household from "../../assets/house_hold.png";
import Employment from "../../assets/employment.avif";
import Climate from "../../assets/Climate-smart.webp";
import IoT from "../../assets/IoT.webp";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger delay
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Impact = () => {
  const impacts = [
    {
      img: Household,
      title: "Improved Household Income & Economic Resilience"
    },
    {
      img: Water,
      title: "Smart Water Management & Efficient Resource Reuse"
    },
    {
      img: Nutrition,
      title: "Better Nutrition for Urban & Rural Communities"
    },
    {
      img: Climate,
      title: "Climate-Smart & Environmentally Sustainable Agriculture"
    },
    {
      img: Employment,
      title: "Employment Opportunities for Youth & Women"
    },
    {
      img: IoT,
      title: "AI & IoT-Driven Sustainable Farming Innovation"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 px-6">
      <h2 className="font-bold text-3xl md:text-4xl py-10 text-center">
        Impact Snapshot
      </h2>

      {/* Grid layout: 2 rows, 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {impacts.map((impact, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4 rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl p-5 text-center"
          >
            <img
              src={impact.img}
              alt={impact.title}
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold text-sm text-center mt-2">
              {impact.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
