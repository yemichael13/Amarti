import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Who_We_Are from "../components/home/Who_We_Are";
import Our_System from "../components/home/Our_System";
import Target from "../components/home/Target";
import Impact from "../components/home/Impact";
import Partners from "../components/home/Partners";
import Latest_Posts from "@/components/home/Latest_Posts";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";

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
            <section>
                <Our_System />
            </section>
            <section>
                <Target />
            </section>
            <section>
                <Impact />
            </section>
            <section>
                <Partners />
            </section>
            <section>
                <Latest_Posts />
            </section>
            <section>
                <Contact />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Home;