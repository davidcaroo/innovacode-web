import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <Navigation />
      <Hero />
      <Services />
      <ValueProposition />
      <Process />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
