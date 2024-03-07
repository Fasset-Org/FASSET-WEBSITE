import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
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
      xl={3}
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
            {vacancy.jobTitle} - R{vacancy.remuneration}
          </Typography>
          <Typography
            textAlign="center"
            mt={2}
            sx={{
              maxHeight: 100,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {/* {vacancy.purposeOfJob} */}
          </Typography>
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              color="primary"
              // fullWidth
              onClick={() => {
                navigate(`/vacancies/${vacancy.id}`);
              }}
            >
              Read More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VacancyCard;
