import { Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../images/fasset_master_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import TikTokIcon from "./TikTokIcon";

const LinksFooter = () => {
  const navigate = useNavigate();

  return (
    <Stack
      paddingTop={2}
      sx={{
        backgroundColor: "#FFFFFF"
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        height={{ md: 300 }}
        justifyContent="center"
        alignItems="center"
        // sx={{
        //   "& :nth-child(1)": {
        //     order: { xs: 4 }
        //   },
        //   "& :nth-child(2)": {
        //     order: { xs: 1 }
        //   }
        // }}
      >
        <Stack
          width={{ xs: "100%", md: "33.33%" }}
          height={{ xs: 200, md: "100%" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          // border={1}
          // borderColor={"red"}
        >
          <img src={logo} alt="" />
          <Stack direction="row" spacing={2} zIndex={1}>
            <IconButton
              onClick={() => {
                window.open("https://www.facebook.com/fasset.org", "_blank");
              }}
            >
              <FacebookIcon sx={{ color: "#1877f2" }} />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open("https://www.instagram.com/fasset_sa", "_blank");
              }}
            >
              <InstagramIcon sx={{ color: "#c83e83" }} />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open("https://x.com/fasset_sa", "_blank");
              }}
            >
              <TwitterIcon sx={{ color: "#1d9bf0" }} />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/financial-and-accounting-services-seta-fasset-/mycompany/",
                  "_blank"
                );
              }}
            >
              <LinkedInIcon sx={{ color: "#0178b5" }} />
            </IconButton>

            <IconButton
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/financial-and-accounting-services-seta-fasset-/mycompany/",
                  "_blank"
                );
              }}
            >
              <TikTokIcon sx={{ color: "#0178b5" }} />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "100%", md: "33.33%" }}
          height={{ xs: 200, md: "100%" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          // border={1}
          // borderColor={"red"}
        >
          <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
            About Us
          </Typography>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/whoweare");
            }}
          >
            Who we are
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/ourMandate");
            }}
          >
            Our Mandate
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/accountingAuthority");
            }}
          >
            Accounting Authority
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/management");
            }}
          >
            Management
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/constitution");
            }}
          >
            Constitution
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/policies");
            }}
          >
            Policies
          </Link>
        </Stack>
        <Stack
          width={{ xs: "100%", md: "33.33%" }}
          height={{ xs: 200, md: "100%" }}
          // border={1}
          // borderColor={"red"}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "primary.main", fontWeight: "bolder" }}>
            Stakeholder
          </Typography>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            href="https://portal.fasset.org.za/web/login"
            target="_blank"
          >
            Stakeholder Login
          </Link>
          {/* <Link sx={{ color: "primary.main" }}>Latest News</Link> */}
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/annualReports");
            }}
          >
            Annual Report
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/openPositions");
            }}
          >
            Vacancies
          </Link>
          <Link
            sx={{
              color: "primary.main",
              fontWeight: "lighter",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate("/downloads");
            }}
          >
            Downloads
          </Link>
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
          sx={{ color: "#FFFFFF", fontSize: { xs: 10 } }}
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
          sx={{ color: "#FFFFFF", fontSize: { xs: 10 } }}
        >
          FASSET Policy
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            backgroundColor: "#FFFFFF"
          }}
        />

        <Stack
          direction="row"
          justifyContent="center"
          sx={{ cursor: "pointer", fontSize: { xs: 10 } }}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/place/Fasset+Financial+%26+Accounting+Sector+Education+And/@-26.0948292,27.9973029,17z/data=!3m1!4b1!4m6!3m5!1s0x1e950ad4f694dd9d:0xfdcbc0464976f09e!8m2!3d-26.0948292!4d27.9998778!16s%2Fg%2F11b6d7d4fn?entry=ttu",
              "_blank"
            );
          }}
        >
          <LocationOnIcon sx={{ color: "#FFFFFF" }} />
          <Typography
            textAlign="center"
            fontWeight="bolder"
            sx={{ color: "#FFFFFF", fontSize: { xs: 10 } }}
          >
            1st floor, 296 Kent Ave, Ferndale, Randburg, 2194
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LinksFooter;
