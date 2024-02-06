import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChooseACareer from "../../components/Learners/ChooseACareer";
import WorkIcon from "@mui/icons-material/Work";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ScarceSkills from "../../components/Learners/ScarceSkills";
import CareerPortal from "../../components/Learners/CareerPortal";
import DownloadCard from "../../components/DownloadCard";
import { Grid, Stack } from "@mui/material";

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
        minHeight: 450
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
          label="Choose a career in our sector"
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
          label="Scarce Skills"
          icon={<AcUnitIcon />}
          iconPosition="start"
          {...a11yProps(1)}
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
          {...a11yProps(2)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Bursary"
          icon={<CastForEducationIcon />}
          iconPosition="start"
          {...a11yProps(3)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
        <Tab
          label="Career Portal"
          icon={<AutoAwesomeIcon />}
          iconPosition="start"
          {...a11yProps(4)}
          sx={{ borderBottom: 1, borderColor: "lightgray", color: "#FFFFFF" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ChooseACareer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ScarceSkills />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={1}>
          <Typography
            fontSize={20}
            fontWeight="bolder"
            sx={{ color: "primary.main", textTransform: "uppercase" }}
          >
            Career Guide
          </Typography>
          <Grid container>
            <Grid xs={12} md={4}>
              <DownloadCard fileName="Career Guide" />
            </Grid>
          </Grid>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Bursaries
      </Typography>
      
      <Typography textAlign="justify">
      This will enable Fasset to partner with public providers from Universities and Universities of Technology registered with DHET to ensure that learners are fully bursared in order to obtain formal qualifications that will ultimately enhance their chances of securing learnerships, internships or full time employment in the broader economy including in the Fasset sector.
      </Typography>
      <br/>
      <Typography textAlign="justify">
      Fasset is currently in the process of establishing the parameters to issue bursaries to the “Missing Middle” as from January 2017 and is working with Universities and Universities of Technology registered with DHET to finalise.
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Financial support for learners in the sector with student loans: #NSFAS Loan Repayment Grant
      </Typography>
      
      <Typography textAlign="justify">
      This enables Fasset to identify young learners who have already completed a qualification aligned to scarce skills within the sector and are being hampered in achieving their full potential due to the financial burden that they are carrying.

      </Typography>
      <br/>
      <Typography textAlign="justify">
      The outcome of this intervention is that learners will be relieved of their financial burden, will be able to complete their learnerships without having to change jobs just for higher salaries to pay off their loans AND re-inject additional funding into the NSFAS pool which will enable additional learners to have access to full time study opportunities. In other words this intervention will have a double benefit to the post schooling system in that the Fasset sector will be able to access learners who are not as financially burdened as they were previously whilst also offering opportunities to new learners who are seeking to enter the higher education and training area who are financially constrained.

      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Projects Beneficiary Success Stories
Fasset Bursary Scheme
      </Typography>
      <br/>


      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Professional Body Institutions
      </Typography>
      <br/>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        TVET WBE Program
      </Typography>
      

      </TabPanel>
      <TabPanel value={value} index={4}>
        <CareerPortal />
      </TabPanel>
    </Box>
  );
};

export default Learners;
