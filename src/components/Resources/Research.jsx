import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import SectorSkillPlan from "./ResearchComponents/SectorSkillPlan";
import ResearchReports from "./ResearchComponents/ResearchReports";
import ResearchRequest from "./ResearchComponents/ResearchRequest";
import SectorTrends from "./ResearchComponents/SectorTrends";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Research = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Research
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Sector Skills Plan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <SectorSkillPlan />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Research Reports</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ResearchReports />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Research Request</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ResearchRequest />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Sector Trends</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <SectorTrends />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default Research;
