import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DownloadCard from "../../../components/DownloadCard";

const CareerGuideMobile = () => {
  return (
    <Stack padding={2}>
      <Stack>
        <Typography
          fontSize={20}
          fontWeight="bolder"
          // textTransform="uppercase"
          fontFamily="Helvetica Neue"
          // textAlign="center"
          sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
        >
          Career Guide
        </Typography>
        <Grid container>
          <Grid xs={12} md={4}>
            <DownloadCard fileName="Career Guide" />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default CareerGuideMobile;
