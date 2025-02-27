import DonationPage from "./pages/DonationPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
