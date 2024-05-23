import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const AssessmentCentresAccreditation = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Assessment Centres Accreditation
      </Typography>

      <Typography textAlign="justify">
        Assessment and certification of learners enrolled in occupational
        qualifications occurs through a new process known as External Integrated
        Summative Assessment (EISA). EISA is conducted through accredited
        Assessment Centres. Assessment Centre accreditation is occupational
        qualification specific. This means that SDPs and other entities wishing
        to be accredited as assessment centres should apply for each
        occupational qualification they wish to assess.
      </Typography>

      <Typography textAlign="justify">
        The process for Assessment Centre accreditation is similar to that of
        SDP accreditation. Entities wishing to apply for accreditation as
        Assessment Centres should visit the website of the{" "}
        <Link
          sx={{ textDecoration: "none", cursor: "pointer" }}
          href="https://www.qcto.org.za/"
          target="_blank"
        >
          Quality Council for Trades and Occupations (QCTO)
        </Link>{" "}
        and apply for accreditation.
      </Typography>
    </Stack>
  );
};

export default AssessmentCentresAccreditation;
