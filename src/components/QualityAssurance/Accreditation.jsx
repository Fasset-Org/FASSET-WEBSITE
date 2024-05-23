import { Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Accreditation = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Accreditation
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        Accreditation is the certification, usually for a certain period of time
        of a body or an institution, as having the capacity to fulfill a
        particular function within the quality assurance system set up by QCTO.
        FASSET stopped accepting applications for Skills Development Providers
        (SDPs) accreditation against all historically registered qualifications
        as of 01.07.2022. Please visit the{" "}
        <Link
          sx={{ textDecoration: "none", cursor: "pointer" }}
          href="https://www.qcto.org.za/"
          target="_blank"
        >
          Quality Council for Trades and Occupations (QCTO)
        </Link>{" "}
        for more information. Accreditation is valid for a period of five years
        from the date on which the QCTO granted accreditation to the SDP or
        until the SDP is de-accredited by the QCTO. The accreditation may be
        withdrawn by the QCTO if the SDP fails to perform its responsibilities
        as stipulated in the QCTO Accreditation Policy, and/or contravenes the
        provisions stipulated in the accreditation letter or act in a way that
        is unlawful or unbecoming of a SDP. The following documents and
        equipments are required to get accreditation with QCTO:
      </Typography>
      <Divider />
      <Stack>
        <Typography
          fontWeight="bolder"
          fontSize={15}
          sx={{ color: "primary.main" }}
        >
          Institutional Compliance
        </Typography>

        <div style={{ paddingLeft: 2 }}>
          <ul>
            <li>
              <Typography>
                CIPC registration documents or proof of establishment (PTY, CC,
                NGO, NPO, Public Institution)
              </Typography>
            </li>

            <li>
              <Typography>Latest Tax Compliance Status (TCS)</Typography>
            </li>

            <li>
              <Typography>Proof of Financial Stability</Typography>
            </li>

            <li>
              <Typography>
                Valid Occupational Health and Safety (OHS) audit report issued
                by an authorised person
              </Typography>
            </li>

            <li>
              <Typography>Proof of premises</Typography>
            </li>

            <li>
              <Typography>Signed Workplace MoU or QCTO Affidavit</Typography>
            </li>

            <li>
              <Typography>
                Curriculum Vitae (CV) of Facilitators/Assessors and certified
                copies of ID and Qualification certificates (plus work permits
                for all foreign personnel)
              </Typography>
            </li>

            <li>
              <Typography>
                Signed Employment Contracts or SLAs for each Facilitator
                including the job description/responsibilities of the
                facilitator in relation to the SDP
              </Typography>
            </li>
          </ul>
        </div>
      </Stack>
      <Divider />
      <Stack>
        <Typography
          fontWeight="bolder"
          fontSize={15}
          sx={{ color: "primary.main" }}
        >
          Programme Delivery Readiness
        </Typography>

        <div style={{ paddingLeft: 2 }}>
          <ul>
            <li>
              <Typography>
                Annexure E (Form 1): Implementation Plan/ Programme Delivery
                Strategy
              </Typography>
            </li>

            <li>
              <Typography>
                Annexure G (Form 2): Learning Material Matrix
              </Typography>
            </li>

            <li>
              <Typography>Annexure H (Form 3): Learning Matters</Typography>
            </li>

            <li>
              <Typography>Annexure J (Form 4): Signed Declaration</Typography>
            </li>

            <li>
              <Typography>
                Learning material for all modules that is aligned to the
                Curriculum document requirements.
              </Typography>
            </li>

            <li>
              <Typography>
                Sufficient, qualified staff for all modules as per the
                requirements in the Curriculum document
              </Typography>
            </li>

            <li>
              <Typography>
                Checklist of resources/Training Inventory for the knowledge
                component
              </Typography>
            </li>

            <li>
              <Typography>
                Checklist of resources/Training Inventory for the practical
                component
              </Typography>
            </li>

            <li>
              <Typography>
                Equipment required for the Trade as per the NAMB checklist
                (Trade qualifications only)
              </Typography>
            </li>

            <li>
              <Typography>
                Classrooms/venues with basic amenities such as chairs, tables,
                chalkboard or whiteboard, sufficient lighting, and ventilation
                for face-to-face delivery
              </Typography>
            </li>

            <li>
              <Typography>
                Facilities where the simulation or practical training for the
                qualification will be conducted
              </Typography>
            </li>

            <li>
              <Typography>
                A learner placement strategy for the workplace component as well
                as a logbook aligned to the Curriculum document
              </Typography>
            </li>

            <li>
              <Typography>
                Career pathway mapped and defined to learners (e.g. career
                pathway map or diagram for the occupational qualification;
                vertical and horizontal articulation)
              </Typography>
            </li>

            <li>
              <Typography>
                Learner support services, before, during, and after the training
                intervention
              </Typography>
            </li>

            <li>
              <Typography>
                Learner Management Information System (LMIS)
              </Typography>
            </li>
          </ul>
        </div>
      </Stack>
      <Divider />
      <Stack>
        <Typography
          fontWeight="bolder"
          fontSize={15}
          sx={{ color: "primary.main" }}
        >
          Management of the Institution
        </Typography>

        <div style={{ paddingLeft: 2 }}>
          <ul>
            <li>
              <Typography>Organogram of the institution</Typography>
            </li>

            <li>
              <Typography>
                Policies to govern the management of the institution including:
              </Typography>
            </li>

            <ul>
              <li>
                <Typography>Governance and Finance</Typography>
              </li>

              <li>
                <Typography>Human Resources</Typography>
              </li>

              <li>
                <Typography>Training (Teaching and Learning)</Typography>
              </li>

              <li>
                <Typography>Assessment</Typography>
              </li>

              <li>
                <Typography>Certification</Typography>
              </li>

              <li>
                <Typography>Appeals</Typography>
              </li>

              <li>
                <Typography>Occupational Health and Safety</Typography>
              </li>

              <li>
                <Typography>COVID 19 Policy</Typography>
              </li>

              <li>
                <Typography>Refund Policy</Typography>
              </li>
            </ul>
          </ul>
        </div>
      </Stack>
    </Stack>
  );
};

export default Accreditation;
