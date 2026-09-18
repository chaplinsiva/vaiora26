import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import About from "@/components/About";
import TechnicalEvents from "@/components/TechnicalEvents";
import NonTechnicalEvents from "@/components/NonTechnicalEvents";
import Schedule from "@/components/Schedule";
import WhyParticipate from "@/components/WhyParticipate";
import Timeline from "@/components/Timeline";
import RegistrationCTA from "@/components/RegistrationCTA";
import Coordinators from "@/components/Coordinators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import BackgroundVideo from "@/components/BackgroundVideo";
import MatrixBackground from "@/components/MatrixBackground";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Layer 1: Looping Responsive Background Video */}
      <BackgroundVideo />

      {/* Layer 2: Matrix Digital Stream Canvas */}
      <MatrixBackground />

      {/* Layer 3: Foreground Website Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <Hero />
        <EventInfo />
        <About />
        <TechnicalEvents />
        <NonTechnicalEvents />
        <Schedule />
        <WhyParticipate />
        <Timeline />
        <RegistrationCTA />
        <Coordinators />
        <Contact />
        <Footer />
        <MobileStickyCTA />
      </div>
    </main>
  );
}
