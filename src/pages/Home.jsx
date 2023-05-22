import React from "react";
// import WelcomeComponent from "../components/WelcomeComponent";

// import ContactFooter from "../components/ContactFooter";
// import { useState } from "react";
// import { useEffect } from "react";
import { Stack } from "@mui/material";
import DesktopBanner from "../components/Desktop/DesktopBanner";
import LinksFooter from "../components/LinksFooter";

const Home = ({ id }) => {
  // const [contactRef, setContactRef] = useState();
  // useEffect(() => {
  //   if (id && contactRef) {
  //     window.scrollTo({
  //       top: contactRef.current.offsetTop,
  //       behavior: "smooth"
  //     });
  //   }
  // }, [contactRef, id]);

  return (
    <Stack spacing={2}>
      <DesktopBanner />

      <LinksFooter />
    </Stack>
  );
};

export default Home;
