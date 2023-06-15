import { AppBar, Box, Button, Stack } from "@mui/material";
import React from "react";
// import logo from "../../images/square-logo.jpeg";
import { Link, Outlet } from "react-router-dom";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinksFooter from "../LinksFooter";
import "./Navigation.scss";
import TopContactNavigation from "./TopContactNavigation";
import TopLinksNavigation from "./TopLinksNavigation";

const DesktopNavigation = () => {
  return (
    <Stack>
      <TopContactNavigation />
      <TopLinksNavigation />
      <AppBar
        position="sticky"
        sx={{ height: 64, backgroundColor: "primary.main" }}
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
            spacing={2}
            direction="row"
            width="100%"
            flex={9}
            // border={1}
          >
            {/* <img
              src={logo}
              alt=""
              height='100%'
              width={70}
              style={{ border: "1px solid #163683", padding: "10px" }}
            /> */}
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Home
            </Link>
            <Link
              to="/aboutus"
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              About Us
            </Link>
            <Link
              to="/learners"
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Learners
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Employers
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Professional Bodies
            </Link>
            {/* <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Institutions
            </Link> */}
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Supply Chain
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Resources
            </Link>
            <Link
              to="/downloads"
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Downloads
            </Link>
            <Link
              to="/vacancies"
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Vacancies
            </Link>
            <Button
              variant="contained"
              sx={{
                fontSize: 13,
                color: "#FFFFFF",
                backgroundColor: "primary.dark"
                // borderRadius: 1
              }}
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
