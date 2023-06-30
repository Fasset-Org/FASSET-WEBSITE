import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdjustIcon from "@mui/icons-material/Adjust";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PixIcon from "@mui/icons-material/Pix";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import SkillsProgramme from "../../components/Employers/SkillsProgramme";
import WorkbasedProgramme from "../../components/Employers/WorkbasedProgramme";
import MandatoryGrants from "../../components/Employers/MandatoryGrants";
import DiscretionaryGrants from "../../components/Employers/DiscretionaryGrants";
import TrainingProviders from "../../components/Employers/TrainingProviders";

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
          borderBottomRightRadius: 10,
          backgroundColor: "primary.main"
        }}
        TabIndicatorProps={{
          sx: {
            border: 3,
            borderColor: "secondary.main"
          }
        }}
      >
        <Tab
          label="Skills Programmes"
          icon={<AdjustIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF",  }}
        />
        <Tab
          label="TVET Workbased Programme"
          icon={<EditNoteIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF", px: 4 }}
        />
        <Tab
          label="Mandatory Grants"
          icon={<AccountBalanceIcon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Discretionary Grants"
          icon={<PixIcon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Training Providers "
          icon={<ModelTrainingIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SkillsProgramme />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkbasedProgramme />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MandatoryGrants />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DiscretionaryGrants />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TrainingProviders />
      </TabPanel>
    </Box>
  );
};

export default Employers;
