import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InternshiCardMobile = ({
  interventionType,
  purpose,
  providerExpectation,
  learnerExpectation
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ backgroundColor: "primary.main" }}
      >
        {interventionType}
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <Typography fontWeight="bolder" fontSize={15}>
            Intervention Type
          </Typography>
          {interventionType}
          <Typography fontWeight="bolder" fontSize={15}>
            Purpose
          </Typography>
          {purpose}
          <Typography fontWeight="bolder" fontSize={15}>
            Learner Expectation
          </Typography>
          {learnerExpectation}
          <Typography fontWeight="bolder" fontSize={15}>
            Provider Expectation
          </Typography>
          {providerExpectation}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default InternshiCardMobile;
