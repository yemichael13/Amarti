import React from "react";
import Eco_Tourism from "../../assets/eco-tourism_2.jpg";
import Farmer from "../../assets/farmer,student.jpg";
import Project from "../../assets/project_owner.jpg";
import Peri from "../../assets/peri-urban.jpg";
import Youth from "../../assets/youth.png";
import { FaCheckCircle } from "react-icons/fa";

const Target = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="text-4xl text-center font-bold">Target Group</h2>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 py-10 w-full max-w-6xl">
        {/* Card */}
        <div className="flex flex-col border border-green-900 rounded-md px-5 py-10 w-full md:w-60 text-center justify-center items-center bg-gradient-to-b from-green-900 to-green-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Project} alt="project owner" className="w-32 h-32 rounded-full mb-5" />
          <h4 className="text-white text-lg md:text-xl font-semibold">Project Owner Households</h4>
        </div>

        <div className="flex flex-col border border-green-900 rounded-md px-5 py-10 w-full md:w-60 text-center justify-center items-center bg-gradient-to-b from-green-900 to-green-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Youth} alt="Youth" className="w-32 h-32 rounded-full mb-5" />
          <h4 className="text-white text-lg md:text-xl font-semibold">Youth and Woman Groups</h4>
        </div>

        <div className="flex flex-col border border-green-900 rounded-md px-5 py-10 w-full md:w-60 text-center justify-center items-center bg-gradient-to-b from-green-900 to-green-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Peri} alt="urban & peri-urban" className="w-32 h-32 rounded-full mb-5" />
          <h4 className="text-white text-lg md:text-xl font-semibold">Urban and Peri-Urban Consumers</h4>
        </div>

        <div className="flex flex-col border border-green-900 rounded-md px-5 py-10 w-full md:w-60 text-center justify-center items-center bg-gradient-to-b from-green-900 to-green-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Farmer} alt="farmer" className="w-32 h-32 rounded-full mb-5" />
          <h4 className="text-white text-lg md:text-xl font-semibold">Farmers, Students and Researchers</h4>
        </div>

        <div className="flex flex-col border border-green-900 rounded-md px-5 py-10 w-full md:w-60 text-center justify-center items-center bg-gradient-to-b from-green-900 to-green-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src={Eco_Tourism} alt="eco-tourism" className="w-32 h-32 rounded-full mb-5" />
          <h4 className="text-white text-lg md:text-xl font-semibold">Eco-Tourism</h4>
        </div>
      </div>

      {/* Outputs Section */}
      <h2 className="text-center text-4xl font-bold">Expected Outputs</h2>
      <div className="mt-10 pb-10 px-5 max-w-4xl">
        <p className="font-semibold md:text-xl flex items-center  gap-5 text-sm"><FaCheckCircle className="text-green-700" /> Increased household income and diversified livelihoods</p>
        <p className="font-semibold md:text-xl flex items-center  gap-5 text-sm"><FaCheckCircle className="text-green-700" /> Improved nutrition for partner households and urban dwellers</p>
        <p className="font-semibold md:text-xl flex items-center  gap-5 text-sm"><FaCheckCircle className="text-green-700" /> Increased supply of fish, poultry, fruits, and vegetables to urban markets</p>
        <p className="font-semibold md:text-xl flex items-center  gap-5 text-sm"><FaCheckCircle className="text-green-700" /> Employment creation for youth and women</p>
        <p className="font-semibold md:text-xl flex items-center  gap-5 text-sm"><FaCheckCircle className="text-green-700" /> Functional integrated agro‑eco‑tourism site</p>
      </div>
    </div>
  );
};

export default Target;
