import React from "react";
import Water from "../../assets/water_use.png";
import Nutrition from "../../assets/nutrition.png";
import Household from "../../assets/house_hold.png";
import Employment from "../../assets/employment.avif";
import Arrow from "../../assets/arrow.png";

const Impact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 px-4">
      <h2 className="font-bold text-3xl md:text-4xl py-10 text-center">Impact Snapshot</h2>

      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-80 md:h-80 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Household} alt="house hold" className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110" />
          <h4 className="font-bold text-lg  text-center mt-4">Improved Household Income</h4>
        </div>
        <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-80 md:h-80 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Nutrition} alt="nutrition" className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110" />
          <h4 className="font-bold text-lg  text-center mt-4">Better Nutrition For Urban & <br />Rural Communities</h4>
        </div>
      </div>

      {/* Arrow */}
      <img src={Arrow} alt="arrow" className="w-12 md:w-20 md:flex hidden" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10 md:mt-0">
        <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-80 md:h-80 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Water} alt="water use" className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110" />
          <h4 className="font-bold text-lg  text-center mt-4">Efficient Water Reuse</h4>
        </div>
        <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-80 md:h-80 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl px-2">
          <img src={Employment} alt="employment" className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110" />
          <h4 className="font-bold text-lg  text-center mt-4">Employment For Youth &<br /> Women</h4>
        </div>
      </div>
    </div>
  );
};

export default Impact;
