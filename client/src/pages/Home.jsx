import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Who_We_Are from "../components/home/Who_We_Are";

const Home = () => {
    return(
        <div>
            <Navbar />
            <section>
                <Hero />
            </section>
            <section>
                <Who_We_Are />
            </section>
        </div>
    )
}

export default Home;