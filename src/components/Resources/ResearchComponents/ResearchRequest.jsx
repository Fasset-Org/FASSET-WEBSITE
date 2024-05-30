import { Stack, Typography } from "@mui/material";
import React from "react";

const ResearchRequest = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Research Requests
      </Typography>
      <Typography fontWeight="bolder">
        Fasset has developed a research policy for all stakeholders who would
        like to request information from Fasset to be used for research
        purposes. This policy was developed to ensure that all stakeholders
        understand the process and procedures of Fasset when requesting this
        information. All stakeholders are encouraged to read through the policy
        before submitting any requests. The following criteria should be
        considered when requesting information and/or data from the SETA:
      </Typography>
      <ul>
        {[
          "External stakeholders may submit requests for SETA information and data. These requests may concern databases covering learners, employers, professional institutes, assessors, moderators, training providers, workplace providers etc…",
          "Fasset will process all requests in an unbiased and consistent manner.",
          "The objective for requesting the database must be in the best interests of the SETA and its members, and must provide value. For example, stakeholder consultation, free events.",
          "Requests for information must be submitted in writing.",
          "Fasset will review research requests and will provide feedback according to Fasset’s external communication policy and this policy.",
          "Fasset will respond to the requestor in writing, with regard to the outcome of the request.",
          "The following criteria will be considered in assessing research requests:"
        ].map((option, i) => (
          <li key={i}>
            <Typography> {option}</Typography>
          </li>
        ))}
      </ul>

      <ol style={{ marginLeft: 25 }}>
        {[
          "Clear statement of the purpose of the research.",
          "Research or database request is not to be used to promote personal or commercial interests.",
          "The request is to be of utility to the Fasset sector.",
          "The outcome of the request must be available to Fasset",
          "The request must further the goals of Fasset.",
          "The extent to which the research will draw on extra time and resources of Fasset.",
          "The professional membership of the requestor and the ethical approach of the request"
        ].map((option, i) => (
          <li key={i}>
            <Typography>
              <span style={{ fontWeight: "bolder" }}></span> {option}
            </Typography>
          </li>
        ))}
      </ol>
      <Typography>
        Enquiries about research request must be directed to Mr Abongile Tsotsi,
        email address: or call 011 476 8570.
      </Typography>
    </Stack>
  );
};

export default ResearchRequest;
