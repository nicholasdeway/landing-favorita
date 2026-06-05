import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import InstagramGallery from "@/components/InstagramGallery";
import ContactSection from "@/components/ContactSection";
import HashScroll from "@/components/HashScroll";

export default function Home() {
  return (
    <div className="flex-1 bg-background">
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUs />
      <StatsSection />
      <ProjectsShowcase />
      <GoogleReviews />
      <FAQ />
      <InstagramGallery />
      <ContactSection />
      <HashScroll />
    </div>
  );
}