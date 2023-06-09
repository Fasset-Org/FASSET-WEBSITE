import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const ValueCard = ({ title, definition }) => {
  return (
    <Card className="v-card" sx={{ height: 250, width: "20%" }}>
      <Stack height='100%' sx={{ position: "relative" }}>
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
          padding={2}
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
    </Card>
  );
};

export default ValueCard;
