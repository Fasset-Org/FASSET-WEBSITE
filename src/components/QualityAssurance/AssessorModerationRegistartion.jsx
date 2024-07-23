import { Stack, Typography } from "@mui/material";
import React from "react";

const AssessorModerationRegistartion = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Assessor Moderator Registration
      </Typography>
      <Typography fontWeight="bolder">
        Fasset only accepts the following applications for assessor / moderator
        registration:
      </Typography>

      <Typography textAlign="justify">
        <ul>
          <li>
            {" "}
            <Typography>
              Re-registration of assessors and moderators where registration has
              lapsed.
            </Typography>
          </li>
          <li>
            <Typography>
              New applications for assessors and moderators affiliated with a
              Fasset accredited provider.
            </Typography>
          </li>
          <li>
            <Typography>
              New applications for assessors and moderators affiliated with new
              training provider accreditation applications.
            </Typography>
          </li>
          <Typography>
            <Typography>
              Click here to access the online registration platform. The manual
              for online registration of assessors and moderators can be
              accessed here.
            </Typography>
          </Typography>
        </ul>
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Criteria for Registration as an Assessor with FASSET
      </Typography>
      <Typography fontWeight="bolder">
        The assessor should meet the following criteria:
      </Typography>

      <Typography textAlign="justify">
        <ul>
          <li>
            {" "}
            <Typography>
              {" "}
              Have been deemed competent and certified for the generic Assessor
              Unit Standard (Unit Standard 115753 – Conduct outcomes-based
              assessment) by an ETDP SETA accredited provider.
            </Typography>
          </li>
          <li>
            <Typography>
              Have a qualification at least one NQF level higher than the
              qualification/s or unit standard/s applied for AND/OR
            </Typography>
          </li>
          <li>
            <Typography>
              Have an endorsement from the relevant professional body, where
              applicable
            </Typography>
          </li>
          <li>
            <Typography>
              Experience and expertise associated with assessment of education
              and training is deemed an advantage
            </Typography>
          </li>
        </ul>
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Assessor / Moderator Registration Process
      </Typography>

      <ul>
        <li>
          <Typography>
            {" "}
            Complete the FASSET Online Registration application form (Click here
            to access the platform)
          </Typography>
        </li>
        <li>
          <Typography>
            Attach all relevant and supporting documentation
          </Typography>
        </li>
        <li>
          <Typography>
            Submit the application and supporting documentation to the FASSET
            Processing and Quality Assurance department
          </Typography>
        </li>
        <li>
          <Typography>
            If you will be assessing any of the Professional Body/Quality
            Assurance Partner qualifications, you will need to attach a letter
            of recommendation from the relevant Professional Body with your
            application form
          </Typography>
        </li>
        <li>
          <Typography>
            {" "}
            When the application form has been evaluated against the set
            criteria, assessors will be notified in writing and issued with a
            registration certificate, registration number, and requirements for
            continued registration
          </Typography>
        </li>
      </ul>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        List of supporting documents
      </Typography>
      <Typography fontWeight="bolder">
        Electronic copies of the following documents must be uploaded as part of
        the application process:
      </Typography>

      <ul>
        <li>
          {" "}
          <Typography>Statement of Results issued by ETDP SETA</Typography>
        </li>
        <li>
          <Typography>Comprehensive Curriculum Vitae (CV)</Typography>
        </li>
        <li>
          <Typography>Certified copies of relevant qualifications</Typography>
        </li>
        <li>
          <Typography>
            Certified copy of identify document / passport / other proof of
            identity
          </Typography>
        </li>
      </ul>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        De-Registration Process
      </Typography>
      <Typography fontWeight="bolder">
        FASSET will de-register assessors for the following reasons:
      </Typography>

      <ul>
        <li>
          <Typography>
            {" "}
            If an assessor has breached the code of conduct and compromised the
            integrity of the learner achievements
          </Typography>
        </li>
        <li>
          <Typography>
            {" "}
            Where an assessor has assessed outside of the scope of registration
          </Typography>
        </li>
        <li>
          <Typography>
            {" "}
            Where an assessor has requested de-registration Should an assessor
            be de-registered for misconduct, the following bodies or authorities
            could be informed:
          </Typography>
        </li>
        <ul style={{}}>
          <li>
            <Typography>FASSET’s Chief Executive Officer</Typography>
          </li>
          <li>
            <Typography>Quality Council for Trades and Occupations</Typography>
          </li>
          <li>
            <Typography>South African Qualifications Authority</Typography>
          </li>
          <li>
            <Typography>Department of Higher Education and Training</Typography>
          </li>
          <li>
            <Typography>Any relevant QAB’s</Typography>
          </li>
        </ul>
      </ul>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        FASSET Appeals Process
      </Typography>
      <Typography fontWeight="bolder">
        Assessors who have been de-registered or have not been granted
        registration may appeal against the decision by:
      </Typography>

      <ul>
        <li>
          <Typography>
            Submitting a written notice of appeal to the PQA Director within 10
            working days of the decision
          </Typography>
        </li>
        <li>
          <Typography>
            The Appellant has a further 10 working days to submit a statement
            setting out the grounds for the appeal, accompanied by the relevant
            documentation, to the PQA Director
          </Typography>
        </li>
        <li>
          <Typography>
            The appeal will be forwarded to FASSET’s Appeals Committee who will
            consider the evidence and make decisions to either accept or reject
            the appellant’s claim
          </Typography>
        </li>
        <li>
          <Typography>
            The PQA Director will communicate the Committee’s decision to the
            appellant in writing and thereafter, the appellant may submit a
            further appeal to QCTO
          </Typography>
        </li>
      </ul>
    </Stack>
  );
};

export default AssessorModerationRegistartion;
