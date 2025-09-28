import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Globe, BookOpen } from "lucide-react";
import broncoChaseImage from "@/assets/bronco-chase.jpg";

const impactItems = [
  {
    title: "Media Revolution",
    icon: Globe,
    description: "The trial transformed how America consumes news, marking the birth of 24/7 cable news coverage and reality TV.",
    stats: [
      "95 million viewers watched the Bronco chase",
      "150 million watched the verdict live",
      "1,000+ media credentials issued",
      "First trial broadcast live on multiple networks"
    ]
  },
  {
    title: "Racial Divide",
    icon: Users,
    description: "The verdict exposed deep racial tensions in America, with polls showing vastly different opinions along racial lines.",
    stats: [
      "72% of white Americans believed O.J. was guilty",
      "68% of Black Americans believed he was innocent",
      "Sparked national conversations about race and justice",
      "Highlighted police brutality and systemic racism"
    ]
  },
  {
    title: "Legal Impact",
    icon: BookOpen,
    description: "The case changed legal proceedings, DNA evidence standards, and domestic violence awareness nationwide.",
    stats: [
      "Increased DNA evidence reliability standards",
      "Enhanced domestic violence prosecution protocols",
      "Improved evidence collection procedures",
      "Influenced jury selection methods"
    ]
  },
  {
    title: "Cultural Legacy",
    icon: TrendingUp,
    description: "The case became a cultural touchstone, inspiring countless documentaries, books, and TV series.",
    stats: [
      "Over 100 books written about the case",
      "Multiple award-winning documentaries",
      "Emmy-winning TV series adaptations",
      "Continues to influence pop culture today"
    ]
  }
];

const ImpactSection = () => {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
            Cultural Impact
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            How the Trial of the Century changed America forever
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative rounded-lg overflow-hidden shadow-elevated">
          <img 
            src={broncoChaseImage} 
            alt="The infamous Bronco chase"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-2">
              The Chase That Stopped America
            </h3>
            <p className="text-text-secondary">
              June 17, 1994 - 95 million Americans watched as O.J. Simpson led police on a surreal low-speed chase
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-dark-surface/80 border-gold/20 backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <CardTitle className="text-text-primary font-serif text-xl">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gold rounded-full" />
                      <span className="text-text-muted text-sm">{stat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;