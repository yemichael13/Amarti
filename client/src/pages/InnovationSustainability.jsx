import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/motion/Reveal";


import HeroImg from "../assets/chicken_crop.jpg";
import IntroImg from "../assets/hero.jpg";
import SmartFarm from "../assets/smaragri.jpeg";
import CircularBio from "../assets/circularbioeco.png";
import BSF from "../assets/bsf.jpg";
import Vermi from "../assets/vermi.jpg";
import Biogas from "../assets/biogas.jpeg";
import Solar from "../assets/solar.webp";
import IoT from "../assets/iot.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const InnovationSustainability = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <img src={HeroImg} alt="Innovation Hero" className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/50"></div>
        <Reveal>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Innovation & Sustainability</h1>
          <p className="mt-6 text-lg md:text-xl">
            At Aamaartii, innovation and sustainability work together to create a modern farming ecosystem
            that improves productivity, protects natural resources, strengthens food security, and supports
            climate-resilient development.
          </p>
        </div>
        </Reveal>
      </div>

      {/* Introduction Section */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <motion.img src={IntroImg} alt="Drone over farmland" className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Building the Future of Agriculture</h2>
          <p className="text-gray-700 mb-4">
            Aamaartii combines integrated agriculture, eco-tourism, renewable energy, and digital technologies
            to create a sustainable production ecosystem. By integrating aquaculture, poultry, dairy, horticulture,
            renewable energy systems, and smart monitoring technologies, we are building a scalable model for modern
            agriculture in Ethiopia.
          </p>
        </motion.div>
      </section>

      {/* Smart Farm Technology */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-10 py-20">
        <motion.img src={SmartFarm} alt="Smart Farm" className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Smart Farm Technology</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Smart irrigation management</li>
            <li>Environmental monitoring</li>
            <li>Water quality tracking</li>
            <li>Farm performance analytics</li>
            <li>Predictive decision support</li>
          </ul>
          <p className="text-gray-700">Benefits: Increased productivity, reduced waste, better resource allocation, data-driven management.</p>
        </motion.div>
      </section>

      {/* Circular Bio-Economy */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-10 py-20 bg-gray-50">
        <motion.img src={CircularBio} alt="Circular Bio-Economy" className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Circular Bio-Economy</h2>
          <p className="text-gray-700 mb-4">
            Our farming model is built around the principle that every output becomes a valuable input elsewhere in the system.
            Instead of generating waste, resources are continuously recycled and reused.
          </p>
          <p className="text-gray-700">Poultry & Dairy Waste → Biogas → Organic Fertilizer → Crop Production → Feed Resources → Aquaculture & Livestock</p>
        </motion.div>
      </section>

      {/* BSF Production */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-10 py-20">
        <motion.img src={BSF} alt="BSF Production" className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Black Soldier Fly Production</h2>
          <p className="text-gray-700 mb-4">
            Black Soldier Fly larvae provide a sustainable, high-protein feed source for poultry and aquaculture operations.
            The system converts organic waste into valuable protein while significantly reducing feed costs and environmental impact.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Sustainable protein production</li>
            <li>Organic waste recycling</li>
            <li>Lower feed costs</li>
            <li>Reduced environmental footprint</li>
          </ul>
        </motion.div>
      </section>

      {/* Vermicomposting */}
      <section className="px-10 py-20 bg-gray-50 flex flex-col md:flex-row items-center gap-10 ">
        <motion.img src={Vermi} alt="Vermicomposting" className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Vermicomposting Systems</h2>
          <p className="text-gray-700 mb-4">
            Earthworms transform organic waste into nutrient-rich organic fertilizer that improves soil health and supports sustainable crop production.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Improved soil fertility</li>
            <li>Reduced chemical fertilizer dependency</li>
            <li>Enhanced crop productivity</li>
            <li>Better water retention</li>
          </ul>
        </motion.div>
      </section>

      {/* Biogas Energy */}
      <section className="relative px-10 py-20 flex flex-col md:flex-row-reverse items-center gap-10">
        <motion.img src={Biogas} alt="Biogas Energy" className="md:w-1/2 w-full rounded-lg shadow-lg mb-10 hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Renewable Energy Through Biogas</h2>
          <p className="text-gray-700 mb-4">
            Organic waste from livestock operations is converted into clean, renewable energy through biogas technology.
            This energy can support cooking, heating, and farm operations while reducing greenhouse gas emissions.
          </p>
          <p className="text-gray-700">Benefits: Renewable energy production, lower operating costs, reduced environmental impact, improved waste management.</p>
        </motion.div>
      </section>

      {/* Solar Systems */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-10 py-20 bg-gray-50">
        <motion.img src={Solar} alt="Solar Systems" className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }} />
        <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Solar-Powered Farm Operations</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Solar irrigation</li>
            <li>Water pumping</li>
            <li>Farm lighting</li>
            <li>Sensor networks</li>
                        <li>Sensor networks</li>
            <li>Backup power systems</li>
          </ul>

          <p className="text-gray-700">
            By integrating renewable solar energy into our operations, we reduce
            dependence on conventional energy sources while improving the
            reliability and sustainability of critical farm infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Digital Twin & IoT Monitoring */}
      <section className="px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                Digital Twin & IoT Monitoring
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aamaartii is working toward implementing intelligent farm
                monitoring systems that collect, analyze, and visualize
                operational data in real time. Through Internet of Things (IoT)
                devices and smart sensors, we can continuously monitor
                environmental conditions, water quality, crop performance,
                livestock health, and resource utilization.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Digital Twin technology creates a virtual representation of farm
                operations, allowing managers to simulate scenarios, identify
                inefficiencies, and make informed decisions before implementing
                changes in the field.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">
                    Fish Ponds
                  </h4>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">
                    Poultry Units
                  </h4>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">
                    Dairy Systems
                  </h4>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">
                    Greenhouses
                  </h4>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">
                    Water Systems
                  </h4>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">
                    Energy Systems
                  </h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <img
                src={IoT}
                alt="Digital Twin and IoT Monitoring"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Impact Section */}
      <section className="bg-green-900 text-white py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation Impact
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-green-100">
              Through technology, sustainability, and integrated resource
              management, Aamaartii PLC aims to create long-term social,
              economic, and environmental value for communities and future
              generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-green-300 mb-4">
                01
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                AI-Driven Agriculture
              </h3>
              <p className="text-green-100">
                Using intelligent technologies to improve productivity,
                efficiency, and decision-making.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-green-300 mb-4">
                02
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Circular Resource Management
              </h3>
              <p className="text-green-100">
                Reducing waste and maximizing value through integrated resource
                recycling systems.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-green-300 mb-4">
                03
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Renewable Energy Integration
              </h3>
              <p className="text-green-100">
                Leveraging solar and biogas technologies to improve energy
                sustainability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-green-300 mb-4">
                04
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Climate-Smart Farming
              </h3>
              <p className="text-green-100">
                Promoting resilient agricultural systems that adapt to changing
                environmental conditions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-green-300 mb-4">
                05
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Technology-Enabled Learning Hub
              </h3>
              <p className="text-green-100">
                Providing practical learning opportunities for farmers,
                students, researchers, and institutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-green-300 mb-4">
                06
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Sustainable Economic Growth
              </h3>
              <p className="text-green-100">
                Creating jobs, improving livelihoods, and supporting inclusive
                economic development.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationSustainability;