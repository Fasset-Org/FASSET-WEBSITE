import * as React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Overview from "../../components/QualityAssurance/Overview";
import SkillsDevelopmentProvidersAccreditation from "../../components/QualityAssurance/SkillsDevelopmentProvidersAccreditation";
import Accreditation from "../../components/QualityAssurance/Accreditation";
import AssessmentCentresAccreditation from "../../components/QualityAssurance/AssessmentCentresAccreditation";
import SubjectMatterExpertsDatabaseRegistration from "../../components/QualityAssurance/SubjectMatterExpertsDatabaseRegistration";
import EISA from "../../components/QualityAssurance/EISA";
import WorkplaceApproval from "../../components/QualityAssurance/WorkplaceApproval";
import ExternalModerationProcess from "../../components/QualityAssurance/ExternalModerationProcess";
import QCTOPolicies from "../../components/QualityAssurance/QCTOPolicies";
import AssessmentIcon from '@mui/icons-material/Assessment';
import SubjectIcon from '@mui/icons-material/Subject';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import PolicyIcon from '@mui/icons-material/Policy';

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
        {/* <Tab
          label="About FASSET Learnerships"
          icon={<SchoolIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF"
          }}
        /> */}
        <Tab
          label="Overview"
          icon={<ScreenSearchDesktopIcon />}
          iconPosition="start"
          {...a11yProps(0)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="SDP Accreditation"
          icon={<DesignServicesIcon />}
          iconPosition="start"
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Accreditation"
          icon={<CreditScoreIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Assessment Centres Accreditation"
          icon={<AssessmentIcon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="SME Registration"
          icon={<SubjectIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="EISA"
          icon={<IntegrationInstructionsIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Workplace Approval"
          icon={<FactCheckIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="External Moderation Process"
          icon={<RunningWithErrorsIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="QCTO Policies"
          icon={<PolicyIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        F
      </Tabs>

      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SkillsDevelopmentProvidersAccreditation />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Accreditation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AssessmentCentresAccreditation />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SubjectMatterExpertsDatabaseRegistration />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <EISA />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <WorkplaceApproval />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ExternalModerationProcess />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <QCTOPolicies />
      </TabPanel>
    </Box>
  );
};

export default ProfessionalBodies;
