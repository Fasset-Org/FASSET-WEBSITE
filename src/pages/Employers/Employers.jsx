import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PixIcon from "@mui/icons-material/Pix";
import MandatoryGrants from "../../components/Employers/MandatoryGrants";
import DiscretionaryGrants from "../../components/Employers/DiscretionaryGrants";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import LifeLongLearningEvents from "../../components/Employers/LifeLongLearningEvents";
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const Employers = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const value = pathname.split("/")[1] || "downloads";

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
            label="Mandatory Grants"
            icon={<AccountBalanceIcon />}
            iconPosition="start"
            {...a11yProps("mandateGrants")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="mandateGrants"
          />
          <Tab
            label="Discretionary Grants"
            icon={<PixIcon />}
            iconPosition="start"
            {...a11yProps("discreteGrants")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="discreteGrants"
          />
          <Tab
            label="Lifelong Learning Events"
            icon={<EventRepeatIcon />}
            iconPosition="start"
            {...a11yProps("learningEvents")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="learningEvents"
          />
        </Tabs>
        <TabPanel value={value} index="mandateGrants">
          <MandatoryGrants />
        </TabPanel>
        <TabPanel value={value} index="discreteGrants">
          <DiscretionaryGrants />
        </TabPanel>
        <TabPanel value={value} index="learningEvents">
          <LifeLongLearningEvents />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "mandateGrants":
        return (
          <Stack padding={2}>
            <MandatoryGrants />
          </Stack>
        );
      case "discreteGrants":
        return (
          <Stack padding={2}>
            <DiscretionaryGrants />
          </Stack>
        );
      case "learningEvents":
        return (
          <Stack padding={2}>
            <LifeLongLearningEvents />
          </Stack>
        );
      default:
        return (
          <Stack padding={2}>
            <MandatoryGrants />
          </Stack>
        );
    }
  }
};

export default Employers;
