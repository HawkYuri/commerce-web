import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#006A67",
      light: "#9CF1EE",
      dark: "#00504E",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4A6362",
      light: "#CCE8E6",
      dark: "#324B4A",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#BA1A1A",
      light: "#FFDAD6",
      dark: "#93000A",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F4FBF9",
      paper: "#F4FBF9",
    },
    text: {
      primary: "#161D1C",
      secondary: "#3F4948",
      disabled: "#6F7978",
    },
    divider: "#DAE5E3",
    action: {
      active: "#324B4A",
      hover: "#CCE8E6",
      selected: "#CCE8E6",
      disabled: "#6F7978",
      disabledBackground: "#DAE5E3",
      focus: "#324B4A",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          padding: "6px 16px",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#80D5D1",
      light: "#9CF1EE",
      dark: "#00504E",
      contrastText: "#003736",
    },
    secondary: {
      main: "#B0CCCA",
      light: "#CCE8E6",
      dark: "#324B4A",
      contrastText: "#1B3534",
    },
    error: {
      main: "#FFB4AB",
      light: "#FFDAD6",
      dark: "#690005",
      contrastText: "#000000",
    },
    background: {
      default: "#0E1514",
      paper: "#0E1514",
    },
    text: {
      primary: "#DDE4E3",
      secondary: "#BEC9C7",
      disabled: "#889392",
    },
    divider: "#3F4948",
    action: {
      active: "#324B4A",
      hover: "#3F4948",
      selected: "#3F4948",
      disabled: "#889392",
      disabledBackground: "#0E1514",
      focus: "#324B4A",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          padding: "6px 16px",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
});

export { lightTheme, darkTheme };
