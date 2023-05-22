import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OurMandate = () => {
  return (
    <Box sx={{ backgroundColor: "#f2f3f3" }} padding={2}>
      <Stack
        direction="row"
        mb={2}
        width="100%"
        justifyContent="center"
        alignContent="center"
      >
        <Typography
          fontSize={30}
          fontWeight="bolder"
          textTransform="uppercase"
          fontFamily="Helvetica Neue"
          textAlign="center"
          sx={{ color: "primary.main" }}
        >
          Our Mandate
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff200" }} />}
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
    </Box>
  );
};

export default OurMandate;
