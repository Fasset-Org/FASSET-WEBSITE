import { AppBar, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import logo from "../../images/fasset_master_logo.png";
import "./tab.css";
import MobileTopNavigation from "./MobileTopNavigation";
import { Link, Outlet } from "react-router-dom";
import LinksFooter from "../LinksFooter";

const TopNavigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  window.onscroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <Box component="div">
      <AppBar
        position="sticky"
        sx={{
          height: 80,
          backgroundColor: scrollPosition !== 0 ? "#FFFFFF" : "",
          display: { md: "none", xs: "none", sm: "none", lg: "flex" }
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ height: "100%" }}
          spacing={4}
        >
          <Stack flexGrow={2} pl={2}>
            <img
              src={logo}
              alt=""
              width="50%"
              height="100%"
              // style={{ border: "1px solid lightgray" }}
            />
          </Stack>
          <Stack
            flexGrow={7}
            direction="row"
            spacing={2}
            justifyContent="center"
            className="fixed-nav-links"
          >
            <li>Stakeholder Login</li>
            <li>FAQs</li>
            <li>COVID-19</li>
            <li>Learner Portal</li>
            <Link to="/vacancies">
              <li>Vacancies</li>
            </Link>
          </Stack>
        </Stack>
      </AppBar>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#163683",
          height: "50px"
        }}
        className="scroll-navbar"
        sx={
          {
            // display: { md: "none", xs: "none", sm: "none", lg: "flex", xl: 'flex' }
            // display: "none"
          }
        }
        // display="none"
      >
        <li>
          <Link to="/home" style={{ color: "inherit" }}>
            Home
          </Link>
        </li>

        <li className="dropdown">
          <Link to="/aboutus" style={{ color: "inherit" }}>
            About Us
          </Link>
          <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
            <li>Our Mandate</li>
            <li>Board & Committes</li>
            <li>Our Teams</li>
            <li>FASSET Constitution</li>
            <li>Policies</li>
          </ul>
        </li>
        <li>
          <Link to="/fassetprogrammes" style={{ color: "inherit" }}>
            FASSET Programmes
          </Link>
        </li>
        <li>
          <Link to="/leanerships" style={{ color: "inherit" }}>
            Learnerships
          </Link>
        </li>
        <li>Grants</li>
        <li>Training Providers</li>
        <li>Research</li>
        <li>Career Awareness</li>
        <li>Stakeholders Relations</li>
        <li>Events</li>
        <li>Tenders</li>
        <li>
          <Link to="/contactus" style={{ color: "inherit" }}>
            Contact Us
          </Link>
        </li>
      </Stack>
      <MobileTopNavigation logo={logo} />
      <Outlet />
      <LinksFooter />
    </Box>
  );
};

export default TopNavigation;
