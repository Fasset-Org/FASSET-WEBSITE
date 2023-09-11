import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TenderCard = ({ state }) => {
  const navigate = useNavigate();

  return (
    <Stack
      component={Paper}
      borderRadius={0}
      padding={2}
      spacing={2}
      minheight={300}
      justifyContent="center"
      alignItems="center"
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
          NETWORK UPGRADE
        </Typography>
        <Chip
          label={
            state === "active"
              ? "active"
              : state === "past"
              ? "previous"
              : "cancelled"
          }
          color={
            state === "active"
              ? "success"
              : state === "past"
              ? "warning"
              : "error"
          }
          sx={{ height: 30, fontWeight: "bolder" }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent={{ md: "space-between", xs: "center", sm: "center" }}
        alignItems="center"
      >
        <Typography fontWeight="bolder">Tender Reference:</Typography>
        <Typography> FAS/TM/ICT/NET-INFRA-UPGRADE/CON3254/23</Typography>
      </Stack>
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: 15,
          textAlign: { md: "center" }
        }}
      >
        INVITATION TO BID
      </Typography>
      <Typography>
        Fasset is a statutory body established through the Skills Development
        Act No 97 of 1998, as amended. The goal of the Act in respect of the
        Fasset Seta is ‘To facilitate the achievement of world-class finance and
        accounting skills’ in the sub-sectors that fall with the sector scope of
        Fasset i.e., Finance and Accounting Services.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/tenders/1")}>
        Read More
      </Button>
    </Stack>
  );
};

export default TenderCard;
