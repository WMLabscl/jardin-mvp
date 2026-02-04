import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LifeAtKinder from './components/LifeAtKinder';
import Team from './components/Team';
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
        <Services />
        <LifeAtKinder />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
