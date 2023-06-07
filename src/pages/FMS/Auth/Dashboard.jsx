import { Grid, Stack } from "@mui/material";
import React from "react";
import DashboardCard from "../../../components/FMS/DashboardCard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import WorkIcon from "@mui/icons-material/Work";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Grid container spacing={6}>
        <Grid item md={3} xs={12}>
          <DashboardCard title="Website Management" Icon={LanguageIcon} />
        </Grid>
        <Grid item md={3} xs={12}>
          <DashboardCard
            title="User Management"
            Icon={ManageAccountsIcon}
            onClick={() => navigate("/fms/users")}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <DashboardCard
            title="Asset Management"
            Icon={DevicesOtherIcon}
            onClick={() => navigate("/fms/assets")}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
