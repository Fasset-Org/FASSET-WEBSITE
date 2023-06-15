import { Button, IconButton, Stack, Typography } from "@mui/material";
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
      <Stack direction="row" spacing={2} justifyContent="center">
        <Stack spacing={2}>
          <IconButton>
            <EventIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: 160 }}>
            Book Appointment
          </Button>
        </Stack>

        <Stack spacing={2}>
          <IconButton>
            <EventIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: 160 }}>
            WSP
          </Button>
        </Stack>

        <Stack spacing={2}>
          <IconButton>
            <SupportIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: 160 }}>
            ICT Support
          </Button>
        </Stack>

        <Stack spacing={2}>
          <IconButton>
            <HelpCenterIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: 160 }}>
            Log A Query
          </Button>
        </Stack>

        <Stack spacing={2}>
          <IconButton>
            <CastForEducationIcon
              fontSize="large"
              sx={{ color: "primary.main" }}
            />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: 160 }}>
            Bursaries
          </Button>
        </Stack>

        <Stack spacing={2}>
          <IconButton>
            <EventRepeatIcon fontSize="large" sx={{ color: "primary.main" }} />
          </IconButton>
          <Button variant="contained" sx={{ fontSize: 12, width: 160 }}>
            Event Queries
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FassetAssistant;
