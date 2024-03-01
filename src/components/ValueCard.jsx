import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const ValueCard = ({ title, definition }) => {
  return (
    <Card
      className="v-card"
      sx={{
        // minHeight: 210,
        width: { xs: "100%", md: "20%" },
        borderRadius: 0,
        p: 0
      }}
    >
      <Stack height="80%" justifyContent="center" alignItems="center">
        <Typography
          textAlign="center"
          sx={{ width: "fit-content", padding: 1 }}
        >
          {definition}
        </Typography>
      </Stack>
      <Stack
        height="20%"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "primary.main" }}
      >
        <Typography
          textTransform="uppercase"
          color="#FFFFFF"
          fontWeight="bolder"
          padding={2}
        >
          {title}
        </Typography>
      </Stack>
    </Card>
  );
};

export default ValueCard;
