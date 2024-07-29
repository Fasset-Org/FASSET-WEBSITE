import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const WorkplaceApproval = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Workplace Approval
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        One of the most important aspects of occupational qualifications is
        access to a relevant and approved workplace. For this reason, all SDPs
        wishing to apply for accreditation need to have strong partnerships with
        employers who will provide their learners with access to workplace
        experience. For this reason, SDPs are encouraged to work with and, where
        appropriate, assist employers with their application for registration an
        as approved workplaces for occupational qualifications. This will
        provide a win-win situation, as SDPs in our sector are more experienced
        in and understand the FASSET process. Entities wishing to be included in
        the database of approved workplaces should send an e-mail to:
        <a href={`mailto:Esther.morake@fasset.org.za.`}>
          Esther.morake@fasset.org.za
        </a>{" "}
      </Typography>
    </Stack>
  );
};

export default WorkplaceApproval;
