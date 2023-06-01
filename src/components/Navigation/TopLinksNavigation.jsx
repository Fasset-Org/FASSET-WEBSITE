import { Link, Stack } from "@mui/material";
import React from "react";
import logo from '../../images/fasset_master_logo.png';

const TopLinksNavigation = () => {
  return (
    <Stack
      height={50}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Link sx={{ color: "black" }}>INVOICE MANAGEMENT</Link>
      <Link sx={{ color: "black" }}>ODOO LMIS</Link>
      <img src={logo} alt="" height={45} width={130} style={{border: '1px solid #163683', padding: '10px'}} />
      <Link sx={{ color: "black" }}>BURSARY MANGEMENT SYSTEM</Link>
      <Link sx={{ color: "black" }}>CAREER PORTAL</Link>
    </Stack>
  );
};

export default TopLinksNavigation;
