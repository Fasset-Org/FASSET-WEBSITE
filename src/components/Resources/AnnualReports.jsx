import {
  Divider,
  IconButton,
  LinearProgress,
  // Menu,
  // MenuItem,
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
  Tooltip,
  Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import UserQuery from "../../stateQueries/User";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Download } from "@mui/icons-material";

const AnnualReports = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const { data, isLoading } = useQuery({
    queryKey: ["annualReports"],
    queryFn: async () => {
      return await UserQuery.getAllAnnualReports();
    }
  });

  // console.log(data);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Stack spacing={2}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Annual Reports
      </Typography>
      <Divider />
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
                Document Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Period
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                {0}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                Annual Report 2023/2024
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                Apr 01 2023 - Mar 31 2024
              </TableCell>

              <TableCell align="center" scope="row">
                <Tooltip title="Download">
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
                      window.open(
                        `https://fasset.org.za/mobile/index.html`,
                        "_blank"
                      );
                    }}
                  >
                    <Download />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            {(rowsPerPage > 0
              ? data?.annualReports?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : data?.annualReports
            ).map((annualReport, i) => (
              <TableRow
                key={annualReport.id}
                sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {annualReport?.annualReportFileURL}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {/* {annualReport.startDate.toLocaleDateString("en-ZA", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })}
                  {" - "}{" "}
                  {annualReport.endDate.toLocaleDateString("en-ZA", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })} */}
                  {new Date(annualReport.startDate)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}{" "}
                  {" - "}{" "}
                  {new Date(annualReport.endDate)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </TableCell>

                <TableCell align="center" scope="row">
                  <Tooltip title="Download">
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
                        window.open(
                          `${process.env.REACT_APP_API_URL}/api/dev/cse/downloadAnnualReportDocument?fileName=${annualReport.annualReportFileURL}`,
                          "_blank"
                        );
                      }}
                    >
                      <Download />
                    </IconButton>
                  </Tooltip>
                  {/* <IconButton
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
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
                        href={`${process.env.REACT_APP_API_URL}/api/dev/cse/downloadAnnualReportDocument?fileName=${annualReport.annualReportFileURL}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ all: "unset" }}
                      >
                        View
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href={`${process.env.REACT_APP_API_URL}/api/dev/cse/downloadAnnualReportDocument?fileName=${annualReport.annualReportFileURL}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ all: "unset" }}
                      >
                        Download
                      </a>
                    </MenuItem>
                  </Menu> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                // colSpan={3}
                count={data?.annualReports?.length || 0}
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

export default AnnualReports;
