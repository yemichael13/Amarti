import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Fish from "../../assets/fish_production.png";
import Poultry from "../../assets/poultry_production.jpg";
import Horticulture from "../../assets/holticulture.png";
import Eco_Tourism from "../../assets/eco-tourism.webp";

const images = [Fish, Poultry, Horticulture, Eco_Tourism];

const values = [
  { title: "Fish Production", text: "Sustainable aquaculture practices for healthy communities." },
  { title: "Poultry Production", text: "Modern poultry systems ensuring food security." },
  { title: "Horticulture", text: "Innovative horticulture supporting diverse crops." },
  { title: "Eco-Tourism", text: "Promoting eco-friendly tourism and conservation." },
];

const Our_System = () => {
  return (
    <div className="py-10 px-5">
      <h2 className="text-4xl font-bold text-center my-10">Our Integrated System</h2>
      <div className="relative z-10 md:mx-20 mx-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, // mobile
            768: { slidesPerView: 2, spaceBetween: 40 }, // tablet and up → only 2 visible
            1024: { slidesPerView: 2, spaceBetween: 50 }, // desktop → still 2 visible
          }}
        >
          {values.map((val, index) => (
            <SwiperSlide key={index}>
              <div className="border border-black rounded-t-2xl p-10 flex flex-col gap-6 justify-center items-center text-center bg-black shadow-lg h-100 pt-5">
                <img
                  src={images[index]}
                  alt={val.title}
                  className="rounded-t-lg h-50 w-100"
                />
                <h3 className="font-bold text-2xl text-white">{val.title}</h3>
                <p className="text-white/80 text-lg">{val.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Our_System;
