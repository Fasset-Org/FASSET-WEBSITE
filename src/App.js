import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation
} from "react-router-dom";
import Vacancies from "./pages/Vacancies/Vacancies";
import AboutUs from "./pages/AboutUs/AboutUs";
import VacancyDetails from "./pages/Vacancies/VacancyDetails";
import "./App.css";
import Learners from "./pages/Learners/Learners";
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
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga4";

function App() {
  const [theme, setTheme] = useState("light");
  const queryClient = new QueryClient();

  ReactGA.initialize("GTM-WRH9G6SZ");

  const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return null;
  };

  console.log(
    "%cAhh my guy just stop, it's pointless",
    "color: red; font-weight: bold; font-size: 20px;"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <CookieConsent
          location="bottom"
          buttonText="Accept Cookies"
          cookieName="FassetCookie"
          style={{ background: "#2B373B" }}
          buttonStyle={{
            color: "#4e503b",
            fontSize: "15px",
            padding: 10,
            borderRadius: 5,
            fontWeight: "bolder"
          }}
          expires={150}
        >
          <Typography fontSize={15}>
            This website uses cookies to enhance the user experience.{" "}
          </Typography>
        </CookieConsent>
        <Router>
          <Routes>
            <Analytics />
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

              {/* About Us Routes */}
              <Route path="/whoweare" element={<AboutUs />} />
              <Route path="/ourMandate" element={<AboutUs />} />
              <Route path="/accountingAuthority" element={<AboutUs />} />
              <Route path="/management" element={<AboutUs />} />
              <Route path="/constitution" element={<AboutUs />} />
              <Route path="/policies" element={<AboutUs />} />

              {/* Learning Programme Routes */}
              <Route path="/learnerOverview" element={<Learners />} />
              <Route path="/bursaries" element={<Learners />} />
              <Route path="/leanerships" element={<Learners />} />
              <Route path="/internships" element={<Learners />} />
              <Route path="/skillsProgrammes" element={<Learners />} />

              {/* Employer Routes */}
              <Route path="/mandateGrants" element={<Employers />} />
              <Route path="/discreteGrants" element={<Employers />} />
              <Route path="/learningEvents" element={<Employers />} />

              {/* Quality Assurance Routes */}
              <Route path="/overview" element={<ProfessionalBodies />} />
              <Route
                path="/SDPAccreditation"
                element={<ProfessionalBodies />}
              />
              <Route path="/accreditation" element={<ProfessionalBodies />} />
              <Route
                path="/assessmentCentresAccreditation"
                element={<ProfessionalBodies />}
              />
              <Route path="/SMERegistration" element={<ProfessionalBodies />} />
              <Route path="/EISA" element={<ProfessionalBodies />} />
              <Route
                path="/workplaceApproval"
                element={<ProfessionalBodies />}
              />
              <Route
                path="/externalModerationProcess"
                element={<ProfessionalBodies />}
              />
              <Route path="/QCTOPolicies" element={<ProfessionalBodies />} />

              {/* Tenders Routes */}
              <Route path="/currentTenders" element={<SupplyChain />} />
              <Route path="/previousTenders" element={<SupplyChain />} />
              <Route path="/cancelledTenders" element={<SupplyChain />} />
              <Route path="/tenders/:id" element={<TenderDetails />} />

              {/* Resoruces Routes */}
              <Route path="/downloads" element={<Resources />} />
              <Route path="/research" element={<Resources />} />
              <Route path="/annualReports" element={<Resources />} />

              {/* Vacancies Routes */}
              <Route path="/openPositions" element={<Vacancies />} />
              <Route path="/pastPositions" element={<Vacancies />} />
              <Route path="/vacancies/:id" element={<VacancyDetails />} />
            </Route>
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
