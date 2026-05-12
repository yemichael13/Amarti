import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Project-specific FAQs
  const faqs = [
    {
      question: "What is the Aamaartii Integrated AgriFood & EcoRecreation Hub?",
      answer:
        "It is a circular farming and eco-tourism project in Sheno, Ethiopia, combining aquaculture, poultry, horticulture, and recreation facilities to improve nutrition, create jobs, and promote sustainability."
    },
    {
      question: "Where is the project located?",
      answer:
        "The hub is located in Sheno Town, Kimbibit District, North Shewa Zone, Oromia Region, Ethiopia, about 75 km northeast of Addis Ababa."
    },
    {
      question: "What are the main components of the project?",
      answer:
        "The project integrates aquaculture (fish farming), poultry production, horticulture, and eco-tourism facilities such as swimming, boating, cycling paths, and a cafeteria."
    },
    {
      question: "How does the project promote sustainability?",
      answer:
        "Waste flows are closed: poultry manure fertilizes the pond, pond water irrigates vegetables, and vegetable trimmings feed poultry. This reduces external inputs and enhances environmental sustainability."
    },
    {
      question: "What impact will the project have on the community?",
      answer:
        "It will provide affordable protein and vegetables to at least 500 people, create 15–20 direct jobs (50% for women and youth), and train 200 farmers, catalyzing at least 20 new integrated farms."
    },
    {
      question: "How is the project financially viable?",
      answer:
        "By Year 3, it is projected to generate 1–2 tons of fish, 1,000 kg of poultry meat, 10,000 eggs, and 3–5 tons of vegetables annually, plus eco-tourism revenue. ROI is expected to reach 22% by Year 5."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <PageMotion>
      <Navbar />
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
