import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import ExecutiveCard from "./ExecutiveCard";

const Executives = () => {
  return (
    <Stack spacing={2}>
      <Divider />
      <Box
        textAlign="center"
        fontSize={20}
        textTransform="uppercase"
        color="white"
        sx={{ backgroundColor: "primary.main" }}
        padding={1}
        fontWeight="bolder"
      >
        Executive Members
      </Box>
      <Grid container>
        <ExecutiveCard />
        <ExecutiveCard />
        <ExecutiveCard />
      </Grid>
    </Stack>
  );
};

export default Executives;
