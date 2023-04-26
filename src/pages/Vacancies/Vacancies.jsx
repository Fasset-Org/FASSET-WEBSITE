import { Grid } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import VacancyCard from "../../components/VacancyCard";

const Vacancies = () => {
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
    <Grid
      container
      spacing={10}
      sx={{ px: { xs: 2, sm: 2, md: 10, lg: 10, xl: 10 } }}
      paddingY={4}
    >
      {vacancies.map((vacancy, i) => {
        return <VacancyCard vacancy={vacancy} />;
      })}
    </Grid>
  );
};

export default Vacancies;
