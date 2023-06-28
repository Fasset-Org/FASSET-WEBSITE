import { Link, Stack, styled } from "@mui/material";
import React from "react";
import logo from "../../images/fasset_master_logo.png";

const NavLink = styled(Link)({
  textDecoration: "none",
  fontFamily: 'Open Sans", Helvetica, Arial, Lucida, sans-serif',
  cursor: "pointer",

  ":hover": {
    transform: "none",
    backgroundColor: "#14a37f",
    borderRadius: 8,
    fontWeight: 500
  },
  ":active": {}
});

const TopLinksNavigation = () => {
  return (
    <Stack
      height={50}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <NavLink>INVOICE MANAGEMENT</NavLink>
      <NavLink>ODOO LMIS</NavLink>
      <img
        src={logo}
        alt=""
        height={45}
        width={130}
        style={{ padding: "10px" }}
      />
      <NavLink>BURSARY MANGEMENT SYSTEM</NavLink>
      <NavLink>CAREER PORTAL</NavLink>
    </Stack>
  );
};

export default TopLinksNavigation;
