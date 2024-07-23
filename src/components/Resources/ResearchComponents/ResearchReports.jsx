import {
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
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
import React, { Fragment } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../../stateQueries/User";

const ResearchReports = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { data, isLoading } = useQuery({
    queryKey: ["researchReports"],
    queryFn: async () => {
      return await UserQuery.getAllResearcheports();
    }
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(data);

  return (
    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Research Reports
      </Typography>
      <Typography fontWeight="bolder">
        In addition the regular research programmes supported by FASSET, from
        time-to-time ad hoc research is conducted. Click on the links below to
        view the various research reports and articles commissioned or conducted
        by FASSET.
      </Typography>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Fragment>
          {data?.researchReports && (
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
                      Year
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
                      Document Description
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
                    ? data?.researchReports?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : data?.researchReports
                  ).map((row, i) => (
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
                        {new Date(row.year).getFullYear()}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {row.documentTitle}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {row.documentDesc}
                      </TableCell>

                      <TableCell align="center" scope="row">
                        <IconButton
                          id="demo-positioned-button"
                          aria-controls={
                            open ? "demo-positioned-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="demo-positioned-menu"
                          aria-labelledby="demo-positioned-button"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "left"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left"
                          }}
                        >
                          <MenuItem>
                            <a
                              href={`${process.env.REACT_APP_API_URL}/api/dev/cse/downloadResearchReportDocument?fileName=${row.researchReportFileURL}`}
                              target="_blank"
                              rel="noreferrer"
                              style={{ all: "unset" }}
                            >
                              View
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href={`${process.env.REACT_APP_API_URL}/api/dev/cse/downloadResearchReportDocument?fileName=${row.researchReportFileURL}`}
                              target="_blank"
                              rel="noreferrer"
                              style={{ all: "unset" }}
                            >
                              Download
                            </a>
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
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
                </TableFooter>
              </Table>
            </TableContainer>
          )}
        </Fragment>
      )}
    </Stack>
  );
};

export default ResearchReports;
