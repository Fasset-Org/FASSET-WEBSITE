import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

const DashboardCard = ({ title, Icon }) => {
  return (
    <Card
      component={Stack}
      justifyContent="center"
      alignItems="center"
      height={200}
      sx={{
        border: 2,
        borderColor: "primary.main",
        // backgroundColor: "#374370",
        borderRadius: 4
      }}
    >
      <CardContent component={Stack}>
        <IconButton>
          <Icon fontSize="large" sx={{ color: "#000000" }} />
        </IconButton>
        <Typography sx={{ color: "#000000" }} fontSize={17} fontWeight="bolder">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
