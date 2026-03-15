import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Clients from './components/Clients';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Cotizador from './components/Cotizador';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import './styles/themes.css';

// Componente de la página principal
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <ValueProposition />
    <Clients />
    <Process />
    {/* Formulario oculto por solicitud */}
    <div className="hidden" style={{ display: 'none' }}>
      <ContactForm />
    </div>
    <Cotizador />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-condiciones" element={<TermsConditions />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
