import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import logo from "../../images/square-logo.jpeg";
import { Link, Outlet } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Navigation.scss";

const DesktopNavigation = () => {
  return (
    <Stack>
      <Stack
        height={40}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        {/* <Typography>Sita Phone: 0123456789</Typography> */}
        <Typography
          sx={{ fontWeight: "bolder" }}
          component={Stack}
          direction="row"
        >
          Fasset Call Center -
          <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
            &nbsp; Phone: 0123456789, email: callcentre@fasset.org.za
          </Typography>
        </Typography>
        <Typography>
          <a
            href="https://www.google.com/maps/place/296+Kent+Ave,+Ferndale,+Randburg,+2194,+South+Africa/@-26.094773,27.999893,14z/data=!4m6!3m5!1s0x1e95749412095119:0xa215fac024675b4!8m2!3d-26.0947729!4d27.9998927!16s%2Fg%2F11mtfgpqkh?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            296 Kent Ave Ferndale Randburg 2194
          </a>
        </Typography>

        <IconButton>
          <CloseIcon />
        </IconButton>
      </Stack>
      <AppBar
        position="sticky"
        sx={{ height: 60, backgroundColor: "primary.main" }}
      >
        <Stack
          width="100%"
          height="100%"
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            flex={2}
            height="100%"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            direction="row"
          >
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
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Learners
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Employees
            </Link>
          </Stack>
          <Stack
            flex={1}
            height="100%"
            justifyContent="center"
            alignItems="center"
            padding={1}
            direction="row"
            spacing={2}
            sx={{ "&:hover": { transform: "scale(1.1)" } }}
          >
            <img src={logo} alt="" height="90%" />
            <Typography
              fontSize={20}
              textTransform="uppercase"
              sx={{ textShadow: "2px 2px 2px #F5DF43" }}
            >
              Fasset
            </Typography>
          </Stack>
          <Stack
            flex={2}
            height="100%"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            direction="row"
          >
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Stakeholders
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Institutions
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Downloads
            </Link>
            <Link
              to="/vacancies"
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Vacancies
            </Link>
          </Stack>
        </Stack>
      </AppBar>
      <Box flex={1}>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default DesktopNavigation;
