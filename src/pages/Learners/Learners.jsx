import { Box, Stack } from "@mui/material";
import React from "react";
import "./Learners.scss";
import learnerImageBanner from "../../images/learner-banner.jpg";
import { Link } from "react-router-dom";

const Learners = () => {
  return (
    <Box>
      <Stack
        height={400}
        width="100%"
        border={1}
        className="linear-bg"
        direction="row"
        sx={
          {
            // backgroundImage: `url(${learnerImageBanner})`,
            // backgroundRepeat: "no-repeat",
            // objectFit: 'scale-down',
            // backgroundPosition: 'right'
          }
        }
      >
        <Stack
          flex={1}
          height="100%"
          border={1}
          justifyContent="center"
          alignItems="center"
        >
          <Link style={{ color: "white" }}>Learnerships</Link>
          <Link style={{ color: "white" }}>Learnerships</Link>
          <Link style={{ color: "white" }}>Learnerships</Link>
          <Link style={{ color: "white" }}>Learnerships</Link>
          <Link style={{ color: "white" }}>Learnerships</Link>
        </Stack>
        <Stack
          flex={3}
          height="100%"
          border={1}
          sx={
            {
              backgroundImage: `url(${learnerImageBanner})`,
              backgroundRepeat: "no-repeat",
              objectFit: 'scale-down',
              backgroundPosition: 'right'
            }
          }
        ></Stack>
      </Stack>
    </Box>
  );
};

export default Learners;
