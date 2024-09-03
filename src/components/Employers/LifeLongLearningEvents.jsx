import {
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";
// import Table from "@mui/material/Table";

// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function LifeLongLearningEvents() {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        LIFELONG LEARNING WORKSHOPS
      </Typography>
      <Divider />
      <Typography fontWeight="bolder">Dear Stakeholders</Typography>
      <Typography>
        FASSET has once again commenced with the Lifelong Learning online
        training that is facilitated by partner skills Professional Bodies. The
        trainings are currently running from September 2024 till March 2025 and
        topics have been formulated to assist sector employees to gain
        competitive edge through fine tuning of skills required in the
        workplace. Register for a date and time convenient for you for any of
        the topics below. We look forward to hosting you.
      </Typography>
      {/* <Typography>Events will be added here</Typography> */}
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
                Service Provider
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Topic
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Date and Times of Training
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Registration link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                1
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                The South African Institute of Financial Markets (SAIFM)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>Blockchain Technology</Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>03 September 2024 (10h00 – 12h30)</span>
                <br />
                <span>20 September 2024 (10h00 – 12h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://app.glueup.com/event/fasset-blockchain-and-cyber-security-in-financial-markets-webinar-2-5hr-116812/"
                    style={{
                      color: "#163683",
                      cursor: "pointer",
                      fontWeight: 600
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </span>
                <br />
                <span>
                  <a
                    href="https://app.glueup.com/event/fasset-blockchain-in-financial-markets-webinar-2-5hr-118080/"
                    style={{
                      color: "#163683",
                      cursor: "pointer",
                      fontWeight: 600
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" component="th" scope="row"></TableCell>
              <TableCell align="center" component="th" scope="row"></TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>Cyber Security in Financial Markets</Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>11 September 2024 (10h00 – 12h30)</span>
                <br />
                <span>27 September 2024 (10h00 – 12h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://app.glueup.com/event/fasset-cyber-security-in-financial-markets-webinar-2-5hr-118076/"
                    style={{
                      color: "#163683",
                      cursor: "pointer",
                      fontWeight: 600
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </span>
                <br />
                <span>
                  <a
                    href="https://app.glueup.com/event/fasset-cyber-security-in-financial-markets-webinar-2-5hr-118079/"
                    style={{
                      color: "#163683",
                      cursor: "pointer",
                      fontWeight: 600
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Typography>
        For any further enquiries please contact{" "}
        <a href={`mailto:lifelonglearning@fasset.org.za`}>
          lifelonglearning@fasset.org.za
        </a>{" "}
        | +27 011 476 8570
      </Typography>
    </Stack>
  );
}

export default LifeLongLearningEvents;
