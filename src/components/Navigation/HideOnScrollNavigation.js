import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Slide from "@mui/material/Slide";
import { Stack, Tab, Tabs, styled } from "@mui/material";
import fassetLogo from "../../images/fasset_master_logo.png";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StickyNavigation from "./StickyNavigation";
import FasstSpeedDial from "../FassetSpeedDialer";

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

function NavigationTabs() {
  const CustomTab = styled(Tab)(({ theme }) => ({
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      fontWeight: "bolder"
    }
  }));

  return (
    <Box>
      <Tabs
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ fontWeight: "bolder", color: "#FFFFF" }}
      >
        <CustomTab value="one" label="Stackholder Login" />
        <CustomTab value="two" label="FAQ's" />
        <CustomTab value="three" label="COVID-19" />
        <CustomTab value="three" label="Leaner Portal" />
        <CustomTab value="three" label="Vacancies" />
      </Tabs>
    </Box>
  );
}

export default function HideOnScrollNavigation(props) {
  return (
    <React.Fragment>
      <AppBar
        sx={{
          height: 100,
          display: "flex",
          direction: "row",
          justifyContent: "center",
        }}
        position="sticky"
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            // border={1}
            // borderColor={"lightgray"}
            height="100%"
            sx={{ width: "100%" }}
          >
            <Stack justifyContent="center" height="100%" flexGrow={3}>
              <img
                src={fassetLogo}
                alt="Fasset Logo"
                height="100%"
                width={300}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              height="100%"
              flexGrow={9}
              alignItems="center"
              justifyContent="center"
            >
              <NavigationTabs />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <StickyNavigation />
      <Container sx={{zIndex: -1}}>
        <Box sx={{ my: 4 }}>
          {[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>

      <Box
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <FasstSpeedDial />
      </Box>
    </React.Fragment>
  );
}
