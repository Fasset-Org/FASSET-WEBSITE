import {
  Avatar,
  IconButton,
  Link,
  Stack,
  Typography,
  styled
} from "@mui/material";
import React from "react";
import logo from "../../images/square-logo.jpeg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      <Stack direction="row" alignItems="center">
        <IconButton onClick={() => navigate("/home")}>
          <Avatar src={logo} sx={{backgroundColor: '#FFFFFF', padding: 0.4, borderRadius: 0}} />
        </IconButton>
        <Stack width="100%">
          <Typography
            variant="h6"
            noWrap
            component="div"
            // textTransform="uppercase"
            fontSize={15}
            onClick={() => navigate("/home")}
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
      </Stack>
      <NavLink>BURSARY MANGEMENT SYSTEM</NavLink>
      <NavLink>CAREER PORTAL</NavLink>
    </Stack>
  );
};

export default TopLinksNavigation;
