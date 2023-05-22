import { IconButton, Stack } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import banner1 from "../../images/Nkandla.jpg";
import banner2 from "../../images/gallery-images/IMG_4228.JPG";
import banner3 from "../../images/Website-Deadline-Extension.png";
import { useState } from "react";

const DesktopBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(banner1);
  const [currentIdx, setCurrentIdx] = useState(0);

  console.log(currentIdx)
  const images = [
    banner1,
    banner2,
    banner3,
    banner1,
    banner2,
    banner3,
    banner1,
    banner2,
    banner3,
    banner1
  ];

  const setCurrentImage = (idx) => {
    setCurrentSlide(images[idx]);
  };

  const setNextSlide = () => {
    setCurrentIdx(currentIdx + 1);
    setCurrentImage(currentIdx)
    
  };

  const setPrevSlide = () => {
    setCurrentIdx(currentIdx - 1);
    setCurrentImage(currentIdx)
    
  };
  return (
    <Stack>
      <Stack
        width="100%"
        height={400}
        border={1}
        borderColor="lightgray"
        // sx={{ backgroundColor: "lightgray" }}
      >
        <img
          src={currentSlide}
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack
        height={100}
        border={1}
        borderColor="lightgray"
        direction="row"
        // sx={{ backgroundColor: "#E5E7E9" }}
      >
        <Stack
          flex={1}
          // border={1}
          // borderColor="red"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton onClick={setPrevSlide}>
            <ArrowBackIosIcon fontSize="large" sx={{ color: "lightgray" }} />
          </IconButton>
        </Stack>
        <Stack flex={10} direction="row">
          {images?.map((image, i) => {
            return (
              <>
                <img
                  src={image}
                  alt=""
                  key={i}
                  width="10%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    ...(currentIdx === i ? { opacity: 1 } : { opacity: 0.7 })
                  }}
                  onClick={() => {
                    setCurrentImage(i);
                    setCurrentIdx(i);
                  }}
                />
              </>
            );
          })}
        </Stack>
        <Stack
          flex={1}
          // border={1}
          // borderColor="red"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton onClick={setNextSlide}>
            <ArrowForwardIosIcon fontSize="large" sx={{ color: "lightgray" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DesktopBanner;
