import {
  Divider,
  IconButton,
  // Menu,
  // MenuItem,
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
  Tooltip,
  Typography
} from "@mui/material";
import React from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import Trend2021 from "../../../files/Reseources/Sector-Trends/Fasset Sector Trends 2021 - Final.pdf";
import Trend2020 from "../../../files/Reseources/Sector-Trends/Fasset_Sector_Trends_2020_30_March_2020EB.pdf";
import Trend2022 from "../../../files/Reseources/Sector-Trends/FASSET Sector Trends 2021_22 Final Report.pdf";
import Trend2023 from "../../../files/Reseources/Sector-Trends/FINAL REPORT_FASSET Sector Trends 2023.pdf";
import { Download } from "@mui/icons-material";

const rows = [
  {
    period: "2023",
    documentName: "FASSET Trends Study",
    desc: "A trend analysis of the Finance and Accounting Services sector in the 2020/21 to 2023/24 period.",
    fileUrl: Trend2023
  },
  {
    period: "2022",
    documentName: "FASSET Trends Study",
    desc: "Analysis of the FASSET grant applications between 2000/01 and 2021/22 period.",
    fileUrl: Trend2022
  },
  {
    period: "2021",
    documentName: "Sector Trends Study",
    desc: "Trends in Employment and Training in the FASSET Sector",
    fileUrl: Trend2021
  },
  {
    period: "2020",
    documentName: "FASSET Trends Study",
    desc: "FASSET commissioned a survey of the sector (employers, professional institutes, education and training institutions and learners) and concluded with a labour market demand and supply analysis, and a skills needs analysis. This document is intended to provide strategic direction for the sector and highlight skills deficits and skills priorities. This is the third sector survey",
    fileUrl: Trend2020
  }
];

const SectorTrends = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Stack spacing={1}>
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Sector Trends
      </Typography>
      <Typography>
        The Finance and Accounting Services (FAS) Sector Trend report is an
        annual analysis that identifies trends in the training and employment
        FAS sector to provide context to skills development needs. This
        publication provides quantitative/statistical as well as qualitative
        analyses covering demographic profile, employment trends, training etc.,
        in the FAS sector. The FAS Sector Trends study’s purpose is to collect
        labour market information to inform skills planning and funding
        decisions of the Financial and Accounting Services Sector Education and
        Training Authority (FASSET) as well as to monitor transformation in the
        sector.
      </Typography>
      <Divider />
      <Typography
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Download the Sector Trend
      </Typography>
      <Typography>
        To download FASSET's Sector Trend Reports, click on your choice in the
        table below.
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
                Document Description
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
                key={i}
                sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.period}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.documentName}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.desc}
                </TableCell>

                <TableCell align="center" scope="row">
                  <Tooltip title="Download">
                    <IconButton
                      sx={{
                        backgroundColor: "primary.main",
                        color: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "primary.light",
                          color: "#FFFFFF",
                          fontWeight: "bolder"
                        }
                      }}
                      onClick={() => {
                        window.open(row.fileUrl, "_blank");
                      }}
                    >
                      <Download />
                    </IconButton>
                  </Tooltip>
                  {/* <IconButton
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
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
                    <MenuItem>
                      <a
                        href={row.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ all: "unset" }}
                      >
                        View
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href={row.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ all: "unset" }}
                      >
                        Download
                      </a>
                    </MenuItem>
                  </Menu> */}
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

export default SectorTrends;
