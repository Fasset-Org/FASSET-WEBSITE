import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import SupportIcon from "@mui/icons-material/Support";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

const FassetAssistant = () => {
  return (
    <Stack padding={2} spacing={2}>
      <Typography
        fontSize={30}
        fontWeight="bolder"
        textTransform="uppercase"
        fontFamily="Helvetica Neue"
        textAlign="center"
        sx={{ color: "primary.main" }}
      >
        Fasset Assistant
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        width={{ xs: "100%" }}
      >
        <Stack
          spacing={2}
          component={Paper}
          padding={2}
          width={{ xs: "100%" }}
          height={{ xs: 180 }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <EventIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: "100%" }}>
            Book Appointment
          </Button>
        </Stack>

        <Stack
          spacing={2}
          component={Paper}
          padding={2}
          width={{ xs: "100%" }}
          height={{ xs: 180 }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <SupportIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: "100%" }}>
            Business Support
          </Button>
        </Stack>

        <Stack
          spacing={2}
          component={Paper}
          padding={2}
          width={{ xs: "100%" }}
          height={{ xs: 180 }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <HelpCenterIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: "100%" }}>
            Log A Query
          </Button>
        </Stack>

        <Stack
          spacing={2}
          component={Paper}
          padding={2}
          width={{ xs: "100%" }}
          height={{ xs: 180 }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <CastForEducationIcon
              fontSize="large"
              sx={{ color: "primary.main" }}
            />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: "100%" }}>
            Bursaries
          </Button>
        </Stack>

        <Stack
          spacing={2}
          component={Paper}
          p={2}
          width={{ xs: "100%" }}
          height={{ xs: 180 }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <EventRepeatIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: "100%" }}>
            Events
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FassetAssistant;
