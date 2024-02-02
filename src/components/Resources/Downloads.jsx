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
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TableFooter,
  TablePagination,
  Typography
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const Downloads = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

  return (
    <Stack spacing={1} justifyContent="center">
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Downloads
      </Typography>
      <Typography>TIPS for Hassle-free Downloading Click here to download the Acrobat (PDF) Reader Software</Typography>
      <Typography>
        <ol>
          <li>Download documentation is available in either Microsoft Word or Adobe PDF format. If neither of these formats is suitable for your use, or if you encounter problems when downloading a file, please request an e-mail or fax version of the document you require from our Call Centre on 086 101 0001.</li>
          <li>Adobe PDF files open in a new browser with the 'Save' and 'Save as...' options disabled in the drop-down “File” menu. In most instances the new browser will offer a 'Save' button which, when selected, will allow you to save the document.
            Try right clicking on the initial file link and choose the 'Save Target As...' option to save.</li>
          <li>Certain files require a large amount of memory to download, open, or display correctly. Please be patient and allow sufficient time for file operations to complete.</li>
          <li>It is often quicker to save a file to a drive on your computer before opening as opposed to opening from the website and then saving it.</li>
          <li>WinZip files (*.zip files), require the WinZip software package which you can download for free from www.winzip.com.</li>
        </ol>
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>2023-2024 DG WINDOW APPLICATION FORMS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                      Description
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
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row, i) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        backgroundColor: i % 2 === 0 ? "action.hover" : ""
                      }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        Employed Bursary
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        This bursary is for learners that are employed by FASSET
                        registered employer or organisation.
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
                          <MenuItem onClick={handleClose}>View</MenuItem>
                          <MenuItem onClick={handleClose}>Download</MenuItem>
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
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "primary.main" }}
        >
          <Typography>Annual Performance and Strategic Plan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                      Description
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
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row, i) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        backgroundColor: i % 2 === 0 ? "action.hover" : ""
                      }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        Employed Bursary
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        This bursary is for learners that are employed by FASSET
                        registered employer or organisation.
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
                          <MenuItem onClick={handleClose}>View</MenuItem>
                          <MenuItem onClick={handleClose}>Download</MenuItem>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default Downloads;
