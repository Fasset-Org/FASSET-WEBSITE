import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, TableFooter, TablePagination, Typography } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const AboutFassetLearnerships = () => {
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
    <Stack spacing={2} justifyContent="center">
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        About Fasset Learnerships
      </Typography>
      <Typography fontWeight="bolder">
        Association of Accounting Technicians (AAT(SA)) 011 621 6888 –
        info@aatsa.org.za
      </Typography>

      <Typography fontWeight="bolder">
      Workplace Accreditation
      </Typography>
      <Typography>Workplace accreditation is a requirement for all employers, regardless of sector, who wishes to register learners on Fasset learnerships. The accreditation aims to verify the ability of the workplace to host a specific learnership. Criteria for accreditation include access to resources related to the learnership, the relevance of the work experience component to the qualification, and the structures in place to ensure successful implementation and completion of the learnership.<br/>
      <br/>
      For the majority of learnerships, Fasset has agreements with professional bodies and Assessment Quality Partners (AQP’s) which are responsible for the accreditation of workplaces.
      </Typography>
      <Typography fontWeight="bolder">
      Fasset Learnerships
      </Typography>
      <Typography>Click on the learnership titles below for information on each learnership</Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
        <Table aria-label="simple table">
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
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                NQF Level
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Learnership Code
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                SAQA ID No
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, i) => (
              <TableRow
                key={row.name}
                sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  Certificate: Local Government Accounting
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  3
                </TableCell>
                <TableCell align="center" scope="row">
                  01/Q010026/00/120/3
                </TableCell>
                <TableCell align="center" scope="row">
                  59751
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
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        
Learnership Agreement Registration Procedures
      </Typography>
      <Typography fontWeight="bolder"> a. Employers Register​ed with Fasset wishing to implement a Fasset Learnership:</Typography>
      <Typography>
        <ol>
          <li>Apply for accreditation as an accredited workplace training provider with the professional body or AQP responsible for the learnership, or with Fasset (as applicable)</li>
          <li>Register the learner with the relevant professional body and/or training provider</li>
          <li>Sign an employment contract with the learner</li>
          <li>Sign a Learnership Agreement with the learner</li>
          <li>Submit the Learnership Agreement to Fasset together with the following:</li>
          <Typography>Proof of learner registration with the professional body or AQP, if applicable
Employer accreditation status with professional body or AQP (copy of letter/certificate), if applicable
Copy of the learner’s employment contract
Certified copy of the learner’s ID document.</Typography>
<Typography>The Learnership Agreement and other supplementary documentation can be accessed under the  section of the website. Please Note: Learnership regulations require the Seta to decide if it will register the agreement within 7 days of receipt.
Learnership regulations require the SETA to register the learnership agreement within 21 days of that decision.
If the agreement has any outstanding information, the learnership agreement will be returned to the employer, accompanied by a letter indicating reasons for non-registration. The employer may resubmit the learnership agreement, together with all required documentation
If all the required documents are attached, Fasset will issue the employer with a Confirmation letter. The Confirmation letter may be used to claim the SARS income tax deduction.</Typography>
        </ol>
      </Typography>
      <Typography fontWeight= "bolder">b.Employers Registered with Fasset wishing to implement a Learnership from another Seta</Typography>
      <Typography>Contact the SETA to which the learnership belongs to ascertain if the employer fulfils all the requirements to implement the learnership.
Complete the Fasset learnership agreement and submit it to Fasset.
Fasset will register the Learnership Agreement and issue the employer with a confirmation letter.</Typography>
<Typography fontWeight="bolder">c. Employers not Registered with Fasset wishing to implement a Fasset Learnership</Typography>
<Typography>The employer contacts the relevant professional body / AQP / Fasset to become an accredited workplace provider.
Once accredited, the employer completes their SETA’s learnership agreement.
The employer submits the learnership agreement to their SETA.
The Learnership Agreement will be registered by the other SETA.</Typography>
    </Stack>
  );
};

export default AboutFassetLearnerships;
