import { Download } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React from "react";

const DownloadTag = ({documentName, sx}) => {
  return (
    <Alert
      icon={<Download />}
      sx={{ width: "fit-content", fontWeight: "bolder", ...sx }}
      color="info"
    >
      {documentName}
    </Alert>
  );
};

export default DownloadTag;
