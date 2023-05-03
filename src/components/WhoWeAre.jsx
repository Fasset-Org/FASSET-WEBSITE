import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../images/background.jpg";
import FlipCard from "./FlipCard";

const WhoWeAre = () => {
  const visions = [
    "Develop and adapt the sector's skill strategy",
    "Set strategic targets in line with national policies and priorities, national sectoral priorities and sub-sectoral orchamber priorities",
    "Enter signed agreements on targets for delivery with chambers or sub-sectors.",
    "Monitor and evaluate the implementation of strategies and the achievement of targets.",
    "Assume accountability in terms of the Skills Development Act, the Skills Development Levies Act, Public Finance Management Act and the SAQA Act.",
    "Quality assure education and training providers via an Education and Training Quality Assurance body",
    "Be responsible for Learnerships."
  ];
  const legislations = [
    "Skills Development Act (Act 97 of 1998)",
    "Skills Development Levies Act (Act no 9 of 1999)."
  ];
  const MotionStack = motion(Stack);
  const MotionTypography = motion(Typography);
  return (
    <Stack
      spacing={2}
      sx={{ overflowX: "hidden" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        sx={{ backgroundColor: "#f2f3f3" }}
        justifyContent="center"
        alignItems="center"
      >
        <MotionStack
          jsutifyContent="center"
          alignItems="center"
          direction="row"
          sx={{
            height: 400,
            width: "100%",
            backgroundImage: `url(${bgImage})`
          }}
          // className="bg-gradient"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 3, staggerChildren: 0.5 }
          }}
        >
          <MotionTypography
            width="100%"
            textAlign="center"
            fontFamily="Helvetica Neue"
            fontWeight="bolder"
            fontSize={40}
            sx={{ color: "primary.main", textShadow: "2px 2px #f5df43" }}
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 2 } }}
          >
            ABOUT FASSET
          </MotionTypography>
        </MotionStack>

        <MotionStack
          width="80%"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              width: "100%",
              position: "relative",
              bottom: 100,
              borderRadius: 7
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 30,
                backgroundColor: "primary.main"
              }}
            ></Box>
            <CardContent>
              <Typography
                fontSize={30}
                fontWeight="bolder"
                textTransform="uppercase"
                fontFamily="Helvetica Neue"
                textAlign="center"
                sx={{ color: "primary.main" }}
              >
                About Fasset
              </Typography>

              <Typography fontFamily="Helvetica Neue">
                Fasset is the Finance and Accounting Services Sector Education
                and Training Authority. The finance and accounting services
                sector is particularly important because it is the largest
                employer of people with financial management, accounting, and
                auditing skills. In 2018 more than 168 000 people worked in the
                sector. The demarcation and definition of this sector differs in
                the different data sources available, as well as in different
                environments. In the national accounts and in employment surveys
                conducted by Statistics South Africa (such as the Labour Force
                Survey (LFS)) the sector includes real estate activities and an
                array of other business services such as labour brokerages,
                information technology services, legal services, and engineering
                and architectural services. The Financial and Accounting
                Services Sector refers to the organisations served by Fasset.
                This sector includes: investment entities and trusts and company
                secretary services; stockbroking and financial markets;
                financial development organisations; accounting, bookkeeping,
                auditing and tax services; business and management consulting
                services; the South African Revenue Service; the national and
                provincial treasuries; and other activities auxiliary to
                financial intermediation, such as debt collection.
              </Typography>
            </CardContent>
          </Card>
          <Grid
            container
            width="100%"
            sx={{ position: "relative", bottom: 80 }}
          >
            <Grid lg={6} padding={2}>
              <Card
                sx={{
                  backgroundColor: "#006197",
                  color: "#FFFFFF",
                  borderRadius: 7,
                  height: 150
                }}
                component={Stack}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <CardContent>
                  <Typography
                    fontSize={20}
                    fontWeight="bolder"
                    textTransform="uppercase"
                    fontFamily="Helvetica Neue"
                    textAlign="center"
                    // sx={{ color: "primary.main" }}
                  >
                    Our Vision
                  </Typography>
                  <Typography textAlign="center">
                    To facilitate the achievement of world-class finance and
                    accounting services skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={6} padding={2}>
              <Card
                sx={{
                  backgroundColor: "#00b5ea",
                  color: "#FFFFFF",
                  borderRadius: 7,
                  height: 150
                }}
              >
                <CardContent>
                  <Typography
                    fontSize={20}
                    fontWeight="bolder"
                    textTransform="uppercase"
                    fontFamily="Helvetica Neue"
                    textAlign="center"
                    // sx={{ color: "primary.main" }}
                  >
                    Our Mission
                  </Typography>
                  <Typography textAlign="center">
                    Increase the flow of new finance and accounting services
                    entrants to employment; develop and grow skills required in
                    the sector and facilitate the transformation of the finance
                    and accounting services sector.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={12} padding={2}>
              <Typography
                fontSize={30}
                fontWeight="bolder"
                textTransform="uppercase"
                fontFamily="Helvetica Neue"
                textAlign="center"
                sx={{ color: "primary.main" }}
              >
                Our Values
              </Typography>
            </Grid>
            <Grid lg={3} padding={2}>
              <FlipCard
                value="Professionalism And Accountability"
                definition="We are a high-performance, professional team; we strive for excellence through hard work and by taking responsibility and being accountable within an accepted and agreed code of conduct."
              />
            </Grid>
            <Grid lg={3} padding={2}>
              <FlipCard
                value="Ethics"
                definition="We work with integrity and honesty and respect internal and external stakeholders at all times."
              />
            </Grid>
            <Grid lg={3} padding={2}>
              <FlipCard
                value="Making A Difference"
                definition="We make a difference to the lives of all our stakeholders by identifying their needs and exceeding expectations."
              />
            </Grid>
            <Grid lg={3} padding={2}>
              <FlipCard
                value="Valuing People"
                definition="We strive to create a motivating and supportive culture by understanding, respecting, developing and valuing each other."
              />
            </Grid>
          </Grid>
        </MotionStack>
      </Stack>
      <Grid container>
        <Grid lg={4} xl={4} padding={2}>
          <Card sx={{ height: 335 }}>
            <Box
              sx={{
                width: "100%",
                height: 30,
                backgroundColor: "primary.main",
                textAlign: "center",
                color: "#FFFFFF",
                fontWeight: "bolder"
              }}
            >
              Determine the vision and mission of the Seta
            </Box>
            <CardContent sx={{ height: "100%", padding: 0 }}>
              <List sx={{ padding: 0, pt: 2 }}>
                {visions.map((vision, idx) => {
                  return (
                    <ListItem
                      sx={{
                        padding: 0,
                        display: "list-item"
                        // border: 1
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          textAlign: "center",
                          backgroundColor: idx % 2 === 1 ? "#E5E7E9" : ""
                        }}
                      >{`• ${vision}`}</Typography>
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} xl={4} padding={2}>
          <Card>
            <Box
              sx={{
                width: "100%",
                height: 30,
                backgroundColor: "primary.main",
                textAlign: "center",
                color: "#FFFFFF",
                fontWeight: "bolder"
              }}
            >
              Relevant Legislation
            </Box>
            <CardContent sx={{ padding: 0 }}>
              <List sx={{ padding: 0, pt: 2 }}>
                {legislations.map((vision, idx) => {
                  return (
                    <ListItem
                      sx={{
                        padding: 0,
                        display: "list-item"
                        // border: 1
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          textAlign: "center",
                          backgroundColor: idx % 2 === 1 ? "#E5E7E9" : ""
                        }}
                      >{`• ${vision}`}</Typography>
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} xl={4} padding={2}>
          <Card sx={{ height: 335 }}>
            <Box
              sx={{
                width: "100%",
                height: 30,
                backgroundColor: "primary.main",
                textAlign: "center",
                color: "#FFFFFF",
                fontWeight: "bolder"
              }}
            >
              Purpose of the Skills Development Act
            </Box>

            <CardContent sx={{ padding: 0 }}>
              <Typography textAlign="center" padding={2}>
                The short supply of skilled staff is a serious obstacle to the
                competitiveness of industry in South Africa. The levy grant
                scheme aims to expand the knowledge and competencies of the
                labour force resulting in improvements in employability and
                productivity. This is achieved through new approaches to
                planning for training, learning programmes, incentives and an
                improved employment service. If you participate fully in the
                scheme you will reap the benefits of a better skilled and more
                productive workforce.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WhoWeAre;
