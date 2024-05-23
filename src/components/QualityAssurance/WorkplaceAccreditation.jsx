import { Stack, Typography } from "@mui/material";
import React from "react";

const WorkplaceAccreditation = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Workplace Accreditation
      </Typography>
      <Typography textAlign="justify">
        Kindly be informed that as from 1 July 2022, Fasset will no longer
        accredit or re-accredit skills development providers on historical
        qualification expiring in June 2023. All Fasset qualifications are in
        the process of realignment with occupational qualifications. We
        apologise for thge inconvenience this may have caused to our current and
        new skilld development providers. Please be on the lookout for further
        announcement relating to this.
      </Typography>
      <Typography>Yours in Skills Development</Typography>
    </Stack>
  );
};

export default WorkplaceAccreditation;
