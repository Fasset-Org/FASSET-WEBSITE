import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";
import { Stack } from "@mui/material";
import LatestNews from "../components/Latest News/LatestNews";
import banner1 from "../images/bgImage1.avif";
import banner2 from "../images/Website-Deadline-Extension.png";
import banner3 from "../images/sigmund-LCun3uxh-z0-unsplash.jpg";
import banner4 from "../images/gallery-images/Nkandla.jpg";
import Slideshow from "../components/SlideShow";

const Home = ({ id }) => {
  const images2 = [banner1, banner2, banner3, banner4];

  return (
    <Stack spacing={2} width="100%">
      {/* <DesktopBanner /> */}
      <Slideshow images={images2} height="500px" />
      <Stack paddingX={15}>
        <WelcomeComponent />
      </Stack>
      <LatestNews />
    </Stack>
  );
};

export default Home;
