import * as React from "react";
import PropTypes from "prop-types";
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
          // borderBottomRightRadius: 10,
          backgroundColor: "primary.main",
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
          label="Fasset Current Tenders"
          icon={<TaskIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF"
          }}
        />
        <Tab
          label="Fasset Past Tenders"
          icon={<FileOpenIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />

        <Tab
          label="Fasset Candelled Tenders"
          icon={<WebAssetOffIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ActiveTenders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PastTenders />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CancelledTenders />
      </TabPanel>
    </Box>
  );
};

export default SupplyChain;
