import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import LatestNews from "../components/Latest News/LatestNews";
import Slideshow from "../components/SlideShow";
import ValueCard from "../components/ValueCard";
import FassetAssistant from "../components/FassetAssistant";
import NoticeBoardModal from "../components/NoticeBoardModal";

const Home = ({ id }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack spacing={2} width="100%">
      {/* <DesktopBanner /> */}

      {xs || sm || md ? (
        <>
          <Slideshow />
          <NoticeBoardModal />
          <FassetAssistant />

          <Typography
            fontSize={30}
            fontWeight="bolder"
            textTransform="uppercase"
            textAlign="center"
            sx={{ color: "primary.main" }}
          >
            Values
          </Typography>

          <Stack direction="column" spacing={2} padding={2}>
            <ValueCard
              title="Professionalism & Accountability"
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
        </>
      ) : (
        <>
          <Slideshow />

          <NoticeBoardModal />

          <Stack>
            <FassetAssistant />
          </Stack>

          <Typography
            fontSize={30}
            fontWeight="bolder"
            textTransform="uppercase"
            textAlign="center"
            sx={{ color: "primary.main" }}
          >
            Values
          </Typography>

          <Stack direction="row" spacing={2} padding={2}>
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
        </>
      )}
    </Stack>
  );
};

export default Home;
