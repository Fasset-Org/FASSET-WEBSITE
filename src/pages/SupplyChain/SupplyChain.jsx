import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChooseACareer from "../../components/Learners/ChooseACareer";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import ScarceSkills from "../../components/Learners/ScarceSkills";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

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

const SupplyChain = () => {
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
        maxHeight: 400
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "lightgray" }}
      >
        <Tab
          label="Active Tenders"
          icon={
            <ToggleOnIcon sx={{ color: "secondary.main" }} fontSize="large" />
          }
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Past Tenders"
          icon={<ToggleOffIcon fontSize="large" />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Cancelled Tenders"
          icon={<EditRoadIcon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ChooseACareer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ScarceSkills />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Career Guide PDF will be displayed and obviously have a download button
        for downloading
      </TabPanel>
    </Box>
  );
};

export default SupplyChain;
