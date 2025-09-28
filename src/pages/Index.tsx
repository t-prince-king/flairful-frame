import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import CharacterProfiles from "@/components/CharacterProfiles";
import Evidence from "@/components/Evidence";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Hero />
      <Timeline />
      <CharacterProfiles />
      <Evidence />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
