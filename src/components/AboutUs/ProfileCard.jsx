import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const ProfileCard = ({ title, fullName, position, imageFileURL }) => {
  return (
    <Stack component={Paper} height={300} boxShadow={5} borderRadius={3}>
      <img
        src={`http://localhost:8001/uploads/board-members/${imageFileURL}`}
        alt=""
        width="100%"
        height="70%"
        style={{
          objectFit: "scale-down",
          objectPosition: "center top",
          borderRadius: 10
        }}
      />

      <Stack
        padding={1}
        component={Paper}
        width="80%"
        m="auto"
        sx={{ position: "relative", bottom: 30, borderRadius: 0 }}
        elevation={5}
      >
        <Typography
          sx={{
            fontWeight: "bolder",
            fontSize: 15,
            textTransform: "uppercase",
            color: "primary.main"
          }}
        >
          {position.toUpperCase()}
        </Typography>
        <Typography sx={{ fontWeight: "bolder", fontSize: 15 }}>
          {title} {fullName}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileCard;
