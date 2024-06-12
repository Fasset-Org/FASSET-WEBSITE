import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PolicyIcon from "@mui/icons-material/Policy";
import ConstructionIcon from "@mui/icons-material/Construction";
import WhoWeAre from "../../components/AboutUs/WhoWeAre";
import OurMandate from "../../components/AboutUs/OurMandate";
import BoardMembers from "../../components/AboutUs/BoardMembers";
import Committees from "../../components/AboutUs/Committees";
import Constitution from "../../components/AboutUs/Constitution";
import Policies from "../../components/AboutUs/Policies";
import { useTheme } from "@mui/material/styles";
import { Stack, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "80%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const Learners = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const value = pathname.split("/")[1] || "downloads";

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`);
  };

  if (isDesktop) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex"
        }}
        position="sticky"
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          sx={{
            borderRight: 1,
            borderColor: "lightgray",
            borderBottomRightRadius: 0,
            backgroundColor: "primary.main",
            m: 2
            // height: 450
          }}
          TabIndicatorProps={{
            sx: {
              border: 3,
              borderColor: "secondary.main"
            }
          }}
        >
          <Tab
            label="About"
            icon={<AssignmentIndIcon />}
            iconPosition="start"
            {...a11yProps(0)}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="whoweare"
          />
          <Tab
            label="Our Mandate"
            icon={<RoomPreferencesIcon />}
            iconPosition="start"
            {...a11yProps(1)}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF",
              textAlign: "start"
            }}
            value="ourMandate"
          />
          <Tab
            label="Accounting Authority"
            icon={<Diversity3Icon />}
            iconPosition="start"
            {...a11yProps(2)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="accountingAuthority"
          />
          <Tab
            label="Management"
            icon={<Diversity3Icon />}
            iconPosition="start"
            {...a11yProps(3)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="management"
          />
          <Tab
            label="Constitution"
            icon={<ConstructionIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="constitution"
          />
          <Tab
            label="Policies"
            icon={<PolicyIcon />}
            iconPosition="start"
            {...a11yProps(5)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="policies"
          />
        </Tabs>
        <TabPanel value={value} index="whoweare">
          <WhoWeAre />
        </TabPanel>
        <TabPanel value={value} index="ourMandate">
          <OurMandate />
        </TabPanel>
        <TabPanel value={value} index="accountingAuthority">
          <BoardMembers />
        </TabPanel>
        <TabPanel value={value} index="management">
          <Committees />
        </TabPanel>
        <TabPanel value={value} index="constitution">
          <Constitution />
        </TabPanel>
        <TabPanel value={value} index="policies">
          <Policies />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "whoweare":
        return (
          <Stack padding={2}>
            <WhoWeAre />
          </Stack>
        );
      case "ourMandate":
        return (
          <Stack padding={2}>
            <OurMandate />
          </Stack>
        );
      case "accountingAuthority":
        return (
          <Stack padding={2}>
            <BoardMembers />
          </Stack>
        );
      case "management":
        return (
          <Stack padding={2}>
            <Committees />
          </Stack>
        );
      case "constitution":
        return (
          <Stack padding={2}>
            <Constitution />
          </Stack>
        );
      case "policies":
        return (
          <Stack padding={2}>
            <Policies />
          </Stack>
        );
      default:
        return (
          <Stack padding={2}>
            <WhoWeAre />
          </Stack>
        );
    }
  }
};

export default Learners;
