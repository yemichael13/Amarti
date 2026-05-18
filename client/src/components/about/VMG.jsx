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

        {/* Fade to white at top */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white to-transparent"></div>

        <div className="relative z-10 w-full max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="flex flex-col gap-4 rounded-md bg-white/80 p-6 border border-black text-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={Vision} alt="Vision" className="w-24 h-24 object-contain" />
              <h2 className="text-2xl md:text-3xl font-bold">Vision</h2>
              <p className="text-sm md:text-base">
                To become a leading model of sustainable, AI-driven integrated farming and eco-tourism innovation in Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-4 rounded-md bg-white/80 p-6 border border-black text-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={Mission} alt="Mission" className="w-24 h-24 object-contain" />
              <h2 className="text-2xl md:text-3xl font-bold">Mission</h2>
              <p className="text-sm md:text-base">
                To produce high-quality fish, poultry, and horticultural products through an integrated, AI-enabled farming system while promoting eco-tourism, efficient resource utilization, climate-smart agriculture, and environmental sustainability.
              </p>
            </div>

            {/* Goal */}
            <div className="flex flex-col gap-4 rounded-md bg-white/80 p-6 border border-black text-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img src={Goal} alt="Goal" className="w-24 h-24 object-contain" />
              <h2 className="text-2xl md:text-3xl font-bold">Goal</h2>
              <p className="text-sm md:text-base">
                To establish a commercially viable, technologically advanced, ecologically sustainable, and socially inclusive integrated farming and recreation hub that enhances food security, creates employment, and stimulates regional economic growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="relative py-10 flex items-center justify-center overflow-hidden">
        <img src={VMG_Pic} alt="VMG" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full max-w-4xl px-6 md:px-10 py-10 bg-white/80 rounded-md border border-black flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Objectives</h2>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Increase household income and economic resilience through integrated smart farming systems</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Strengthen sustainable livelihoods and create employment opportunities for youth and women</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Improve access to affordable, nutritious, and sustainably produced food</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Enhance nutrition through integrated fish, poultry, fruit, and vegetable production</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Enhance nutrition through integrated fish, poultry, fruit, and vegetable production</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Promote AI-enabled agriculture, IoT integration, and agricultural data-driven decision making</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Improve water reuse, energy efficiency, and environmental sustainability</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Serve as a practical innovation, training, and demonstration hub for integrated smart agriculture</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-700" /> Train farmers, students, and practitioners on climate-smart and technology-enabled farming systems</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VMG;
