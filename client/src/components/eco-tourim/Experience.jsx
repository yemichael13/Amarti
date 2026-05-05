import React from 'react'
import Bg from '../../assets/bg-fruit.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Tour from "../../assets/tour.webp";
import Fish from "../../assets/fish_harvest.webp";
import Chicken from "../../assets/chicken_crop.jpg";
import Fresh from "../../assets/fresh_food.png";
import Nature from "../../assets/nature_based.png";
import { FaCheckCircle } from "react-icons/fa";

const images = [Tour, Fish, Chicken, Fresh, Nature];

const values = [
    { title: "Guided Farm Tours" },
    { title: "Fishing Experience" },
    { title: "Poultry & Vegies Interaction", },
    { title: "Fresh Food Tasting",  },
    { title: "Nature-Based Recreation"},
  ];

function Experience() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
        src={Bg}
        alt="background pond"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-6xl text-center px-6 md:px-5 ">
        <h1 className='md:text-4xl text-3xl font-black mb-5 mt-5 text-white'>What You Will Experience</h1>
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
              <div className="border border-whte rounded-sm p-10 flex flex-col gap-6 justify-center items-center text-center bg-white/60 shadow-lg h-auto pt-5 md:mx-0 mx-2">
                <img
                  src={images[index]}
                  alt={val.title}
                  className="rounded-t-lg md:h-50 h-40 w-80 md:w-100"
                />
                <h3 className="font-bold text-2xl text-black">{val.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='bg-black/50 border-black rounded-lg flex flex-col justify-center items-center gap-5 my-5 py-5'>
        <h2 className='text-4xl text-white font-bold'>Who Can Visit?</h2>
        <ul className="space-y-4 text-sm md:text-base text-center text-white">
            <li className="flex items-center gap-2"><FaCheckCircle  /> Families</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Schools & Students</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Tourists</li>
            <li className="flex items-center gap-2"><FaCheckCircle  /> Researchers & Practitioners</li>
            
          </ul>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Experience