import { Grid, Stack } from "@mui/material";
import React from "react";
import DashboardCard from "../../../components/FMS/DashboardCard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import WorkIcon from "@mui/icons-material/Work";

const Dashboard = () => {
  return (
    <Stack>
      <Grid container spacing={6}>
        <Grid item md={3}>
          <DashboardCard title="User Management" Icon={ManageAccountsIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Asset Management" Icon={DevicesOtherIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="User Management" Icon={ManageAccountsIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Asset Management" Icon={DevicesOtherIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="User Management" Icon={ManageAccountsIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Asset Management" Icon={DevicesOtherIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
        <Grid item md={3}>
          <DashboardCard title="Human Resource" Icon={WorkIcon} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
