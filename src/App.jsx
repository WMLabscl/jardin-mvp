import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
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
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
