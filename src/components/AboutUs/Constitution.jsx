import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DownloadCard from "../DownloadCard";

const Constitution = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        Constitution
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <DownloadCard fileName={"Fasset's Constitution"} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Constitution;
