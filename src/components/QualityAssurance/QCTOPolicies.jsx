import { Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Policy1 from "../../files/Quality Assurance/QCTO-Policy-on-Accreditation-of-Skills-Development-Providers (2).pdf";
import Policy2 from "../../files/Quality Assurance/QCTO-Policy-on-Accreditation-of-Assessment-Centres (1).pdf";
import Policy3 from "../../files/Quality Assurance/QCTO-Certification-Policy (1).pdf";
import Policy4 from "../../files/Quality Assurance/Policy-on-Delegation-to-DQPs-and-AQPs (1).pdf";
import Policy5 from "../../files/Quality Assurance/Occupational-Qualifications-Development-Facilitator-Manual (1).pdf";
import Policy6 from "../../files/Quality Assurance/How-to-Apply-for-the-Development-of-Occupational-Qualifications.pdf";
import Policy7 from "../../files/Quality Assurance/Foundational-Learning-Competence-Information-Booklet (1).pdf";
import Policy8 from "../../files/Quality Assurance/DQP-and-Potential-DQP-Process-Manual (1).pdf";
import Policy9 from "../../files/Quality Assurance/Curriculum-and-Assessment-Policy (1).pdf";
import Policy10 from "../../files/Quality Assurance/AQP-Criteria-and-Guidelines.pdf";

const QCTOPolicies = () => {
  return (
    <Stack>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        QCTO Policies
      </Typography>
      <Divider />
      <div>
        <ul>
          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy1}
                target="_blank"
              >
                QCTO Policy on Accreditation of Skills Development Providers
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy2}
                target="_blank"
              >
                QCTO Policy on Accreditation of Assessment Centres
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy3}
                target="_blank"
              >
                QCTO Certification Policy
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy4}
                target="_blank"
              >
                Policy on Delegation to DQPs and AQPs
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy5}
                target="_blank"
              >
                Occupational Qualifications Development Facilitator Manual
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy6}
                target="_blank"
              >
                How to Apply for the Development of Occupational Qualifications
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy7}
                target="_blank"
              >
                Foundational Learning Competence Information Booklet
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy8}
                target="_blank"
              >
                DQP and Potential DQP Process Manual
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy9}
                target="_blank"
              >
                Curriculum and Assessment Policy
              </Link>
            </Typography>
          </li>

          <li>
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href={Policy10}
                target="_blank"
              >
                AQP Criteria and Guidelines
              </Link>
            </Typography>
          </li>
        </ul>
      </div>
    </Stack>
  );
};

export default QCTOPolicies;
