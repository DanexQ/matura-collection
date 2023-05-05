import { MathJaxContext } from "better-react-mathjax";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Main from "./components/Main/Main";
const theme = {
  light: {
    background: "#fffffe",
    color: "#2b2c34",
    button: "#a64ac9",
    highlight: "#a64ac9",
    formula: {
      old: { font: "#2b2c34", color: "#FAED26" },
      new: { font: "#f0f0f0", color: "#a64ac9" },
    },
    main: "#fffffe",
    secondary: "#e3f6f5",
    tertiary: "#bae8e8",
  },
};

const config = {
  loader: { load: ["input/asciimath"] },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MathJaxContext config={config}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/dodaj-zadanie" element={<AddTaskForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MathJaxContext>
    </ThemeProvider>
  </React.StrictMode>
);
