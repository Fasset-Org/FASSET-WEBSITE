import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ScienceIcon from "@mui/icons-material/Science";
import SummarizeIcon from "@mui/icons-material/Summarize";
import Downloads from "../../components/Resources/Downloads";
import Research from "../../components/Resources/Research";
import AnnualReports from "../../components/Resources/AnnualReports";
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

const Resources = () => {
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
            minHeight: 450,
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
            label="Downloads"
            icon={<CloudDownloadIcon />}
            iconPosition="start"
            {...a11yProps("downloads")}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="downloads"
          />
          <Tab
            label="Research"
            icon={<ScienceIcon />}
            iconPosition="start"
            {...a11yProps("research")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="research"
          />

          <Tab
            label="Annual Reports"
            icon={<SummarizeIcon />}
            iconPosition="start"
            {...a11yProps("annualReports")}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="annualReports"
          />
        </Tabs>
        <TabPanel value={value} index="downloads">
          <Downloads />
        </TabPanel>
        <TabPanel value={value} index="research">
          <Research />
        </TabPanel>
        <TabPanel value={value} index="annualReports">
          <AnnualReports />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "downloads":
        return (
          <Stack padding={2}>
            <Downloads />
          </Stack>
        );
      case "research":
        return (
          <Stack padding={2}>
            <Research />
          </Stack>
        );
      case "annualReports":
        return (
          <Stack padding={2}>
            <AnnualReports />
          </Stack>
        );
      default:
        return (
          <Stack padding={2}>
            <Downloads />
          </Stack>
        );
    }
  }
};

export default Resources;
