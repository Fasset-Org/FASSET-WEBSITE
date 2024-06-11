import {
  Box,
  Divider,
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

const Internships = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const internships = [
    {
      interventionType: "Higher Education &Training",
      purpose:
        "Assist Learners who completed NQF6-10 with work experience to enhance their employment prospects.",
      providerExpectations:
        "Sign a Memorandum of Agreement with FASSET. Provide the learner/s with an organization specific induction. Assign a dedicated mentor/s or supervisor/s to provide guidance and support to the learner/s. Make available such resources as is required for the successful temporary employment of the learner/s, which includes equipment, training, software, etc. Agree to regular monitoring interventions as and when required. Participate in three project specific research interventions",
      learnerExpectations:
        "A learner must sign a fixed term employment contract with the employer; a learner may not commence with any work without the signed fixed term contract. Work for the employer in order to gain workplace experience , but the work must be relevant to the specific qualification. Be available for and participate in all learning and work experience required by the internship programme . Comply with workplace policies and procedures. Complete any timesheets or any written assessment tools supplied by the employer to record relevant workplace experience."
    },
    {
      interventionType: "National Senior Certificate (NSC)",
      purpose:
        "Assist unemployed learners who completed Matric with work experience to enhance their employment prospects.",
      providerExpectations:
        "Sign a Memorandum of Agreement with FASSET. Provide the learner/s with an organization specific induction. Assign a dedicated mentor/s or supervisor/s to provide guidance and support to the learner/s. Make available such resources as is required for the successful temporary employment of the learner/s, which includes equipment, training, software, etc. Agree to regular monitoring interventions as and when required. Participate in three project specific research interventions",
      learnerExpectations:
        "A learner must sign a fixed term employment contract with the employer; a learner may not commence with any work without the signed fixed term contract. Work for the employer in order to gain workplace experience , but the work must be relevant to the specific qualification. Be available for and participate in all learning and work experience required by the internship programme. Comply with workplace policies and procedures. Complete any timesheets or any written assessment tools supplied by the employer to record relevant workplace experience"
    },
    {
      interventionType: "National Certificate Vocational (NCV L4)",
      purpose:
        "Assist unemployed learners who completed NCV L4 certificate with work experience and enhance their employment prospects. ",
      providerExpectations:
        "Sign a Memorandum of Agreement with FASSET. Provide the learner/s with an organization specific induction. Assign a dedicated mentor/s or supervisor/s to provide guidance and support to the learner/s. Make available such resources as is required for the successful temporary employment of the learner/s, which includes equipment, training, software, etc. Agree to regular monitoring interventions as and when required. Participate in three project specific research interventions",
      learnerExpectations:
        "A learner must sign a fixed term employment contract with the employer; a learner may not commence with any work without the signed fixed term contract. Work for the employer in order to gain workplace experience , but the work must be relevant to the specific qualification. Be available for and participate in all learning and work experience required by the internship programme. Comply with workplace policies and procedures.Complete any timesheets or any written assessment tools supplied by the employer to record relevant workplace experience."
    },
    {
      interventionType:
        "Technical, Vocational, Education and Training Work-Based Learning (TVET WBE)",
      purpose:
        "Students from public TVET colleges are placed for completion of an 18-month internship as required for the achievement of the National N Diploma",
      providerExpectations:
        "Sign a Memorandum of Agreement with Fasset Make available such resources to assist with the selection process (interviews / signing of contracts / etc.). Provide the learner/s with an organization specific induction Assign a dedicated mentor/s or supervisor/s to provide guidance and support to the learner/s, in particular in relation to the completion of the logbook Make available such resources as is required for the successful temporary employment of the learner/s, which includes equipment, training, software, etc. Agree to regular monitoring interventions as and when required Participate in three project specific research interventions",
      learnerExpectations:
        "A learner must sign a fixed term employment contract with the employer; a learner may not commence with any work without the signed fixed term contract. Work for the employer in order to gain workplace experience , but the work must be relevant to the specific qualification. Be available for and participate in all learning and work experience required by the internship programme. Comply with workplace policies and procedures. Complete any timesheets or any written assessment tools supplied by the employer to record relevant workplace experience."
    }
  ];

  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Internships
      </Typography>
      <Divider />
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "primary.main" }}>
              <TableRow>
                <TableCell
                  align="justify"
                  sx={{ fontWeight: "bolder", color: "#FFFFFF", fontSize: {md: 10} }}
                >
                  No#
                </TableCell>
                <TableCell
                  align="justify"
                  sx={{ fontWeight: "bolder", color: "#FFFFFF", fontSize: {md: 10} }}
                >
                  Intervention Type
                </TableCell>
                <TableCell
                  align="justify"
                  sx={{ fontWeight: "bolder", color: "#FFFFFF", fontSize: {md: 10} }}
                >
                  Purpose
                </TableCell>
                <TableCell
                  align="justify"
                  sx={{ fontWeight: "bolder", color: "#FFFFFF", fontSize: {md: 10} }}
                >
                  Service Provider Expectations
                </TableCell>
                <TableCell
                  align="justify"
                  sx={{ fontWeight: "bolder", color: "#FFFFFF", fontSize: {md: 10} }}
                >
                  Learner Exptections
                </TableCell>

                {/* <TableCell
                  align="center"
                  sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
                >
                  Action
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? internships.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : internships
              ).map((row, i) => (
                <TableRow
                  key={row?.title}
                  sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
                >
                  <TableCell align="justify" sx={{ fontSize: { md: 10 } }}>
                    {i + 1}
                  </TableCell>
                  <TableCell align="justify" sx={{ fontSize: { md: 10 } }}>
                    {row?.interventionType}
                  </TableCell>
                  <TableCell align="justify" sx={{ fontSize: { md: 10 } }}>
                    {row?.purpose}
                  </TableCell>
                  <TableCell align="justify" sx={{ fontSize: { md: 10 } }}>
                    {row?.providerExpectations}
                  </TableCell>
                  <TableCell align="justify" sx={{ fontSize: { md: 10 } }}>
                    {row.learnerExpectations}
                  </TableCell>
                  {/* <TableCell align="center" scope="row">
                    <IconButton>
                      <a
                        href={"#/"}
                        style={{ all: "unset" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <VisibilityIcon />
                      </a>
                    </IconButton>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  // colSpan={3}
                  count={internships?.length || 0}
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
      </Box>
    </Stack>
  );
};

export default Internships;
