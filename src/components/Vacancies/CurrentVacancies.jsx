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
      <Typography>Fasset’s human capital is the engine of its skills development activities and employees’ knowledge, experience, expertise and commitment enable us to meet our annual objectives

Capacitation of staff is integral to our ability to deliver on our mandate and skills development for staff remains a priority. Our mode of operation includes a multi-skilling approach that provides opportunities for exposure to a variety of work assignments and enables us to manage in times of operational constraints.

Fasset is proud to be an equal opportunity workplace and is an affirmative action employer. We are committed to equal employment opportunity regardless of race, religion, gender, age, citizenship, marital status and disability status.

To explore available career opportunities with us, please visit our website often.</Typography>
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
