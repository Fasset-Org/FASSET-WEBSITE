import {
  Box,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { StarBorder } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const OurMandate = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Stack spacing={2}>
        <Stack justifyContent="center" alignItems="center">
          <IconButton size="large">
            <SettingsIcon fontSize="large" sx={{ color: "secondary.main" }} />
          </IconButton>
          <Typography
            textAlign="center"
            fontFamily="Helvetica Neue"
            fontWeight="bolder"
            fontSize={30}
            textTransform="uppercase"
            sx={{ color: "primary.main" }}
          >
            Our Mandate
          </Typography>
        </Stack>
        <Grid container>
          <Grid item xs={12} md={4}>
            <List
              sx={{ width: "100%", bgcolor: "background.paper", border: 1 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    fontWeight: "bolder",
                    color: "primary.main",
                    border: 1
                  }}
                >
                  The Objectives of Fasset are the following:
                </ListSubheader>
              }
            >
              <ListItem sx={{ border: 1 }}>
                <Typography
                  sx={{
                    fontSize: 14
                    // textAlign: "center"
                    // backgroundColor: idx % 2 === 1 ? "#E5E7E9" : ""
                  }}
                >{`• ${"Item 1"}`}</Typography>
              </ListItem>
              <ListItemButton>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default OurMandate;
