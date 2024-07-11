import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ActiveTenders from "../../components/SupplyChain/ActiveTenders";
import PastTenders from "../../components/SupplyChain/PastTenders";
import CancelledTenders from "../../components/SupplyChain/CancelledTenders";
import TaskIcon from "@mui/icons-material/Task";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import WebAssetOffIcon from "@mui/icons-material/WebAssetOff";
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

const SupplyChain = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const value = pathname.split("/")[1] || "currentTenders";

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`, { replace: true });
  };

  if (isDesktop) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          minHeight: 450
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            borderRight: 1,
            borderColor: "lightgray",
            borderBottomRightRadius: 0,
            backgroundColor: "primary.main",
            m: 2
          }}
          TabIndicatorProps={{
            sx: {
              border: 3,
              borderColor: "secondary.main"
            }
          }}
        >
          <Tab
            label="Current Tenders"
            icon={<TaskIcon />}
            iconPosition="start"
            {...a11yProps("currentTenders")}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="currentTenders"
          />
          <Tab
            label="Past Tenders"
            icon={<FileOpenIcon />}
            iconPosition="start"
            {...a11yProps("previousTenders")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="previousTenders"
          />

          <Tab
            label="Cancelled Tenders"
            icon={<WebAssetOffIcon />}
            iconPosition="start"
            {...a11yProps("cancelledTenders")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="cancelledTenders"
          />
        </Tabs>
        <TabPanel value={value} index={"currentTenders"}>
          <ActiveTenders />
        </TabPanel>
        <TabPanel value={value} index={"previousTenders"}>
          <PastTenders />
        </TabPanel>
        <TabPanel value={value} index={"cancelledTenders"}>
          <CancelledTenders />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "currentTenders":
        return (
          <Stack padding={2}>
            <ActiveTenders />
          </Stack>
        );
      case "previousTenders":
        return (
          <Stack padding={2}>
            <PastTenders />
          </Stack>
        );
      case "cancelledTenders":
        return (
          <Stack padding={2}>
            <CancelledTenders />
          </Stack>
        );
      default:
        return (
          <Stack padding={2}>
            <ActiveTenders />
          </Stack>
        );
    }
  }
};

export default SupplyChain;
