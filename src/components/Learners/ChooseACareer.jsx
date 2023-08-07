import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const ChooseACareer = () => {
  return (
    <Stack spacing={2} sx={{ width: "fit-content" }}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        // textTransform="uppercase"
        fontFamily="Helvetica Neue"
        // textAlign="center"
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        Choosing a career
      </Typography>
      <Typography textAlign="justify">
        Choosing a career is one of the most important decisions that you will
        make in your life. Although most people make several career changes in
        their lifetime, the first career decision you make will have an impact
        on various aspects of your life. It will, for example, determine the
        direction in which you will develop skills, the type of organisation in
        which you will start working and the income that you will earn.
      </Typography>

      <Typography component={Stack} textAlign='justify'>
        With colleges and universities offering numerous courses today, for
        students it is truly confusing making a career choice. For a student,
        choosing a career path that is far from ones’ interest and ability can
        cause dissatisfaction in the long run. Hence it is important to plan
        one’s career from a long term perspective. Follow the below steps to
        pick a career that is fitting for you or download ​the Fasset Career
        Guide for more information. Click <Link component={"span"}>Here</Link>
        to download.
      </Typography>
    </Stack>
  );
};

export default ChooseACareer;
