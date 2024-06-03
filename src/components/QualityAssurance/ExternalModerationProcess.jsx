import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const ExternalModerationProcess = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        External Moderation Process
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        FASSET has been delegated the responsibility to carry out the quality
        assurance functions including promoting quality learning by the QCTO in
        accordance with the provisions of the QCTO Delegation Policy read with
        Section 26I (2) of the Skills Development Amendment Act No.67 of 2008.
        In line with the said delegation, FASSET as a Quality Partner (QP) is
        mandated to oversee and develop policy on the conduct of external
        moderation for historical and part qualifications.
      </Typography>
    </Stack>
  );
};

export default ExternalModerationProcess;
