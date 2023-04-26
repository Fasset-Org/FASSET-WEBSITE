import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const VacancyCard = ({ vacancy }) => {
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={4}
      xl={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ borderRadius: 0, width: "100%" }}>
        <CardContent>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize={25}
            sx={{ color: "primary.main" }}
          >
            {vacancy.jobTitle} - R{vacancy.jobRem}
          </Typography>
          <Typography textAlign="center" mt={2}>
            {vacancy.jobDescription}
          </Typography>
          <Button
            // variant="outlined"
            sx={{ mt: 2, fontWeight: "bolder" }}
            color="secondary"
            fullWidth
            onClick={() => {
              navigate(`/vacancies/${vacancy.id}`);
            }}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VacancyCard;
