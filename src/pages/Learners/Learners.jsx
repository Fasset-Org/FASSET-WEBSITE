import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkIcon from "@mui/icons-material/Work";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import ChooseACareer from "../../components/Learners/ChooseACareer";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} {...other}>
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

const Learners = () => {
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
        flexDirection: 'row'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider",}}
      >
        <Tab
          label="Choose a career in our sector"
          icon={<WorkIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Scarce Skills"
          icon={<AcUnitIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Career Guide Booklet"
          icon={<EditRoadIcon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Bursary"
          icon={<CastForEducationIcon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Career Portal"
          icon={<AutoAwesomeIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
};

export default Learners;
