import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CurrentVacancies from "../../components/Vacancies/CurrentVacancies";
import PreviousVacancies from "../../components/Vacancies/PreviousVacancies";

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

const Vacancies = () => {
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
            borderBottom: 1,
            borderColor: "secondary.main"
          }
        }}
      >
        <Tab
          label="Available Vacancies"
          icon={<ArrowCircleDownIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF"
          }}
        />
        <Tab
          label="Previous Vacancies"
          icon={<ArrowCircleUpIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF",
            textAlign: "start"
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CurrentVacancies />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PreviousVacancies />
      </TabPanel>
    </Box>
  );
};

export default Vacancies;
