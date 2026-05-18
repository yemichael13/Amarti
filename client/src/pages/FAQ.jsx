import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Project-specific FAQs
  // Project-specific FAQs
const faqs = [
  {
    question: "What is the Aamaartii Integrated AgriFood, EcoRecreation & Innovation Hub?",
    answer:
      "Aamaartii PLC is an integrated aqua-agro-eco-tourism and innovation enterprise located in Sheno, Ethiopia. The project combines smart aquaculture, AI-enabled poultry production, intelligent horticulture, eco-tourism, and climate-smart technologies to improve livelihoods, strengthen food security, create jobs, and promote environmental sustainability."
  },
  {
    question: "Where is the project located?",
    answer:
      "The project is located in Sheno Town, Kimbibit District, North Shewa Zone, Oromia Region, Ethiopia, approximately 75 km northeast of Addis Ababa."
  },
  {
    question: "What are the main components of the project?",
    answer:
      "The project integrates smart aquaculture, AI-assisted poultry production, climate-smart horticulture, eco-tourism and recreation facilities, AI and IoT-based farm monitoring systems, training and demonstration services, and sustainable resource recycling systems."
  },
  {
    question: "How does Aamaartii PLC use AI and IoT technologies?",
    answer:
      "The project incorporates AI and IoT technologies for smart water quality monitoring, automated irrigation systems, environmental sensing, fish pond management, poultry monitoring, agricultural data analytics, and resource optimization to improve productivity and sustainability."
  },
  {
    question: "How does the project promote sustainability?",
    answer:
      "Aamaartii PLC follows a circular farming approach where resources are reused efficiently. Poultry manure fertilizes fish ponds, nutrient-rich pond water irrigates crops, and agricultural by-products are recycled within the farming system. This minimizes waste, reduces external inputs, and supports environmental sustainability."
  },
  {
    question: "What eco-tourism experiences will visitors enjoy?",
    answer:
      "Visitors will experience guided farm tours, fish harvesting activities, recreational spaces, organic food tasting, cycling paths, environmental learning experiences, and nature-based recreation within a sustainable farming environment."
  },
  {
    question: "Who can participate in the training programs?",
    answer:
      "The training programs are open to farmers, students, researchers, development practitioners, entrepreneurs, and anyone interested in integrated farming, climate-smart agriculture, AI and IoT in agriculture, and sustainable agribusiness."
  },
  {
    question: "Will the project create employment opportunities?",
    answer:
      "Yes. The project is designed to create direct and indirect employment opportunities, especially for youth and women, through agricultural production, eco-tourism operations, training services, and agri-tech innovation activities."
  },
  {
    question: "How does the project improve food security and nutrition?",
    answer:
      "The integrated farming system increases the production of fish, poultry, fruits, and vegetables, helping improve access to affordable, nutritious, and sustainably produced food for urban and rural communities."
  },
  {
    question: "Is the project financially sustainable?",
    answer:
      "Yes. The project combines multiple revenue streams including aquaculture, poultry, horticulture, eco-tourism, training services, and future agri-tech innovation solutions. This diversified model improves long-term financial sustainability and resilience."
  },
  {
    question: "Can investors and development partners collaborate with Aamaartii PLC?",
    answer:
      "Absolutely. Aamaartii PLC welcomes collaboration opportunities with investors, development organizations, research institutions, NGOs, and private-sector partners interested in sustainable agriculture, eco-tourism, innovation, and climate-smart development."
  },
  {
    question: "What makes Aamaartii PLC different from traditional farming projects?",
    answer:
      "Unlike traditional farming projects, Aamaartii PLC integrates agriculture, eco-tourism, AI-driven technologies, circular resource management, environmental sustainability, and practical training into one scalable ecosystem designed for long-term social, environmental, and economic impact."
  }
];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <PageMotion>
      
      <Reveal>
      <div className="px-6 py-10 mt-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-700 rounded-xl p-4 bg-white shadow-md"
            >
              {/* Question + Icon */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-green-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaTimes className="text-green-700 transition-transform duration-300 rotate-180" />
                ) : (
                  <FaPlus className="text-green-700 transition-transform duration-300 rotate-0" />
                )}
              </div>

              {/* Animated Answer */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
      <Reveal>
      <Footer />
      </Reveal>
      </PageMotion>
    </div>
  );
};

export default FAQ;
