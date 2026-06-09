import React from "react";
import Seo from "../components/Seo";
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
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";
import GalleryComp from "../components/home/GalleryComp";

const Home = () => {
    return(
        <div>
            <Seo path="/" />
            <Navbar />
            
                <section>
                    
                <Hero />
                
            </section>
            <section>
                <Reveal>
                <Who_We_Are />
                </Reveal>
            </section>
            <section>
                <Reveal>
                <Our_System />
                </Reveal>
            </section>
            <section>
                <Reveal>
                <Target />
                </Reveal>
            </section>
            <section>
                <Reveal>
                <Impact />
                </Reveal>
            </section>
            <section>
                <Reveal>
                <Partners />
                </Reveal>   
            </section>
            <section>
                <Reveal>
                <Latest_Posts />
                </Reveal>
            </section>
            <section>
                <Reveal>
                    <GalleryComp />
                </Reveal>
            </section>
            <section>
                <Reveal>
                <Contact />
                </Reveal>
            </section>
            <section>
                <Reveal>
                <Footer />
                </Reveal>
            </section>
            
            
        </div>
    )
}

export default Home;