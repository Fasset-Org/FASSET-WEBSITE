import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

const WindowCountDown = ({ grant }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return;
    } else {
      // Render a countdown
      return (
        <Stack component={Paper} width="100%">
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={20} fontWeight={"bolder"} padding={2}>
              {grant.title}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                fontWeight: "bolder",
                padding: { md: 2, xs: 0.5, sm: 0.5 },
                fontSize: 20,
                textAlign: "center"
              }}
              component={Stack}
              justifyContent="center"
            >
              {`${days}d ${hours}h ${minutes}m ${seconds}s`}
            </Typography>
          </Stack>
        </Stack>
      );
    }
  };
  return (
    <Stack>
      <Countdown date={new Date(grant.closingDate)} renderer={renderer} />
    </Stack>
  );
};

export default WindowCountDown;
