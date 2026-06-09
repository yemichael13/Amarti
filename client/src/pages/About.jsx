import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero_about from "../components/about/Hero_about";
import VMG from "../components/about/VMG";
import Sustainability from "../components/about/Sustainability";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";
import Why_Us from "../components/about/Why_Us";

const About = () => {
  return (
    <div>
      <Seo
        title="About Us"
        description="Learn about Aamaartii PLC — our vision, mission, integrated farming systems, and commitment to sustainable agriculture in Ethiopia."
        path="/about"
      />
      <Navbar />
      
        <section>
          
            <Hero_about />
          
        </section>
        <section>
          
            <VMG />
          
        </section>
        <section>
          <Reveal>
            <Why_Us />
          </Reveal>
        </section>
        <section>
          <Reveal>
            <Sustainability />
          </Reveal>
        </section>
      <Reveal>
      <Footer />
      </Reveal>
    </div>
  );
};

export default About;