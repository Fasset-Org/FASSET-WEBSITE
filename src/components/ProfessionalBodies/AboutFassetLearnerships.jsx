import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Divider,
  IconButton,
  Stack,
  TableFooter,
  TablePagination,
  Typography
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import LocalGovernment from "../../files/Professional-Bodies/11_Advanced_Certificate_Local_Government_Accounting_.pdf";
import AccountingTechinitian from "../../files/Professional-Bodies/8_Certificate_Accounting_Technician_.pdf";
import FurtherEducation from "../../files/Professional-Bodies/8_Certificate_Accounting_Technician_1_.pdf";
import DiplomaAccounting from "../../files/Professional-Bodies/9_Diploma_Accounting_Technician_.pdf";
import CertificateAccounting from "../../files/Professional-Bodies/Certificate_Accounting.pdf";
import AdvanceForensic from "../../files/Professional-Bodies/Advanced_Certificate_Forensic_Practitioner_14_02_2017w.pdf";
import AccTechnitian from "../../files/Professional-Bodies/acca_cat_learnership.pdf";
import ChateredAccountant from "../../files/Professional-Bodies/1_Professional_Qualification_Chartered_Certified_Accountant.pdf";
import BusinessAccounting from "../../files/Professional-Bodies/5_CIMA_CMA_NQF5.docx";
import ManagementAccounting from "../../files/Professional-Bodies/4_CIMA_CMA_NQF6.docx";
import ChateredManagementAccounting from "../../files/Professional-Bodies/3_CIMA_CMA_NQF7.docx";
import CSIChateredAccounting from "../../files/Professional-Bodies/29_Professional_Qualification_Management_and_.Administration.docx";
import CSIGovernance from "../../files/Professional-Bodies/27_Professional_Qualification_Governance_Administration.docx";
import CSIProfessional from "../../files/Professional-Bodies/28_Professional_Advanced_Qualification_Governance_and_Administration.docx";
import CSIProfessionalPost from "../../files/Professional-Bodies/30_Professional_Post-Graduate_Qualification_Company_Secretarial_and_Governance_Practice.docx";
import DebtRecovery from "../../files/Professional-Bodies/22_FET_Certificate_Debt_Recovery.pdf";
import BookKeeping from "../../files/Professional-Bodies/13_National_Certificate_Bookkeeping.pdf";
import BookKeeper from "../../files/Professional-Bodies/17_Further_Education_and_Training_Certificate_Bookkeeping.pdf";
import SectorAccounting from "../../files/Professional-Bodies/18_Certificate_Public_Sector_Accounting.pdf";
import FinanceManagement from "../../files/Professional-Bodies/15_National_Certificate_Small_Business_Financial_Management.pdf";
import OfficeAdministration from "../../files/Professional-Bodies/16_Certificate_Office_Administration.pdf";
import SeniorOfficeAdministration from "../../files/Professional-Bodies/Senior_Office_Administrator.pdf";
import TechnicalFinancialAccounting from "../../files/Professional-Bodies/14_National_Diploma_Technical_Financial_Accountant.pdf";
import PublicSectorAcccounting from "../../files/Professional-Bodies/19_Diploma_Public_Sector_Accounting.pdf";
import InternalAuditing from "../../files/Professional-Bodies/24_Certificate_General_Internal_Auditing.docx";
import ChateredAccountingAuditing from "../../files/Professional-Bodies/21_SAICA _Chartered Accountant_Auditing.docx";
import AccountingBusiness from "../../files/Professional-Bodies/6_Post_Graduate_Professional_Qualification_Professional_Accountant_in_Business.pdf";
import ProfessionalAccountant from "../../files/Professional-Bodies/SAIPA_-_Professional_Accountant_in_.Practice.docx";
import VisibilityIcon from "@mui/icons-material/Visibility";

