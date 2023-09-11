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
import WorkbasedProgrammeMobile from "./pages/Mobile/Employers/WorkbasedProgrammeMobile";
import WhoWeAreMobile from "./pages/Mobile/AboutUs/WhoWeAreMobile";
import OurMandateMobile from "./pages/Mobile/AboutUs/OurMandateMobile";
import BoardMobile from "./pages/Mobile/AboutUs/BoardMobile";
import CommitteesMobile from "./pages/Mobile/AboutUs/CommitteesMobile";
import ConstitutionMobile from "./pages/Mobile/AboutUs/ConstitutionMobile";
import PoliciesMobile from "./pages/Mobile/AboutUs/PoliciesMobile";
import ChooseCareerMobile from "./pages/Mobile/Learners/ChooseCareerMobile";
import ScarceSkilsMobile from "./pages/Mobile/Learners/ScarceSkilsMobile";
import CareerGuideMobile from "./pages/Mobile/Learners/CareerGuideMobile";
import BursaryMobile from "./pages/Mobile/Learners/BursaryMobile";
import CareerPortalMobile from "./pages/Mobile/Learners/CareerPortalMobile";
import SkillsProgrammeMobile from "./pages/Mobile/Employers/SkillsProgrammeMobile";
import MandatoryGrantsMobile from "./pages/Mobile/Employers/MandatoryGrantsMobile";
import DiscretionaryGrantsMobile from "./pages/Mobile/Employers/DiscretionaryGrantsMobile";
import TrainingProvidersMobile from "./pages/Mobile/Employers/TrainingProvidersMobile";
import AboutFassetLearnershipsMobile from "./pages/Mobile/ProfessionalBodies/AboutFassetLearnershipsMobile";
import CurrentTendersMobile from "./pages/Mobile/SupplyChain/CurrentTendersMobile";
import PastTendersMobile from "./pages/Mobile/SupplyChain/PastTendersMobile";
import CancelledTendersMobile from "./pages/Mobile/SupplyChain/CancelledTendersMobile";
import DownloadsMobile from "./pages/Mobile/Resources/DownloadsMobile";
import ResearchMobile from "./pages/Mobile/Resources/ResearchMobile";
import AvailableVacanciesMobile from "./pages/Mobile/Vacancies/AvailableVacanciesMobile";
import PreviousVacanciesMobile from "./pages/Mobile/Vacancies/PreviousVacanciesMobile";

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
              {/* Mobile Routes */}
              <Route path="/whoweare" element={<WhoWeAreMobile />} />
              <Route path="/ourMandate" element={<OurMandateMobile />} />
              <Route path="/board" element={<BoardMobile />} />
              <Route path="/committees" element={<CommitteesMobile />} />
              <Route path="/constitution" element={<ConstitutionMobile />} />
              <Route path="/policies" element={<PoliciesMobile />} />
              <Route path="/chooseCarrer" element={<ChooseCareerMobile />} />
              <Route path="/scarceSkils" element={<ScarceSkilsMobile />} />
              <Route path="/carrerGuide" element={<CareerGuideMobile />} />
              <Route path="/bursary" element={<BursaryMobile />} />
              <Route path="/careerPortal" element={<CareerPortalMobile />} />
              <Route
                path="/skillsProgramme"
                element={<SkillsProgrammeMobile />}
              />
              <Route
                path="/workbasedProgramme"
                element={<WorkbasedProgrammeMobile />}
              />
              <Route
                path="/mandateGrants"
                element={<MandatoryGrantsMobile />}
              />
              <Route
                path="/discreteGrants"
                element={<DiscretionaryGrantsMobile />}
              />
              <Route
                path="/trainingProviders"
                element={<TrainingProvidersMobile />}
              />
              <Route
                path="/leanersships"
                element={<AboutFassetLearnershipsMobile />}
              />

              <Route
                path="/currentTenders"
                element={<CurrentTendersMobile />}
              />
              <Route path="/pastTenders" element={<PastTendersMobile />} />
              <Route
                path="/cancelledTenders"
                element={<CancelledTendersMobile />}
              />

              <Route path="/downloads" element={<DownloadsMobile />} />
              <Route path="/research" element={<ResearchMobile />} />
              <Route
                path="/availablePositions"
                element={<AvailableVacanciesMobile />}
              />
              <Route
                path="/previousPositions"
                element={<PreviousVacanciesMobile />}
              />
            </Route>

            {/* Auth Routes */}
            {/* <Route path="/login" element={<LoginUser />} /> */}

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
