import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-courtroom.jpg";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/80 to-dark-bg/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
          The O.J. Simpson
          <br />
          <span className="block">Trial</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto font-light">
          A comprehensive case study of the trial that captivated America and changed the criminal justice system forever
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContent}
            className="bg-gradient-gold hover:shadow-gold text-dark-bg font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            Explore the Case
          </Button>
          <p className="text-text-muted text-sm">June 12, 1994 - October 3, 1995</p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-6 h-6 text-gold" />
      </button>
    </section>
  );
};

export default Hero;