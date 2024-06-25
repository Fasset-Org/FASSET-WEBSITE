import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CachedIcon from "@mui/icons-material/Cached";

const AboutInfo = () => {
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

  return (
    <Stack spacing={2}>
      {/* Vision & Mission */}
      <Divider />
      <Stack height={200} spacing={2} direction="row" width="100%">
        <Stack width="50%" height="100%" alignItems="center" paddingX={10}>
          <IconButton>
            <RemoveRedEyeIcon
              color="secondary"
              fontSize="large"
              sx={{ fontWeight: "bolder" }}
            />
          </IconButton>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize={20}
            textTransform="uppercase"
            sx={{ color: "primary.main" }}
          >
            Our Vision
          </Typography>
          <Typography textAlign="center">
            To facilitate the achievement of world-class finance and accounting
            services skills.
          </Typography>
        </Stack>
        <Stack width="50%" height="100%" paddingX={10} alignItems="center">
          <IconButton size="large">
            <LocalHospitalIcon
              color="secondary"
              fontSize="large"
              sx={{ fontWeight: "bolder" }}
            />
          </IconButton>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize={20}
            textTransform="uppercase"
            sx={{ color: "primary.main" }}
          >
            Our Mission
          </Typography>
          <Typography textAlign="center">
            Increase the flow of new finance and accounting services entrants to
            employment; develop and grow skills required in the sector and
            facilitate the transformation of the finance and accounting services
            sector.
          </Typography>
        </Stack>
      </Stack>

      <Divider />
      <Stack justifyContent="center" alignItems="center">
        <Stack justifyContent="center" alignItems="center">
          <IconButton size="large">
            <CachedIcon fontSize="large" sx={{ color: "secondary.main" }} />
          </IconButton>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize={30}
            textTransform="uppercase"
            sx={{ color: "primary.main" }}
          >
            Our Values
          </Typography>
        </Stack>
        <Grid container mt={2} spacing={2}>
          <Grid item md={2}></Grid>
          <Grid
            item
            xs={12}
            md={4}
            component={Stack}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              width="100%"
              height={200}
              component={Paper}
              p={2}
            >
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize={15}
                textTransform="uppercase"
                sx={{ color: "primary.main" }}
              >
                Professionalism And Accountability
              </Typography>
              <Typography textAlign="center" padding={2} fontSize={14}>
                We are a high-performance, professional team; we strive for
                excellence through hard work and by taking responsibility and
                being accountable within an accepted and agreed code of conduct.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            component={Stack}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              width="100%"
              height={200}
              component={Paper}
              p={2}
            >
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize={15}
                textTransform="uppercase"
                sx={{ color: "primary.main" }}
              >
                Valuing People
              </Typography>
              <Typography textAlign="center" padding={2}>
                We strive to create a motivating and supportive culture by
                understanding, respecting, developing and valuing each other.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid
            item
            xs={12}
            md={4}
            component={Stack}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              width="100%"
              height={200}
              component={Paper}
              p={2}
            >
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize={15}
                textTransform="uppercase"
                sx={{ color: "primary.main" }}
              >
                Ethics
              </Typography>
              <Typography textAlign="center">
                We work with integrity and honesty and respect internal and
                external stakeholders at all times.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            component={Stack}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              width="100%"
              component={Paper}
              height={200}
              p={2}
            >
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize={15}
                textTransform="uppercase"
                sx={{ color: "primary.main" }}
              >
                Making A Difference
              </Typography>
              <Typography textAlign="center">
                We make a difference to the lives of all our stakeholders by
                identifying their needs and exceeding expectations.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            component={Stack}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              component={Paper}
              height={200}
              p={2}
            >
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize={15}
                textTransform="uppercase"
                sx={{ color: "primary.main" }}
              >
                Innovation
              </Typography>
              <Typography textAlign="center">
                We Continuously innovate and improve to add value to all our
                stakeholders. The Work of Setas
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider />
      <Grid container>
        <Grid lg={4} xl={4} padding={2}>
          <Card sx={{ height: 350 }}>
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
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
          >
            <Card sx={{ width: "100%", height: 350 }}>
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
          </Stack>
        </Grid>
        <Grid lg={4} xl={4} padding={2}>
          <Card sx={{ height: 350 }}>
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

            <CardContent
              component={Stack}
              sx={{
                padding: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Typography textAlign="center" fontSize={15}>
                The short supply of skilled staff is a serious obstacle to the
                competitiveness of industry in South Africa. The levy grant
                scheme aims to expand the knowledge and competencies ofthe
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
      <Divider />
    </Stack>
  );
};

export default AboutInfo;
