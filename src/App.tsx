import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Services, Products, WhyUs } from './components/MainSections';
import { Testimonials, FAQ, Contact, Footer } from './components/BottomSections';

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
