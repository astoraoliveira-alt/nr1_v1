import Hero from './components/Hero';
import KeyChanges from './components/KeyChanges';
import Impacts from './components/Impacts';
import DashboardPreview from './components/DashboardPreview';
import Segments from './components/Segments';
import Benefits from './components/Benefits';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-teal-950 font-sans text-white selection:bg-gold-500/30 selection:text-gold-200 overflow-hidden">
      <Hero />
      <KeyChanges />
      <Impacts />
      <DashboardPreview />
      <Segments />
      <Benefits />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
