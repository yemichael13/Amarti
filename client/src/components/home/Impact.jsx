import React from "react";
import Water from "../../assets/water_use.png";
import Nutrition from "../../assets/nutrition.png";
import Household from "../../assets/house_hold.png";
import Employment from "../../assets/employment.avif";
import Climate from "../../assets/Climate-smart.webp";
import IoT from "../../assets/IoT.webp";

const Impact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-6">
      <h2 className="font-bold text-3xl md:text-4xl py-10 text-center">
        Impact Snapshot
      </h2>

      {/* Grid layout: 2 rows, 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {/* Column 1 */}
        <div className="flex flex-col items-center gap-10">
          <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={Household}
              alt="household"
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold  text-sm text-center mt-4">
              Improved Household Income &<br /> Economic Resilience
            </h4>
          </div>

          <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={Water}
              alt="water use"
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold  text-sm text-center mt-4">
              Smart Water Management & <br />Efficient Resource Reuse
            </h4>
          </div>
        </div>

        {/* Column 2 with arrow separator */}
        <div className="flex flex-col items-center gap-10">

          <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={Nutrition}
              alt="nutrition"
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold  text-sm text-center mt-4">
              Better Nutrition for Urban & Rural Communities
            </h4>
          </div>
          <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={Climate}
              alt="climate smart"
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold  text-sm text-center mt-4">
              Climate-Smart & Environmentally Sustainable Agriculture
            </h4>
          </div>
         
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center gap-10">
          <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={Employment}
              alt="employment"
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold  text-sm text-center mt-4">
              Employment Opportunities for<br /> Youth & Women
            </h4>
          </div>

          <div className="rounded-full border-2 border-green-900 w-60 h-60 md:w-72 md:h-72 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={IoT}
              alt="IoT"
              className="w-24 md:w-32 object-contain transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold  text-sm text-center mt-4">
              AI & IoT-Driven Sustainable Farming Innovation
            </h4>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Impact;
