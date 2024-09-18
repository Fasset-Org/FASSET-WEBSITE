import {
  Divider,
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

const ScarceSkills = () => {
  return (
    <Stack spacing={2} sx={{ width: "fit-content" }}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Volunteer
      </Typography>
      <Typography textAlign="justify">
        Pay it forward and volunteer your time! We are looking for passionate
        individuals who want to make a real difference to young people. We are
        looking for volunteers to help us with disseminating career awareness
        information. We are calling upon our Alumni to volunteer their time and
        give career awareness talks at schools, youth centres, churches and
        communities around you. If you wish to pledge your support and
        volunteer, please send an email to{" "}
        <a href={`mailto:Unathi.Nkosiyane@fasset.org.za`}>
          Esther.morake@fasset.org.za
        </a>{" "}
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Scarce Skills
      </Typography>

      <Typography textAlign="justify">
        Scarce skills refers to a shortage of people with the required
        attributes to fill positions available in the labour market. The
        attributes that employers are seeking when they try to fill positions in
        their organisations are specifically important. These may be
        qualifications, specific skills and experience, a specific race or
        gender or a combination of these attributes. Scarce skills are normally
        expressed in terms of the occupations for which there are not enough
        candidates available. Scarce skills in the financial services sector are
        mainly in the professional and technician and associated professional
        occupations. Although these occupational categories are experiencing
        above average growth, the shortages are often related to very special
        skills sought by employers. The lack of qualified black people,
        especially in the higher level occupations and professional
        designations, is considered a serious problem. The Sector Skills Plan of
        FASSET, 2016 - 2021 indicated that shortages of finance and accounting
        services skills exist at all levels – from clerical to technician, and
        administrative to professional, and managerial.
      </Typography>
      <Divider />
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        FASSET SECTORAL PRIORITY OCCUPATIONS
      </Typography>
      <Typography textAlign="justify">
        Sectoral priority occupations refers to a shortage of people with the
        required attributes to fill positions available in the labour market.
        The attributes that employers are seeking when they try to fill
        positions in their organisations are specifically important. These may
        be qualifications, specific skills and experience, a specific race or
        gender, or a combination of these attributes. Sectoral Priority
        Occupations are normally in terms of the occupations for which there are
        not enough candidates available. Sectoral Priority Occupations in the
        financial services sector are mainly in professional and technician and
        associated professional occupations. Although these occupational
        categories are experiencing above average growth, the shortages are
        often related to very special skills sought by employers. The lack of
        qualified black people, especially in the higher level occupations and
        professional designations, is considered a serious problem.
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                RANK
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                OCCUPATION NAME
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                SPECIALIZATION / ALTERNATIVE TITLE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scarceSkills.map((row, i) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: i % 2 === 0 ? "action.hover" : ""
                }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.occupationName}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.specialization}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 }
                      ]}
                      // colSpan={3}
                      count={data?.researchReports?.length || 0}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page"
                        },
                        native: true
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter> */}
        </Table>
      </TableContainer>
    </Stack>
  );
};

const scarceSkills = [
  {
    occupationName: "External Auditor",
    specialization: "Forensic Auditor Investigator"
  },
  {
    occupationName: "Management Consultant",
    specialization:
      "Business Analyst, Technology Development Coordinator, Commercial Analyst, Operations Analyst, Ecommerce Programme Manager, Efficiency Engineer, ICT Systems Architect, Systems Programmers"
  },
  {
    occupationName: "Accountant in practice",
    specialization: ""
  },
  {
    occupationName: "Finance Manager",
    specialization:
      "Chief Accountant, Chief Financial Officer, Budget Manager, Account Systems Manager, Cost Accountant, Project Accountant, Budget Accountant"
  },
  {
    occupationName: "Financial Accountant",
    specialization:
      "Company Accountant, Corporate Accountant, Business Group Accountant, Performance Audit Manager, Debtors Manager, Bank Accountant"
  },
  {
    occupationName: "Tax Professional",
    specialization: "Tax Analyst"
  },
  {
    occupationName: "Financial Investment Advisor",
    specialization:
      "Financial Agent, Listed Securities Analyst,Investment Research Analyst"
  },
  {
    occupationName: "Internal Auditor",
    specialization: "Audit Consultant, ICT Internal Auditor"
  },
  {
    occupationName: "Data Scientist",
    specialization: ""
  },
  {
    occupationName: "Compliance Officer",
    specialization: "Financial Markets Compliance, Compliance Officer"
  }
];

export default ScarceSkills;
