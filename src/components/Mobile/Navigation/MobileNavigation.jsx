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
// import AdjustIcon from "@mui/icons-material/Adjust";
// import SchoolIcon from "@mui/icons-material/School";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
// Employers Icons
import AdjustIcon from "@mui/icons-material/Adjust";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PixIcon from "@mui/icons-material/Pix";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

// Quality Assurance Icons
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SubjectIcon from "@mui/icons-material/Subject";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
// import PolicyIcon from '@mui/icons-material/Policy';

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
import { Outlet, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        { name: "About", icon: AssignmentIndIcon, url: "/whoweare" },
        { name: "Our Mandate", icon: RoomPreferencesIcon, url: "/ourMandate" },
        { name: "Accounting Authority", icon: Diversity3Icon, url: "/accountingAuthority" },
        { name: "Management", icon: Diversity3Icon, url: "/management" },
        { name: "Constitution", icon: PolicyIcon, url: "/constitution" },
        { name: "Policies", icon: ConstructionIcon, url: "/policies" }
      ],
      icon: InfoIcon,
      open: false
    },
    {
      parent: "Learning Programmes",
      children: [
        {
          name: "Overview",
          icon: WorkIcon,
          url: "/learnerOverview"
        },
        { name: "Bursaries", icon: CastForEducationIcon, url: "/bursaries" },
        {
          name: "Learnerships",
          icon: SchoolIcon,
          url: "/leanerships"
        },
        {
          name: "Internships",
          icon: SchoolIcon,
          url: "/internships"
        },
        {
          name: "Skills Programmes",
          icon: AdjustIcon,
          url: "/skillsProgrammes"
        }
      ],
      icon: SchoolIcon,
      open: false
    },
    {
      parent: "Employers",
      children: [
        {
          name: "Mandatory Grants",
          icon: AccountBalanceIcon,
          url: "/mandateGrants"
        },
        { name: "Discretionary Grants", icon: PixIcon, url: "/discreteGrants" },
        {
          name: "Lifelong Learning Events",
          icon: ModelTrainingIcon,
          url: "/learningEvents"
        }
      ],
      icon: AssuredWorkloadIcon,
      open: false
    },
    {
      parent: "Quality Assurance",
      children: [
        {
          name: "Overview",
          icon: ScreenSearchDesktopIcon,
          url: "/overview"
        },
        {
          name: "SDP Accreditation",
          icon: DesignServicesIcon,
          url: "/SDPAccreditation"
        },
        {
          name: "Accreditation",
          icon: CreditScoreIcon,
          url: "/accreditation"
        },
        {
          name: "Assessment Centres Accreditation",
          icon: AssessmentIcon,
          url: "/assessmentCentresAccreditation"
        },
        {
          name: "SME Registration",
          icon: SubjectIcon,
          url: "/SMERegistration"
        },
        {
          name: "EISA",
          icon: IntegrationInstructionsIcon,
          url: "/EISA"
        },
        {
          name: "Workplace Approval",
          icon: FactCheckIcon,
          url: "/workplaceApproval"
        },
        {
          name: "External Moderation Process",
          icon: RunningWithErrorsIcon,
          url: "/externalModerationProcess"
        },
        {
          name: "QCTO Policies",
          icon: PolicyIcon,
          url: "/QCTOPolicies"
        }
      ],
      icon: PestControlIcon,
      open: false
    },
    {
      parent: "Supply Chain",
      children: [
        { name: "Current Tenders", icon: TaskIcon, url: "/currentTenders" },
        { name: "Past Tenders", icon: FileOpenIcon, url: "/previousTenders" },
        {
          name: "Cancelled Tenders",
          icon: WebAssetOffIcon,
          url: "/cancelledTenders"
        }
      ],
      icon: ProductionQuantityLimitsIcon,
      open: false
    },
    {
      parent: "Resources",
      children: [
        { name: "Downloads", icon: CloudDownloadIcon, url: "/downloads" },
        { name: "Research", icon: ScienceIcon, url: "/research" },
        { name: "Annual Reports", icon: SummarizeIcon, url: "/annualReports" }
      ],
      icon: SystemUpdateAltIcon,
      open: false
    },
    {
      parent: "Vacancies",
      children: [
        {
          name: "Open Positions",
          icon: ArrowCircleDownIcon,
          url: "/openPositions"
        },
        {
          name: "Past Positions",
          icon: ArrowCircleUpIcon,
          url: "/pastPositions"
        }
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
      <AppBar
        position="fixed"
        open={open}
        sx={{ display: "block", padding: 0 }}
      >
        <Toolbar sx={{ padding: 0 }}>
          <Stack
            direction="row"
            // border={1}
            width="100%"
            height={50}
            alignItems="center"
            padding={2}
            spacing={1}
          >
            <Stack direction="row" alignItems="center" width="100%">
              <IconButton onClick={() => navigate("/home")}>
                <Avatar src={whiteLogo} sx={{ padding: 0.4 }} />
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
                  letterSpacing={6}
                  // border={1}
                >
                  Fasset
                </Typography>
                <Typography
                  fontSize={9}
                  // border={1}
                  sx={{ position: "relative", bottom: 5, height: 10 }}
                >
                  <i>Make the future count</i>
                </Typography>
              </Stack>
            </Stack>
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
          <Stack direction="row" alignItems="center" width="100%">
            <IconButton onClick={() => navigate("/home")}>
              <Avatar src={whiteLogo} sx={{ padding: 0.4 }} />
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
                letterSpacing={6}
              >
                Fasset
              </Typography>
              <Typography
                fontSize={9}
                // border={1}
                sx={{ position: "relative", bottom: 5, height: 10 }}
              >
                <i>Make the future count</i>
              </Typography>
            </Stack>
          </Stack>
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
                  {link.parent === "Home" ? (
                    <ListItemText
                      primary={link.parent}
                      onClick={() => {
                        navigate("/home");
                        setOpen(!open);
                      }}
                    />
                  ) : (
                    <ListItemText primary={link.parent} />
                  )}
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
                        <ListItemButton
                          sx={{ pl: 6 }}
                          key={i}
                          disableGutters
                          onClick={() => {
                            navigate(child.url);
                            setOpen(!open);
                          }}
                        >
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

        <Box minHeight={400}>
          <Outlet />
        </Box>
        <LinksFooter />
      </Box>
    </Stack>
  );
}
