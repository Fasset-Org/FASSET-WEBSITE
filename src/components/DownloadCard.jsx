import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Download } from "@mui/icons-material";

const DownloadCard = ({ fileName }) => {
  return (
    <Stack component={Paper} padding={2}>
      <Stack spacing={2} alignItems="center" m="auto">
        <PictureAsPdfIcon fontSize="large" sx={{ color: "primary.main" }} />
        <Typography fontWeight="bolder" fontSize={15}></Typography>
        <Button variant="outlined" startIcon={<Download />}>
          <a
            href="../files/SETA_Standard_Constitution_Fasset_Final_Amended_Nov_2017.pdf"
            target="_blank"
            download={true}
          >
            Download
          </a>
        </Button>
      </Stack>
    </Stack>
  );
};

export default DownloadCard;
