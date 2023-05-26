import { Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../images/fasset_master_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LinksFooter = () => {
  return (
    <Stack
      paddingTop={2}
      sx={{
        backgroundColor: "#f2f3f3",
        border: 1,
        borderColor: "lightgray"
      }}
    >
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
          <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
            About Us
          </Typography>
          <Link sx={{ color: "primary.main", fontWeight: "lighter" }}>
            Who we are
          </Link>
          <Link sx={{ color: "primary.main", fontWeight: "lighter" }}>
            Our Mandate
          </Link>
          <Link sx={{ color: "primary.main", fontWeight: "lighter" }}>
            Board & Commitees
          </Link>
          <Link sx={{ color: "primary.main", fontWeight: "lighter" }}>
            Our Team
          </Link>
          <Link sx={{ color: "primary.main", fontWeight: "lighter" }}>
            Fasset Constitution
          </Link>
          <Link sx={{ color: "primary.main", fontWeight: "lighter" }}>
            Policies
          </Link>
        </Stack>
        <Stack
          width="22.2233%"
          // border={1}
          // borderColor="lightgray"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
            Stakeholder
          </Typography>
          <Link sx={{ color: "primary.main" }}>Stakeholder Login</Link>
          <Link sx={{ color: "primary.main" }}>Latest News</Link>
          <Link sx={{ color: "primary.main" }}>Annual Report</Link>
          <Link sx={{ color: "primary.main" }}>eFacts Newsletter</Link>
          <Link sx={{ color: "primary.main" }}>Facts Newsletter</Link>
          <Link sx={{ color: "primary.main" }}>Press Articles</Link>
        </Stack>
        <Stack
          width="22.2233%"
          // border={1}
          // borderColor="lightgray"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
            Other
          </Typography>
          <Link sx={{ color: "primary.main" }}>Mandatory Grants</Link>
          <Link sx={{ color: "primary.main" }}>Discretionary Grants</Link>
          <Link sx={{ color: "primary.main" }}>Downloads</Link>
          <Link sx={{ color: "primary.main" }}>Events</Link>
          <Link sx={{ color: "primary.main" }}>Vacancies</Link>
        </Stack>
      </Stack>

      <Stack
        width="100%"
        height={60}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "primary.main" }}
        padding={2}
        spacing={2}
      >
        <Typography
          textAlign="center"
          fontWeight="bolder"
          sx={{ color: "#FFFFFF" }}
        >
          {`Copyright © ${new Date().getFullYear()} - Fasset Rights Reserved`}
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            backgroundColor: "#FFFFFF"
          }}
        />
        <Typography
          textAlign="center"
          fontWeight="bolder"
          sx={{ color: "#FFFFFF" }}
        >
          Fasset Policy
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            backgroundColor: "#FFFFFF"
          }}
        />

        <Link
          href="https://www.google.com/maps/place/296+Kent+Ave,+Ferndale,+Randburg,+2194,+South+Africa/@-26.094773,27.999893,14z/data=!4m6!3m5!1s0x1e95749412095119:0xa215fac024675b4!8m2!3d-26.0947729!4d27.9998927!16s%2Fg%2F11mtfgpqkh?hl=en"
          component={Stack}
          direction="row"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          target="_blank"
        >
          <LocationOnIcon sx={{ color: "#FFFFFF" }} />
          <Typography
            textAlign="center"
            fontWeight="bolder"
            sx={{ color: "#FFFFFF" }}
          >
            296 Kent Avenue Randburg 2194
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LinksFooter;
