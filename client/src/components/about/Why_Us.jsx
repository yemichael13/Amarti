import React from 'react'
import Circular from "../../assets/circulareco.avif";
import Climate from "../../assets/climatesmart.png";
import Tech from "../../assets/techdriven.png";
import Community from "../../assets/comunity.png";

function Why_Us() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Why Aamaartii?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div className="text-center">
          <img src={Circular} alt="Circular Economy" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-bold mb-2">Circular Economy</h3>
          <p className="text-gray-600">
            Our integrated approach promotes resource efficiency and waste reduction.
          </p>
        </div>
        <div className="text-center">
          <img src={Climate} alt="Climate Smart" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-bold mb-2">Climate Smart</h3>
          <p className="text-gray-600">
            We implement practices that mitigate and adapt to climate change.
          </p>
        </div>
        <div className="text-center">
          <img src={Tech} alt="Technology Driven" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-bold mb-2">Technology Driven</h3>
          <p className="text-gray-600">
            Leveraging AI and IoT for enhanced productivity and sustainability.
          </p>
        </div>
        <div className="text-center">
          <img src={Community} alt="Community Focused" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-bold mb-2">Community Focused</h3>
          <p className="text-gray-600">
            Empowering local communities through education and economic opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Why_Us
