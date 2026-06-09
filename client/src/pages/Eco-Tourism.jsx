import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero_Tourism from "@/components/eco-tourim/Hero_Tourism";
import Experience from "@/components/eco-tourim/Experience";
import { Link } from "react-router-dom";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const EcoTourism = () => {
  return (
    <div>
      <Seo
        title="Eco-Tourism"
        description="Experience sustainable eco-tourism at Aamaartii PLC — farm visits, nature experiences, and agri-recreation in Ethiopia."
        path="/eco-tourism"
      />
      <Navbar />
      
      <section><Hero_Tourism /></section>
      <section><Experience /></section>
      <section className="flex flex-col justify-center items-center py-5 gap-10">
       
        <h2 className="md:text-7xl text-3xl font-bold">Interested In Visiting?</h2>
        <Link to="/contact" className="rounded-sm border border-green-900 bg-green-900 text-lg px-5 py-2 text-white font-semibold text-center hover:text-green-900 hover:bg-white transition-colors duration-300 cursor-pointer">
          Plan A Visit
        </Link>
        
      </section>
      <Reveal>
      <Footer />
      </Reveal>
      
    </div>
  );
};

export default EcoTourism;