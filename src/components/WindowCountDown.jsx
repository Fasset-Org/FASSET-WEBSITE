import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

const WindowCountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Typography>Expired</Typography>;
    } else {
      // Render a countdown
      return (
        <Stack
          component={Paper}
          width="100%"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Typography fontSize={20} fontWeight={"bolder"} padding={2}>
              Discretionary Grants Window
            </Typography>
            <Typography
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                fontWeight: "bolder",
                padding: { md: 2, xs: 0.5, sm: 0.5 },
                fontSize: 20,
                textAlign: 'center'
              }}
              component={Stack}
              justifyContent='center'
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
      <Countdown date={new Date("2023-11-31")} renderer={renderer} />
    </Stack>
  );
};

export default WindowCountDown;
