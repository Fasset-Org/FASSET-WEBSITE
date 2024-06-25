import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkIcon from "@mui/icons-material/Work";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AdjustIcon from "@mui/icons-material/Adjust";
import SchoolIcon from "@mui/icons-material/School";
import Bursary from "../../components/Learners/Bursary";
import SkillsProgramme from "../../components/Learners/SkillsProgramme";
import AboutFassetLearnerships from "../../components/ProfessionalBodies/AboutFassetLearnerships";
import CareerGuide from "../../components/Learners/CareerGuide";
import Internships from "../../components/Learners/Internships";
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const Learners = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const value = pathname.split("/")[1] || "downloads";

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`);
  };

  if (isDesktop) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          minHeight: 450,
          backgroundColor: "#FFFFFF"
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
            icon={<WorkIcon />}
            iconPosition="start"
            {...a11yProps(0)}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="learnerOverview"
          />

          <Tab
            label="Bursaries"
            icon={<CastForEducationIcon />}
            iconPosition="start"
            {...a11yProps(1)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="bursaries"
          />

          <Tab
            label="Learnerships"
            icon={<SchoolIcon />}
            iconPosition="start"
            {...a11yProps(2)}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="leanerships"
          />

          <Tab
            label="Internships"
            icon={<SchoolIcon />}
            iconPosition="start"
            {...a11yProps(3)}
            sx={{
              borderBottom: 1,
              borderColor: "lightgray",
              color: "#FFFFFF"
            }}
            value="internships"
          />

          <Tab
            label="Skills Programmes"
            icon={<AdjustIcon />}
            iconPosition="start"
            {...a11yProps(4)}
            sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
            value="skillsProgrammes"
          />
        </Tabs>
        <TabPanel value={value} index="learnerOverview">
          <CareerGuide />
        </TabPanel>
        <TabPanel value={value} index="bursaries">
          <Bursary />
        </TabPanel>
        <TabPanel value={value} index="leanerships">
          <AboutFassetLearnerships />
        </TabPanel>
        <TabPanel value={value} index="internships">
          <Internships />
        </TabPanel>
        <TabPanel value={value} index="skillsProgrammes">
          <SkillsProgramme />
        </TabPanel>
      </Box>
    );
  } else {
    switch (value) {
      case "learnerOverview":
        return (
          <Stack padding={2}>
            <CareerGuide />
          </Stack>
        );
      case "bursaries":
        return (
          <Stack padding={2}>
            <Bursary />
          </Stack>
        );
      case "leanerships":
        return (
          <Stack padding={2}>
            <AboutFassetLearnerships />
          </Stack>
        );
      case "internships":
        return (
          <Stack padding={2}>
            <Internships />
          </Stack>
        );
      case "skillsProgrammes":
        return (
          <Stack padding={2}>
            <SkillsProgramme />
          </Stack>
        );
      default:
        <Stack padding={2}>
          <CareerGuide />
        </Stack>;
    }
  }
};

export default Learners;
