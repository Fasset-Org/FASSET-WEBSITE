import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  // Chip,
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
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../../stateQueries/User";

const TenderDetails = () => {
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

  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["tender"],
    queryFn: async () => {
      return await UserQuery.getTenderById(id);
    }
  });

  const winner =
    (data &&
      data?.tender?.bidders.find(
        (bidder) => bidder.hasOwnProperty("winner") && bidder.winner === true
      )) ||
    null;

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      // sx={{ backgroundColor: "#FFFFFF" }}
      padding={2}
    >
      <Stack
        height={60}
        width="100%"
        component={Paper}
        // border={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        sx={{ borderColor: "primary.main", mb: 2 }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Stack>

      <Stack
        spacing={2}
        border={1}
        borderColor="lightgray"
        width={{ xs: "100%", sm: "100%", md: "50%" }}
        padding={2}
        justifyContent="center"
        component={Paper}
        sx={{ borderRadius: 0 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              color: "primary.main",
              fontSize: 15,
              textAlign: "center"
            }}
          >
            {data?.tender?.tenderName}
          </Typography>
          {/* <Chip label="active" color="success" sx={{ height: 20 }} /> */}
        </Stack>
        <Stack
          justifyContent="space-between"
          direction={{ md: "row", xs: "column", sm: "column" }}
          width="100%"
          alignItems="center"
        >
          <Typography
            fontWeight="bolder"
            sx={{ color: "primary.main", fontSize: { md: 15, xs: 12 } }}
          >
            Date Advertised : {new Date(data?.tender?.createdAt).toDateString()}
          </Typography>

          <Typography
            fontWeight="bolder"
            sx={{ color: "primary.main", fontSize: { md: 15, xs: 12 } }}
          >
            Closing Date :
            {`${new Date(data?.tender?.closingDate).toDateString()} @ ${
              new Date(data?.tender?.closingDate).getHours() > 11
                ? new Date(data?.tender?.closingDate).getHours() +
                  ":" +
                  new Date(data?.tender?.closingDate).getMinutes() +
                  "PM"
                : new Date(data?.tender?.closingDate).getHours() +
                  ":" +
                  new Date(data?.tender?.closingDate).getMinutes() +
                  "AM"
            }`}
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ md: 2 }}
          width="100%"
          alignItems={{ xs: "center", sm: "center" }}
        >
          <Typography fontWeight="bolder">Tender Reference:</Typography>
          <Typography
            textAlign={{ xs: "center", sm: "center" }}
            fontSize={{ xs: 11, sm: 11 }}
            fontWeight={{ xs: "bolder", sm: "bolder" }}
          >
            {data?.tender?.tenderReference}
          </Typography>
        </Stack>

        <Typography fontWeight="bolder">INVITATION TO BID</Typography>

        <Typography fontSize={{ xs: 12 }}>
          {data?.tender?.invitationMessage}
        </Typography>

        <Typography fontSize={{ xs: 12 }}>
          {data?.tender?.bidMessage}
        </Typography>

        <Typography fontSize={{ xs: 12 }} width="100%">
          Please Refer: {data?.tender?.tenderReference} in all correspondence.
          Correspondence without a reference number will not be attended to.
        </Typography>

        <Stack spacing={2} sx={{ color: "error.main" }}>
          {data?.tender?.meetingLink && (
            <>
              <Typography>
                NOTE: A compulsory briefing session will be held on &nbsp;
                {`${new Date(data?.tender?.meetingDate).toDateString()} @ ${
                  new Date(data?.tender?.meetingDate).getHours() > 11
                    ? new Date(data?.tender?.meetingDate).getHours() +
                      ":" +
                      new Date(data?.tender?.meetingDate).getMinutes() +
                      "PM"
                    : new Date(data?.tender?.meetingDate).getHours() +
                      ":" +
                      new Date(data?.tender?.meetingDate).getMinutes() +
                      "AM"
                }`}{" "}
                &nbsp; AM virtually.
              </Typography>

              <Typography>
                Microsoft Teams meeting Join on your computer, mobile app or
                room device&nbsp;
                <a
                  href={data?.tender?.meetingLink}
                  style={{ color: "blue", cursor: "pointer" }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Click here to join the meeting
                </a>
                &nbsp; Meeting ID: {data?.tender?.meetinngId} Passcode:
                {data?.tender?.meetingPasscode}
              </Typography>
            </>
          )}
        </Stack>

        <Typography>
          Bid documentation is available for downloading on this link&nbsp;
          <a
            href={`${process.env.REACT_APP_API_URL}/api/dev/scm/downloadTenderDocument?filename=${data?.tender?.tenderDocument}`}
            download
            target="_blank"
            rel="noreferrer"
          >
            download
          </a>
          &nbsp; or electronically,on request by e-mail:
          <a href={`mailto:${data?.tender?.queryEmail}`}>
            {data?.tender?.queryEmail}
          </a>
        </Typography>

        <Typography>
          The closing date for submissions is &nbsp;
          {`${new Date(data?.tender?.closingDate).toDateString()} @ ${
            new Date(data?.tender?.closingDate).getHours() > 11
              ? new Date(data?.tender?.closingDate).getHours() +
                ":" +
                new Date(data?.tender?.closingDate).getMinutes() +
                "PM"
              : new Date(data?.tender?.closingDate).getHours() +
                ":" +
                new Date(data?.tender?.closingDate).getMinutes() +
                "AM"
          }`}
        </Typography>

        <Typography>
          No late submissions will be considered. Submissions should be
          delivered to: Supply Chain Management, FASSET Offices, First Floor,
          296 Kent Avenue, Randburg, Johannesburg.
        </Typography>

        <Typography>
          The procurement process is administered by FASSET.
        </Typography>

        {data?.tender?.bidders?.length > 0 && (
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
                fontWeight="bolder"
                fontSize={20}
              >
                Date Posted:
                <span style={{ color: "#1f2f79", fontWeight: "lighter" }}>
                  {new Date(data?.tender.bidders[0].datePosted).toDateString()}
                </span>
              </Typography>

              <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                <Table aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "primary.main" }}>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
                      >
                        Name Of Bidder
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
                      >
                        B-BBEE Levels
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? data?.tender?.bidders?.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : data?.tender?.bidders
                    ).map((bidder, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          backgroundColor: i % 2 === 0 ? "action.hover" : ""
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {bidder.bidderName}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {bidder.bbeeLevel}
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
                        count={data?.tender?.bidders?.length || 0}
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
        )}

        {winner && (
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "primary.main" }}
            >
              <Typography>Awarded Bidder</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                textAlign="center"
                fontWeight="bolder"
                fontSize={20}
              >
                Date Posted:
                <span style={{ color: "#1f2f79", fontWeight: "lighter" }}>
                  {new Date(winner.datePosted).toDateString()}
                </span>
              </Typography>

              <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                <Table aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "primary.main" }}>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
                      >
                        Name Of Bidder
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
                      >
                        B-BBEE Levels
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" component="th" scope="row">
                        {winner.bidderName}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {winner.bbeeLevel}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        )}

        <Button variant="contained" fullWidth>
          <a
            href={`${process.env.REACT_APP_API_URL}/api/dev/scm/downloadTenderDocument?filename=${data?.tender?.tenderDocument}`}
            download
            target="_blank"
            rel="noreferrer"
            style={{ all: "unset" }}
          >
            Download Tender Document
          </a>
        </Button>
      </Stack>
    </Stack>
  );
};

export default TenderDetails;
