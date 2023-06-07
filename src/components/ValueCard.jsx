import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const ValueCard = ({ title, definition }) => {
  return (
    <Stack
      height={250}
      width="20%"
      component={Card}
      sx={{ position: "relative", "&:hover": { scale: 1.2 } }}
    >
      <Stack
        height={210}
        alignItems="center"
        justifyContent="center"
        direction="row"
        position="absolute"
        top={0}
        padding={2}
      >
        <Typography textAlign="center">{definition}</Typography>
      </Stack>
      <Box
        border={1}
        height={40}
        width="100%"
        textAlign="center"
        component={Stack}
        alignItems="center"
        justifyContent="center"
        direction="row"
        sx={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "primary.main",
          color: "#FFFFFF"
        }}
      >
        <Typography textAlign="center" fontWeight="bolder">
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ValueCard;
