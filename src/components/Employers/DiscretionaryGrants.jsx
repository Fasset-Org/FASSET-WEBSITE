import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";

const DiscretionaryGrants = () => {
  const employerGrants = [
    "Bursary Grants",
    "Placement Grants(Learnerships)",
    "National Student Financial Aid Scheme Loan Repayment Grant",
    "NLEG"
  ];

  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Discretionary Grants
      </Typography>
      <Typography>
        The Fasset Board determines the areas of strategic importance for the
        sector by assessing the information from Mandatory Grant applications,
        the Sector Skills Plan (SSP) and other research conducted from time to
        time. In addition to this background research and information, the
        National Skills Development Strategy (NSDS), coordinated by DHET, guides
        the development of strategic areas within Fasset’s sector.
      </Typography>
      <Typography
        textAlign="center"
        sx={{ fontWeight: "bolder", color: "primary.main" }}
      >
        Benefits available to Fasset levy-paying and non- levy paying employers
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Employer Descretionary Grants
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Levy-Paying Employer
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Non Levy-Paying EMployer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employerGrants.map((grant, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {grant}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    Yes
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    Yes
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DiscretionaryGrants;
