import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Divider,
  IconButton,
  // Menu,
  // MenuItem,
  Stack,
  TableFooter,
  TablePagination,
  Tooltip,
  Typography
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";
import { Download } from "@mui/icons-material";

const Downloads = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const { data } = useQuery({
    queryKey: ["downloads"],
    queryFn: async () => {
      return UserQuery.getlAllDocumentsTitle();
    }
  });

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

  console.log(data);

  return (
    <Stack spacing={2} justifyContent="center">
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Downloads
      </Typography>
      <Divider />
      {data?.titles?.length > 0 ? (
        data?.titles?.map((title) => {
          return (
            <Accordion key={title.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.main" }}
              >
                <Typography>{title.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {title.Documents.length > 0 && (
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
                              Document Name
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
                            >
                              FileName
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
                            ? title.Documents.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                            : title.Documents
                          ).map((doc, i) => (
                            <TableRow
                              key={doc.id}
                              sx={{
                                backgroundColor:
                                  i % 2 === 0 ? "action.hover" : ""
                              }}
                            >
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                {i + 1}
                              </TableCell>
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                {doc.documentName}
                              </TableCell>
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                {doc.originalFileName ===
                                "Annual Report.html" ? (
                                  <a
                                    href={`https://fasset.org.za/flipbook/mobile/index.html`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {doc.originalFileName}
                                  </a>
                                ) : (
                                  <a
                                    href={`${
                                      process.env.REACT_APP_API_URL
                                    }/api/dev/cse/downloadDocument?fileName=${
                                      doc.fileName
                                    }.${doc.originalFileName.split(".")[1]}`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {doc.originalFileName}
                                  </a>
                                )}
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
                                      if (
                                        doc.originalFileName ===
                                        "Annual Report.html"
                                      ) {
                                        window.open(
                                          "https://fasset.org.za/flipbook/mobile/index.html",
                                          "_blank"
                                        );
                                      } else {
                                        window.open(
                                          `${
                                            process.env.REACT_APP_API_URL
                                          }/api/dev/cse/downloadDocument?fileName=${
                                            doc.fileName
                                          }.${
                                            doc.originalFileName.split(".")[1]
                                          }`,
                                          "_blank"
                                        );
                                      }
                                    }}
                                  >
                                    <Download />
                                  </IconButton>
                                </Tooltip>

                                {/* <IconButton
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
                                      href={`${
                                        process.env.REACT_APP_API_URL
                                      }/api/dev/cse/downloadDocument?fileName=${
                                        doc.fileName
                                      }.${doc.originalFileName.split(".")[1]}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      style={{ all: "unset" }}
                                    >
                                      View
                                    </a>
                                  </MenuItem>
                                  <MenuItem>
                                    <a
                                      href={`${
                                        process.env.REACT_APP_API_URL
                                      }/api/dev/cse/downloadDocument?fileName=${
                                        doc.fileName
                                      }.${doc.originalFileName.split(".")[1]}`}
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
                              rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: "All", value: -1 }
                              ]}
                              // colSpan={3}
                              count={title.Documents?.length || 0}
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
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })
      ) : (
        <Alert severity="info">No Documents Uploaded</Alert>
      )}
    </Stack>
  );
};

export default Downloads;
