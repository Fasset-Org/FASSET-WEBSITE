import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  // Accordion,
  // AccordionDetails,
  // AccordionSummary,
  Grid,
  Paper,
  Skeleton,
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
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
// import SectorSkillPlan from "../Resources/ResearchComponents/SectorSkillPlan";

const Committees = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["committeeMembers"],
    queryFn: async () => {
      return await UserQuery.getAllCommiteeNames();
    }
  });

  if (isLoading || error) {
    return (
      <div>
        <Grid container spacing={2}>
          {[...Array(5)].map((skeleton) => {
            return (
              <Grid item xs={12} md={4}>
                <Skeleton variant="rectangular" width={"100%"} height={300} />;
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Committees
      </Typography>

      {data?.committees?.map((committee) => {
        return (
          <Accordion key={committee.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "primary.main" }}
            >
              <Typography>{committee.committeeName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {committee.committeeName === "Executive" ||
              committee.committeeName === "Audit & Risk" ? (
                <Grid container spacing={2}>
                  {committee?.Committees?.map((member) => {
                    return (
                      <Grid item xs={12} md={4} key={member.id}>
                        <ProfileCard
                          title={member.title}
                          fullName={member.fullname}
                          position={member.position}
                          imageFileURL={member.imageFileURL}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "background.paper" }}>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bolder", width: 150 }}
                        >
                          No#
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                          Title
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                          Fullname
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                          Role
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? committee?.Committees?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : committee?.Committees
                      )?.map((committeeMember, i) => {
                        return (
                          <TableRow key={committeeMember.id}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {i + 1}
                            </TableCell>

                            <TableCell
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {committeeMember.title}
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {committeeMember.fullname}
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {committeeMember.position}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    {committee?.Committees?.length > 0 && (
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            rowsPerPageOptions={[
                              5,
                              10,
                              25,
                              { label: "All", value: -1 }
                            ]}
                            // colSpan={3}
                            count={committee?.Committees?.length || 0}
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
                    )}
                  </Table>
                </TableContainer>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
};

export default Committees;
