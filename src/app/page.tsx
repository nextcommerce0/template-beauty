import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Location from "./sections/Location";
import Gallery from "./sections/Gallery";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <CTA/>
      <FAQ/>
      <Location />
      <Footer />
    </div>
  );
}
