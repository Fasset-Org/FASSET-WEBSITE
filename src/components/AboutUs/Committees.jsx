import { Accordion, AccordionDetails, AccordionSummary, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectorSkillPlan from "../Resources/ResearchComponents/SectorSkillPlan";

const Committees = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["committeeMembers"],
    queryFn: async () => {
      return await UserQuery.getAllCommitteeMembers();
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

    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Research
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Sector Skills Plan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <SectorSkillPlan />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
    // <Stack>
    //   <Typography
    //     fontWeight="bolder"
    //     fontSize={20}
    //     sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
    //   >
    //     Executive Members
    //   </Typography>

    //   <Grid container spacing={2}>
    //     {data?.committeeMembers?.map((member) => {
    //       return (
    //         <Grid item xs={12} md={4} key={member.id}>
    //           <ProfileCard
    //             title={member.title}
    //             fullName={member.fullname}
    //             position={member.position}
    //             imageFileURL={member.imageFileURL}
    //           />
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    // </Stack>
  );
};

export default Committees;
