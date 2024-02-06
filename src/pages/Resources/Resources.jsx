import * as React from "react";
import PropTypes from "prop-types";
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

const Resources = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          {...a11yProps(0)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF"
          }}
        />
        <Tab
          label="Research"
          icon={<ScienceIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />

        <Tab
          label="Annual Reports"
          icon={<SummarizeIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Downloads />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Research />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AnnualReports />
        <Typography>Fasset's Annual Integrated Report for the period 1 April 2021 to 31 March 2022 is available for download.
Hard copies are also available from Thabiso Sebashe at Fasset on 011 476 8570.</Typography>
<br/>
<Typography>Click below to download an electronic version. Note: This file is fairly large and may take a while to download.</Typography><br/>
<br/>
<br/>
<Typography>Fasset Five Year Overview</Typography>
<Typography>The Fasset Five Year Overview was included as a separate insert to the Year 5 annual report. It provides a wonderful snapshot of Fasset's achievements in terms of the first five year NSDS and we are proud to report that we have excelled in all areas.</Typography>
      </TabPanel>
    </Box>
  );
};

export default Resources;
