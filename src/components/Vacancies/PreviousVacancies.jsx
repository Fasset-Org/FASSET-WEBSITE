import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import VacancyCard from "../../components/VacancyCard";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";

const PreviousVacancies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["previousPositions"],
    queryFn: async () => {
      return await UserQuery.getAllPreviousPositions();
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Stack>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
      >
        Previous Vacancies
      </Typography>
      <Grid container spacing={2}>
        {data?.positions?.map((vacancy, i) => {
          return <VacancyCard vacancy={vacancy} />;
        })}
      </Grid>
    </Stack>
  );
};

export default PreviousVacancies;
