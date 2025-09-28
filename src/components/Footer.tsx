import { Scale } from "lucide-react";
import justiceScales from "@/assets/justice-scales.jpg";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-dark-bg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${justiceScales})` }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Scale className="w-8 h-8 text-gold" />
          <h3 className="font-serif text-2xl font-bold text-gold">
            Justice & Truth
          </h3>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light text-text-secondary mb-8 leading-relaxed italic">
          "The search for truth in the American criminal justice system continues, 
          shaped by the lessons learned from cases that challenge our understanding 
          of evidence, race, and reasonable doubt."
        </blockquote>
        
        <div className="border-t border-border pt-8">
          <p className="text-text-muted text-sm">
            This case study is presented for educational purposes • Created {new Date().getFullYear()}
          </p>
          <p className="text-text-muted text-xs mt-2">
            Content based on public records and court proceedings
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-gold rounded-full animate-glow" />
      <div className="absolute bottom-8 right-8 w-1 h-1 bg-gold rounded-full animate-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-gold rounded-full animate-glow" style={{ animationDelay: '0.5s' }} />
    </footer>
  );
};

export default Footer;