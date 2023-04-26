import { Stack } from "@mui/material";
import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";
import Testimony from "../components/Testimony";
import ContactFooter from "../components/ContactFooter";

const Home = () => {
  return (
    <Stack spacing={2}>
      <WelcomeComponent />
      <Stack paddingX={10} spacing={2}>
        <Testimony />
        <ContactFooter />
      </Stack>
    </Stack>
  );
};

export default Home;
