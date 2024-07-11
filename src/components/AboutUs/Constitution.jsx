import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ConstitutionFile from "../../images/SETA_Standard_Constitution_Fasset_Final_Amended_Nov_2017.pdf";

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
      <Divider />
      <Typography mt={1}>
        &nbsp;
        <a
          href={ConstitutionFile}
          style={{ color: "#163683", cursor: "pointer", fontWeight: 600 }}
          target="_blank"
          rel="noreferrer"
        >
          Click here.
        </a>{" "}
        to view FASSET's Constitution.
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
