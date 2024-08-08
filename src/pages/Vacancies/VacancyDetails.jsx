import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  LinearProgress,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import JobApplyModal from "../../components/Modals/JobApplyModal";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";

const VacancyDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  // const location = useLocation();

  // const { open } = location.state;

  const { data, isLoading } = useQuery({
    queryKey: ["position"],
    queryFn: async () => {
      return UserQuery.getPositionById(id);
    },
    enabled: !!id
  });

  if (isLoading) {
    return <LinearProgress />;
  }

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
          sx={{ px: { xs: 2, sm: 2, md: 10, lg: 2, xl: 10 }, py: 2, m: "auto" }}
          spacing={2}
        >
          <Stack
            width="100%"
            direction={{ xs: "column", md: "row", sm: "column" }}
            justifyContent="space-between"
            // border={1}
            // padding={{ xs: 2 }}
          >
            <Typography
              fontSize={15}
              fontWeight="bolder"
              sx={{ color: "primary.main" }}
            >
              {data?.position?.jobTitle}
            </Typography>
            <Typography
              fontSize={15}
              fontWeight="bolder"
              sx={{ color: "primary.main" }}
            >
              Closing Date :
              {`${new Date(data?.position?.closingDate).toDateString()} @ ${
                new Date(data?.positon?.closingDate).getHours() > 11
                  ? new Date(data?.position?.closingDate).getHours() +
                    ":" +
                    new Date(data?.position?.closingDate).getMinutes() +
                    "PM"
                  : new Date(data?.position?.closingDate).getHours() +
                    ":" +
                    new Date(data?.position?.closingDate).getMinutes() +
                    "AM"
              }`}
            </Typography>
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
              <Typography>{data?.position?.purposeOfJob}</Typography>
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
            <Typography>
              {data?.position?.Department?.departmentName}
            </Typography>
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
            <Typography>{data?.position?.reportingTo}</Typography>
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
                  {data?.position?.PositionQualifications?.map(
                    (qualification, i) => {
                      return (
                        <span key={i}>
                          {`${qualification.Qualification.qualificationLevel} in ${qualification.Qualification.qualificationName}/`}
                        </span>
                      );
                    }
                  )}
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
                <Typography fontSize={15}>
                  Date Of Commencement Of Position
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  As soon as possible
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
                  {`The salary to be offered for this position is R${data?.position?.remuneration} per
                  annum (TCTC).`}
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
                  For any inquiries regarding the position please email:{" "}
                  <a href={`mailto:${data?.position?.emailForQueries}`}>
                    {data?.position?.emailForQueries}
                  </a>{" "}
                  Should you not hear from FASSET within 6 weeks of the closing
                  date, please consider your application unsuccessful.
                  Communication is limited to shortlisted candidates only.
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
            <Button variant="outlined">
              <a
                href={`${process.env.REACT_APP_API_URL}/api/dev/humanResource/downloadJobSpecDocument?filename=${data?.position?.jobSpecDocumentName}`}
                download
                target="_blank"
                rel="noreferrer"
                style={{ all: "unset" }}
              >
                Download Job Description
              </a>
            </Button>
            {/* {open === true && <JobApplyModal position={data?.position} />} */}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VacancyDetails;
