import DonationPage from "./pages/DonationPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import AdoptionPage from "./pages/Adoption";
import VolunteerPage from "./pages/Volunteer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/donation" element={<DonationPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/vol" element={<VolunteerPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
