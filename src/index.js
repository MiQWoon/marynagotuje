import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#FFC107",
    },
    secondary: {
      main: "#8BC34A",
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h3: {
      fontSize: "2.2rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    button: {
      fontSize: "1.8rem",
      textTransform: "uppercase",
    },
  },
};
const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);