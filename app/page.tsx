import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import DashboardShowcase from "./components/DashboardShowcase";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Services />
        <DashboardShowcase />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
