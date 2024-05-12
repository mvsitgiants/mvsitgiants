import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";

import Career from "./pages/Career.jsx";
import NotFoundPage from "./AppIn/pages/NotFoundPage.js";
import Comesoon from "./pages/Comesoon.js";
import HireMeModal from "./components/HireMeModal.jsx";

const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const EdTechs = lazy(() => import("./pages/EdTechs"));
const EdTechSingle = lazy(() => import("./pages/EdTechSingle.jsx"));

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="EdTechs" element={<EdTechs />} />
              <Route
                exact
                path="EdTechs/single-EdTech"
                element={<EdTechSingle />}
              />

              <Route exact path="services" element={<Services />} />
              <Route exact path="comesoon" element={<Comesoon />} />

              <Route exact path="career" element={<Career />} />
              <Route exact path="about" element={<About />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="Hireme" element={<HireMeModal />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
