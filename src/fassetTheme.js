import { createTheme } from "@mui/material";

export const themeDark = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #202020ff",
          borderRadius: "10px"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #202020ff",
          borderRadius: "5px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#3a9bfb",
      main: "#1CCAFF",
      info: "#333",
      contrastText: "#333"
    },
    secondary: {
      main: "#0FFFB3"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#333"
    },
    background: {
      // paper: "#444444da",
      paper: "#202020ff",
      default: "#191919ff"
    }
  }
});

export const themeLight = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {}
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#FFFFFF"
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
  },
  palette: {
    mode: "light",
    primary: {
      light: "#3a9bfb",
      main: "#0f4c81",
      info: "#333",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#14a37f",
      contrastText: "#ffffff"
    },
    background: {
      paper: "#fbfbfbff",
      default: "#f3f3f3ff"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Open Sans"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Lucida"',
      '"Gothic A1"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

export const NeoBrutalism = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {}
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
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
    }
  },
  palette: {
    mode: "light",
    primary: {
      light: "#3a9bfb",
      main: "#0f4c81",
      info: "#333",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#14a37f",
      contrastText: "#ffffff"
    },
    background: {
      paper: "#50FFAF",
      default: "#9C7BFF"
    }
  }
});

// import { createTheme } from "@mui/material";

// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#163683"
//     },
//     secondary: {
//       main: "#fff200"
//     },
//     success: {
//       main: "#2ECC71"
//     },
//     error: {
//       main: "#a10e25"
//     },
//     warning: {
//       main: "#ffffcc"
//     },
//     danger: {
//       main: "#a10e25"
//     }
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         // root: ({ ownerState }) => ({
//         //   ...(ownerState.variant === "outlined"
//         //     ? {
//         //         color: "#163683",
//         //         fontWeight: 'bold'
//         //       }
//         //     : {
//         //         color: "#fff200",
//         //       }),

//         //   borderRadius: 0,
//         //   zIndex: 0,
//         // }),

//         root: {
//           borderRadius: 0,
//           zIndex: 0
//         }
//       }
//     },
//     MuiAccordionSummary: {
//       styleOverrides: {
//         root: {
//           color: "#FFFFFF"
//         }
//       }
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "transparent",
//           zIndex: 110
//         }
//       }
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           textDecoration: "none",
//           "&:hover": {
//             fontWeight: "bold",
//             fontSize: "16px",
//             color: "#163683"
//           }
//         }
//       }
//     },
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           textTransform: "none"
//         }
//       }
//     },

//     MuiTabs: {
//       styleOverrides: {
//         root: {
//           "& .MuiTabs-indicator": {
//             display: "none"
//           }
//         }
//       }
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           [`& fieldset`]: {
//             borderRadius: 0
//           }
//         }
//       }
//     },
//     MuiDivider: {
//       styleOverrides: {
//         root: {
//           color: "rgba(22,54,131, 1)"
//         }
//       }
//     }
//   },
//   typography: {
//     fontFamily: "Helvetica Neue"
//   }
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#FFFFFF"
//     },
//     secondary: {
//       main: "#a6aa15"
//     },
//     success: {
//       main: "#2ECC71"
//     },
//     error: {
//       main: "#E74C3C"
//     },
//     warning: {
//       main: "#F4D03F"
//     }
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 0,
//           zIndex: 0
//         }
//       }
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "transparent",
//           zIndex: 110
//         }
//       }
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           textDecoration: "none",
//           fontWeight: "bold",
//           "&:hover": {
//             fontWeight: "bolder",
//             fontSize: "18px"
//           }
//         }
//       }
//     },
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           "&:hover": {
//             color: "#a6aa15",
//             fontWeight: "bolder"
//           },
//           textTransform: "none"
//         }
//       }
//     },

//     MuiTabs: {
//       styleOverrides: {
//         root: {
//           "& .MuiTabs-indicator": {
//             display: "none"
//           }
//         }
//       }
//     }
//   }
// });

// export { lightTheme, darkTheme };
