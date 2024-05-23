import { Stack, Typography } from "@mui/material";
import React from "react";

const Bursary = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Bursaries
      </Typography>
      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        TVET College unemployed learners bursaries
      </Typography>

      <Typography textAlign="justify">
        The TVET college learners bursaries targets students that are studying
        through public TVET colleges. The bursary is targeted at learners
        studying business stream qualifications including IT related
        qualifications. The learners are funded until completion of the
        qualification if they meet the terms and conditions to qualify for
        continuous funding. The bursary covers Tuition, prescribed textbooks,
        accommodation and learner allowances. The beneficiary might also qualify
        to be provided with laptop to assist with their studies. The bursary is
        capped at R40 000 however the cap amount may change each financial year
        dependable on the availability of the budget. The combined household
        income threshold is considered and subject to changes each financial
        year.
      </Typography>

      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        TVET College lecturers bursaries
      </Typography>

      <Typography textAlign="justify">
        The TVET college lecturer bursaries is targeting lecturers that are
        employed within the public TVET Colleges and lecturing in business
        stream related qualifications including IT. The qualifications funded
        are limited to FASSET related qualifications or Education related
        qualifications. The funding is only available for registration in public
        higher learning institutions. The funding is limited to one year however
        the lecturer is eligible to reapply each year for continuous studies.
        The bursary is capped at R40 000 however the cap amount may change each
        financial year dependable on the availability of the budget.
      </Typography>

      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        University unemployed learners bursaries
      </Typography>

      <Typography textAlign="justify">
        The university learners bursaries targets students that are studying
        through public universities or university of technologies. The bursary
        is targeted at learners studying FASSET related qualifications,
        Actuarial science studies and IT related qualifications. The learners
        are funded until completion of the qualification if they meet the terms
        and conditions to qualify for continuous funding. The bursary covers
        Tuition, prescribed textbooks, accommodation and learner allowances. The
        beneficiary might also qualify to be provided with laptop to assist with
        their studies. The bursary is capped at R100 000 however the cap amount
        may change each financial year dependable on the availability of the
        budget.
      </Typography>

      <Typography
        fontWeight="bolder"
        fontSize={15}
        sx={{ color: "primary.main" }}
      >
        Employed bursaries
      </Typography>

      <Typography textAlign="justify">
        The employed bursaries is targeting employees employed within FASSET
        sector . The qualifications funded are limited to FASSET top 10 scarce
        and critical skills. The funding is only available for registration in
        public higher learning institutions. The funding is limited to one year
        however the employee is eligible to reapply each year for continuous
        studies. The bursary is capped at R50 000 however the cap amount may
        change each financial year dependable on the availability of the budget.
      </Typography>
    </Stack>
  );
};

export default Bursary;
