import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkIcon from "@mui/icons-material/Work";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import CareerPortal from "../../components/Learners/CareerPortal";
// import DownloadCard from "../../components/DownloadCard";
import AdjustIcon from "@mui/icons-material/Adjust";
import SchoolIcon from "@mui/icons-material/School";
import Bursary from "../../components/Learners/Bursary";
// import CareerGuide from "../../images/Leaners/Fasset Career Guide 2020 - Cropped.pdf";
import SkillsProgramme from "../../components/Learners/SkillsProgramme";
import AboutFassetLearnerships from "../../components/ProfessionalBodies/AboutFassetLearnerships";
import CareerGuide from "../../components/Learners/CareerGuide";
import Internships from "../../components/Learners/Internships";

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
        minHeight: 450,
        backgroundColor: '#FFFFFF'
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
            borderBottom: 1,
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
        />

        <Tab
          label="Bursaries"
          icon={<CastForEducationIcon />}
          iconPosition="start"
          {...a11yProps(1)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
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
        />

        <Tab
          label="Skills Programmes"
          icon={<AdjustIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />

        {/* <Tab
          label="Scarce Skills"
          icon={<AcUnitIcon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{
            borderBottom: 1,
            borderColor: "lightgray",
            color: "#FFFFFF",
            textAlign: "start"
          }}
        />
        <Tab
          label="Career Guide Booklet"
          icon={<EditRoadIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />

        <Tab
          label="Career Portal"
          icon={<AutoAwesomeIcon />}
          iconPosition="start"
          {...a11yProps(6)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <CareerGuide />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Bursary />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutFassetLearnerships />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Internships />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SkillsProgramme />
        {/* <Stack spacing={1}>
          <Typography>
            &nbsp;
            <a
              href={CareerGuide}
              style={{ color: "#163683", cursor: "pointer", fontWeight: 600 }}
              target="_blank"
              rel="noreferrer"
            >
              Click here.
            </a>{" "}
            to view Fasset's Career Guide.
          </Typography>

          <Grid container>
            <Grid xs={12} md={4}>
              <DownloadCard fileName="Career Guide" />
            </Grid>
          </Grid>
        </Stack> */}
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Bursary />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CareerPortal />
      </TabPanel>
    </Box>
  );
};

export default Learners;
