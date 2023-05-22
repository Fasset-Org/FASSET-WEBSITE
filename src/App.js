import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./fassetTheme";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import TopNavigation from "./components/Navigation/TopNavigation";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Vacancies from "./pages/Vacancies/Vacancies";
import AboutUs from "./pages/AboutUs/AboutUs";
import FassetProgrammes from "./pages/FassetProgrammes/FassetProgrammes";
import VacancyDetails from "./pages/Vacancies/VacancyDetails";
import Learnerships from "./pages/Learnerships/Learnerships";
import "./App.css";
import DesktopNavigation from "./components/Navigation/DesktopNavigation";

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
          <Route path="/" element={<DesktopNavigation />}>
            <Route path="/" element={<Home />} index />
            <Route path="/home" element={<Home />} index />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/:id" element={<VacancyDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/fassetprogrammes" element={<FassetProgrammes />} />
            <Route path="/leanerships" element={<Learnerships />} />
            <Route path="/contactus" element={<Home id="contact-us" />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
