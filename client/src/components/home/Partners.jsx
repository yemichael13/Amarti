import React from "react";
import { Link } from "react-router-dom"; // import Link for navigation
import LogoLoop from "../animations/LogoLoop";

import Pic from "../../assets/eiar.png";
import Pic1 from "../../assets/arari.jfif";
import Pic2 from "../../assets/hulegeb.png";


// Use your imported images instead of logos
const galleryImages = [
  { src: Pic, alt: "Ethiopian Institute of Agricultural Research" },
  { src: Pic1, alt: "Debrebirhan Agricultural Research Center" },
  { src: Pic2, alt: "Hulegeb Veterinary" },
];

function Partners() {
  return (
    <div className="py-5">
      <h2 className="text-4xl font-bold text-center mb-10">Partners</h2>
      <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={galleryImages.map((img, index) => ({
            node: (
              <Link to={img.href} key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-20 w-auto object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ),
            title: img.alt,
            href: img.href,
          }))}
          speed={100}
          direction="left"
          logoHeight={100}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Gallery images"
        />
      </div>
    </div>
  );
}

export default Partners;
