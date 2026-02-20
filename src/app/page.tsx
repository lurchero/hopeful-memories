import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ProgramsPreview from "../components/ProgramsPreview";
import ImpactHighlights from "../components/ImpactHighlights";
import Gallery from "../components/Gallery";
import HomeCTA from "../components/HomeCTA";
import NewsletterSection from "../components/NewsletterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ProgramsPreview />
      <ImpactHighlights />
      <Gallery />
      <HomeCTA />
      <NewsletterSection />
    </>
  );
}
