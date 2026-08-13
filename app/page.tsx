import Header from "./components/Header";
import Hero from "./components/Hero";
import VSL from "./components/VSL";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Proof from "./components/Proof";
import Testimonials from "./components/Testimonials";
import Security from "./components/Security";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VSL />
        <Problem />
        <Solution />
        <HowItWorks />
        <Services />
        <Proof />
        <Testimonials />
        <Security />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
