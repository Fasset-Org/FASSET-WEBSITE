import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import VacancyCard from "../../components/VacancyCard";

const CurrentVacancies = () => {
  const vacancies = [
    {
      id: uuidv4(),
      jobTitle: "Frontend Developer C1",
      jobDescription:
        "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
      jobRem: "650K"
    },
    {
      id: uuidv4(),
      jobTitle: "Frontend Developer C1",
      jobDescription:
        "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
      jobRem: "650K"
    },
    {
      id: uuidv4(),
      jobTitle: "Frontend Developer C1",
      jobDescription:
        "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
      jobRem: "650K"
    },
    {
      id: uuidv4(),
      jobTitle: "Frontend Developer C1",
      jobDescription:
        "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
      jobRem: "650K"
    },
    {
      id: uuidv4(),
      jobTitle: "Frontend Developer C1",
      jobDescription:
        "An opportunity to work abroad has been made available with one of the leading Travel Business that provide strategic solutions to clients with high quality",
      jobRem: "650K"
    }
  ];

  return (
    <Stack>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: 'uppercase', mb: 2 }}
      >
        Available Vacancies
      </Typography>
      <Grid container spacing={2}>
        {vacancies.map((vacancy, i) => {
          return <VacancyCard vacancy={vacancy} />;
        })}
      </Grid>
    </Stack>
  );
};

export default CurrentVacancies;
