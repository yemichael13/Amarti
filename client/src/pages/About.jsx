import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero_about from "../components/about/Hero_about";
import VMG from "../components/about/VMG";
import Sustainability from "../components/about/Sustainability";

const About = () => {
  return (
    <div>
      <Navbar />
      <section><Hero_about /></section>
      <section><VMG /></section>
      <section><Sustainability /></section>
      <Footer />
    </div>
  );
};

export default About;