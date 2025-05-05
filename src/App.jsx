import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/LoanCalculator";
import ExchangeRates from "./pages/ExchangeRates";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light"
        }
      }),
    [darkMode]
  );

  const handleThemeToggle = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
