import { Stack, Typography } from "@mui/material";
import React from "react";

const MandatoryGrants = () => {
  return (
    <Stack spacing={2}>
    <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: 'uppercase' }}
      >
        Mandatory Grants
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Background
      </Typography>

      <Typography>
        The Skills Development Levies Act (No 9 of 1999) (SDLA) established a
        compulsory levy scheme for the purpose of funding education and training
        as envisaged in the Skills Development Act (No 97 of 1998) (SDA). The
        levy became payable with effect from 1 April 2000. The Department of
        Higher Education and Training (DHET) in conjunction with the various
        Setas, is responsible for administering the Act, while the South African
        Revenue Service (SARS) is responsible for the collection of levies.
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        How to register for the SDL
      </Typography>
      <Typography>
        All liable organisations register for the SDL via the EMP101 form
        (application for registration) for which SARS issues an EMP103 form
        (notice of registration) on successful registration of the employer. If
        the firm already has an SDL number and the firm’s payroll is in excess
        of R500,000 per annum, the employer is to submit monthly returns via the
        EMP201 form. SARS issues an EMP213 as remittance advice. If the firm
        already has an SDL number and the firm’s payroll is less than R500,000
        per annum, no information (a nil return) is submitted on the next EMP201
        form. With e-filing, SARS greys out the SDL field. Should the employer
        become SDL paying subsequently, they must advise SARS of this (to free
        up the greyed area).
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Amounts payable
      </Typography>
      <Typography>
        The amount payable is calculated as 1% (one percent) of the total amount
        of remuneration paid to employees. Any prescribed exclusions that are
        not leviable are subtracted from the total remuneration
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Skills Development Plan
      </Typography>
      <Typography>
        Employers can claim 20% of total levy contributions annually through the
        submission of an approved Skills Development Plan (SDP). The SDP is
        submitted online and is due by latest 30 April of each year. Fasset uses
        SDP information to determine sector skills needs and revises its skills
        development strategy accordingly. Accuracy of data is therefore of the
        utmost importance. Since no extensions can be granted for submission,
        employers are urged to collect and collate the required data as soon as
        possible. It should be noted that an approved SDP is a requirement for
        participation in any Fasset discretionary grants
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Mandatory Grant
      </Typography>
      <Typography fontWeight="bolder">
        Criteria for Acceptance and Payment of the Mandatory Grant
      </Typography>

      <Typography>
        The criteria for the acceptance and payment of the Mandatory Grant by
        Fasset are as follows: Employer registered with Fasset. SDL payments to
        SARS up to date. SDP (based on regulated format as published in the
        Government Gazette) correctly completed and submitted in the format
        required by Fasset. Deadline for submission is 30 April, or within 6
        months of new employers registering for the SDL. Authorized signatories
        have signed where required Proof of the company’s banking details
        submitted (i.e. a cancelled cheque, bank statement or letter from the
        bank) in instances where such details have been changed A new employer
        is one that has been operating for less than six months. In this case,
        we require an EMP 103 form from SARS as proof that the organisation is
        new. In an organisation were there are no employees we also accept a nil
        return
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Grant Payment Schedule
      </Typography>
      <Typography>
        Grant payments are made via a direct EFT into the organisation’s bank
        account. The reference on the bank statement is the Skills Development
        Levy number of the company. Fasset receives levies 3 to 4 months in
        arrears and is only able to pay grants if accurate levy information has
        been received. Mandatory Grant payments are scheduled as follows:
        February May August November
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Banking Details
      </Typography>

      <Typography>
        For Fasset to pay grants, current banking details are required. An
        original stamped letter issued by the bank, or an original cancelled
        cheque, is required to process any changes in banking details.
      </Typography>

      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        INTER-SETA TRANSFER (IST)
      </Typography>
      <Typography>
        An IST is the process of transferring a company from one Seta to
        another. The transfer may be done under any of the following
        circumstances: The company has been incorrectly registered with a Seta
        as the main business activity does not match the industrial scope of the
        Seta The main business of the enterprise has changed since the previous
        registration with SARS and now better suits the industrial scope of
        another Seta The employer falls within the jurisdiction of more than one
        Seta, and the employer's application to transfer to the new Seta is
        motivated by: the composition of the workforce, the amount of
        remuneration paid or payable to the different categories of employees;
        and the training needs of the different categories of employees Should
        an organisation wish to move from another Seta to Fasset, an IST 01 form
        must be submitted to the Seta with which the organisation is currently
        registered. Should a company wish to move out of Fasset to another Seta
        the IST 01 form must be submitted to Fasset. The Seta must in turn
        approve the application and forward the signed application to the
        Department of Higher Education and Training (DHET). DHET then verifies
        the request and submits the form to the South African Revenue Services
        (SARS) who will process the change. Please note that this process could
        be time-consuming. If the application is declined by the relevant Seta,
        an organisation can dispute this with the Seta in question. If the
        transfer is still not effected, the matter can be escalated to DHET.
        Although the Seta facilitates this process, the Seta cannot be held
        responsible for changes not being made timeously. It is ultimately the
        responsibility of the organisation to ensure that they are registered
        with the correct Seta and to monitor the process and ensure the transfer
        is completed.
      </Typography>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main" }}
      >
        Grant Payment Queries
      </Typography>

      <Typography>
        Please contact the PQA Department (011) 476-8570 with any enquiries in
        this regard or consult the page for additional information
      </Typography>
    </Stack>
  );
};

export default MandatoryGrants;
