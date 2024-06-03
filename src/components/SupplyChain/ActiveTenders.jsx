import * as React from "react";
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
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";
import { useNavigate } from "react-router-dom";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TenderCard from "./TenderCard";

const ActiveTenders = () => {
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
    queryKey: ["currentTenders"],
    queryFn: async () => {
      return await UserQuery.getAllCurrentTenders();
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
        sx={{
          color: "primary.main",
          textTransform: "uppercase",
          mb: 2
        }}
      >
        Current Tenders
      </Typography>
      <Divider />
      <Stack display={{ md: "block", xs: "none" }} mt={2}>
        {data?.currentTenders?.length > 0 ? (
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
                    Tender Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Tender Reference
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Date Published
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder", color: "#FFFFFF" }}>
                    Briefing Session Date
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
                  ? data?.currentTenders?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : data?.currentTenders
                )?.map((tender, i) => {
                  return (
                    <TableRow key={tender.id}>
                      <TableCell component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {tender.tenderName}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {tender.tenderReference}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {`${new Date(tender.createdAt).toDateString()}`}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {`${new Date(tender.meetingDate).toDateString()}`}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {`${new Date(tender.closingDate).toDateString()}`}
                      </TableCell>

                      <TableCell>
                        <IconButton
                          onClick={() => {
                            navigate(`/tenders/${tender.id}`);
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              {data?.currentTenders?.length > 0 && (
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
                      count={data?.currentTenders?.length || 0}
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
          <Stack width="100%">
            <Alert severity="info">No Tenders Available</Alert>
          </Stack>
        )}
      </Stack>

     

      
      <Grid container display={{ md: "none", xs: "block" }} spacing={2} mt={2}>
        {data?.currentTenders?.length > 0 ? (
          data?.currentTenders?.map((tender, i) => {
            return (
              <Grid item key={i} xs={12} md={6}>
                <TenderCard state={tender.tenderStatus} tender={tender} />
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12} md={12}>
            <Alert severity="info">No Tenders Available</Alert>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export default ActiveTenders;
