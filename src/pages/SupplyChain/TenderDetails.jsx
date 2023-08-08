import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
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
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
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

const TenderDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(xs, sm)

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
    <Stack
      justifyContent="center"
      alignItems="center"
      // sx={{ backgroundColor: "#FFFFFF" }}
      padding={2}
    >
      <Stack
        spacing={2}
        border={1}
        borderColor="lightgray"
        width={{ xs: "100%", sm: "100%", md: "70%" }}
        padding={2}
        justifyContent="center"
        alignItems="center"
        component={Paper}
        sx={{ borderRadius: 0 }}
      >
        <Typography
          sx={{ fontWeight: "bolder", color: "primary.main", fontSize: 20 }}
        >
          NETWORK UPGRADE
        </Typography>
        <Stack
          justifyContent="space-between"
          direction={{ md: "row", xs: "column", sm: "column" }}
          width="100%"
          alignItems="center"
        >
          <Typography
            fontWeight="bolder"
            sx={{ color: "primary.main", fontSize: 15 }}
          >
            Date Advertised : 03 July 2023
          </Typography>
          {!(xs || sm) && (
            <Button variant="contained" sx={{ width: 180 }}>
              Donwload
            </Button>
          )}
          <Typography
            fontWeight="bolder"
            sx={{ color: "primary.main", fontSize: 15 }}
          >
            Closing Date : 30 July 2023
          </Typography>
        </Stack>
        <Stack direction={{xs: 'column', sm: 'column', md: 'row'}} spacing={{md: 2}} width="100%">
          <Typography fontWeight="bolder">Tender Reference</Typography>
          <Typography>FAS/TM/ICT/NET-INFRA-UPGRADE/CON3254/23</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography fontWeight="bolder">INVITATION TO BID</Typography>

          <Typography>
            Fasset is a statutory body established through the Skills
            Development Act No 97 of 1998, as amended. The goal of the Act in
            respect of the Fasset Seta is ‘To facilitate the achievement of
            world-class finance and accounting skills’ in the sub-sectors that
            fall with the sector scope of Fasset i.e., Finance and Accounting
            Services.
          </Typography>

          <Typography>
            FASSET invites suitable service providers to submit proposals to
            supply, deliver, install a new network nfrastructure as well as
            maintenance for a period of 36 months.
          </Typography>

          <Typography>
            Please Tender Reference:
            <span style={{ fontWeight: "bolder" }}>
              FAS/TM/ICT/NET-INFRA-UPGRADE/CON3254/23
            </span>
            in all correspondence. Correspondence without a reference number
            will not be attended to.
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ color: "error.main" }}>
          <Typography>
            NOTE: A compulsory briefing session will be held on Friday 02 June
            2023 at 09:00 AM – 10:30 AM virtually.
          </Typography>

          <Typography>
            Microsoft Teams meeting Join on your computer, mobile app or room
            device&nbsp;
            <span style={{ color: "blue", cursor: "pointer" }}>
              Click here to join the meeting
            </span>
            &nbsp; Meeting ID: 357 365 426 44 Passcode: Gm2Rhw
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography>
            Bid documentation is available for downloading from the Fasset
            website (www.fasset.org.za) or electronically,on request by e-mail,
            Mathapelo Makomene at mathapelo.makomene@fasset.org.za
          </Typography>

          <Typography>
            <span>Click here</span> to download the tender information.
          </Typography>

          <Typography>
            The closing date for submissions is 02 June 2023, at 11H00.
          </Typography>

          <Typography>
            No late submissions will be considered. Submissions should be
            delivered to: Supply Chain Management, Fasset Offices, First Floor,
            296 Kent Avenue, Randburg, Johannesburg.
          </Typography>

          <Typography>
            The procurement process is administered by Fasset.
          </Typography>
        </Stack>

        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "primary.main" }}
          >
            <Typography>Bids Received</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              textAlign="center"
              fontFamily="Helvetica Neue"
              fontWeight="bolder"
              fontSize={20}
            >
              Date Posted: 30 June 2022
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
                        2022/2023
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        FASSET 2023-24 SSP Final Annual Update
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
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default TenderDetails;
