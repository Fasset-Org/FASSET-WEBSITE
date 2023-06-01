import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../images/square-logo.jpeg";
import { Link, Outlet } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinksFooter from "../LinksFooter";
import "./Navigation.scss";
import TopContactNavigation from "./TopContactNavigation";
import TopLinksNavigation from "./TopLinksNavigation";

const DesktopNavigation = () => {
  return (
    <Stack>
      {/* <Stack
        height={40}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Typography>Sita Phone: 0123456789</Typography>

        <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
          <IconButton>
            <CallIcon sx={{ color: "primary.main", fontWeight: "bolder" }} />
          </IconButton>
          0123456789
        </Typography>
        <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
          <IconButton>
            <EmailIcon sx={{ color: "primary.main", fontWeight: "bolder" }} />
          </IconButton>
          callcenter@fasset.org.za
        </Typography>

        <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
          <a
            style={{ all: "unset" }}
            href="https://www.google.com/maps/place/296+Kent+Ave,+Ferndale,+Randburg,+2194,+South+Africa/@-26.094773,27.999893,14z/data=!4m6!3m5!1s0x1e95749412095119:0xa215fac024675b4!8m2!3d-26.0947729!4d27.9998927!16s%2Fg%2F11mtfgpqkh?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton>
              <LocationOnIcon
                sx={{ color: "primary.main", fontWeight: "bolder" }}
              />
            </IconButton>
            296 Kent Ave Ferndale Randburg 2194
          </a>
        </Typography>

        <IconButton>
          <CloseIcon />
        </IconButton>
      </Stack> */}
      {/* <Stack
        height={60}
        width="100%"
        direction="row"
        alignItems="center"
        px={2}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Stack
          flex={1}
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="start"
        >
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 16,
              fontWeight: "bolder",
              cursor: "pointer"
            }}
          >
            Stakeholder Login
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 16,
              fontWeight: "bolder",
              cursor: "pointer"
            }}
          >
            Learner Portal
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 16,
              fontWeight: "bolder",
              cursor: "pointer"
            }}
          >
            Bursary System
          </Typography>
        </Stack>
        <Stack
          flex={1}
          // border={1}
          // borderColor="lightgray"
          height="100%"
          direction="row"
          justifyContent="end"
        >
          <IconButton>
            <FacebookIcon sx={{ color: "#1877f2" }} fontSize="medium" />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "#c83e83" }} fontSize="medium" />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "#1d9bf0" }} fontSize="medium" />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: "#0178b5" }} fontSize="medium" />
          </IconButton>
        </Stack>
      </Stack> */}
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
          {/* <Stack
            height="100%"
            justifyContent="center"
            alignItems="center"
            flex={2}
            direction="row"
            width="100%"
            spacing={1}
            border={1}
          >
            <img src={logo} alt="" height="50%" />
            <Typography
              fontSize={20}
              textTransform="uppercase"
              sx={{ textShadow: "2px 2px 2px #F5DF43" }}
            >
              Fasset
            </Typography>
          </Stack> */}
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
            {/* <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Research
            </Link> */}
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Institutions
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Supply Chain
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Resources
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Downloads
            </Link>
            <Link to="/home" className="nav-link" style={{ cursor: "pointer" }}>
              Tenders
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
                fontWeight: "bolder",
                color: "#FFFFFF",
                backgroundColor: "primary.dark"
                // borderRadius: 1
              }}
            >
              Fasset Assistant
            </Button>
          </Stack>
          {/* <Stack
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
          </Stack> */}
          {/* <Stack
            flex={2}
            height="100%"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            direction="row"
          >
            
            
          </Stack> */}
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
