import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React from "react";
import VacancyCard from "../../components/VacancyCard";
import { v4 as uuidv4 } from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JobApplyModal from "../../components/Modals/JobApplyModal";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const VacancyDetails = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(xs, sm);
  const responsibilities = [
    "Ensure that employer grants are evaluated, approved and processed according to FASSET criteria, guidelines and standards",
    "Process all employers grant payments accurately and on time",
    "Prepare correspondence in relation to grant payments",
    "Function as a team member for all employer grants processing",
    "Match employer profiles with categories of grants",
    "Verify employer and grant details against qualifying criteria and compliance"
  ];

  return (
    <Stack spacing={2} padding={2}>
      <Stack
        height={60}
        width="100%"
        component={Paper}
        // border={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        sx={{ borderColor: "primary.main" }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Typography
          fontSize={20}
          fontWeight="bolder"
          sx={{ color: "primary.main" }}
        >
          Job Title
        </Typography>
        {(!xs || !sm) && <Box></Box>}
        {(!xs || !sm) && <Box></Box>}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row", sm: "column" }}
        px={{ md: 4 }}
        py={{ md: 2 }}
      >
        <Stack
          width={{ md: "70%", xs: "100%" }}
          // justifyContent="center"
          alignItems="center"
          border={1}
          borderColor="lightgray"
          sx={{ px: { xs: 2, sm: 2, md: 10, lg: 2, xl: 10 }, py: 2 }}
          spacing={2}
        >
          <Stack
            width="100%"
            direction={{ xs: "column", md: "row", sm: "column" }}
            justifyContent="space-between"
            // border={1}
            padding={{ xs: 2 }}
          >
            <Typography
              fontSize={20}
              fontWeight="bolder"
              sx={{ color: "primary.main" }}
            >
              Job Title
            </Typography>
            <Typography
              fontSize={20}
              fontWeight="bolder"
              sx={{ color: "primary.main" }}
            >
              Closing Date : 30 May 2022
            </Typography>
            {!(xs || sm) ? <JobApplyModal /> : ""}
          </Stack>
          <Stack
            width="100%"
            direction={{ xs: "column", md: "row", sm: "column" }}
            // border={1}
            alignItems="center"
          >
            <Stack width={{ xs: "100%", md: "30%", sm: "100%" }}>
              <Typography fontSize={15} fontWeight="bolder">
                Purpose Of The Job
              </Typography>
            </Stack>
            <Stack width={{ xs: "100%", sm: "100%", md: "70%" }}>
              <Typography>
                The primary purpose of this position is to provide
                administrations on the approval of sector grants and stakeholder
                needs according to FASSET regulations, processes, and
                procedures.
              </Typography>
            </Stack>
          </Stack>

          <Stack
            width="100%"
            direction={{ xs: "column", md: "row", sm: "column" }}
            // border={1}
            // alignItems="center"
          >
            <Typography width={{ md: "30%" }} fontSize={15} fontWeight="bolder">
              Department
            </Typography>
            <Typography>ICT</Typography>
          </Stack>

          <Stack
            width="100%"
            direction={{ xs: "column", md: "row", sm: "column" }}
            // border={1}
            // alignItems="center"
          >
            <Typography width={{ md: "30%" }} fontSize={15} fontWeight="bolder">
              Reporting Line
            </Typography>
            <Typography>Grants Specialist</Typography>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>Main Resposibilities</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%"
                    // bgcolor: "background.paper"
                  }}
                >
                  {responsibilities.map((responsibility, i) => (
                    <ListItem key={i} disableGutters>
                      <Typography fontWeight="bolder" sx={{ mr: 2 }}>
                        {i + 1}.
                      </Typography>
                      <Typography>{responsibility}</Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>Required Qualification</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Diploma in Business Management/Administration or Public
                  Administration/Management/Finance at NQF Level 6 or
                  equivalent.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>Competencies Required</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%"
                    // bgcolor: "background.paper"
                  }}
                >
                  {[
                    "Solid computer skills: MS Office Suite",
                    "Excellent command of English (verbal and written).",
                    "Project planning and administration ability.",
                    "Ability to work under pressure and meet deadlines.",
                    "Good relationship with stakeholders and an energetic approach to work.",
                    "Detail and process orientated.",
                    "Strong analytical, interpersonal, communication.",
                    "Report writing and presentation skills",
                    "Ability to work independently and as part of a team"
                  ].map((responsibility, i) => (
                    <ListItem key={i} disableGutters>
                      <Typography fontWeight="bolder" sx={{ mr: 2 }}>
                        {i + 1}.
                      </Typography>
                      <Typography>{responsibility}</Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>
                  Knowledge & Skills Required
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%"
                    // bgcolor: "background.paper"
                  }}
                >
                  {[
                    "Solid computer skills: MS Office Suite",
                    "Excellent command of English (verbal and written).",
                    "Project planning and administration ability.",
                    "Ability to work under pressure and meet deadlines.",
                    "Good relationship with stakeholders and an energetic approach to work.",
                    "Detail and process orientated.",
                    "Strong analytical, interpersonal, communication.",
                    "Report writing and presentation skills",
                    "Ability to work independently and as part of a team"
                  ].map((responsibility, i) => (
                    <ListItem key={i} disableGutters>
                      <Typography fontWeight="bolder" sx={{ mr: 2 }}>
                        {i + 1}.
                      </Typography>
                      <Typography>{responsibility}</Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>
                  Date Of Commencement Of Position
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  FASSET requires applications for a permanent Grants
                  Administrator to join existing team as soon as possible.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>Remuneration Package</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The salary to be offered for this position is R 304,151 per
                  annum (TCTC).
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>Assessment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Applicants may be required to undergo a competency assessment.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack width="100%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography fontSize={15}>Enquiry Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  For any inquiries regarding the position please contact: Mr
                  Karabo Dikgore, Human Resources Department at
                  Karabo.Dikgore@fasset.org.za . Should you not hear from FASSET
                  within 6 weeks of the closing date, please consider your
                  application unsuccessful. Communication is limited to
                  shortlisted candidates only.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row", sm: "column" }}
            justifyContent="end"
            spacing={2}
            width="100%"
          >
            <Button variant="outlined">Download Job Description</Button>
            <JobApplyModal />
          </Stack>
        </Stack>

        <Stack
          width="30%"
          // justifyContent="center"
          alignItems="center"
          spacing={2}
          display={{ md: "flex", xs: "none" }}
          sx={{ px: { xs: 2, sm: 2, md: 2, lg: 2, xl: 10 } }}
        >
          <Divider>
            <Typography
              fontWeight="bolder"
              fontSize={25}
              sx={{ color: "#000000" }}
            >
              More Jobs
            </Typography>
          </Divider>
          <VacancyCard
            vacancy={{
              id: uuidv4(),
              jobTitle: "Frontend Developer C1",
              jobDescription:
                "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
              jobRem: "650K"
            }}
          />
          <VacancyCard
            vacancy={{
              id: uuidv4(),
              jobTitle: "Frontend Developer C1",
              jobDescription:
                "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
              jobRem: "650K"
            }}
          />
          <VacancyCard
            vacancy={{
              id: uuidv4(),
              jobTitle: "Frontend Developer C1",
              jobDescription:
                "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
              jobRem: "650K"
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VacancyDetails;
