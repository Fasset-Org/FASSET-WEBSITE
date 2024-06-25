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
import AssessmentIcon from "@mui/icons-material/Assessment";
import SubjectIcon from "@mui/icons-material/Subject";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import PolicyIcon from "@mui/icons-material/Policy";
import { useTheme } from "@mui/material/styles";
import { Stack, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

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
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const value = pathname.split("/")[1] || "overview";

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`, { replace: true });
  };

  if (isDesktop) {
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
            label="Overview"
            icon={<ScreenSearchDesktopIcon />}
            iconPosition="start"
            {...a11yProps(0)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="overview"
          />
          <Tab
            label="SDP Accreditation"
            icon={<DesignServicesIcon />}
            iconPosition="start"
            {...a11yProps(2)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="SDPAccreditation"
          />
          <Tab
            label="Accreditation"
            icon={<CreditScoreIcon />}
            iconPosition="start"
            {...a11yProps(1)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="accreditation"
          />
          <Tab
            label="Assessment Centres Accreditation"
            icon={<AssessmentIcon />}
            iconPosition="start"
            {...a11yProps(3)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="assessmentCentresAccreditation"
          />
          <Tab
            label="SME Registration"
            icon={<SubjectIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="SMERegistration"
          />
          <Tab
            label="EISA"
            icon={<IntegrationInstructionsIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="EISA"
          />
          <Tab
            label="Workplace Approval"
            icon={<FactCheckIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="workplaceApproval"
          />
          <Tab
            label="External Moderation Process"
            icon={<RunningWithErrorsIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="externalModerationProcess"
          />
          <Tab
            label="QCTO Policies"
            icon={<PolicyIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="QCTOPolicies"
          />
          F
        </Tabs>

        <TabPanel value={value} index="overview">
          <Overview />
        </TabPanel>
        <TabPanel value={value} index="SDPAccreditation">
          <SkillsDevelopmentProvidersAccreditation />
        </TabPanel>
        <TabPanel value={value} index="accreditation">
          <Accreditation />
        </TabPanel>
        <TabPanel value={value} index="assessmentCentresAccreditation">
          <AssessmentCentresAccreditation />
        </TabPanel>
        <TabPanel value={value} index="SMERegistration">
          <SubjectMatterExpertsDatabaseRegistration />
        </TabPanel>

        <TabPanel value={value} index="EISA">
          <EISA />
        </TabPanel>
        <TabPanel value={value} index="workplaceApproval">
          <WorkplaceApproval />
        </TabPanel>
        <TabPanel value={value} index="externalModerationProcess">
          <ExternalModerationProcess />
        </TabPanel>
        <TabPanel value={value} index="QCTOPolicies">
          <QCTOPolicies />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "overview":
        return (
          <Stack padding={2}>
            <Overview />
          </Stack>
        );
      case "SDPAccreditation":
        return (
          <Stack padding={2}>
            <SkillsDevelopmentProvidersAccreditation />
          </Stack>
        );
      case "accreditation":
        return (
          <Stack padding={2}>
            <Accreditation />
          </Stack>
        );
      case "assessmentCentresAccreditation":
        return (
          <Stack padding={2}>
            <AssessmentCentresAccreditation />
          </Stack>
        );
      case "SMERegistration":
        return (
          <Stack padding={2}>
            <SubjectMatterExpertsDatabaseRegistration />
          </Stack>
        );
      case "EISA":
        return (
          <Stack padding={2}>
            <EISA />
          </Stack>
        );
      case "workplaceApproval":
        return (
          <Stack padding={2}>
            <WorkplaceApproval />
          </Stack>
        );
      case "externalModerationProcess":
        return (
          <Stack padding={2}>
            <ExternalModerationProcess />
          </Stack>
        );
      case "QCTOPolicies":
        return (
          <Stack padding={2}>
            <QCTOPolicies />
          </Stack>
        );
      default:
        return (
          <Stack padding={2}>
            <Overview />
          </Stack>
        );
    }
  }
};

export default ProfessionalBodies;
