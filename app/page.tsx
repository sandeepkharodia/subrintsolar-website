import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      
      <Navbar />

      <Hero />
      <Services />

      <WhyChooseUs/>

      <About />

      <Stats />

      
      <Projects />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}