const rows = [
  {
    title: "Certificate: Local Government Accounting",
    NQLevel: "3",
    learnershipCode: "01/Q010026/00/120/3",
    SAQAIdNo: "59751",
    fileUrl: LocalGovernment
  },

  {
    title: "Certificate: Accounting Technician",
    NQLevel: "3",
    learnershipCode: "01/Q010036/00/120/3",
    SAQAIdNo: "73710",
    fileUrl: AccountingTechinitian
  },
  {
    title: "Further Education and Training Certificate: Accounting Technician",
    NQLevel: "4",
    learnershipCode: "01/Q010038/00/120/4",
    SAQAIdNo: "77143",
    fileUrl: FurtherEducation
  },
  {
    title: "Advanced Certificate: Local Government Accounting",
    NQLevel: "4",
    learnershipCode: "01/Q010037/00/120/4",
    SAQAIdNo: "73710",
    fileUrl: DiplomaAccounting
  },
  {
    title: "Certificate: Accounting",
    NQLevel: "5",
    learnershipCode: "01/Q010039/00/120/5",
    SAQAIdNo: "80189",
    fileUrl: CertificateAccounting
  },

  {
    title: "Advanced Certificate: Forensic Practitioner",
    NQLevel: "5",
    learnershipCode: "01/Q010035/00/120/6",
    SAQAIdNo: "67269",
    fileUrl: AdvanceForensic
  },

  {
    title: "Certificate: Certified Accounting Technician",
    NQLevel: "5",
    learnershipCode: "01/Q010013/00/390/5",
    SAQAIdNo: "20397",
    fileUrl: AccTechnitian
  },
  {
    title: "Chartered Certified Accountant",
    NQLevel: "8",
    learnershipCode: "01/Q010005/00/780/7",
    SAQAIdNo: "	63550",
    fileUrl: ChateredAccountant
  },
  {
    title: "National Certificate: Business Accounting",
    NQLevel: "5",
    learnershipCode: "01/Q010016/00/120/5",
    SAQAIdNo: "24418",
    fileUrl: BusinessAccounting
  },

  {
    title: "National Diploma : Management Accounting",
    NQLevel: "6",
    learnershipCode: "01/Q010017/00/240/6",
    SAQAIdNo: "24406",
    fileUrl: ManagementAccounting
  },

  {
    title: "Professional Qualification: Chartered Management Accountant",
    NQLevel: "7",
    learnershipCode: "01/Q010012/00/930/7",
    SAQAIdNo: "20400",
    fileUrl: ChateredManagementAccounting
  },

  {
    title: "CIS Professional Qual. Management and Administration",
    NQLevel: "6",
    learnershipCode: "01/Q010032/00/130/5",
    SAQAIdNo: "60653",
    fileUrl: CSIChateredAccounting
  },

  {
    title: "CIS Professional Advanced Qualification: Governance and Admin",
    NQLevel: "6",
    learnershipCode: "01/Q010033/00/120/6",
    SAQAIdNo: "60655",
    fileUrl: CSIGovernance
  },
  {
    title:
      "CIS Professional Post – Graduate Qualification: Company Secretarial and Governance Practice",
    NQLevel: "8",
    learnershipCode: "01/Q010030/00/120/7",
    SAQAIdNo: "	60654",
    fileUrl: CSIProfessional
  },
  {
    title: "CIS Professional Qual. Governance and Admin",
    NQLevel: "6",
    learnershipCode: "01/Q010034/00/120/5",
    SAQAIdNo: "60651",
    fileUrl: CSIProfessionalPost
  },
  {
    title: "Further Education and Training Certificate: Debt Recovery",
    NQLevel: "4",
    learnershipCode: "01/Q010024/26/149/4",
    SAQAIdNo: "49021",
    fileUrl: DebtRecovery
  },
  {
    title: "National Certificate: Bookkeeping",
    NQLevel: "3",
    learnershipCode: "01/Q010027/26/120/3",
    SAQAIdNo: "58375",
    fileUrl: BookKeeping
  },

  {
    title: "Further Education and Training Certificate: Bookkeeper",
    NQLevel: "4",
    learnershipCode: "01/Q010028/28/130/4",
    SAQAIdNo: "58376",
    fileUrl: BookKeeper
  },

  {
    title: "National Certificate: Public Sector Accounting",
    NQLevel: "4",
    learnershipCode: "01/Q010019/00/120/4",
    SAQAIdNo: "20352",
    fileUrl: SectorAccounting
  },

  {
    title: "National Certificate: Small Business Financial Management",
    NQLevel: "4",
    learnershipCode: "01/Q010023/24/120/4",
    SAQAIdNo: "	48736",
    fileUrl: FinanceManagement
  },

  {
    title: "Certificate: Office Administration",
    NQLevel: "5",
    learnershipCode: "01/Q010021/00/120/5",
    SAQAIdNo: "23618",
    fileUrl: OfficeAdministration
  },

  {
    title: "Senior Office Administrator",
    NQLevel: "5",
    learnershipCode: "01/Q010040/00/240/5",
    SAQAIdNo: "23619",
    fileUrl: SeniorOfficeAdministration
  },

  {
    title: "National Diploma: Technical Financial Accounting",
    NQLevel: "5",
    learnershipCode: "01/Q010022/28/251/5",
    SAQAIdNo: "36213",
    fileUrl: TechnicalFinancialAccounting
  },

  {
    title: "Diploma : Public Sector Accounting",
    NQLevel: "5",
    learnershipCode: "01/Q010020/00/240/5",
    SAQAIdNo: "20353",
    fileUrl: PublicSectorAcccounting
  },
  {
    title: "Certificate: General Internal Auditing",
    NQLevel: "8",
    learnershipCode: "01/Q010025/00/120/7",
    SAQAIdNo: "20359",
    fileUrl: InternalAuditing
  },

  {
    title: "Chartered Accountant: Auditing",
    NQLevel: "7",
    learnershipCode: "01/Q010001/00/480/7",
    SAQAIdNo: "48913",
    fileUrl: ChateredAccountingAuditing
  },
  {
    title:
      "Post-graduate professional qualification: Professional Accountant in Business",
    NQLevel: "7",
    learnershipCode: "01/Q010007/00/480/7",
    SAQAIdNo: "20392",
    fileUrl: AccountingBusiness
  },
  {
    title: "Post-graduate Diploma: Professional Accountant in Practice 	",
    NQLevel: "8",
    learnershipCode: "01/Q010008/00/480/7",
    SAQAIdNo: "20391",
    fileUrl: ProfessionalAccountant
  }
  // {
  //   title: "Occupational Certificate: Financial Markets Practitioner",
  //   NQLevel: "5",
  //   learnershipCode: "01/Q010044/00/120/7",
  //   SAQAIdNo: "93603"
  // },
  // {
  //   title: "Occupational Certificate: Tax Professional",
  //   NQLevel: "8",
  //   learnershipCode: "01/Q010048/00/400/8",
  //   SAQAIdNo: "93624"
  // },
  // {
  //   title: "Occupational Certificate: Tax Technician",
  //   NQLevel: "6",
  //   learnershipCode: "01/Q010057/99/399/6",
  //   SAQAIdNo: "20353"
  // },
  // {
  //   title: "Advanced Certificate: Forensic Practitioner",
  //   NQLevel: "7",
  //   learnershipCode: "01Q010035001206",
  //   SAQAIdNo: "93624"
  // },
  // {
  //   title: "Diploma: Management (IAC Accounting Officer)",
  //   NQLevel: "7",
  //   learnershipCode: "01/Q010029/00/420/6",
  //   SAQAIdNo: "67694"
  // },
];

