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
import WhoWeAreMobile from "./pages/Mobile/AboutUs/WhoWeAreMobile";
import OurMandateMobile from "./pages/Mobile/AboutUs/OurMandateMobile";
import BoardMobile from "./pages/Mobile/AboutUs/BoardMobile";
import CommitteesMobile from "./pages/Mobile/AboutUs/CommitteesMobile";
import ConstitutionMobile from "./pages/Mobile/AboutUs/ConstitutionMobile";
import PoliciesMobile from "./pages/Mobile/AboutUs/PoliciesMobile";
import ChooseCareerMobile from "./pages/Mobile/Learners/ChooseCareerMobile";
import BursaryMobile from "./pages/Mobile/Learners/BursaryMobile";
import AboutFassetLearnershipsMobile from "./pages/Mobile/ProfessionalBodies/AboutFassetLearnershipsMobile";
import InternshipsMobile from "./pages/Mobile/Learners/InternshipsMobile";


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

              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/learners" element={<Learners />} />
              <Route path="/contactus" element={<Home id="contact-us" />} />

              {/* Employer Routes */}
              <Route path="/mandateGrants" element={<Employers />}/>
              <Route path="/discreteGrants" element={<Employers />} />
              <Route path="/learningEvents" element={<Employers />}/>

              {/* Quality Assurance Routes */}
              <Route path="/overview" element={<ProfessionalBodies />} />
              <Route path="/SDPAccreditation" element={<ProfessionalBodies />}/>
              <Route path="/accreditation" element={<ProfessionalBodies />} />
              <Route path="/assessmentCentresAccreditation" element={<ProfessionalBodies />}/>
              <Route path="/SMERegistration" element={<ProfessionalBodies />} />
              <Route path="/EISA" element={<ProfessionalBodies />} />
              <Route path="/workplaceApproval" element={<ProfessionalBodies />}/>
              <Route path="/externalModerationProcess" element={<ProfessionalBodies />} />
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
              {/* Mobile Routes */}

              {/* About Us Routes */}
              <Route path="/whoweare" element={<WhoWeAreMobile />} />
              <Route path="/ourMandate" element={<OurMandateMobile />} />
              <Route path="/board" element={<BoardMobile />} />
              <Route path="/committees" element={<CommitteesMobile />} />
              <Route path="/constitution" element={<ConstitutionMobile />} />
              <Route path="/policies" element={<PoliciesMobile />} />

              {/* Learning Programme Routes */}
              <Route path="/learnerOverview" element={<ChooseCareerMobile />} />
              <Route path="/bursaries" element={<BursaryMobile />} />
              <Route
                path="/leanerships"
                element={<AboutFassetLearnershipsMobile />}
              />
              <Route path="/internships" element={<InternshipsMobile />} />
              {/* <Route
                path="/skillsProgrammes"
                element={<SkillsProgrammeMobile />}
              /> */}
          

              
            </Route>
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
