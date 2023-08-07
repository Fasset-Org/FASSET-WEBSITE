import { Stack, Typography } from "@mui/material";
import React from "react";
import DownloadCard from "../DownloadCard";


const Constitution = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
         Constitution
      </Typography>
      <DownloadCard fileName={"Fasset's Constitution"} />
    </Stack>
  );
};

export default Constitution;
