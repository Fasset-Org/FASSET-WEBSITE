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
            {/* <TableRow>
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
            </TableRow> */}

            {/* <TableRow>
              <TableCell align="center" component="th" scope="row">
                1
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {" "}
                South African Institute of Financial Markets (SAIFM)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <span>Cyber Security in Financial Markets</span>
                <br />
                <span>Blockchain Technology</span>
                <br />
                <span>Blockchain Technology</span>
                <br />
                <span>Cyber Security in Financial Markets</span>
              </TableCell>

              <TableCell align="center" scope="row">
               
                <span>23 October 2024 (10h00 – 12h30)</span>
                <br />
                <span>28 October 2024 (10h00 – 12h30)</span>
                <br />
                <span>30 October 2024 (10h00 – 12h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://app.glueup.com/event/fasset-blockchain-in-financial-markets-webinar-2-5hr-120722/"
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
                    href="https://app.glueup.com/event/fasset-blockchain-in-financial-markets-webinar-2-5hr-120723/"
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
                    href="https://app.glueup.com/event/fasset-cyber-security-in-financial-markets-webinar-2-5hr-120108/"
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
            </TableRow> */}

            {/* <TableRow>
              <TableCell align="center" component="th" scope="row">
                1
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                The Chartered Institute of Management Accounting NPC (CIMA NPC)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>
                  The Ethical Compass: Guiding South Africa’s Financial Future
                </Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>12 February 2025 (14h00 – 16h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://cvent.me/Q0qnbv"
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
            </TableRow> */}

            {/* <TableRow>
              <TableCell align="center" component="th" scope="row">
                2
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                The Institute of Internal Audit South Africa (IIASA)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>The Global Internal Audit Standards</Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>12 November 2024 (17h00 – 19h30)</span>
                <br />
                <span>03 December 2024 (17h00 – 19h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://iiasa.site-ym.com/events/register.aspx?id=1888605"
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
                    href="https://iiasa.site-ym.com/events/register.aspx?id=1888606"
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

            New Record

            <TableRow>
              <TableCell align="center" component="th" scope="row">
                3
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                South African Institute of Taxation (SAIT)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>
                  Budget & Tax Updates (2024 SARS operations and legislative
                  updates)
                </Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>12 November 2024 (10h00 - 12h30)</span>
                <br />
                <span>26 November 2024 (10h00 - 12h30)</span>
                <br />
                <span>03 December 2024 (10h00 - 12h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://www.thesait.org.za/events/EventDetails.aspx?id=1897956&group="
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
                    href="https://www.thesait.org.za/events/EventDetails.aspx?id=1897957&group="
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
                    href="https://www.thesait.org.za/events/EventDetails.aspx?id=1897958&group="
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
            </TableRow> */}

            {/* Another New Record */}

            <TableRow>
              <TableCell align="center" component="th" scope="row">
                1
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                The South African Institute of Financial Markets (SAIFM)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>
                  {/* <span>Cybersecurity in Financial Markets</span>
                  <br /> */}
                  {/* <span>Blockchain Technology in Financial Markets</span>
                  <br /> */}

                  <span>Blockchain Technology in Financial Markets</span>
                  <br />
                  <span>Cybersecurity in Financial Markets</span>
                  <br />
                  <span>Blockchain Technology in Financial Markets</span>
                  <br />
                  <span>Cybersecurity in Financial Markets</span>
                </Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                {/* <span>19 February 2025 (10h00 – 12h30)</span>
                <br /> */}
                {/* <span>09 April 2025 (10h00 – 12h30)</span>
                <br /> */}
                <span>07 May 2025 (10h00 – 12h30)</span>
                <br />
                <span>30 May 2025 (10h00 – 12h30)</span>
                <br />
                <span>10 May 2025 (10h00 – 12h30)</span>
                <br />
                <span>27 June 2025 (10h00 – 12h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                {/* <span>
                  <a
                    href="https://saifm.co.za/webinar/"
                    style={{
                      color: "#163683",
                      cursor: "pointer",
                      fontWeight: 600
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Registration Closed
                  </a>
                </span>
                <br /> */}
                {/* <span>
                  <a
                    href="hhttps://saifm.co.za/webinar/"
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
                <br /> */}
                <span>
                  <a
                    href="https://saifm.co.za/webinar/"
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
                    href="https://saifm.co.za/webinar/"
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
                    href="https://saifm.co.za/webinar/"
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
                    href="https://saifm.co.za/webinar/"
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
              <TableCell align="center" component="th" scope="row">
                2
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                Institute of Risk Management South Africa (IRMSA)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>
                  {/* <span>Cybersecurity in Financial Markets</span>
                  <br /> */}
                  {/* <span>Blockchain Technology in Financial Markets</span>
                  <br /> */}

                  <span>
                    Driving Digital Transformation: Navigating Financial & Risk
                    Management
                  </span>
                </Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>20 May 2025 (14h00 – 16h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://www.irmsa.org.za/events/register.aspx?id=1945252"
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
              <TableCell align="center" component="th" scope="row">
                3
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                Institute of Internal Auditors South Auditors (IIASA)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>
                  <span>Global Internal Audit Standards Update</span>
                </Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>12 May 2025 (17h00 – 19h30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="https://www.iiasa.org.za/event/Global_Standards_Update_12May2025"
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
              <TableCell align="center" component="th" scope="row">
                4
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                Association of Certified Fraud Examiners (ACFE SA)
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Typography>
                  <span>
                    Detecting Fraud with Data Analytics & Criminal
                    Investigations
                  </span>
                </Typography>
              </TableCell>

              <TableCell align="center" scope="row">
                <span>10 July 2025 (09h10 - 11:30)</span>
              </TableCell>
              <TableCell align="center" scope="row">
                <span>
                  <a
                    href="hhttps://acfesa.glueup.com/event/acfe-sa-fasset-lifelong-learning-event-10-july-2025-139424/"
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
