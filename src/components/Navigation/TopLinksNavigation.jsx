import { Link, Stack, styled } from "@mui/material";
import React from "react";
import logo from "../../images/horizontail-white-logo.jpg";
import { useNavigate } from "react-router-dom";

const NavLink = styled(Link)({
  textDecoration: "none",
  cursor: "pointer",

  ":hover": {
    transform: "none",
    // backgroundColor: "#14a37f",
    borderRadius: 8,
    fontWeight: 500
  },
  ":active": {}
});

const TopLinksNavigation = () => {
  const navigate = useNavigate();
  return (
    <Stack
      height={65}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ backgroundColor: "#FFFFFF" }}
    >
      <NavLink
        href="https://invoices.fasset.org.za/"
        target="_blank"
        rel="noreferrer"
      >
        INVOICE MANAGEMENT
      </NavLink>
      <NavLink
        href="https://portal.fasset.org.za/"
        target="_blank"
        rel="noreferrer"
      >
        ODOO LMIS
      </NavLink>

      <img
        src={logo}
        width={160}
        height={65}
        alt=""
        onClick={() => navigate("/home")}
      />

      {/* <Stack direction="row" alignItems="center">
        <IconButton onClick={() => navigate("/home")}>
          <Avatar
            src={logo}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: 5 }}
          />
        </IconButton>
        <Stack
          width="100%"
          onClick={() => navigate("/home")}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            // textTransform="uppercase"
            fontSize={15}
            textTransform="uppercase"
            fontWeight="bolder"
            sx={{ color: "primary.main" }}
            letterSpacing={6}
          >
            Fasset
          </Typography>
          <Typography
            fontSize={9}
            // border={1}
            sx={{
              position: "relative",
              bottom: 5,
              height: 10,
              color: "primary.main"
            }}
          >
            <i>Make the future count</i>
          </Typography>
        </Stack>
      </Stack> */}
      {/* <NavLink
        href="https://fassetapps.co.za/#/"
        target="_blank"
        rel="noreferrer"
      >
        BURSARY MANGEMENT SYSTEM
      </NavLink> */}
      <NavLink
        href="https://www.fasset.org.za/learner_portal/index.php"
        target="_blank"
        rel="noreferrer"
      >
        LEARNER PORTAL
      </NavLink>
    </Stack>
  );
};

export default TopLinksNavigation;
