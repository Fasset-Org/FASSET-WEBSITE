import { Stack, Typography } from "@mui/material";
import React from "react";

const ChooseACareer = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        // textTransform="uppercase"
        fontFamily="Helvetica Neue"
        // textAlign="center"
        sx={{ color: "primary.main" }}
      >
        Choosing a career
      </Typography>
      <Typography textAlign='justify'>
        Choosing a career is one of the most important decisions that you will
        make in your life. Although most people make several career changes in
        their lifetime, the first career decision you make will have an impact
        on various aspects of your life. It will, for example, determine the
        direction in which you will develop skills, the type of organisation in
        which you will start working and the income that you will earn.
      </Typography>
    </Stack>
  );
};

export default ChooseACareer;
