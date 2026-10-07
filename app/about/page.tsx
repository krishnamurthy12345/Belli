import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import InvestmentPhilosophy from "@/components/about/InvestmentPhilosophy";
import WhyBellis from "@/components/about/WhyBellis";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <OurStory />
        <AboutHero />
        <InvestmentPhilosophy />
        <WhyBellis />
      </main>

      <Footer />
    </>
  );
}