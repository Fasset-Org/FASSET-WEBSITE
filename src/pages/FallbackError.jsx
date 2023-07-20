import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FallbackError = () => {
  return (
    <Stack height="100vh">
      <Stack
        width="60%"
        m="auto"
        height={250}
        component={Paper}
        justifyContent="center"
        alignItems="center"
        padding={2}
        sx={{ backgroundColor: "background.paper" }}
      >
        <Typography sx={{ fontWeight: "bolder", fontSize: 20 }}>
          The resource you are looking for has been removed, had its name
          changed, or is temporarily unavailable.
          <Button variant="outlined">
            <Link to="/home">Go Home</Link>
          </Button>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FallbackError;
