import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Hero_Training from "@/components/training/Hero_Training";
import Question from "../assets/question.png";
import Anybody from "../assets/anybody.png";
import { FaCheckCircle } from "react-icons/fa";
import { Bluetooth } from "lucide-react";
import { Link } from "react-router-dom";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const Training = () => {
  return (
    <div>
      
      <Navbar />
      <section><Hero_Training /></section>
      <section className="bg-green-900 py-10 px-5 gap-10 text-white flex flex-col justify-center items-center w-full">
  <PageMotion>
    {/* First Section: Question */}
    <Reveal>
      <div className="flex md:w-2/3 w-full justify-between items-center mx-auto">
        <h4 className="md:text-3xl text-2xl text-left">Who Can Attend?</h4>
        <img src={Question} alt="question" className="md:w-50 w-40 h-40 md:h-50 object-contain"/>
      </div>
    </Reveal>

    {/* Second Section: Answer */}
    <Reveal>
      <div className="flex md:w-2/3 w-full justify-between gap-10 md:gap-0 items-center mx-auto mt-5">
        <img src={Anybody} alt="anybody" className="md:w-50 w-40 h-40 md:h-50 object-contain rounded-full"/>
        <h4 className="md:text-3xl text-2xl text-right">Anybody Interested!</h4>
      </div>
    </Reveal>

    {/* Third Section: Focus Area Lists */}
    <Reveal>
      <div className="pt-10 w-full mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Focus Area</h2>
        
        {/* Centered columns block */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-start max-w-4xl mx-auto px-4">
          
          {/* Left List */}
          <ul className="space-y-4 text-sm md:text-base text-left text-white w-full md:w-1/2">
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Integrated Farming Systems</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Climate-Smart Agriculture</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Smart Dairy Management</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Aquaculture Production</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Poultry Production</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>AI & IoT in Agriculture</span></li>
          </ul>

          {/* Right List */}
          <ul className="space-y-4 text-sm md:text-base text-left text-white w-full md:w-1/2">
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Digital Farm Management</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Biogas Technology</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Black Soldier Fly Production</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Vermicomposting</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Agribusiness & Entrepreneurship</span></li>
            <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 shrink-0" /> <span>Eco-Tourism Management</span></li>
          </ul>
          
        </div>
      </div>
    </Reveal>
  </PageMotion>
</section>

      <Reveal>
      <div className="flex justify-center items-center">
      <Link to="/contact" className="bg-green-900 border border-green-900 text-ceneter text-lg font-bold text-white rounded-sm hover:bg-white hover:text-green-900 transition-colors duration-300 cursor-pointer px-5 py-2 my-10">
          Get In Touch
        </Link>
      </div>
      </Reveal>
      <Reveal>
      <Footer />
      </Reveal>
    
    </div>
  );
};

export default Training;