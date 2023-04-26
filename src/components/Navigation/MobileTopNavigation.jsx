import { AppBar, IconButton, Stack } from "@mui/material";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import React from "react";

const MobileTopNavigation = ({ logo }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { md: "flex", lg: "none", xs: "flex", sm: "flex" },
        height: 60,
        zIndex: 1,
        backgroundColor: "#FFFFFF"
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack height={60} justifyContent="center" paddingLeft={2}>
          <img src={logo} alt="Fasset Logo" height="50%" width="50%" />
        </Stack>
        <IconButton>
          <DensitySmallIcon />
        </IconButton>
      </Stack>
    </AppBar>
  );
};

export default MobileTopNavigation;
