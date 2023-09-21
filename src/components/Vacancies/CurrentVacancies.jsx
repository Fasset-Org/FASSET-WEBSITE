import { Alert, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import VacancyCard from "../../components/VacancyCard";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";

const CurrentVacancies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["positions"],
    queryFn: async () => {
      return await UserQuery.getAllPositions();
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Stack>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
      >
        Available Vacancies
      </Typography>
      <Grid container spacing={2}>
        {data?.positions?.length > 0 ? (
          data?.positions?.map((position) => {
            return <VacancyCard vacancy={position} key={position.id} />;
          })
        ) : (
          <Stack width="100%" spacing={2} ml={2}>
            <Alert severity="info">No Positions Available</Alert>
          </Stack>
        )}
      </Grid>
    </Stack>
  );
};

export default CurrentVacancies;
