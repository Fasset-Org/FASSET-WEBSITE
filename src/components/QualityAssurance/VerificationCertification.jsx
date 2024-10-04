import { Stack, Typography } from "@mui/material";
import React from "react";

const VerificationCertification = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Verification & Certification
      </Typography>
      <Typography fontWeight="bolder">
        The purpose of verification is to confirm assessment decisions made by
        FASSET accredited providers. The process includes verification of:
      </Typography>

      <ul>
        <li>
          <Typography>
            Adherence to NQF principles of assessment (fairness, validity,
            reliability, practicability)
          </Typography>
        </li>
        <li>
          <Typography>
            Assessment and moderation quality management system
          </Typography>
        </li>
        <li>
          <Typography>
            Assessment process, methodology and instruments
          </Typography>
        </li>
        <li>
          <Typography>
            Internal moderation process, methodology, instruments and reports
          </Typography>
        </li>
        <li>
          <Typography>Completed assessments (sample)</Typography>
        </li>
        <li>
          <Typography>Assessment decisions</Typography>
        </li>
      </ul>
      <Typography>
        The majority of qualifications within FASSET's scope of quality
        assurance responsibility are subject to summative assessment performed
        by the relevant professional body. Verification of assessment for other
        qualifications, skills programmes and unit standards is conducted on
        site at the accredited provider. Verification is normally performed once
        per annum, depending on performance.
      </Typography>

      <Typography>
        FASSET issues certificates for the achievement of qualifications and
        learnerships, and a statement of results for skills programmes and unit
        standards. Certificates and statements of results can only be issued if
        verification was successful and learner data has been reported in the
        format prescribed by FASSET.
      </Typography>

      <Typography>
        Please contact the FASSET PQA Department of further information
        regarding verification and certification.
      </Typography>
    </Stack>
  );
};

export default VerificationCertification;
