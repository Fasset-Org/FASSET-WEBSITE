import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CurrentVacancies from "../../components/Vacancies/CurrentVacancies";
import PreviousVacancies from "../../components/Vacancies/PreviousVacancies";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Stack, useMediaQuery } from "@mui/material";

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

const Vacancies = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  const value = pathname.split("/")[1] || "openPositions";

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`, { replace: true });
  };

  if (isDesktop) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex"
        }}
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
            backgroundColor: "primary.main",
            borderRadius: 0,
            m: 2,
            minHeight: 450
          }}
          TabIndicatorProps={{
            sx: {
              border: 3,
              borderColor: "secondary.main"
            }
          }}
        >
          <Tab
            label="Open Positions"
            icon={<ArrowCircleDownIcon />}
            iconPosition="start"
            {...a11yProps("openPositions")}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="openPositions"
          />
          <Tab
            label="Past Positions"
            icon={<ArrowCircleUpIcon />}
            iconPosition="start"
            {...a11yProps("pastPositions")}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF",
              textAlign: "start"
            }}
            value="pastPositions"
          />
        </Tabs>
        <TabPanel value={value} index="openPositions">
          <CurrentVacancies />
        </TabPanel>
        <TabPanel value={value} index="pastPositions">
          <PreviousVacancies />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "openPositions":
        return (
          <Stack padding={2}>
            <CurrentVacancies />
          </Stack>
        );
      case "pastPositions":
        return (
          <Stack padding={2}>
            <PreviousVacancies />
          </Stack>
        );
      default:
        return (
          <Stack padding={2}>
            <CurrentVacancies />
          </Stack>
        );
    }
  }
};

export default Vacancies;
