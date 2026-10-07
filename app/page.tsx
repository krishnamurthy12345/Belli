import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import InvestmentSolutions from "@/components/home/InvestmentSolutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import InvestmentJourney from "@/components/home/InvestmentJourney";
import SIPSection from "@/components/home/SIPSection";
// import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import FinancialVideo from "@/components/home/FinancialVideo";
import InvestmentVisual from "@/components/home/InvestmentVisual";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FinancialVideo />

        <Stats />

        <InvestmentVisual />

        <InvestmentSolutions />

        <WhyChooseUs />

        <InvestmentJourney />

        <SIPSection />

        {/* <Testimonials /> */}

        <CTA />
      </main>

      <Footer />
    </>
  );
}