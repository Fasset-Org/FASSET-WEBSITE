import { Stack, Typography } from "@mui/material";
import React from "react";

const ScarceSkills = () => {
  return (
    <Stack spacing={2} sx={{ width: "fit-content" }}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        // textTransform="uppercase"
        fontFamily="Helvetica Neue"
        // textAlign="center"
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        Scarce Skills
      </Typography>
      <Typography textAlign="justify">
        Scarce skills refers to a shortage of people with the required
        attributes to fill positions available in the labour market. The
        attributes that employers are seeking when they try to fill positions in
        their organisations are specifically important. These may be
        qualifications, specific skills and experience, a specific race or
        gender or a combination of these attributes.
      </Typography>
      <Typography textAlign="justify">
        Scarce skills are normally expressed in terms of the occupations for
        which there are not enough candidates available. Scarce skills in the
        financial services sector are mainly in the professional and technician
        and associated professional occupations. Although these occupational
        categories are experiencing above average growth, the shortages are
        often related to very special skills sought by employers. The lack of
        qualified black people, especially in the higher level occupations and
        professional designations, is considered a serious problem.
      </Typography>
      <Typography textAlign="justify">
        The Sector Skills Plan of Fasset, 2016 - 2021 indicated that shortages
        of finance and accounting services skills exist at all levels – from
        clerical to technician, and administrative to professional, and
        managerial.
      </Typography>
    </Stack>
  );
};

export default ScarceSkills;
