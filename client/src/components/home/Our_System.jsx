import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Fish from "../../assets/smartacua.webp";
import Poultry from "../../assets/poultrydairy.webp";
import Horticulture from "../../assets/greenhorti.jpeg";
import Eco_Tourism from "../../assets/eco-tourism.webp";
import Agri_Tech from "../../assets/agri-tech.webp";
import Biogas from "../../assets/biogas.jfif";
import Bioeconomy from "../../assets/bioeco.jpg";

const images = [Fish, Poultry, Horticulture, Eco_Tourism, Biogas, Agri_Tech, Bioeconomy];

const values = [
  { title: "Smart Aquaculture", text: "High-efficiency fish production supported by natural protein feeds, recycled nutrients, and real-time environmental monitoring." },
  { title: "Poultry & Dairy Systems", text: "Integrated poultry and dairy units that provide food, income, energy resources, and nutrient inputs for the wider ecosystem." },
  { title: "Greenhouse & Horticulture Production", text: "Climate-smart production of fruits and vegetables using recycled water, organic fertilizers, and sustainable growing methods." },
  { title: "Eco-Tourism & Recreation", text: "A nature-based recreation and learning environment featuring eco-friendly facilities, environmental education experiences, farm tours, cycling paths, recreational fishing, and sustainable tourism activities." },
  { title: "Renewable Energy & Biogas", text: "Converting organic waste into clean energy while reducing emissions and improving farm efficiency." },
  { title: "AI & Smart Farm Technology", text: "IoT sensors, Digital Twin farm management systems, real-time monitoring, solar-powered operations, and data-driven decision-making." },
  { title: "Circular Bio-Economy", text: "Transforming waste into valuable resources through integrated nutrient cycling and zero-waste farming systems." },
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
