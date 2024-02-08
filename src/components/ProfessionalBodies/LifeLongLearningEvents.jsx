import { Stack,TableBody,Typography} from '@mui/material'
import React from 'react'
import Table from "@mui/material/Table";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function LifeLongLearningEvents() {
  return (
    <Stack>
        <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        LIFELONG LEARNING WORKSHOPS
      </Typography>
      <Typography>Dear Stakeholders</Typography><br/>
      <Typography>FASSET has once again commenced with the Lifelong Learning online training that is facilitated by partner skills Professional Body. The training is currently running till March and topics have been formulated to assist sector employees to gain competitive edge through fine tuning of skills required in the workplace. Register for a date and time convenient for you for any of the topics below. We look forward to hosting you.</Typography>
      <br/>
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
                The South African Institute of Professional Accountants (SAIPA)
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                Ethics Update
                </TableCell>
                <TableCell align="center" scope="row">
                <p>06 February 2024 (08h30 – 11h00)</p>
                <p>13 February 2024 (08h30 – 11h00)</p>
                </TableCell>
                <TableCell align="center" scope="row">
                Register
                          
                </TableCell>

                
                
              </TableRow>
              </TableBody>
          
            
        </Table>
      </TableContainer>
      <br/>
      <Typography>For any further enquiries please contact lifelonglearning@fasset.org.za | +27 011 476 8570</Typography>
    </Stack>

  )
}

export default LifeLongLearningEvents