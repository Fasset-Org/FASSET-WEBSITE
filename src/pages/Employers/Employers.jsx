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
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import LifeLongLearningEvents from "../../components/Employers/LifeLongLearningEvents";

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
        {/* <Tab
          label="Skills Programmes"
          icon={<AdjustIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        /> */}
        {/* <Tab
          label="TVET Workbased Programme"
          icon={<EditNoteIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        /> */}
        <Tab
          label="Mandatory Grants"
          icon={<AccountBalanceIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Discretionary Grants"
          icon={<PixIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Lifelong Learning Events"
          icon={<EventRepeatIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        {/* <Tab
          label="Quality Assurance"
          icon={<ModelTrainingIcon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        /> */}
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        <SkillsProgramme />
      </TabPanel> */}
      {/* <TabPanel value={value} index={1}>
        <WorkbasedProgramme />
      </TabPanel> */}
      <TabPanel value={value} index={0}>
        <MandatoryGrants />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DiscretionaryGrants />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LifeLongLearningEvents />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <TrainingProviders />
      </TabPanel> */}
    </Box>
  );
};

export default Employers;
