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
      <Link>INVOICE MANAGEMENT</Link>
      <Link>ODOO LMIS</Link>
      <img src={logo} alt="" height={45} width={130} style={{border: '1px solid #163683', padding: '10px'}} />
      <Link>BURSARY MANGEMENT SYSTEM</Link>
      <Link>CAREER PORTAL</Link>
    </Stack>
  );
};

export default TopLinksNavigation;
