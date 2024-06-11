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
import SkillsProgrammeMobile from "./pages/Mobile/Employers/SkillsProgrammeMobile";
import MandatoryGrantsMobile from "./pages/Mobile/Employers/MandatoryGrantsMobile";
import DiscretionaryGrantsMobile from "./pages/Mobile/Employers/DiscretionaryGrantsMobile";
import AboutFassetLearnershipsMobile from "./pages/Mobile/ProfessionalBodies/AboutFassetLearnershipsMobile";
import CurrentTendersMobile from "./pages/Mobile/SupplyChain/CurrentTendersMobile";
import PastTendersMobile from "./pages/Mobile/SupplyChain/PastTendersMobile";
import CancelledTendersMobile from "./pages/Mobile/SupplyChain/CancelledTendersMobile";
import DownloadsMobile from "./pages/Mobile/Resources/DownloadsMobile";
import ResearchMobile from "./pages/Mobile/Resources/ResearchMobile";
import AvailableVacanciesMobile from "./pages/Mobile/Vacancies/AvailableVacanciesMobile";
import PreviousVacanciesMobile from "./pages/Mobile/Vacancies/PreviousVacanciesMobile";
import AnnualReportsMobile from "./pages/Mobile/Resources/AnnualReportsMobile";
import OverviewMobile from "./pages/Mobile/QualityAssurance/OverviewMobile";
import SDPAccreditationMobile from "./pages/Mobile/QualityAssurance/SDPAccreditationMobile";
import AccreditationMobile from "./pages/Mobile/QualityAssurance/AccreditationMobile";
import ACAMobile from "./pages/Mobile/QualityAssurance/ACAMobile";
import EISAMobile from "./pages/Mobile/QualityAssurance/EISAMobile";
import EMPMobile from "./pages/Mobile/QualityAssurance/EMPMobile";
import QTCOPoliciesMobile from "./pages/Mobile/QualityAssurance/QTCOPoliciesMobile";
import WorkplaceApprovalMobile from "./pages/Mobile/QualityAssurance/WorkplaceApprovalMobile";
import SMERegistration from "./pages/Mobile/QualityAssurance/SMERegistration";
import InternshipsMobile from "./pages/Mobile/Learners/InternshipsMobile";
import LearningEventsMobile from "./pages/Mobile/Employers/LearningEventsMobile";

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
                path="/qualityAssurance"
                element={<ProfessionalBodies />}
              />
              <Route path="/resources" element={<Resources />} />
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
              <Route
                path="/skillsProgrammes"
                element={<SkillsProgrammeMobile />}
              />
              {/* Employer Router */}
             
              <Route
                path="/mandateGrants"
                element={<MandatoryGrantsMobile />}
              />
              <Route
                path="/discreteGrants"
                element={<DiscretionaryGrantsMobile />}
              />
              <Route
                path="/learningEvents"
                element={<LearningEventsMobile />}
              />

              {/* Quality Assurance Routes */}
              <Route path="/overview" element={<OverviewMobile />} />
              <Route
                path="/SDPAccreditation"
                element={<SDPAccreditationMobile />}
              />
              <Route path="/accreditation" element={<AccreditationMobile />} />
              <Route
                path="/assessmentCentresAccreditation"
                element={<ACAMobile />}
              />
              <Route path="/SMERegistration" element={<SMERegistration />} />
              <Route path="/EISA" element={<EISAMobile />} />
              <Route
                path="/workplaceApproval"
                element={<WorkplaceApprovalMobile />}
              />
              <Route
                path="/externalModerationProcess"
                element={<EMPMobile />}
              />
              <Route path="/QCTOPolicies" element={<QTCOPoliciesMobile />} />

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
              <Route path="/annualReports" element={<AnnualReportsMobile />} />
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
