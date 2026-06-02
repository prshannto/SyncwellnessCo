import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { TransformationSection } from "@/components/home/transformation-section";
import { StrugglesSection } from "@/components/home/struggles-section";
import { HowWeHelpSection } from "@/components/home/how-we-help-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { AboutCoachSection } from "@/components/home/about-coach-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { VideoTestimonialsSection } from "@/components/home/video-testimonials-section";
import { FreeResourceSection } from "@/components/home/free-resource-section";
import { FAQSection } from "@/components/home/faq-section";
import { FinalCTASection } from "@/components/home/final-cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TransformationSection />
        <StrugglesSection />
        <HowWeHelpSection />
        <ProgramsSection />
        <AboutCoachSection />
        <TestimonialsSection />
        <VideoTestimonialsSection />
        <FreeResourceSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
