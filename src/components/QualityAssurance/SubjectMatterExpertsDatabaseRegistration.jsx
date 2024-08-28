import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const SubjectMatterExpertsDatabaseRegistration = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Subject Matter Experts Database Registration
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        Implementation of occupational qualifications is supported by Subject
        Matter Experts (Facilitators, Assessors, Moderators, and workplace
        Mentors) in respect of Skills Development Providers. Subject Matter
        Experts have to ensure that they meet the requirements of each
        occupational qualification they are involved with. For this reason, the
        FASSET is compiling a database of Subject Matter Experts for each of the
        sector’s registered occupational qualifications. Assessment Centres
        require the support of Assessors and Invigilators. These must also meet
        the requirements for registration on the database of Subject Matter
        Experts. Prospective SMEs must consult the curriculum document of each
        occupational qualification they wish to be involved with before applying
        for the registration on the database. Subject Matter Experts are
        encouraged to apply for registration by sending an e-mail to:
        <a href={`mailto:Esther.morake@fasset.org.za`}>
          Esther.morake@fasset.org.za
        </a>{" "}
      </Typography>
    </Stack>
  );
};

export default SubjectMatterExpertsDatabaseRegistration;
