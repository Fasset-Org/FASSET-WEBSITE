import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#163683"
    },
    secondary: {
      main: "#fff200"
    },
    success: {
      main: "#2ECC71"
    },
    error: {
      main: "#E74C3C"
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          zIndex: 0
          // textTransform: "none"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          zIndex: 110
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            fontWeight: "bold",
            fontSize: "16px",
            color: '#163683'
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            display: "none"
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // height: '40px',
          borderRadius: 0
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: 'rgba(22,54,131, 1)'
        }
      }
    }
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#a6aa15"
    },
    success: {
      main: "#2ECC71"
    },
    error: {
      main: "#E74C3C"
    },
    warning: {
      main: "#F4D03F"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          zIndex: 0
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          zIndex: 110
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontWeight: "bold",
          "&:hover": {
            fontWeight: "bolder",
            fontSize: "18px"
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#a6aa15",
            fontWeight: "bolder"
          },
          textTransform: "none"
        }
      }
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            display: "none"
          }
        }
      }
    }
  }
});

export { lightTheme, darkTheme };
