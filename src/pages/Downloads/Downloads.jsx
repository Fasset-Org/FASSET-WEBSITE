import * as React from "react";
import { Box, Typography } from "@mui/material";
import DownloadTag from "../../components/Downloads/DownloadTag";

const Downloads = () => {
  return (
    <Box padding={4}>
      <Typography mb={2}>2023-2024 DG WINDOW APPLICATION FORMS</Typography>
      <DownloadTag documentName='2023-2024 Application Forms- EMPLOYED BURSARY.docx' sx={{mb: 2}} />
      <DownloadTag documentName='2023-2024 Application Forms_ACADEMIC SUPPORT_edited 29 04 2023.docx' />
    </Box>
  );
};

export default Downloads;
