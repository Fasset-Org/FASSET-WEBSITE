import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const CareerPortal = () => {
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
        Career Portal
      </Typography>
      <Typography textAlign="justify">
        The Finance and Accounting Services Sector Education and Training
        Authority (FASSET) is reaching out to all young South Africans
        interested in a career in Accounting and / or Finance.
      </Typography>
      <Typography textAlign="justify">
        The finance and accounting services sector is particularly important
        because it is the largest employer of people with financial management,
        accounting, and auditing skills.
      </Typography>
      <Typography textAlign="justify">
        This sector includes: investment entities and trusts and company
        secretary services; stockbroking and financial markets; financial
        development organisations; accounting, bookkeeping, auditing and tax
        services; business and management consulting services; the South African
        Revenue Service; the national and provincial treasuries; and other
        activities auxiliary to financial intermediation, such as debt
        collection.
      </Typography>

      <Typography textAlign="justify">
        This sector includes: investment entities and trusts and company
        secretary services; stockbroking and financial markets; financial
        development organisations; accounting, bookkeeping, auditing and tax
        services; business and management consulting services; the South African
        Revenue Service; the national and provincial treasuries; and other
        activities auxiliary to financial intermediation, such as debt
        collection.
      </Typography>
      <Typography textAlign="justify">
        If you are interested in learning more about how FASSET can help you
        achieve more in your career, please  
         &nbsp;<Link sx={{ cursor: "pointer" }}>Click here</Link> to register on our career
        portal
      </Typography>
    </Stack>
  );
};

export default CareerPortal;
