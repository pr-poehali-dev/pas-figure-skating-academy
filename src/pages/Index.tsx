
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import CoachesSection from "@/components/CoachesSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProgramsSection />
        <CoachesSection />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
