import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MailIcon from "@mui/icons-material/Mail";

const TopContactNavigation = () => {
  return (
    <Stack height={40} direction="row" justifyContent="center" width='100%' display='block'>
      <Stack
        height="100%"
        width="100%"
        sx={{
          backgroundColor: "primary.main",
          color: "#FFFFFF"
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {/* Call Center */}
        <Typography
          component={Stack}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <ContactPhoneIcon sx={{ fontWeight: "bolder" }} />

          <Typography>Call Centre :</Typography>
          <Typography>&nbsp;087 821 2680</Typography>
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#FFFFFF", height: "60%" }}
        />

        {/* SwitchBoard */}

        <Typography
          component={Stack}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <PhoneIcon sx={{ fontWeight: "bolder" }} />

          <Typography>Switchboard :</Typography>
          <Typography>&nbsp;087 821 2680</Typography>
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#FFFFFF", height: "60%" }}
        />

        {/* Call Centre Email */}
        <Typography
          component={Stack}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <MailIcon />

          <Typography>Email :</Typography>
          <Typography>
            &nbsp;fassetcallcentre@fasset.org.za
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopContactNavigation;
