import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Fish from "../../assets/fish_production.png";
import Poultry from "../../assets/poultry_production.jpg";
import Horticulture from "../../assets/holticulture.png";
import Eco_Tourism from "../../assets/eco-tourism.webp";
import Agri_Tech from "../../assets/agri-tech.webp";

const images = [Fish, Poultry, Horticulture, Eco_Tourism, Agri_Tech];

const values = [
  { title: "Smart Aquaculture", text: "AI-assisted aquaculture systems integrated with IoT-based water quality monitoring, pond aeration, and smart feeding solutions to improve fish productivity, reduce waste, and ensure sustainable resource management." },
  { title: "Intelligent Horticulture", text: "Climate-smart horticulture powered by water-efficient irrigation systems, organic nutrient recycling, greenhouse technologies, and data-driven crop monitoring for high-quality vegetable and fruit production." },
  { title: "AI-Enabled Poultry Production", text: "Integrated poultry farming supported by smart health monitoring, improved feeding systems, waste recycling, and sustainable production practices that increase efficiency and reduce operational costs." },
  { title: "Eco-Tourism & Recreation", text: "A nature-based recreation and learning environment featuring eco-friendly facilities, environmental education experiences, farm tours, cycling paths, recreational fishing, and sustainable tourism activities." },
  { title: "Agri-Tech Innovation & Data Analytics", text: "Implementation of AI, IoT, and agricultural data analytics to optimize farm operations, monitor environmental conditions, improve decision-making, and create scalable smart farming solutions for Ethiopia’s highlands." },
];

const Our_System = () => {
  return (
    <div className="py-10 px-5">
      <h2 className="text-4xl font-bold text-center my-10">Our Integrated System</h2>
      <div className="relative z-10 md:mx-20 mx-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, // mobile
            768: { slidesPerView: 2, spaceBetween: 40 }, // tablet and up → only 2 visible
            1024: { slidesPerView: 2, spaceBetween: 50 }, // desktop → still 2 visible
          }}
        >
          {values.map((val, index) => (
            <SwiperSlide key={index}>
              <div className="border border-black rounded-t-2xl p-10 flex flex-col gap-6 justify-center items-center text-center bg-black shadow-lg h-110 pt-5">
                <img
                  src={images[index]}
                  alt={val.title}
                  className="rounded-t-lg h-50 w-100"
                />
                <h3 className="font-bold text-2xl text-white">{val.title}</h3>
                <p className="text-white/80 text-sm">{val.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Our_System;
