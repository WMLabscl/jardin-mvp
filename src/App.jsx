import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Historia from './components/Historia';
import EnfoqueEducativo from './components/EnfoqueEducativo';
import Niveles from './components/Niveles';
import GaleriaExperiencias from './components/GaleriaExperiencias';
import Valores from './components/ValoresCreativo';
import Testimonios from './components/Testimonios';
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
        <Niveles />
        <EnfoqueEducativo />
        <GaleriaExperiencias />
        <Historia />
        <Valores />
        <Testimonios />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;