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
      <PageMotion>
      <Navbar />
      <section><Reveal><Hero_Training /></Reveal></section>
      <section className="bg-green-900 py-5 px-5 gap-5 text-white flex flex-col justify-center items-center">
        <div className="flex md:w-2/3 justify-between items-center">
          <h4 className="md:text-3xl text-2xl">Who Can Attend?</h4>
          <img src={Question} alt="question" className="md:w-50 w-40 h-40 md:h-50 object-contain"/>
        </div>
        <div className="flex md:w-2/3 justify-between gap-10 md:gap-0 items-center">
          <img src={Anybody} alt="anybody" className="md:w-50  w-40 h-40 md:h-50 object-contain rounded-full"/>
          <h4 className="md:text-3xl text-2xl">Anybody Interested!</h4>
        </div>
        <div className="pt-5">
          <h2 className="text-4xl font-bold mb-10 text-center">Focus Area</h2>
          <div className="md:flex gap-20 justify-center text-center">
            <ul className="space-y-4 text-sm md:text-base text-center text-white">
            <li className="flex items-center gap-2"><FaCheckCircle  /> Integrated Farming Systems</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Climate-Smart Agriculture</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> AI & IoT Applications in Agriculture</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Smart Irrigation & Water Management</li>
            
          </ul>

            <ul className="space-y-4 text-sm md:text-base text-center text-white mt-4 md:mt-0">
            <li className="flex items-center gap-2"><FaCheckCircle  /> Agricultural Data Analytics & Farm Monitoring</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Agribusiness & Sustainable Farm Management</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Eco-Tourism Operations & Environmental Education</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Resource Recycling & Circular Farming Systems</li>
          </ul>
          </div>
          
        </div>
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
      </PageMotion>
    </div>
  );
};

export default Training;