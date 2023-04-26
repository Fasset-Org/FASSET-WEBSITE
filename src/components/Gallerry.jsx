import * as React from "react";
import image1 from "../images/AGM.jpg";
import image2 from "../images/IMG_4228.JPG";
import image3 from "../images/Mandela Day.jpg";
import image4 from "../images/kwanongoma.jpg";
import image5 from "../images/Nkandla.jpg";
import image6 from "../images/IMG_4544.JPG";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          position: "absolute",
          left: `-${currentImage * 100}%`
        }}
        animate={{ left: `-${currentImage * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{ width: `${100 / images.length}%`, objectFit: "cover" }}
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}
