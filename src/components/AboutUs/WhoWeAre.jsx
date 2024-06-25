import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ValueCard from "../ValueCard";

const WhoWeAre = () => {
  const determine = [
    "Determine the vision and mission of the Seta.",
    "Develop and adapt the sector's skill strategy.",
    "Set strategic targets in line with national policies and priorities, national sectoral priorities and sub-sectoral or chamber priorities.",
    "Enter signed agreements on targets for delivery with chambers or sub-sectors.",
    "Monitor and evaluate the implementation of strategies and the achievement of targets.",
    "Assume accountability in terms of the Skills Development Act, the Skills Development Levies Act, Public Finance Management Act and the SAQA Act.",
    "Quality assure education and training providers via an Education and Training Quality Assurance body. Be responsible for Learnerships."
  ];

  const legislation = [
    "Skills Development Act (Act 97 of 1998).",
    "Skills Development Levies Act (Act no 9 of 1999)."
  ];

  return (
    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        About
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        Fasset is the Finance and Accounting Services Sector Education and
        Training Authority. The finance and accounting services sector is
        particularly important because it is the largest employer of people with
        financial management, accounting, and auditing skills. In 2018 more than
        168 000 people worked in the sector. The demarcation and definition of
        this sector differs in the different data sources available, as well as
        in different environments. In the national accounts and in employment
        surveys conducted by Statistics South Africa (such as the Labour Force
        Survey (LFS)) the sector includes real estate activities and an array of
        other business services such as labour brokerages, information
        technology services, legal services, and engineering and architectural
        services. The Financial and Accounting Services Sector refers to the
        organisations served by Fasset. This sector includes: investment
        entities and trusts and company secretary services; stockbroking and
        financial markets; financial development organisations; accounting,
        bookkeeping, auditing and tax services; business and management
        consulting services; the South African Revenue Service; the national and
        provincial treasuries; and other activities auxiliary to financial
        intermediation, such as debt collection.
      </Typography>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Our Vision
      </Typography>
      <Typography textAlign="justify">
        To facilitate the achievement of world-class finance and accounting
        services skills.
      </Typography>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Our Mission
      </Typography>
      <Typography textAlign="justify">
        Increase the flow of new finance and accounting services entrants to
        employment; develop and grow skills required in the sector and
        facilitate the transformation of the finance and accounting services
        sector.
      </Typography>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Our Values
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <ValueCard
          title="Professionalism & Accountability"
          definition={
            "We are a high-performance, professional team; we strive for excellence through hard work and by taking responsibility and being accountable within an accepted and agreed code of conduct."
          }
        />
        <ValueCard
          title="Ethics"
          definition="We work with integrity and honesty and respect internal and external stakeholders at all times."
        />
        <ValueCard
          title="Making A Difference"
          definition={
            "We make a difference to the lives of all our stakeholders by identifying their needs and exceeding expectations."
          }
        />
        <ValueCard
          title="Valuing People"
          definition={
            "We strive to create a motivating and supportive culture by understanding, respecting, developing and valuing each other."
          }
        />
        <ValueCard
          title="Innovation"
          definition="We Continuously innovate and improve to add value to all our stakeholders. The Work of Setas"
        />
      </Stack>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        The Work of Setas
      </Typography>

      <ul>
        {determine.map((item, i) => {
          return (
            <li key={i}>
              <Typography>{item}</Typography>
            </li>
          );
        })}
      </ul>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Relevant Legislation
      </Typography>

      <ul>
        {legislation.map((item, i) => {
          return (
            <li key={i}>
              <Typography>{item}</Typography>
            </li>
          );
        })}
      </ul>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Purpose of the Skills Development Act
      </Typography>
      <Typography>
        The short supply of skilled staff is a serious obstacle to the
        competitiveness of industry in South Africa. The levy grant scheme aims
        to expand the knowledge and competencies of the labour force resulting
        in improvements in employability and productivity. This is achieved
        through new approaches to planning for training, learning programmes,
        incentives and an improved employment service. If you participate fully
        in the scheme you will reap the benefits of a better skilled and more
        productive workforce.
      </Typography>
    </Stack>
  );
};

export default WhoWeAre;
