import React from "react";
import { motion } from "framer-motion";
import Eco_Tourism from "../../assets/eco-tourism_2.jpg";
import Farmer from "../../assets/farmer,student.jpg";
import Project from "../../assets/project_owner.jpg";
import Peri from "../../assets/peri-urban.jpg";
import Youth from "../../assets/youth.png";
import { FaCheckCircle } from "react-icons/fa";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger delay
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Target = () => {
  const cards = [
    { img: Project, title: "Project Owner Households" },
    { img: Youth, title: "Youth and Woman Groups" },
    { img: Peri, title: "Urban and Peri-Urban Consumers" },
    { img: Farmer, title: "Farmers, Students and Researchers" },
    { img: Eco_Tourism, title: "Eco-Tourism" }
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="text-4xl text-center font-bold">Target Group</h2>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 py-10 w-full max-w-6xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
            className="flex flex-col border border-green-900 rounded-md px-5 py-10 w-full md:w-60 text-center justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-32 h-32 rounded-full mb-5"
            />
            <h4 className="text-green-900 text-lg md:text-xl font-semibold">
              {card.title}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* Outputs Section */}
      <h2 className="text-center text-4xl font-bold">Expected Outputs</h2>
      <div className="mt-10 pb-10 px-5 max-w-4xl">
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Increased household income and diversified livelihoods through AI-driven integrated farming systems
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Improved nutrition and food security for partner households and urban communities
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Increased supply of fish, poultry, fruits, and vegetables to urban and regional markets
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Creation of sustainable employment opportunities for youth and women
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Establishment of a functional integrated aqua–agro–eco-tourism and innovation hub
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Adoption of IoT-enabled smart farming and climate-smart agricultural practices
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Development of a scalable model for technology-driven integrated farming in Ethiopia
        </p>
        <p className="font-semibold md:text-xl flex items-center gap-5 text-sm">
          <FaCheckCircle className="text-green-700" /> Training and empowerment of farmers, students, and development practitioners in AI-enabled agriculture
        </p>
      </div>
    </div>
  );
};

export default Target;
