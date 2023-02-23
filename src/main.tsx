import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";

const theme = {
  light: {
    background: "#fffffe",
    color: "#2b2c34",
    button: "#6246ea",
    highlight: "#6246ea",
    formula: { old: "#ffd803", new: "#6246ea" },
    main: "#fffffe",
    secondary: "#e3f6f5",
    tertiary: "#bae8e8",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
