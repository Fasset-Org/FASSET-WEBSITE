import { Button, Stack } from "@mui/material";
import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";
import Testimony from "../components/Testimony";
import ContactFooter from "../components/ContactFooter";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({ id }) => {
  const [contactRef, setContactRef] = useState();
  useEffect(() => {
    if (id && contactRef) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth"
      });
    }
  }, [contactRef, id]);

  return (
    <Stack spacing={2}>
      <WelcomeComponent />
      <Stack paddingX={10} spacing={2}>
        <Testimony />

        <ContactFooter setContactRef={setContactRef} />
      </Stack>
    </Stack>
  );
};

export default Home;
