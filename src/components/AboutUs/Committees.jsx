import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

import Cosec from "../../images/executives/CoSec.jfif";
import DCS from "../../images/executives/Nokulunga 2.jfif";
import CEO from "../../images/executives/Ayanda Mafuleka (5).jpg";
import ProfileCard from "./ProfileCard";

const Committees = () => {
  const executiveMembers = [
    {
      name: "Ayanda Malefuka",
      position: "Cheif Executive Officer (CEO)",
      imgSrc: CEO
    },
    {
      name: "Zakariya Alli",
      position: "Cheif Financial Officer (CFO)",
      imgSrc: ""
    },
    {
      name: "Nokulunga Mthombeni",
      position: "DCS",
      imgSrc: DCS
    },
    {
      name: "Not Sure",
      position: "COSEC",
      imgSrc: Cosec
    },
    {
      name: "Vacant",
      position: "Chief Information Officer",
      imgSrc: ""
    }
  ];

  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        Executive Members
      </Typography>

      <Grid container spacing={2}>
        {executiveMembers.map((member) => {
          return (
            <Grid item xs={12} md={4}>
              <ProfileCard
                name={member.name}
                position={member.position}
                imgSrc={member.imgSrc}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Committees;
