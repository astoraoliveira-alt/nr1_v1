import Hero from './components/Hero';
import KeyChanges from './components/KeyChanges';
import Impacts from './components/Impacts';
import DashboardPreview from './components/DashboardPreview';
import Segments from './components/Segments';
import Benefits from './components/Benefits';
import Education from './components/Education';
import Footer from './components/Footer';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { clsx } from 'clsx';
// ... imports ...

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={clsx(
      "min-h-screen font-sans transition-colors duration-500 overflow-x-hidden",
      theme === 'glam' ? "bg-teal-950 text-white selection:bg-gold-500/30 selection:text-gold-200" :
        theme === 'brutal' ? "bg-white text-black font-mono selection:bg-bw-alert selection:text-white" :
          "bg-soft-bg text-soft-text font-rounded selection:bg-soft-primary/30"
    )}>
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
