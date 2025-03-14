import React from "react";
import Typography from "@mui/material/Typography";
import { Divider, Stack, useMediaQuery, useTheme } from "@mui/material";
import img from "../../images/SkillProgramme.png";
import FundedCourse from "../../files/Employers/Projects_that_are_funded_Fasset_2019.docx";

const SkillsProgramme = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Skills Programme
      </Typography>
      <Divider />
      <Typography textAlign="justify">
        FASSET has adopted a pipeline approach to funding. The pipeline approach
        seeks to identify the education and training value chain of people who
        want to enter into the sector or who are progressing up the value chain
        within the sector.
      </Typography>

      <img
        src={img}
        alt=""
        width={xs || sm ? "100%" : '100%'}
        height={xs || sm ? "auto%" : 300}
        style={{ objectFit: "contain" }}
      />
      <Divider />
      <Typography>
        To facilitate skills development, transformation and social upliftment
        in the sector in pursuance of NSDS Targets FASSET funds programmes that
        meet specific criteria in this regard, by utilising unclaimed grant
        money. FASSET's Board earmarks, on an annual basis, areas of high skills
        need within the sector, based on the Sector Skills Plan and other
        research. Strategic project interventions are identified and are
        advertised annually in this regard. All new projects are approved by the
        Grants Adjudication Committee (GAC) All Bridging Programmes are geared
        towards addressing the underprivileged demographic profile within the
        sector, and all are therefore in line with the NSDS targets. The open
        windows are advertised on the FASSET website () . Potential service
        providers are advised to regularly check these public sources of
        information for new and updated information. Please see the list below
        of the projects that are currently running. Employers interested in
        accessing graduates should contact the FASSET Projects Department on 011
        476 8570. Learners wishing to participate in funded projects must check
        the list of approved institution.
      </Typography>

      <Typography>
        {" "}
        <a
          href={FundedCourse}
          style={{ color: "#163683", cursor: "pointer", fontWeight: 600 }}
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>{" "}
        to download the full list of bridging programmes FASSET-funded training
        interventions: Academic Bridging Programmes (PIVOTAL and NON-PIVOTAL)
        that lead to academic and/or professional body
        qualifications/designations
      </Typography>

      <Typography>
        This enables FASSET to partner with public providers from Universities
        and Universities of Technology registered with DHET; and Professional
        Bodies in the FASSET sector to ensure that learners obtain formal
        qualifications that will enhance their chances of securing learnerships,
        internships or full time employment in the broader economy including in
        the FASSET sector.
      </Typography>

      <Typography>
        The outcome of this intervention is that learners will have progressed
        from one academic level to the next; or obtained a qualification and/or
        a designation, or will have been placed onto learnerships, internships
        or in full time employment and that FASSET would have formed stronger
        partnerships with public providers and professional bodies. Eligible
        Learners: African Black, Coloured, and learners with disabilities are
        eligible to apply for FASSET programmes. Learners must have the required
        potential to succeed.
      </Typography>

      <Typography>
        For learnership programmes, the following is applicable: The learnership
        may be registered with FASSET or with another Seta (as defined in the
        Skills Development Act 97 of 2000 as amended). An official confirmation
        letter of the registered learner should be attached to the application
        in the case of a registered learner i.e. a learner letter of
        commencement. The learnership programme must not be less than 12 months,
        on a full-time basis.
      </Typography>
    </Stack>
  );
};

export default SkillsProgramme;
