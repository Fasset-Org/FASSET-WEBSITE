import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const actions = [
  { icon: <FacebookIcon />, name: "Facebook", color: "#1877f2" },
  { icon: <TwitterIcon />, name: "Twitter", color: "#1d9bf0" },
  { icon: <InstagramIcon />, name: "Instagram", color: "#ff3040" },
  { icon: <LinkedInIcon />, name: "LinkedIn", color: "#0a66c2" }
];

export default function FasstSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        // sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon sx={{ color: "primary.main" }} />}
        FabProps={{
          sx: {
            bgcolor: "secondary.main",
            "&:hover": {
              bgcolor: "secondary.main"
            }
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{ color: action.color }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
