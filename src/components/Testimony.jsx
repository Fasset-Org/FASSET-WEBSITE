import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../images/gallery-images/AGM.jpg";
import image2 from "../images/gallery-images/Mandela Day.jpg";
import image3 from "../images/gallery-images/Nkandla.jpg";
import image4 from "../images/gallery-images/kwanongoma.jpg";
import image5 from "../images/gallery-images/womens Day.jpg";
import image6 from "../images/gallery-images/IMG_4544.JPG";
import image7 from "../images/gallery-images/IMG_4228.JPG";

const MotionBox = motion(Box);

const images = [image1, image2, image3, image4, image5, image6, image7];

const Testimony = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <Stack spacing={2} padding={2}>
      {/* <Divider /> */}
      <Typography
        fontSize={40}
        fontWeight="bolder"
        textTransform="uppercase"
        fontFamily="Helvetica Neue"
        textAlign="center"
      >
        <Divider>Testimonails</Divider>
      </Typography>

      <MotionBox
        sx={{
          cursor: "grab",
          overflow: "hidden",
          border: "0.005em solid rgba(22,54,131, 0.1)"
        }}
        ref={slider}
      >
        <MotionBox
          component="div"
          sx={{
            display: "flex"
            // backgroundColor: "lightblue"
          }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image, i) => {
            return (
              <MotionBox
                sx={{
                  minHeight: "35rem",
                  minWidth: "33%",
                  padding: "40px",
                  pointerEvents: "none"
                }}
                component="div"
                key={i}
              >
                <Card variant="outlined" sx={{ minHeight: "100%" }}>
                  <CardContent>
                    <img
                      src={image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "30%",
                        borderRadius: "10px",
                        objectFit: "cover"
                        // objectPosition: '100% 100% 100% 100%'
                      }}
                    />
                    <Stack spacing={2}>
                      <Typography
                        textAlign="center"
                        fontSize={16}
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        Tiyisela Themba Makamu
                      </Typography>
                      <Typography textAlign="center">
                        "I have always dreamt of having a Commerce degree, but
                        due to lack of funding it looked like this would be
                        unobtainable. When I was told about FASSET I felt a
                        glimpse of hope; I applied and was awarded the funding."
                      </Typography>
                      <Button>Read More</Button>
                    </Stack>
                  </CardContent>
                </Card>
              </MotionBox>
            );
          })}
        </MotionBox>
      </MotionBox>
    </Stack>
  );
};

export default Testimony;
