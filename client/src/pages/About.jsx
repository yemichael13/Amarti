import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero_about from "../components/about/Hero_about";
import VMG from "../components/about/VMG";
import Sustainability from "../components/about/Sustainability";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageMotion>
        <section>
          <Reveal>
            <Hero_about />
          </Reveal>
        </section>
        <section>
          <Reveal>
            <VMG />
          </Reveal>
        </section>
        <section>
          <Reveal>
            <Sustainability />
          </Reveal>
        </section>
      </PageMotion>
      <Footer />
    </div>
  );
};

export default About;