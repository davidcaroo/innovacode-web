import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

// Componente de la página principal
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <ValueProposition />
    <Process />
    <ContactForm />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0C0C0C]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
