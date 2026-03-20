import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import EnfoqueEducativo from './components/EnfoqueEducativo';
import Niveles from './components/Niveles';
import GaleriaExperiencias from './components/GaleriaExperiencias';
import Valores from './components/ValoresCreativo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <CallToAction />
        <EnfoqueEducativo />
        <Niveles />
        <GaleriaExperiencias />
        <Valores />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;