import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Download } from "@mui/icons-material";

const Constitution = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Fasset Constitution
      </Typography>
      <Stack sx={{ width: 200 }} component={Paper} padding={2}>
        <Stack spacing={2} alignItems="center" m="auto">
          <PictureAsPdfIcon fontSize="large" sx={{ color: "primary.main" }} />
          <Typography fontWeight="bolder" fontSize={15}>
            Fasset's Constitution
          </Typography>
          <Button variant="outlined" startIcon={<Download />}>
            Download
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Constitution;
