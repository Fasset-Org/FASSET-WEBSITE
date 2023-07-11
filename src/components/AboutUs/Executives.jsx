import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import ExecutiveCard from "./ExecutiveCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Executives = () => {
  return (
    <Stack spacing={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Executive Members</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} border={1}>
              <ExecutiveCard />
            </Grid>

            <Grid item xs={12} md={4} border={1}>
              <ExecutiveCard />
            </Grid>

            <Grid item xs={12} md={4} border={1}>
              <ExecutiveCard />
            </Grid>

            <Grid item xs={12} md={4} border={1}>
              <ExecutiveCard />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default Executives;
