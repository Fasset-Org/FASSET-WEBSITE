import { AppBar, Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LinksFooter from "../LinksFooter";
import TopContactNavigation from "./TopContactNavigation";
import TopLinksNavigation from "./TopLinksNavigation";

const DesktopNavigation = () => {
  const Link = styled(NavLink)({
    color: "white",
    fontFamily: "Gothic A1",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: 14,
    padding: 8,
    "&:hover": {
      transform: "none",
      backgroundColor: "#a6aa15",
      borderRadius: 8,
      fontWeight: 'bolder'
    },
    "&.active": {
      transform: "none",
      backgroundColor: "#a6aa15",
      borderRadius: 8,
      fontWeight: 'bolder'
    }
  });

  return (
    <Stack>
      <TopContactNavigation />
      <TopLinksNavigation />
      <AppBar
        position="sticky"
        sx={{ height: 80, backgroundColor: "primary.main" }}
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
            <Link to="/aboutus">About Us</Link>
            <Link to="/learners">Learners</Link>
            <Link to="/employers">Employers</Link>
            <Link to="/professionalBodies">Professional Bodies</Link>
            {/* <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Institutions
            </Link> */}
            <Link to="/tenders">Supply Chain</Link>
            <Link to="/resources">Resources</Link>
            {/* <Link to="/downloads">Downloads</Link> */}
            <Link to="/vacancies">Vacancies</Link>
            <Button
              variant="contained"
              sx={{ backgroundColor: "primary.dark" }}
            >
              Fasset Assistant
            </Button>
          </Stack>
        </Stack>
      </AppBar>
      <Box flex={1}>
        <Outlet />
        <LinksFooter />
      </Box>
    </Stack>
  );
};

export default DesktopNavigation;
