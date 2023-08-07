import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import PestControlIcon from "@mui/icons-material/PestControl";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Avatar, Collapse, Stack } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import whiteLogo from "../../../images/square-logo.jpeg";
import { useState } from "react";
// About Us Icons
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PolicyIcon from "@mui/icons-material/Policy";
import ConstructionIcon from "@mui/icons-material/Construction";

// Leaners Icons
import WorkIcon from "@mui/icons-material/Work";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// Employers Icons
import AdjustIcon from "@mui/icons-material/Adjust";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PixIcon from "@mui/icons-material/Pix";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

// Proffessional Bodies Icons
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

// Supply Chain Icons
import TaskIcon from "@mui/icons-material/Task";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import WebAssetOffIcon from "@mui/icons-material/WebAssetOff";

// Resources Icons
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ScienceIcon from "@mui/icons-material/Science";
import SummarizeIcon from "@mui/icons-material/Summarize";

// Vacancies Icons
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Outlet } from "react-router-dom";
import LinksFooter from "../../LinksFooter";
// import TopContactNavigation from "../../Navigation/TopContactNavigation";

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function MobileNavigation() {
  const [open, setOpen] = React.useState(false);

  const [menu, setMenu] = useState([
    {
      parent: "Home",
      children: [],
      icon: HomeIcon,
      open: false
    },
    {
      parent: "About",
      children: [
        { name: "About", icon: AssignmentIndIcon },
        { name: "Our Mandate", icon: RoomPreferencesIcon },
        { name: "Board", icon: Diversity3Icon },
        { name: "Committees", icon: Diversity3Icon },
        { name: "Constitution", icon: PolicyIcon },
        { name: "Policies", icon: ConstructionIcon }
      ],
      icon: InfoIcon,
      open: false
    },
    {
      parent: "Leaners",
      children: [
        { name: "Choose career in our sector", icon: WorkIcon },
        { name: "Scarce Skills", icon: AcUnitIcon },
        { name: "Career Guide Booklet", icon: EditRoadIcon },
        { name: "Bursary", icon: CastForEducationIcon },
        { name: "Career Portal", icon: AutoAwesomeIcon }
      ],
      icon: SchoolIcon,
      open: false
    },
    {
      parent: "Employers",
      children: [
        { name: "Skills Programme", icon: AdjustIcon },
        { name: "TVET Workbased Programme", icon: EditNoteIcon },
        { name: "Mandatory Grants", icon: AccountBalanceIcon },
        { name: "Discretionary Grants", icon: PixIcon },
        { name: "Training Providers", icon: ModelTrainingIcon }
      ],
      icon: AssuredWorkloadIcon,
      open: false
    },
    {
      parent: "Proffessional Bodies",
      children: [
        { name: "Leanersships", icon: SchoolIcon },
        { name: "Lifeling Learning Events", icon: EventRepeatIcon }
      ],
      icon: PestControlIcon,
      open: false
    },
    {
      parent: "Supply Chain",
      children: [
        { name: "Current Tenders", icon: TaskIcon },
        { name: "Past Tenders", icon: FileOpenIcon },
        { name: "Cancelled Tenders", icon: WebAssetOffIcon }
      ],
      icon: ProductionQuantityLimitsIcon,
      open: false
    },
    {
      parent: "Resources",
      children: [
        { name: "Downloads", icon: CloudDownloadIcon },
        { name: "Research", icon: ScienceIcon },
        { name: "Annual Reports", icon: SummarizeIcon }
      ],
      icon: SystemUpdateAltIcon,
      open: false
    },
    {
      parent: "Vacancies",
      children: [
        { name: "Available Vacancies", icon: ArrowCircleDownIcon },
        { name: "Previous Vacancies", icon: ArrowCircleUpIcon }
      ],
      icon: WorkHistoryIcon,
      open: false
    }
  ]);

  const handleClick = (i) => {
    setMenu((prevMenu) => {
      return prevMenu.map((option, idx) => {
        return idx === i ? { ...option, open: !option.open } : { ...option };
      });
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      {/* <TopContactNavigation /> */}
      <AppBar position="fixed" open={open} sx={{ display: "block" }}>
        <Toolbar>
          <Stack
            direction="row"
            // border={1}
            width="100%"
            height={50}
            alignItems="center"
            padding={2}
            spacing={2}
          >
            <Avatar src={whiteLogo} sx={{padding: 0.4}} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              textTransform="uppercase"
              fontSize={20}
            >
              Fasset
            </Typography>
          </Stack>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              mr: 2,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "primary.main",
            color: "#FFFFFF"
          }
        }}
        variant="temporary"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List disablePadding>
          {menu?.map((link, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding onClick={() => handleClick(index)}>
                <ListItemButton>
                  <ListItemIcon>
                    <link.icon sx={{ color: "#FFFFFF" }} />
                  </ListItemIcon>
                  <ListItemText primary={link.parent} />
                  {link.children.length > 0 && (
                    <>{link.open ? <ExpandLess /> : <ExpandMore />}</>
                  )}
                </ListItemButton>
              </ListItem>
              {link.open && link.children.length > 0 && (
                <Collapse in={link.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {link.children.map((child, i) => {
                      return (
                        <ListItemButton sx={{ pl: 6 }} key={i} disableGutters>
                          <ListItemIcon>
                            <child.icon sx={{ color: "#FFFFFF" }} />
                          </ListItemIcon>
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box>
        <DrawerHeader />

        <Outlet />
        <LinksFooter />
      </Box>
    </Stack>
  );
}
