import {
  Divider,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import UpdateFile2024 from "../../../files/Reseources/Skills-Plan/FASSET Sector Skills Plan Update 2024-25 v006 (002).pdf";
import UpdateFile2023 from "../../../files/Reseources/Skills-Plan/FASSET 2023-24 SSP Final Annual Update.pdf";
import UpdateFile2022 from "../../../files/Reseources/Skills-Plan/FASSET 2022-23 SSP Final Annual Update.pdf";
import UpdateFile2021 from "../../../files/Reseources/Skills-Plan/Fasset Sector Skills Plan 2021-22 Update - Final.pdf";
import UpdateFile2019 from "../../../files/Reseources/Skills-Plan/Fasset SSP 2019 - 2020.pdf";
import UpdateFile2025 from "../../../files/Reseources/Skills-Plan/FASSET Final SSP 2025-2030.pdf";
import { Download } from "@mui/icons-material";

const rows = [
  {
    period: "2025-2030",
    documentName: "FASSET Final SSP 2025-2030",
    fileUrl: UpdateFile2025
  },
  {
    period: "2024/2025",
    documentName: "FASSET Sector Skills Plan Update 2024-25",
    fileUrl: UpdateFile2024
  },
  {
    period: "2023/2024",
    documentName: "FASSET 2023-24 SSP Final Annual Update",
    fileUrl: UpdateFile2023
  },
  {
    period: "2022/2023",
    documentName: "FASSET 2022-23 SSP Final Annual Update",
    fileUrl: UpdateFile2022
  },
  {
    period: "2021/2022",
    documentName: "FASSET Sector Skills Plan 2021-22 Update",
    fileUrl: UpdateFile2021
  },
  {
    period: "2019/2020",
    documentName: "FASSET SSP 2019 - 2020",
    fileUrl: UpdateFile2019
  }
];

const SectorSkillPlan = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Sector Skills Plan
      </Typography>
      <Typography fontWeight="bolder">
        The Sector Skills Plan (SSP) represents the 'roadmap' for the work of
        FASSET and organisations in the FASSET sector in terms of skills
        development. In addition, to outlining long-term and short-term skills
        development deliverables, FASSET's vision and mission, the SSP provides
        information on:
      </Typography>

      <ul>
        {[
          "Sector profile",
          "Factors influencing future change in the sector",
          "Sector development strategy",
          "Employment and skills needs",
          "Implications for skills policy and skills provision",
          "Vision, mission, objectives, priorities, outcomes and key performance indicators",
          "Monitoring, evaluating and reporting",
          "Economic performance of and the demand for labour in the sector",
          "Skills and research needs of the sector",
          "Skills development priorities",
          "Sector strategies, goals and objectives"
        ].map((option, i) => (
          <li key={i}>
            <Typography>{option}</Typography>
          </li>
        ))}
      </ul>
      <Divider />
      <Typography fontWeight="bolder">
        The SSP should be based on the following:
      </Typography>
      <ul>
        {[
          "Sector-wide representation without exclusion (i.e. including all sub-sectors, sizes of enterprise within the sector and both public and private organisations, geographical distribution)",
          "Comprehensive vision based on long, medium and short-term perspective for the optimum development of the sector",
          "Sector analysis and prognosis focusing on occupations and skills levels",
          "Full stakeholder participation and commitment",
          "Alignment with national objectives and priorities, in particular the National Skills Development Strategy (NSDS)",
          "Clear objectives, strategy and action plan for implementation"
        ].map((option, i) => (
          <li key={i}>
            <Typography>{option}</Typography>
          </li>
        ))}
      </ul>
      <Divider />
      <Typography fontWeight="bolder">
        Responsibility for producing the SSP rests with FASSET and therefore,
        the members of FASSET representing organised labour, organised
        employers, relevant government departments and other members appointed
        to the FASSET Board. As a strategic Seta document, the main stakeholders
        via the FASSET Board, of the sector must endorse the SSP
      </Typography>
      <Typography sx={{ fontWeight: "bolder", color: "primary.main" }}>
        Download the Sector Skills Plan
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                No#
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Update Periods
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Document Title
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, i) => (
              <TableRow
                key={i}
                sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.period}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.documentName}
                </TableCell>

                <TableCell align="center" scope="row">
                  <IconButton
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "primary.light",
                        color: "#FFFFFF",
                        fontWeight: "bolder"
                      }
                    }}
                    onClick={() => {
                      window.open(row.fileUrl, "_blank");
                    }}
                  >
                    <Download />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                // colSpan={3}
                count={rows?.length || 0}
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
          </TableFooter>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SectorSkillPlan;
