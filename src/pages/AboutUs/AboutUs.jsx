import React from "react";
import { Stack } from "@mui/material";
import WelcomeComponent from "../../components/WelcomeComponent";
import AboutBanner from "../../components/AboutUs/AboutBanner";
import AboutInfo from "../../components/AboutUs/AboutInfo";
import OurMandate from "../../components/AboutUs/OurMandate";
import Executives from "../../components/AboutUs/Executives";

const AboutUs = () => {
  return (
    <Stack spacing={2}>
      {/* <WhoWeAre />
      <OurMandate /> */}
      <AboutBanner />
      <Stack px={15} spacing={2}>
        <WelcomeComponent />
        <AboutInfo />
        <OurMandate />
        <Executives />
      </Stack>
    </Stack>
  );
};

export default AboutUs;
