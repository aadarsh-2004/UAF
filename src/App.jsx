import DonationPage from "./pages/DonationPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Gallery from "./pages/Gallery";
import AdoptionPage from "./pages/Adoption";
import VolunteerPage from "./pages/Volunteer";
import PressMentions from "./pages/PressMentions";
import Sponsors from "./pages/Sponsors";
import Financials from "./pages/Financials";
import ScrollToTop from "./utils/scrollTop";
import FounderPage from "./pages/FounderPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/meetfounder" element={<FounderPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/donation" element={<DonationPage />} />
        {/* <Route path="/adoption" element={<AdoptionPage />} /> */}
        <Route path="/vol" element={<VolunteerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/press" element={<PressMentions />} />
        <Route path="/sponsor" element={<Sponsors />} />
        <Route path="/financials" element={<Financials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
