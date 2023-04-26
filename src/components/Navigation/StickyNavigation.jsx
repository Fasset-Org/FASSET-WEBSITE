import { AppBar, Box, Link, Stack, styled } from "@mui/material";
import React from "react";
import "./tab.css";
import { useState } from "react";

const StickyNavigation = () => {
  const NavLink = styled((props) => <Link {...props}>{props.children}</Link>)(
    ({ theme }) => ({
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 7,
      paddingRight: 7,
      // width: 120,
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: 14,
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#000000",
        fontSize: 14
      }
    })
  );

  const [show, setShow] = useState(false);

  const handleMouseOver = (event) => {
    // document.getElementById("myDropdown").classList.add("show");
    setShow(true);
  };
  const handleMouserOut = () => {
    // document.getElementById("myDropdown").classList.remove("show");
    setShow(false);
  };

  return (
    <>
      <AppBar position="static">
        <Stack
          direction="row"
          sx={{ height: 60, backgroundColor: "secondary.main",  }}
          alignItems="center"
          justifyContent="center"
          // component={Tabs}
        >
          <NavLink>Home</NavLink>

          <Box onMouseLeave={handleMouserOut}>
            <NavLink
              onMouseOver={handleMouseOver}
              variant="outlined"
              sx={{ height: 60 }}
            >
              Abouts Us
            </NavLink>

            {show && (
              <Box
                className="dropdown-content"
                id="myDropdown"
                sx={{
                  display: "none",
                  position: "absolute",
                  minWidth: "160px",
                  boxSshadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                  zIndex: 1,
                  backgroundColor: "#111c48"
                }}
              >
                <Link
                  sx={{
                    float: "none",
                    color: "#FFFFFF",
                    padding: "12px 16px",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "left",
                    fontSize: 14,
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#000000",
                      fontSize: 14
                    }
                  }}
                  href="#"
                >
                  Link 1
                </Link>
                <Link
                  sx={{
                    float: "none",
                    color: "#FFFFFF",
                    padding: "12px 16px",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "left",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#000000",
                      fontSize: 14
                    }
                  }}
                  href="#"
                >
                  Link 2
                </Link>
                <Link
                  sx={{
                    float: "none",
                    color: "#FFFFFF",
                    padding: "12px 16px",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "left",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#000000",
                      fontSize: 14
                    }
                  }}
                  href="#"
                >
                  Link 3
                </Link>
              </Box>
            )}
          </Box>
          <NavLink>Fasset Programmes</NavLink>
          <NavLink>Learnerships</NavLink>
          <NavLink>Grants</NavLink>
          <NavLink>Training Providers</NavLink>
          <NavLink>Research</NavLink>
          <NavLink>Career Awareness</NavLink>
          <NavLink>Stakeholder Relations</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>Renders</NavLink>
          <NavLink>Contact Us</NavLink>
        </Stack>
        {/* <Stack
          direction="row"
          alignItems="center"
          sx={{
            backgroundColor: "secondary.main",
            overflowX: "auto"
          }}
        >
          <NavLink label="Home"></NavLink>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              component={Tab}
              label="About Us"
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#000000"
                }
              }}
            ></Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
              sx={{ borderRadius: 0, bgcolor: 'secondary.main' }}
              style={{width: 'fit-content'}}
            >
              <MenuItem onClick={handleClose} sx={{ borderRadius: 0, bgcolor: 'secondary.main' }}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              component={Tab}
              label="Fasset Programmes"
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#000000",
                  textOverflow: "nowrap"
                }
              }}
            ></Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
              sx={{ borderRadius: 0 }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <NavLink label="Fasset Pragrammes"></NavLink>
          <NavLink label="Learnerships"></NavLink>
          <NavLink label="Grants"></NavLink>
          <NavLink label="Training Providers"></NavLink>
          <NavLink label="Research"></NavLink>
          <NavLink label="Career Awareness"></NavLink>
          <NavLink label="Stakeholder Relations"></NavLink>
          <NavLink label="Events"></NavLink>
          <NavLink label="Renders"></NavLink>
          <NavLink label="Contact Us"></NavLink>
        </Stack> */}
      </AppBar>
    </>
  );
};

export default StickyNavigation;
