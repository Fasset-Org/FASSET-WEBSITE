import {
  IconButton,
  ListItem,
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
  Typography
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

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

const SectorSkillPlan = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
    <Stack spacing={1}>
      <Typography
        textAlign="center"
        fontFamily="Helvetica Neue"
        fontWeight="bolder"
        fontSize={20}
        sx={{ color: "primary.main" }}
      >
        Sector Skills Plan
      </Typography>
      <Typography fontWeight="bolder">
        The Sector Skills Plan (SSP) represents the 'roadmap' for the work of
        Fasset and organisations in the Fasset sector in terms of skills
        development. In addition, to outlining long-term and short-term skills
        development deliverables, Fasset's vision and mission, the SSP provides
        information on:
      </Typography>
      {[
        "Sector profile",
        "Factors influencing future change in the sector",
        "Sector development strategy",
        "Employment and skills needs",
        "Implications for skills policy and skills provision",
        "Vision, mission, objectives, priorities, outcomes and key performance indicators",
        "Monitoring, evaluating and reporting",
        "Economic performance of and the demand for labour in the sector",
        "Skills and research needs of the sector",
        "Skills development priorities",
        "Sector strategies, goals and objectives"
      ].map((option, i) => (
        <ListItem key={i}>
          <Typography>&#x2022; {option}</Typography>
        </ListItem>
      ))}

      <Typography fontWeight="bolder">
        The SSP should be based on the following:
      </Typography>
      {[
        "Sector-wide representation without exclusion (i.e. including all sub-sectors, sizes of enterprise within the sector and both public and private organisations, geographical distribution)",
        "Comprehensive vision based on long, medium and short-term perspective for the optimum development of the sector",
        "Sector analysis and prognosis focusing on occupations and skills levels",
        "Full stakeholder participation and commitment",
        "Alignment with national objectives and priorities, in particular the National Skills Development Strategy (NSDS)",
        "Clear objectives, strategy and action plan for implementation"
      ].map((option, i) => (
        <ListItem key={i}>
          <Typography>&#x2022; {option}</Typography>
        </ListItem>
      ))}

      <Typography fontWeight="bolder">
        TResponsibility for producing the SSP rests with Fasset and therefore,
        the members of Fasset representing organised labour, organised
        employers, relevant government departments and other members appointed
        to the Fasset Board. As a strategic Seta document, the main stakeholders
        via the Fasset Board, of the sector must endorse the SSP
      </Typography>
      <Typography sx={{ fontWeight: "bolder", color: "primary.main" }}>
        Download the Sector Skills Plan
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
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, i) => (
              <TableRow
                key={row.name}
                sx={{ backgroundColor: i % 2 === 0 ? "action.hover" : "" }}
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

export default SectorSkillPlan;
