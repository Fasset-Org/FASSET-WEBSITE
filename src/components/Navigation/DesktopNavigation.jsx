import { AppBar, Box, Stack, styled } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LinksFooter from "../LinksFooter";
import TopContactNavigation from "./TopContactNavigation";
import TopLinksNavigation from "./TopLinksNavigation";

const DesktopNavigation = () => {
  const Link = styled(NavLink)({
    color: "white",
    // fontWeight: 700,
    // textTransform: "uppercase",
    fontSize: 14,
    padding: 8,
    textTransform: "uppercase",
    "&:hover": {
      transform: "none",
      backgroundColor: "#bc9337",
      borderRadius: 8,
      fontWeight: "bolder"
    },
    "&.active": {
      transform: "none",
      backgroundColor: "#bc9337",
      borderRadius: 8,
      fontWeight: "bolder"
    }
  });

  return (
    <Stack>
      <TopContactNavigation />
      <TopLinksNavigation />
      <AppBar
        position="sticky"
        sx={{ height: 65, backgroundColor: "primary.main" }}
      >
        <Stack
          width="100%"
          height="100%"
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            height="100%"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            direction="row"
            width="100%"
            flex={9}
          >
            {/* <img
              src={logo}
              alt=""
              height='100%'
              width={70}
              style={{ border: "1px solid #163683", padding: "10px" }}
            /> */}
            <Link to="/home">Home</Link>
            <Link to="/whoweare">About Us</Link>
            <Link to="/learnerOverview">Learning Programmes</Link>
            <Link to="/mandateGrants">Employer</Link>
            <Link to="/overview">Quality Assurance</Link>
            {/* <Link to="/trainingProviders">Quality Assurance</Link> */}
            {/* <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Institutions
            </Link> */}
            <Link to="/currentTenders">Supply Chain</Link>
            <Link to="/downloads">Resources</Link>
            <Link to="/openPositions">Vacancies</Link>
            {/* <Button
              variant="contained"
              sx={{ backgroundColor: "primary.dark" }}
            >
              FASSET Assistant
            </Button> */}
          </Stack>
        </Stack>
      </AppBar>
      <Box flex={1} sx={{backgroundColor: 'white'}}>
        <Outlet />
        <LinksFooter />
      </Box>
    </Stack>
  );
};

export default DesktopNavigation;
