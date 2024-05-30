import * as React from "react";
import PropTypes from "prop-types";
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
        />
        <Tab
          label="Accounting Authority"
          icon={<Diversity3Icon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Management"
          icon={<Diversity3Icon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Fasset Constitution"
          icon={<ConstructionIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Fasset Policies"
          icon={<PolicyIcon />}
          iconPosition="start"
          {...a11yProps(5)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <WhoWeAre />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OurMandate />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BoardMembers />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Committees />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Constitution />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Policies />
      </TabPanel>
    </Box>
  );
};

export default Learners;
