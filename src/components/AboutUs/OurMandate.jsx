import {
  Box,

  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const OurMandate = () => {
  const objectives = [
    {
      parent: "To develop the competence of employees and potential employees:",
      children: [
        "Improving the quality of life of employees, their prospects of work and labour mobility.",
        "Improving productivity in the workplace and the competitiveness of employers.",
        "Promoting self-employment in situations where the sector is experiencing job shrinkage.",
      ],
    },
    {
      parent:
        "To increase the levels of investment in education and training and to optimise the return on this investment.",
      children: [],
    },
    {
      parent:
        "To position this sector as the 'sector of career choice' for prospective learners and entrants into the labour market.",
      children: [],
    },
    {
      parent:
        "To encourage employers and employees to adopt a culture of life long learning through:",
      children: [
        "The workplace as an active learning environment.",
        "Providing employees with the opportunities to acquire new skills.",
        "Providing opportunities for new entrants and potential entrants into the sector labour market and enhancing access to opportunities to gain work experience.",
      ],
    },
    {
      parent: "To support the objectives of the Employment Equity Act of 1998.",
      children: [],
    },
    {
      parent:
        "To enhance access to learning opportunities and to facilitate the recognition of prior learning.",
      children: [],
    },
    {
      parent: "To ensure the quality of education and training in the sector.",
      children: [],
    },
    {
      parent:
        "To expand the provision of education and training in this sector through sound partnerships with public and private sector service providers.",
      children: [],
    },
    {
      parent:
        "To encourage greater cooperation between the public and private sectors.",
      children: [],
    },
    {
      parent:
        "To co-operate with the South African Qualifications Authority and other Setas, in support of the objectives of the Act.",
      children: [],
    },
  ];

  const services = [
    {
      parent:
        "Facilitate strategic human resource development planning within this sector;",
      children: [],
    },
    {
      parent:
        "Propose education and training standards and qualifications to bodies registered with SAQA and be responsible for developing education and training standards;",
      children: [],
    },
    {
      parent:
        "Monitor and audit achievements in terms of those standards and qualifications",
      children: [],
    },
    {
      parent:
        "Accredit providers, assessors and moderators of education and training in this sector",
      children: [],
    },
    {
      parent:
        "Assure the quality of education and training in this sector without itself being a provider of education and training",
      children: [],
    },
    {
      parent:
        "Analyse and prioritise education and training needs within this sector and develop skills development strategies to address identified priorities",
      children: [],
    },
    {
      parent: "Enhance access to learning opportunities including:",
      children: [
        "Career paths and progression pathways",
        "NQF qualifications",
        "Learnerships.",
      ],
    },
    {
      parent: "Manage and administer all learnerships within Fasset",
      children: [],
    },
    {
      parent: "Manage the administration of levy disbursements in this sector",
      children: [],
    },
    {
      parent:
        "Promote a culture of learning within this sector and encourage active employer and employee organisation participation in the strategies and activities of Fasset",
      children: [],
    },
    {
      parent:
        "Promote and market Fasset through regular communication with all stakeholders and potential stakeholders",
      children: [],
    },
    {
      parent:
        "Perform any other function required by SAQA in terms of Fasset's registration",
      children: [],
    },
    {
      parent:
        "Perform any other function that must be performed by Fasset in terms of the Skills Development Act or any other applicable law.",
      children: [],
    },
  ];

  const skills = [
    {
      parent:
        "Develop a sector skills plan within the framework of the national skills development strategy for Fasset",
      children: [],
    },
    {
      parent: "Implement a sector skills plan by:",
      children: [
        "Approving and monitoring workplace skills plans.",
        "Establishing learnerships.",
        "Allocating grants to employers, education and training service providers and employees.",
        "Monitoring education and training in this sector.",
      ],
    },
    {
      parent: "Promote learnerships by:",
      children: [
        "Identifying appropriate workplaces where individuals can gain practical work experience",
        "Improving and supporting learning through the development of learning methodologies and materials",
        "Assisting in the conclusion, registration and monitoring of learnership agreements.",
      ],
    },
    {
      parent:
        "Liaise with the National Skills Authority as well as other Setas on issues including:",
      children: [
        "National skills strategy",
        "Skills development policy",
        "Its own sector skills plan.",
      ],
    },
    {
      parent:
        "Report to the Director-General of Labour on the implementation of its sector skills plan, its income and expenditure;",
      children: [],
    },
    {
      parent:
        "Liaise with the employment services of the Department of Labour and education councils and other regulatory bodies in terms of education laws of South Africa in order to improve the quality of information:",
      children: [
        "About employment opportunities",
        "Between education providers and the labour market.",
      ],
    },
    {
      parent:
        "Facilitate the involvement of the relevant government departments in the activities of Fasset in order to:",
      children: [
        "Address the competency requirements for social delivery",
        "Address the learning needs of the most vulnerable segments of the sector",
        "Promote training in SMME's to enable them to qualify for public contracts",
        "Perform any other duties imposed by the Act or any other function not specifically mentioned, in order to fulfill the objectives of Fasset.",
      ],
    },
  ];

  return (
    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Our Mandate
      </Typography>
      <Typography sx={{ fontWeight: "bolder" }}>
        The Objectives of Fasset are the following:
      </Typography>
      {objectives.map((option, idx) => {
        return (
          <>
            <ul>
              <li>
                <Typography>{option.parent}</Typography>
              </li>
            </ul>
            {option.children.length > 0 && (
              <Box pl={3}>
                <ul style={{ listStyleType: "circle" }}>
                  {option.children.map((child) => {
                    return (
                      <li>
                        <Typography>{child}</Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            )}
          </>
        );
      })}

      <Typography sx={{ fontWeight: "bolder" }}>Functions of Fasset</Typography>
      <Typography>
        The Fasset Board may delegate any of the below mentioned functions to an
        appropriate service provider, in accordance with the Fasset procurement
        policy and to any other bodies, which may include ETQAs, professional
        bodies etc
      </Typography>
      <Typography sx={{ fontWeight: "bolder" }}>
        Fasset will serve to:
      </Typography>
      {services.map((option, idx) => {
        return (
          <>
            <ul> 
              <li><Typography>{option.parent}</Typography></li>
              
              </ul>
            {option.children.length > 0 && (
              <Box pl={3}>
                <ul style={{ listStyle: "circle"}}>
                {option.children.map((child) => { 
                
              
               
                
                  return (
                    <li>
                      <Typography>
                        
                        {child}
                      </Typography>
                      </li>
                  );
                })}
                </ul>
              </Box>
            )}
          </>
        );
      })}
      <Typography sx={{ fontWeight: "bolder" }}>
        Fasset will, specifically, in accordance with the Skills Development
        Act:
      </Typography>
      {skills.map((option, idx) => {
        return (
          <>
            <ul>
              <li><Typography>{option.parent}</Typography></li>
              
              </ul> 
            {option.children.length > 0 && (
              <Box pl={3}>
                <ul style={{ listStyle: "circle"}}>
                  
                
                {option.children.map((child) => {
                  return (
                    <li>
                      <Typography>
                        
                        {child}
                      </Typography>
                    </li>
                  );
                })}
                </ul>
              </Box>
            )}
          </>
        );
      })}
    </Stack>
  );
};

export default OurMandate;
