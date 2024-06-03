import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TenderCard = ({ tender, state }) => {
  const navigate = useNavigate();

  return (
    <Stack
      component={Paper}
      borderRadius={0}
      padding={2}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      // height={300}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Typography
          sx={{
            fontWeight: "bolder",
            color: "primary.main",
            fontSize: 15,
            textAlign: "center"
          }}
        >
          {tender?.tenderName}
        </Typography>
        <Chip
          label={
            state === "active"
              ? "active"
              : state === "inactive"
              ? "previous"
              : "cancelled"
          }
          color={
            state === "active"
              ? "success"
              : state === "inactive"
              ? "warning"
              : "error"
          }
          sx={{ height: 30, fontWeight: "bolder" }}
        />
      </Stack>
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={{ md: "space-between", xs: "center", sm: "center" }}
        alignItems="center"
        // p={2}
      >
        <Typography fontWeight="bolder">Tender Reference:</Typography>
        <Typography>{tender?.tenderReference}</Typography>
      </Stack>
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: 15,
          textAlign: { md: "center" }
        }}
      >
        BID MESSAGE
      </Typography>
      <Typography>{tender?.invitationMessage}</Typography>
      <Button
        variant="contained"
        onClick={() => navigate(`/tenders/${tender?.id}`)}
      >
        Read More
      </Button>
    </Stack>
  );
};

export default TenderCard;
