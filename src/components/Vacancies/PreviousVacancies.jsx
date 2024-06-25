import {
  Alert,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
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
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VacancyCard from "../VacancyCard";

const PreviousVacancies = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["previousPositions"],
    queryFn: async () => {
      return await UserQuery.getAllPreviousPositions();
    }
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Stack>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase", mb: 2 }}
      >
        Past Positions
      </Typography>
      <Divider />
      <Stack display={{ md: "block", xs: "none" }}>
        {data?.positions?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "background.paper" }}>
                <TableRow
                  sx={{ backgroundColor: "primary.main", color: "#FFFFFF" }}
                >
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    No#
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Job Title
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Department
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Line Manager
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Remuneration
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Date Uploaded
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Closing Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? data?.positions?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : data?.positions
                )?.map((position, i) => {
                  return (
                    <TableRow key={position.id}>
                      <TableCell component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {position.jobTitle}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {position?.Department?.departmentName}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {position.reportingTo}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {position.remuneration}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {`${new Date(position.createdAt).toDateString()}`}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {`${new Date(position.closingDate).toDateString()}`}
                      </TableCell>

                      <TableCell>
                        <IconButton
                          onClick={() => {
                            navigate(`/vacancies/${position.id}`, {
                              state: { open: false }
                            });
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              {data?.positions?.length > 0 && (
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
                      count={data?.positions?.length || 0}
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
        ) : (
          <Stack width="100%" spacing={2} ml={2}>
            <Alert severity="info">No Positions Available</Alert>
          </Stack>
        )}
      </Stack>

      {data?.positions?.length > 0 ? (
        <Grid
          container
          display={{ md: "none", xs: "block" }}
          spacing={2}
          mt={2}
        >
          {data?.positions?.map((vacancy, i) => {
            return <VacancyCard vacancy={vacancy} open={false} key={i} />;
          })}
        </Grid>
      ) : (
        <Grid item xs={12} md={12} display={{ md: "none", xs: "block" }}>
          <Alert severity="info">No Positions Available</Alert>
        </Grid>
      )}
    </Stack>
  );
};

export default PreviousVacancies;
