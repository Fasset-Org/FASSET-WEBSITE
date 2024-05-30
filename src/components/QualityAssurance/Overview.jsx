import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Overview = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Overview
      </Typography>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        Introduction
      </Typography>

      <Typography sx={{ textAlign: "justify" }}>
        The Quality Council for Trades Occupations has in terms of Section 26I
        (2) of the Skills Development Act (SDA) of 2008 and the Council’s
        delegation policy delegated the quality assurance partner (QAP)
        functions to the Finance and Accounting Services Sector Education and
        Training Authority. (FASSET). The delegation was conferred to the FASSET
        as of 30 November 2022 and it is limited to the finance and accounting
        service sector. The delegation expires once the qualifications delegated
        to the FASSET are reviewed and replaced by qualifications developed and
        registered on the Occupational Qualifications Framework (OQF) or until
        the qualifications reach their registration end date and teach out
        periods or when the qualifications are withdrawn by the QCTO.
      </Typography>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        Objective
      </Typography>
      <Typography sx={{ textAlign: "justify" }}>
        FASSET ETQA is responsible to quality assure training providers systems,
        processes, procedures, training delivery, support and oversee
        assessments and qualifications development, in order to achieve high
        quality education and training in the public service sector as per the
        relevant legislation.
      </Typography>
    </Stack>
  );
};

export default Overview;
