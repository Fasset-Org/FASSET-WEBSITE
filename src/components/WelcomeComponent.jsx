import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Slideshow from "./SlideShow";
import image1 from "../images/gallery-images/AGM.jpg";
import image2 from "../images/gallery-images/Mandela Day.jpg";
import image3 from "../images/gallery-images/Nkandla.jpg";
import image4 from "../images/gallery-images/kwanongoma.jpg";
import image5 from "../images/gallery-images/womens Day.jpg";
import image6 from "../images/gallery-images/IMG_4544.JPG";
import image7 from "../images/gallery-images/IMG_4228.JPG";

const WelcomeComponent = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <Stack spacing={4}>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        // border={1}
        // borderColor="lightgray"
      >
        <Divider>
          <Typography
            fontSize={30}
            fontWeight="bolder"
            textTransform="uppercase"
            sx={{ color: "primary.main" }}
          >
            Welcome to FASSET
          </Typography>
        </Divider>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack
          width="50%"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          // height="400px"
          // border={1}
          // borderColor="lightgray"
        >
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize={20}
            textTransform="uppercase"
            sx={{ color: "primary.main" }}
          >
            About FASSET
          </Typography>

          <Typography fontSize={14} textAlign="justify">
            FASSET is the Finance and Accounting Services Sector Education and
            Training Authority. The finance and accounting services sector is
            particularly important because it is the largest employer of people
            with financial management, accounting, and auditing skills. In 2018
            more than 168 000 people worked in the sector. The demarcation and
            definition of this sector differs in the different data sources
            available, as well as in different environments. In the national
            accounts and in employment surveys conducted by Statistics South
            Africa (such as the Labour Force Survey (LFS)) the sector includes
            real estate activities and an array of other business services such
            as labour brokerages, information technology services, legal
            services, and engineering and architectural services. The Financial
            and Accounting Services Sector refers to the organisations served by
            FASSET. This sector includes: investment entities and trusts and
            company secretary services; stockbroking and financial markets;
            financial development organisations; accounting, bookkeeping,
            auditing and tax services; business and management consulting
            services; the South African Revenue Service; the national and
            provincial treasuries; and other activities auxiliary to financial
            intermediation, such as debt collection.
          </Typography>
          <Box
            sx={{
              textAlign: "center"
            }}
          >
            <Button color="primary" variant="contained">
              Read more
            </Button>
          </Box>
        </Stack>
        <Stack width="50%">
          <Slideshow images={images} height="420px" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WelcomeComponent;
