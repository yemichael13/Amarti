import React from "react";
import { Link } from "react-router-dom"; // import Link for navigation
import LogoLoop from "../animations/LogoLoop";

import Pic from "../../assets/real/pic.jpg";
import Pic1 from "../../assets/real/pic1.jpg";
import Pic2 from "../../assets/real/pic2.jpg";
import Pic3 from "../../assets/real/pic3.jpg";
import Pic4 from "../../assets/real/pic4.jpg";
import Pic5 from "../../assets/real/pic5.jpg";
import Pic6 from "../../assets/real/pic6.jpg";
import Pic7 from "../../assets/real/pic7.jpg";
import Pic8 from "../../assets/real/pic8.jpg";
import Pic10 from "../../assets/real/pic10.jpg";

// Use your imported images instead of logos
const galleryImages = [
  { src: Pic, alt: "Gallery Image 0", href: "/gallery" },
  { src: Pic1, alt: "Gallery Image 1", href: "/gallery" },
  { src: Pic2, alt: "Gallery Image 2", href: "/gallery" },
  { src: Pic3, alt: "Gallery Image 3", href: "/gallery" },
  { src: Pic4, alt: "Gallery Image 4", href: "/gallery" },
  { src: Pic5, alt: "Gallery Image 5", href: "/gallery" },
  { src: Pic6, alt: "Gallery Image 6", href: "/gallery" },
  { src: Pic7, alt: "Gallery Image 7", href: "/gallery" },
  { src: Pic8, alt: "Gallery Image 8", href: "/gallery" },
  { src: Pic10, alt: "Gallery Image 10", href: "/gallery" },
];

function GalleryComp() {
  return (
    <div className="py-5 ">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
      <p className="text-center text-gray-600 mb-10">Click on any image to view.</p>
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
          logoHeight={150}
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

export default GalleryComp;
