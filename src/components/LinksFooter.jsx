import { IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../images/fasset_master_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LinksFooter = () => {
  return (
    <Stack paddingTop={2} sx={{ backgroundColor: "#b9c1cc" }}>
      <Stack
        direction={{
          md: "row",
          lg: "row",
          xl: "row",
          xs: "column",
          sm: "column"
        }}
        sx={{
          height: 300
          // border: 1,
          // borderColor: "lightgray",
        }}
        justifyContent={{
          md: "center",
          lg: "center",
          xl: "center",
          xs: "center",
          sm: "center"
        }}
      >
        <Stack
          width="33.33%"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={logo} alt="" />
          <Stack direction="row" spacing={2} zIndex={1}>
            <IconButton>
              <FacebookIcon sx={{ color: "#1877f2" }} />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: "#c83e83" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "#1d9bf0" }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: "#0178b5" }} />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          width="22.2233%"
          // border={1}
          // borderColor="lightgray"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "black", fontWeight: "bolder" }}>
            About Us
          </Typography>
          <Link sx={{ color: "#000000", fontWeight: "lighter" }}>
            Who we are
          </Link>
          <Link sx={{ color: "#000000", fontWeight: "lighter" }}>
            Our Mandate
          </Link>
          <Link sx={{ color: "#000000", fontWeight: "lighter" }}>
            Board & Commitees
          </Link>
          <Link sx={{ color: "#000000", fontWeight: "lighter" }}>Our Team</Link>
          <Link sx={{ color: "#000000", fontWeight: "lighter" }}>
            Fasset Constitution
          </Link>
          <Link sx={{ color: "#000000", fontWeight: "lighter" }}>Policies</Link>
        </Stack>
        <Stack
          width="22.2233%"
          // border={1}
          // borderColor="lightgray"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "black", fontWeight: "bolder" }}>
            Stakeholder
          </Typography>
          <Link sx={{ color: "#000000" }}>Stakeholder Login</Link>
          <Link sx={{ color: "#000000" }}>Latest News</Link>
          <Link sx={{ color: "#000000" }}>Annual Report</Link>
          <Link sx={{ color: "#000000" }}>eFacts Newsletter</Link>
          <Link sx={{ color: "#000000" }}>Facts Newsletter</Link>
          <Link sx={{ color: "#000000" }}>Press Articles</Link>
        </Stack>
        <Stack
          width="22.2233%"
          // border={1}
          // borderColor="lightgray"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "#000000", fontWeight: "bolder" }}>
            Other
          </Typography>
          <Link sx={{ color: "#000000" }}>Mandatory Grants</Link>
          <Link sx={{ color: "#000000" }}>Discretionary Grants</Link>
          <Link sx={{ color: "#000000" }}>Downloads</Link>
          <Link sx={{ color: "#000000" }}>Events</Link>
          <Link sx={{ color: "#000000" }}>Vacancies</Link>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <LocationOnIcon sx={{ color: "primary.main" }} />
        <Typography
          textAlign="center"
          fontWeight="bolder"
          sx={{ color: "primary.main" }}
        >
          296 Kent Avenue Randburg 2194
        </Typography>
      </Stack>
      <Typography textAlign="center" fontWeight="bolder">
        {`Fasset © ${new Date().getFullYear()} - All rights Reserved`}
      </Typography>
    </Stack>
  );
};

export default LinksFooter;
