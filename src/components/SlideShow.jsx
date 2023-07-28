import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Navigation/tab.css";

const Slideshow = ({ images, height }) => {
  return (
    <Fade
      autoplay={true}
      indicators={true}
      pauseOnHover={false}
      cssClass="slideshow"
      arrows={false}
    >
      {images.map((slideImage, index) => (
        <div key={index} style={{width: '100%', display: 'block'}}>
          <div
            style={{
              height: height
              // backgroundImage: `url(${slideImage.url})`,
              // backgroundRepeat: "cover",
              // backgroundSize: "100% 100%",
              // backgroundPosition: "center",
            }}
          >
            <img
              src={slideImage}
              alt=""
              style={{ objectFit: "cover", height:'fit-content', maxHeight: 300, objectPosition: "100% 100%" }}
              height="100%"
              width="100%"
            />
          </div>
        </div>
      ))}
    </Fade>
  );
};

export default Slideshow;
