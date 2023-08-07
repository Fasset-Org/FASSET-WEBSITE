import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import DownloadCard from "../DownloadCard";

const Policies = () => {
  return (
    <Stack spacing={1}>
      <Typography
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Policies
      </Typography>
      <Typography textAlign="justify">
        Fasset’s Language Policy Fasset’s Language Policy adheres to the
        requirement of the Use of Official Languages Act, No. 12 of 2012 and is
        aligned to the principle of promoting functional multilingualism as
        enshrined in the Constitution of the Republic of South Africa, 1996 and
        Bill of Rights contained therein. to download the policy.{" "}
        <Link>Click here</Link> Fasset's Proatia Manual
      </Typography>
      <Typography textAlign="justify">
        Fasset has in place a Proatia Manual in terms of Section 14 of the
        Promotion of Access to Information Act, 2000 (Act No. 2 of 2000) ("the
        Act"). The Act gives effect to the provisions of Section 32 of the
        Constitution which provides for the right of access to information held
        by the State and to information held by another person that is required
        for the exercise and / or protection of any right. The provision of any
        information in addition to that specifically required in terms of
        Section 14 of the Act does not create any contractual right or
        entitlement to receive such information, other than in terms of the Act.
        The complete document can be downloaded below.
      </Typography>

      <Grid container spacing={{md: 2}} rowGap={{xs: 2}}>
        <Grid item xs={12} md={4}>
          <DownloadCard fileName="English Version" />
        </Grid>
        <Grid item xs={12} md={4}>
          <DownloadCard fileName="Afrikaans Version" />
        </Grid>
        <Grid item xs={12} md={4}>
          <DownloadCard fileName="Xhosa Version" />
        </Grid>
      </Grid>
      <Typography fontWeight="bold">Fraud Policy Statement</Typography>
      <Typography textAlign="justify">
        Fasset’s Fraud Prevention Plan is implemented as a means of
        understanding and managing our fraud risks. A key element of this plan
        is Fasset's declaration of zero tolerance towards crime. The Fraud
        Policy Statement documented below states Fasset's intentions in this
        regard clearly: Fraud Policy Statement The Financial and Accounting
        Services Sector Education and Training Authority (Fasset) is committed
        to protecting its revenue, expenditure, assets and its reputation from
        any attempt by any person to gain financial or other benefit in an
        unlawful, dishonest or unethical manner. Coupled with this Statement,
        Fasset has implemented a Charter for the implementation of the Fraud
        Prevention Plan and to give effect to the Fraud Policy Statement. This
        Charter is documented below: Anti-Fraud Charter In implementing the
        Fraud Policy of Fasset: We are maintaining an anti-fraud environment
        throughout Fasset The fraud prevention plan is being implemented
        throughout Fasset. Fraud reduction is a priority in all governing
        structures (e.g. the Management Board, the various working committees,
        and the Audit Committee). We will continue to embrace and acknowledge
        the contribution of all employees and members of the community who
        assist in the combating of fraud and in the prosecution of fraudsters.
        We understand and manage our risks Our fraud risks are reviewed and
        assessed on a regular basis. Cognisance to fraud risk is given in all
        procedure changes. Internal controls and audit measures are in place to
        identify and manage fraud risk. We are proactive in defending our assets
        We are forming strategic alliances in combating fraud. We are
        establishing a profile on potential fraudsters. We are monitoring direct
        and indirect losses incurred via fraud, through effective information
        and communication. We react swiftly when a crime is uncovered We react
        swiftly and appropriately when a crime is uncovered. In order to assist
        Fasset in giving effect to our Fraud Prevention Plan, we encourage all
        stakeholders to make use of the Fasset Tip Offs Hotline (0800 205 054)
        to notify Fasset of any suspected fraudulent activities impacting on
        Fasset.
      </Typography>
      <Typography fontWeight="bold">Publication Distribution</Typography>
      <Typography textAlign="justify">
        Fasset would like to advise all publishers of publications which are not
        official Government issues that we are not able to accept for
        distribution to our membership any deliveries of stocks of newpapers,
        newsletters, journals or magazines. Any such unsolicited deliveries made
        to the Fasset offices will not be accepted. There may be exceptional
        circumstances where a specific edition of a specific publication will be
        accepted by Fasset, but prior arrangements are to be made with the
        Fasset manager responsible for the subsequent distribution and delivery
        of stocks is to be addressed to the specified manager and accepted by
        them.
      </Typography>
    </Stack>
  );
};

export default Policies;