const AboutFassetLearnerships = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack spacing={2} justifyContent="center">
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Learnerships
      </Typography>
      <Divider />
      {/* <Typography fontWeight="bolder">
        Association of Accounting Technicians (AAT(SA)) 011 621 6888 –
        info@aatsa.org.za
      </Typography> */}

      {/* <Typography fontWeight="bolder">Workplace Accreditation</Typography>
      <Typography>
        Workplace accreditation is a requirement for all employers, regardless
        of sector, who wishes to register learners on Fasset learnerships. The
        accreditation aims to verify the ability of the workplace to host a
        specific learnership. Criteria for accreditation include access to
        resources related to the learnership, the relevance of the work
        experience component to the qualification, and the structures in place
        to ensure successful implementation and completion of the learnership.
        <br />
        <br />
        For the majority of learnerships, Fasset has agreements with
        professional bodies and Assessment Quality Partners (AQP’s) which are
        responsible for the accreditation of workplaces.
      </Typography> */}
      {/* <Typography fontWeight="bolder">Fasset Learnerships</Typography> */}
      {/* <Typography fontWeight="bolder" fontSize={15}>
        Learnership Agreement Registration Procedures
      </Typography>
      <Typography fontWeight="bolder">
        {" "}
        a. Employers Register​ed with Fasset wishing to implement a Fasset
        Learnership:
      </Typography>
      <Typography>
        <ol>
          <li>
            <Typography>
              Apply for accreditation as an accredited workplace training
              provider with the professional body or AQP responsible for the
              learnership, or with Fasset (as applicable)
            </Typography>
          </li>
          <li>
            <Typography>
              Register the learner with the relevant professional body and/or
              training provider
            </Typography>
          </li>
          <li>
            <Typography>
              Sign an employment contract with the learner
            </Typography>
          </li>
          <li>
            <Typography>
              Sign a Learnership Agreement with the learner
            </Typography>
          </li>
          <li>
            <Typography>
              Submit the Learnership Agreement to Fasset together with the
              following:
            </Typography>
          </li>
          <ul style={{border: 2, borderColor: 'red'}}>
            <li>
              <Typography>
                Proof of learner registration with the professional body or AQP,
                if applicable Employer accreditation status with professional
                body or AQP (copy of letter/certificate), if applicable Copy of
                the learner’s employment contract Certified copy of the
                learner’s ID document.
              </Typography>
            </li>
            <li>
              <Typography>
                The Learnership Agreement and other supplementary documentation
                can be accessed under the section of the website. Please Note:
                Learnership regulations require the Seta to decide if it will
                register the agreement within 7 days of receipt. Learnership
                regulations require the SETA to register the learnership
                agreement within 21 days of that decision. If the agreement has
                any outstanding information, the learnership agreement will be
                returned to the employer, accompanied by a letter indicating
                reasons for non-registration. The employer may resubmit the
                learnership agreement, together with all required documentation
                If all the required documents are attached, Fasset will issue
                the employer with a Confirmation letter. The Confirmation letter
                may be used to claim the SARS income tax deduction.
              </Typography>
            </li>
          </ul>
        </ol>
      </Typography>
      <Typography fontWeight="bolder">
        b.Employers Registered with Fasset wishing to implement a Learnership
        from another Seta
      </Typography>
      <Typography>
        Contact the SETA to which the learnership belongs to ascertain if the
        employer fulfils all the requirements to implement the learnership.
        Complete the Fasset learnership agreement and submit it to Fasset.
        Fasset will register the Learnership Agreement and issue the employer
        with a confirmation letter.
      </Typography>
      <Typography fontWeight="bolder">
        c. Employers not Registered with Fasset wishing to implement a Fasset
        Learnership
      </Typography>
      <Typography>
        The employer contacts the relevant professional body / AQP / Fasset to
        become an accredited workplace provider. Once accredited, the employer
        completes their SETA’s learnership agreement. The employer submits the
        learnership agreement to their SETA. The Learnership Agreement will be
        registered by the other SETA.
      </Typography> */}
      <Typography>
        Click on the learnership titles below for information on each
        learnership
      </Typography>
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
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                NQF Level
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                Learnership Code
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bolder", color: "#FFFFFF" }}
              >
                SAQA ID No
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
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, i) => (
              <TableRow
                key={row?.title}
                sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row?.title}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row?.NQLevel}
                </TableCell>
                <TableCell align="center" scope="row">
                  {row?.learnershipCode}
                </TableCell>
                <TableCell align="center" scope="row">
                  {row.SAQAIdNo}
                </TableCell>
                <TableCell align="center" scope="row">
                  <IconButton>
                    <a
                      href={row.fileUrl}
                      style={{ all: "unset" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <VisibilityIcon />
                    </a>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
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
    </Stack>
  );
};

export default AboutFassetLearnerships;
