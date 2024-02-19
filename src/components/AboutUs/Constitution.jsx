import { Stack, Typography } from "@mui/material";
import React from "react";

const Constitution = () => {
  return (
    <Stack>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
      >
        Constitution
      </Typography>

      <Typography>
        &nbsp;
        <a
          href="#123"
          style={{ color: "#163683", cursor: "pointer", fontWeight: 600 }}
        >
          Click here.
        </a>{" "}
        to view Fasset's Constitution.
      </Typography>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <DownloadCard fileName={"Fasset's Constitution"} />
        </Grid>
      </Grid> */}
    </Stack>
  );
};

export default Constitution;
