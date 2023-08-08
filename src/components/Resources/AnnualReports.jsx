import { Stack, Typography } from "@mui/material";
import React from "react";

const AnnualReports = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        Annual Reports
      </Typography>
    </Stack>

  );
};

export default AnnualReports;
