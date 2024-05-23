import { Stack, Typography } from "@mui/material";
import React from "react";

const EISA = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        External Integrated Summative Assessment (EISA)
      </Typography>

      <Typography textAlign="justify">
        Assessment for leaners enrolled in occupational qualifications is
        facilitated through an External Integrated Summative Assessment (EISA).
        SDPs will conduct an Internal Assessment for learners, whereafter they
        will issue the learners with Statement of Results (SoR). The SoRs should
        reflect achievement by learners against the three components of an
        occupational qualification, i.e., Knowledge, Practical Experience, and
        Workplace Experience. EISA’s are conducted through accredited Assessment
        Centres. Registration for EISA can be requested by the SDP or by the
        individual leaner. FASSET will publish a calendar or dates for the
        scheduling of EISAs for all the occupational qualifications with
        learners in the system.
      </Typography>
    </Stack>
  );
};

export default EISA;
