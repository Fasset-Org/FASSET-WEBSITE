import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import WorkIcon from "@mui/icons-material/Work";
import { Stack } from "@mui/material";
import logo from "../../../images/square-logo.jpeg";
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function Navigation() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "primary.main", height: 64 }}
      >
        <Stack height="100%" width="100%" borderColor="white" direction="row">
          {!open && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: `calc(${theme.spacing(7)} + 1px)`,
                [theme.breakpoints.up("sm")]: {
                  width: `calc(${theme.spacing(8)} + 1px)`
                }
              }}
              padding={0}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{
                  ...(open && { display: "none" })
                }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Stack>
          )}
          <Stack
            height="100%"
            sx={{
              width: `calc(100% - ${theme.spacing(7)} + 1px)`,
              [theme.breakpoints.up("sm")]: {
                width: `100% - calc(${theme.spacing(8)} + 1px)`
              }
            }}
            direction="row"
          >
            <Stack
              height="100%"
              justifyContent="center"
              alignItems="center"
              direction="row"
              flexGrow={1}
              spacing={1}
            >
              <img src={logo} alt="" height="50%" />
              <Typography
                textTransform="uppercase"
                fontSize={20}
                sx={{ textShadow: "2px 2px 2px #F5DF43" }}
              >
                FMS
              </Typography>
            </Stack>

            <Stack flexGrow={15} height="100%"></Stack>
          </Stack>
        </Stack>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "primary.main",
            color: "#FFFFFF"
          }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "#FFFFFF" }} fontSize="medium" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem
            key={"Dashboard"}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/fms/dashboard")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <DashboardIcon sx={{ color: "#FFFFFF" }} fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"User Management"}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/fms/users")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <ManageAccountsIcon
                  sx={{ color: "#FFFFFF" }}
                  fontSize="medium"
                />
              </ListItemIcon>
              <ListItemText
                primary="User Management"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"Asset Management"}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/fms/assets")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <DevicesOtherIcon sx={{ color: "#FFFFFF" }} fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                primary="Asset Management"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"Human Resource"}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/fms/hr")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <WorkIcon sx={{ color: "#FFFFFF" }} fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                primary="Human Resource"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
