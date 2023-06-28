import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChooseACareer from "../../components/Learners/ChooseACareer";
import AdjustIcon from '@mui/icons-material/Adjust';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PixIcon from '@mui/icons-material/Pix';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ScarceSkills from "../../components/Learners/ScarceSkills";
import CareerPortal from "../../components/Learners/CareerPortal";

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
        height: 450,
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
          borderBottomRightRadius: 10,
          borderTopRightRadius: 3,
          backgroundColor: "primary.main"
        }}
      >
        <Tab
          label="Skills Programmes"
          icon={<AdjustIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="TVET Workbased Programme "
          icon={<EditNoteIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Mandatory Grants"
          icon={<AccountBalanceIcon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Discretionary Grants"
          icon={<PixIcon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{ borderBottom: 1, borderColor: "lightgray" }}
        />
        <Tab
          label="Training Providers "
          icon={<ModelTrainingIcon />}
          iconPosition="start"
          {...a11yProps(4)}
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
      <TabPanel value={value} index={3}>
        About Fasset Bursary will be defined here and provide a link to the
        bursary system
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CareerPortal />
      </TabPanel>
    </Box>
  );
};

export default Employers;
