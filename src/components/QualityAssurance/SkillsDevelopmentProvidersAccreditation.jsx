import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const SkillsDevelopmentProvidersAccreditation = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Skills Development Providers Accreditation
      </Typography>
      <Typography textAlign="justify">
        On July 1, 2022, FASSET ceased to accept applications for Skills
        Development Providers (SDPs) accreditation against all previously
        registered qualifications, since June 2023 is the expiration date of
        these qualifications. The deadline for enrolled learners in historical
        qualifications at accredited SDPs is June 30, 2024.
      </Typography>
      <Typography textAlign="justify">
        With all of this in mind, the emphasis is now squarely on Occupational
        Qualifications. In order to offer programs and qualifications that fall
        under the registered occupational qualifications, Skills Development
        Providers (SDPs) are encouraged to apply for accreditation against those
        registered qualifications through the Quality Council for Trades and
        Occupations (QCTO).
      </Typography>

      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        QCTO Accreditation services
      </Typography>
      <ul>
        <li>
          <Stack direction="row" spacing={1} paddingX={2}>
            <Typography>Occupational Qualifications </Typography>{" "}
            <Typography>-</Typography>{" "}
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href="https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=WYKvGtx_dkOLCRj6eXre7cQfdpB9YCFAsVRDtPf78FpUOU9aRjE4OVo1UlgwTFJJV1oxUkczVUhETS4u"
                target="_blank"
              >
                Skills Development Provider (Occupational Qualifications & Part
                Qualifications) (microsoft.com)
              </Link>
            </Typography>
          </Stack>
        </li>

        <li>
          <Stack direction="row" spacing={1} paddingX={2}>
            <Typography>Skills Programme </Typography>{" "}
            <Typography>-</Typography>{" "}
            <Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href="https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=WYKvGtx_dkOLCRj6eXre7cQfdpB9YCFAsVRDtPf78FpUQkZNNEc1U043SzlGWTE4UU5EQjhKQU03Ui4u"
                target="_blank"
              >
                Skills Development Provider (Occupational Skills Programmes)
                (microsoft.com)
              </Link>
            </Typography>
          </Stack>
        </li>
      </ul>
    </Stack>
  );
};

export default SkillsDevelopmentProvidersAccreditation;
