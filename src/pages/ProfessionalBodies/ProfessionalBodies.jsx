import * as React from "react";


import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AboutFassetLearnerships from "../../components/ProfessionalBodies/AboutFassetLearnerships";
import LifeLongLearningEvents from "../../components/ProfessionalBodies/LifeLongLearningEvents";

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

const ProfessionalBodies = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          label="About FASSET Learnerships"
          icon={<SchoolIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF"
          }}
        />
        <Tab
          label="Lifelong Learning Events"
          icon={<EventRepeatIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutFassetLearnerships />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <LifeLongLearningEvents/>
  
      </TabPanel>
      
    </Box>
    
  );
};

export default ProfessionalBodies;
