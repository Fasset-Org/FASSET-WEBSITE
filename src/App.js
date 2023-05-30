import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./fassetTheme";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Vacancies from "./pages/Vacancies/Vacancies";
import AboutUs from "./pages/AboutUs/AboutUs";
import FassetProgrammes from "./pages/FassetProgrammes/FassetProgrammes";
import VacancyDetails from "./pages/Vacancies/VacancyDetails";
import "./App.css";
import DesktopNavigation from "./components/Navigation/DesktopNavigation";
import Learners from "./pages/Learners/Learners";
import LoginUser from "./pages/FMS/Auth/LoginUser";
import Navigation from "./components/FMS/Navigation/Navigation";
import Dashboard from "./pages/FMS/Auth/Dashboard";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<DesktopNavigation />}>
            <Route path="/" element={<Home />} index />
            <Route path="/home" element={<Home />} index />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/:id" element={<VacancyDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/fassetprogrammes" element={<FassetProgrammes />} />
            <Route path="/learners" element={<Learners />} />
            <Route path="/contactus" element={<Home id="contact-us" />} />
          </Route>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginUser />} />

          {/* Content Management Routes */}

          <Route path="/fms" element={<Navigation />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
