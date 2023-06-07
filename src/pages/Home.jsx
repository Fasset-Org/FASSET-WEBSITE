import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";
import { Stack, Typography } from "@mui/material";
import LatestNews from "../components/Latest News/LatestNews";
import banner1 from "../images/bgImage1.avif";
import banner2 from "../images/Website-Deadline-Extension.png";
import banner3 from "../images/sigmund-LCun3uxh-z0-unsplash.jpg";
import banner4 from "../images/gallery-images/Nkandla.jpg";
import Slideshow from "../components/SlideShow";
import ValueCard from "../components/ValueCard";

const Home = ({ id }) => {
  const images2 = [banner1, banner2, banner3, banner4];

  return (
    <Stack spacing={2} width="100%">
      {/* <DesktopBanner /> */}
      <Slideshow images={images2} height="500px" />
      <Stack paddingX={15}>
        <WelcomeComponent />
      </Stack>

      <Typography
        fontSize={30}
        fontWeight="bolder"
        textTransform="uppercase"
        fontFamily="Helvetica Neue"
        textAlign="center"
        sx={{ color: "primary.main" }}
      >
        Values
      </Typography>

      <Stack direction="row" spacing={1} padding={1}>
        <ValueCard
          title="Professionalism And Accountability"
          definition={
            "We are a high-performance, professional team; we strive for excellence through hard work and by taking responsibility and being accountable within an accepted and agreed code of conduct."
          }
        />
        <ValueCard
          title="Ethics"
          definition="We work with integrity and honesty and respect internal and external stakeholders at all times."
        />
        <ValueCard
          title="Making A Difference"
          definition={
            "We make a difference to the lives of all our stakeholders by identifying their needs and exceeding expectations."
          }
        />
        <ValueCard
          title="Valuing People"
          definition={
            "We strive to create a motivating and supportive culture by understanding, respecting, developing and valuing each other."
          }
        />
        <ValueCard
          title="Innovation"
          definition="We Continuously innovate and improve to add value to all our stakeholders. The Work of Setas"
        />
        <LatestNews />
      </Stack>
    </Stack>
  );
};

export default Home;
