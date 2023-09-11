import { Stack, Typography } from "@mui/material";
import React from "react";

const WorkbasedProgramme = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        TVET Workbased Programme
      </Typography>
      <Typography>
        The Department of Higher Education and Training has identified the need
        to capacitate public TVET Colleges, to become the preferred providers of
        occupational skills, as relevant, in South Africa. This need was
        identified to, amongst others, address the high unemployment rate
        amongst the age group 16 – 34.
      </Typography>

      <Typography>
        It is assumed that work experience will enhance the employability of
        unemployed persons, in particular if such work experience is: Related to
        and supports their field of study; Obtained in an environment with
        processes and structures in place to coach and mentor such persons;
        Obtained in the environment of a reputable employer; Of an adequate
        length to allow sufficient time to gain exposure and experience in a
        number of generic and specific skills.
      </Typography>

      <Typography>
        In this context, Fasset is implementing a project aimed at facilitating
        and funding workplace-based experience for graduates. This project is
        aimed at learners who have successfully completed the National N6
        certificate in business studies and who are eligible to the National N
        Diploma at NQF level 6, upon completion of 18 months’ relevant work
        experience.
      </Typography>

      <Typography>
        Fasset will be recruiting learners who have specialised in one of the
        following areas: Financial Management, Business Management, Marketing
        Management, HR Management, and Management Assistant.
      </Typography>
    </Stack>
  );
};

export default WorkbasedProgramme;
