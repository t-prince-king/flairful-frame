import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Car, Footprints, Clock, Phone, MapPin, Shirt, Users } from "lucide-react";

const evidenceData = [
  {
    category: "Physical Evidence",
    items: [
      {
        title: "Blood Evidence",
        description: "Blood from O.J., Nicole, and Ronald Goldman found at multiple locations including Nicole's house, O.J.'s car, and his home.",
        icon: Droplets,
        significance: "High",
        color: "bg-red-500/10 border-red-500/20"
      },
      {
        title: "White Ford Bronco",
        description: "O.J.'s vehicle contained blood evidence and was central to the famous low-speed chase.",
        icon: Car,
        significance: "High",
        color: "bg-blue-500/10 border-blue-500/20"
      },
      {
        title: "Bloody Footprints",
        description: "Size 12 Bruno Magli shoe prints found at the crime scene, matching O.J.'s shoe size.",
        icon: Footprints,
        significance: "Medium",
        color: "bg-yellow-500/10 border-yellow-500/20"
      },
      {
        title: "The Gloves",
        description: "One glove found at crime scene, another at O.J.'s home. Famous 'if it doesn't fit' moment during trial.",
        icon: Shirt,
        significance: "High",
        color: "bg-purple-500/10 border-purple-500/20"
      }
    ]
  },
  {
    category: "Timeline & Witnesses",
    items: [
      {
        title: "Time of Death",
        description: "Coroner estimated time of death between 10:15 PM and 10:40 PM on June 12, 1994.",
        icon: Clock,
        significance: "High",
        color: "bg-green-500/10 border-green-500/20"
      },
      {
        title: "Phone Records",
        description: "No alibi confirmed for O.J.'s whereabouts during the estimated time of the murders.",
        icon: Phone,
        significance: "Medium",
        color: "bg-orange-500/10 border-orange-500/20"
      },
      {
        title: "Crime Scene Location",
        description: "Murders occurred outside Nicole's Brentwood condo at 875 South Bundy Drive.",
        icon: MapPin,
        significance: "High",
        color: "bg-teal-500/10 border-teal-500/20"
      },
      {
        title: "Witness Testimonies",
        description: "Multiple witnesses provided conflicting accounts of O.J.'s behavior and whereabouts.",
        icon: Users,
        significance: "Medium",
        color: "bg-indigo-500/10 border-indigo-500/20"
      }
    ]
  }
];

const getSignificanceBadge = (significance: string) => {
  switch (significance) {
    case "High":
      return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">High Impact</Badge>;
    case "Medium":
      return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium Impact</Badge>;
    default:
      return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Low Impact</Badge>;
  }
};

const Evidence = () => {
  return (
    <section className="py-20 px-4 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
            The Evidence
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Key pieces of evidence that shaped the prosecution's case and the defense's strategy
          </p>
        </div>
        
        {evidenceData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-text-primary mb-8 text-center">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <Card 
                  key={index}
                  className={`${item.color} backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-scale-in`}
                  style={{ animationDelay: `${(categoryIndex * 4 + index) * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <CardTitle className="text-text-primary font-serif text-lg">
                          {item.title}
                        </CardTitle>
                      </div>
                      {getSignificanceBadge(item.significance)}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-16 p-8 bg-dark-elevated rounded-xl border border-border">
          <div className="text-center">
            <h4 className="font-serif text-xl font-bold text-gold mb-4">
              Defense Strategy
            </h4>
            <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto">
              The defense team, led by Johnnie Cochran, successfully argued that the evidence was contaminated, 
              mishandled, or planted by a racist police force. They focused on procedural errors and racial bias 
              rather than directly refuting the physical evidence, culminating in the famous glove demonstration 
              that appeared to show the gloves didn't fit O.J.'s hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;