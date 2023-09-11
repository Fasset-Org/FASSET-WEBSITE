import * as React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import TenderCard from "./TenderCard";

const PastTenders = () => {
  return (
    <Stack>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
      >
        Past Tenders
      </Typography>
      <Grid container spacing={2}>
        {[...Array(5)].map((option, i) => {
          return (
            <Grid key={i} xs={12} md={6} item>
              <TenderCard state="past" />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default PastTenders;
