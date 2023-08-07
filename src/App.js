import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Vacancies from "./pages/Vacancies/Vacancies";
import AboutUs from "./pages/AboutUs/AboutUs";
import VacancyDetails from "./pages/Vacancies/VacancyDetails";
import "./App.css";
import Learners from "./pages/Learners/Learners";
import LoginUser from "./pages/FMS/Auth/LoginUser";
// import Navigation from "./components/FMS/Navigation/Navigation";
// import Dashboard from "./pages/FMS/Auth/Dashboard";
// import UsersList from "./pages/FMS/Auth/User/UsersList";
// import AssetsAllocated from "./pages/FMS/Assets/AssetsAllocated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./global.scss";
import Employers from "./pages/Employers/Employers";
import { themeDark, themeLight } from "./fassetTheme";
import SupplyChain from "./pages/SupplyChain/SupplyChain";
import Resources from "./pages/Resources/Resources";
import ProfessionalBodies from "./pages/ProfessionalBodies/ProfessionalBodies";
import TenderDetails from "./pages/SupplyChain/TenderDetails";
import FallbackError from "./pages/FallbackError";
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  const [theme, setTheme] = useState("light");
  const queryClient = new QueryClient();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {/* Website Routes */}
            <Route path="*" element={<FallbackError />} />
            <Route path="/" element={<MainNavigation />}>
              <Route
                path="/"
                Component={() => {
                  return <Navigate to="/home" />;
                }}
              />
              <Route path="/home" element={<Home />} index />
              <Route path="/vacancies" element={<Vacancies />} />
              <Route path="/vacancies/:id" element={<VacancyDetails />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/learners" element={<Learners />} />
              <Route path="/contactus" element={<Home id="contact-us" />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/tenders" element={<SupplyChain />} />
              <Route path="/tenders/:id" element={<TenderDetails />} />
              <Route
                path="/professionalBodies"
                element={<ProfessionalBodies />}
              />
              <Route path="/resources" element={<Resources />} />
            </Route>
            {/* Auth Routes */}
            <Route path="/login" element={<LoginUser />} />

            {/* Content Management Routes */}

            {/* <Route path="/fms" element={<Navigation />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<UsersList />} />
              <Route path="assets" element={<AssetsAllocated />} />
            </Route> */}
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
