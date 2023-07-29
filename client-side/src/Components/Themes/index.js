import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#03AC13",
      light: "#03AC13c2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      paper: "#f7f7f7",
    },
    text: {
      primary: "#555555",
    },
    input: {
      primary: "white",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#03AC13",
      light: "#03AC13c2",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#333333",
      paper: "#232323",
    },
    text: {
      primary: "#f0eded",
    },
    input: {
      primary: "#232323",
    },
  },
});

export { lightTheme, darkTheme };
