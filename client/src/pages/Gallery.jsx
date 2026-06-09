import React from 'react';
import InfiniteMenu from '../components/animations/InfiniteMenu';

import Pic from "../assets/real/pic.jpg";
import Pic1 from "../assets/real/pic1.jpg";
import Pic2 from "../assets/real/pic2.jpg";
import Pic3 from "../assets/real/pic3.jpg";
import Pic4 from "../assets/real/pic4.jpg";
import Pic5 from "../assets/real/pic5.jpg";
import Pic6 from "../assets/real/pic6.jpg";
import Pic7 from "../assets/real/pic7.jpg";
import Pic8 from "../assets/real/pic8.jpg";
import Pic10 from "../assets/real/pic10.jpg";
import Pic11 from "../assets/real/pic11.jpg";
import Pic12 from "../assets/real/pic12.jpg";
import Pic13 from "../assets/real/pic13.jpg";
import Pic14 from "../assets/real/pic14.jpg";
import Pic15 from "../assets/real/pic15.jpg";
import Pic16 from "../assets/real/pic16.jpg";
import Pic17 from "../assets/real/pic17.jpg";
import Pic18 from "../assets/real/pic18.jpg";
import Pic20 from "../assets/real/pic20.jpg";

const items = [
  { image: Pic },
  { image: Pic1 },
  { image: Pic2 },
  { image: Pic3 },
  { image: Pic4 },
  { image: Pic5 },
  { image: Pic6 },
  { image: Pic7 },
  { image: Pic8 },
  { image: Pic10 },
  { image: Pic11 },
  { image: Pic12 },
  { image: Pic13 },
  { image: Pic14 },
  { image: Pic15 },
  { image: Pic16 },
  { image: Pic17 },
  { image: Pic18 },
  { image: Pic20 },
];

const Gallery = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <InfiniteMenu items={items} scale={1} />
    </div>
  );
};

export default Gallery;
