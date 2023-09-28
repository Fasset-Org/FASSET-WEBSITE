import * as React from "react";
import { Alert, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import TenderCard from "./TenderCard";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";

const ActiveTenders = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["currentTenders"],
    queryFn: async () => {
      return await UserQuery.getAllCurrentTenders();
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
        Current Tenders
      </Typography>
      <Grid container spacing={2}>
        {data?.currentTenders?.length > 0 ? (
          data?.currentTenders?.map((tender, i) => {
            return (
              <Grid item key={i} xs={12} md={6}>
                <TenderCard state={tender.tenderStatus} tender={tender} />
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12} md={12}>
            <Alert severity="info">No Tenders Available</Alert>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export default ActiveTenders;
