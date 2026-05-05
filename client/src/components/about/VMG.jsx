import React from 'react'
import VMG_Pic from '../../assets/bg-fruit.png';
import Vision from '../../assets/vision.png';
import Mission from '../../assets/mission.jpg';
import Goal from '../../assets/goal.png';
import { FaCheckCircle } from "react-icons/fa";

function VMG() {
  return (
    <div>
      {/* Vision / Mission / Goal Section */}
      <div className="relative min-h-screen pt-5 flex items-center justify-center overflow-hidden">
        <img src={VMG_Pic} alt="VMG" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="flex flex-col gap-4 rounded-md bg-white/80 p-6 border border-black text-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={Vision} alt="Vision" className="w-24 h-24 object-contain" />
              <h2 className="text-2xl md:text-3xl font-bold">Vision</h2>
              <p className="text-sm md:text-base">
                To become a leading integrated agro-eco-tourism enterprise in Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-4 rounded-md bg-white/80 p-6 border border-black text-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={Mission} alt="Mission" className="w-24 h-24 object-contain" />
              <h2 className="text-2xl md:text-3xl font-bold">Mission</h2>
              <p className="text-sm md:text-base">
                To deliver inclusive, climate-smart systems that increase income, create jobs, and improve nutrition.
              </p>
            </div>

            {/* Goal */}
            <div className="flex flex-col gap-4 rounded-md bg-white/80 p-6 border border-black text-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={Goal} alt="Goal" className="w-24 h-24 object-contain" />
              <h2 className="text-2xl md:text-3xl font-bold">Goal</h2>
              <p className="text-sm md:text-base">
                To establish a sustainable and scalable integrated production and eco-tourism model.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="relative py-10 flex items-center justify-center overflow-hidden">
        <img src={VMG_Pic} alt="VMG" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full max-w-4xl px-6 md:px-10 py-10 bg-white/80 rounded-md border border-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Objectives</h2>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Increase household income of Aamaartii PLC owners</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Strengthen sustainable livelihoods for youth and women</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Improve access to affordable and nutritious food for urban and rural households</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Enhance nutrition through fish, fruit, and vegetable production</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Promote water reuse and environmental sustainability</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Serve as a practical learning and demonstration hub</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VMG;
