import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Services, Products, WhyUs } from './components/MainSections';
import { Testimonials, FAQ, Contact, Footer } from './components/BottomSections';
import Catalog from './pages/Catalog';
import TabletsCatalogue from './components/TabletsCatalogue';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/tablets" element={<TabletsCatalogue />} />
      </Routes>
      <Footer />
    </main>
  );
}
