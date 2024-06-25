import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import StepGuideImage from "../../images/Fasset Choose Career Guide.png";
import CareerGuide from "../../images/Leaners/Fasset Career Guide 2020 - Cropped.pdf";

const ChooseACareer = () => {
  return (
    <Stack spacing={2} sx={{ width: "fit-content" }}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        // textTransform="uppercase"
        // textAlign="center"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Choosing a career
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        Choosing a career is one of the most important decisions that you will
        make in your life. Although most people make several career changes in
        their lifetime, the first career decision you make will have an impact
        on various aspects of your life. It will, for example, determine the
        direction in which you will develop skills, the type of organisation in
        which you will start working and the income that you will earn. With
        colleges and universities offering numerous courses today, for students
        it is truly confusing making a career choice. For a student, choosing a
        career path that is far from ones’ interest and ability can cause
        dissatisfaction in the long run. Hence it is important to plan one’s
        career from a long term perspective. Follow the below steps to pick a
        career that is fitting for you or download ​the Fasset Career Guide for
        more information{" "}
        <a
          href={CareerGuide}
          style={{ color: "#163683", cursor: "pointer", fontWeight: 600 }}
          target="_blank"
          rel="noreferrer"
        >
          click here
        </a>{" "}
        to download.
      </Typography>
      <Divider />
      <Typography fontSize={14} fontWeight="bolder">
        How does career planning happen today?
      </Typography>
      <Typography fontSize={13} fontWeight="lighter">
        Most often students choose careers based on other’s preferences be it:
      </Typography>
      <ul>
        <li>
          <Typography>Following the crowd (peers)</Typography>
        </li>
        <li>
          <Typography>Accepting choices made by parents</Typography>
        </li>
        <li>
          <Typography>Influence by media</Typography>
        </li>
        <li>
          <Typography>
            Following current trends or availing the most sought after career
            opportunities.
          </Typography>
        </li>
      </ul>

      <img
        src={StepGuideImage}
        alt=""
        width="100%"
        height={500}
        style={{ objectFit: "contain" }}
      />
    </Stack>
  );
};

export default ChooseACareer;
