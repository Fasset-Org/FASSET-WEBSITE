import { Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";

const BoardMembers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["boardMembers"],
    queryFn: async () => {
      return UserQuery.getAllBoardMembers();
    }
  });

  if (isLoading || error) {
    return (
      <div>
        <Grid container spacing={2}>
          {[...Array(5)].map((skeleton) => {
            return (
              <Grid item xs={12} md={4}>
                <Skeleton variant="rectangular" width={"100%"} height={300} />;
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  return (
    <Stack>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 1 }}
      >
        Board Members
      </Typography>
      <Divider />
      <Typography>
        The Board is Fasset’s Accounting Authority. As the highest governing
        structure, the Board provides strategic leadership for Fasset; it
        provide assurance to all stakeholders that Fasset is fulfilling its
        obligations in terms of the Fasset constitution and the Skills
        Development Act, and reports to the Minister of Higher Education and
        Training as the Executive Authority of the Seta.
      </Typography>

      <Grid container spacing={2} mt={1}>
        {data?.boardMembers.map((member) => {
          return (
            <Grid item xs={12} md={4} xl={3} key={member.id}>
              <ProfileCard
                title={member.title}
                fullName={member.fullname}
                position={member.position}
                imageFileURL={member.imageFileURL}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default BoardMembers;
