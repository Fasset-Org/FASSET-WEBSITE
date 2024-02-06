import * as React from "react";
import Table from "@mui/material/Table";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AboutFassetLearnerships from "../../components/ProfessionalBodies/AboutFassetLearnerships";

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
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        LIFELONG LEARNING WORKSHOPS
      </Typography>
      <Typography>Dear Stakeholders</Typography><br/>
      <Typography>FASSET has once again commenced with the Lifelong Learning online training that is facilitated by partner skills Professional Body. The training is currently running till March and topics have been formulated to assist sector employees to gain competitive edge through fine tuning of skills required in the workplace. Register for a date and time convenient for you for any of the topics below. We look forward to hosting you.</Typography>
      <br/>
      <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                No#
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Service Provider
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Topic
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Date and Times of Training
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Registration link
              </TableCell>
            </TableRow>
          </TableHead>
          
            
        </Table>
      </TableContainer>
      <br/>
      <Typography>For any further enquiries please contact lifelonglearning@fasset.org.za | +27 011 476 8570</Typography>
  
      </TabPanel>
      
    </Box>
    
  );
};

export default ProfessionalBodies;
