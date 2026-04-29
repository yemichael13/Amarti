import React from "react";
import Who from "../../assets/who.png";

const Who_We_Are = () => {
    return(
        <div className="py-5">
            <h2 className="font-bold text-5xl md:text-6xl text-center">Who We Are</h2>
            <div className="flex md:flex-row flex-col md:gap-10">
                <div className="md:w-1/2 py-10 px-15">
                    <div className="bg-green-900 py-5 px-10">
                        <h4 className="text-white font-serif text-3xl md:text-4xl">Integrated Agro-Eco Solutions for a Sustainable Future</h4>
                    </div>
                    <div className="md:px-10 px-5 py-5">
                        <p>Aamaartii PLC is implementing an integrated Fish–Poultry–Horticulture–Eco-Tourism model that promotes efficient use of land and water while improving household income, food security, and environmental sustainability.</p>
                    </div>
                </div>
                <div >
                    <img src={Who} alt="who we are" />
                </div>
            </div>
        </div>
    )
}

export default Who_We_Are;