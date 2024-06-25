import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import aboutImgBanner from "../../images/bgImage1.avif";

const AboutBanner = () => {
  return (
    <Box>
      <Stack
        height={500}
        border={1}
        sx={{
          backgroundImage: `url(${aboutImgBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "100%",
          backdropFilter: "revert"
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          width="100%"
          textAlign="center"
          fontWeight="bolder"
          fontSize={40}
          textTransform="uppercase"
          sx={{ color: "primary.main", textShadow: "2px 2px #f5df43" }}
        >
          About Fasset
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutBanner;
