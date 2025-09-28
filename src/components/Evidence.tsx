import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Eye, Car, Dna, Scale, AlertTriangle } from "lucide-react";
import crimeSceneImage from "@/assets/crime-scene.jpg";
import dnaEvidenceImage from "@/assets/dna-evidence.jpg";
import courtroomImage from "@/assets/courtroom-scene.jpg";

const evidenceItems = [
  {
    title: "DNA Evidence",
    icon: Dna,
    image: dnaEvidenceImage,
    items: [
      "Blood at crime scene matched O.J.'s DNA (1 in 170 million chance)",
      "Nicole and Ron's blood found in O.J.'s Bronco",
      "O.J.'s blood found on his driveway and front door",
      "Hair and fiber evidence linking O.J. to crime scene",
      "Blood trail from Bronco to O.J.'s front door",
      "DNA found on socks in O.J.'s bedroom"
    ]
  },
  {
    title: "Physical Evidence",
    icon: Fingerprint,
    image: crimeSceneImage,
    items: [
      "Bloody glove found at Rockingham estate",
      "Matching glove found at crime scene",
      "Bruno Magli shoe prints (rare size 12) - O.J.'s shoe size",
      "Cashmere cap with O.J.'s hair found at scene",
      "Cut on O.J.'s left hand discovered after murders",
      "Blue fibers on glove matched O.J.'s shirt"
    ]
  },
  {
    title: "Witness Testimony",
    icon: Eye,
    items: [
      "911 calls documenting domestic violence history",
      "Kato Kaelin heard thumps on his wall around midnight",
      "Limousine driver Allan Park couldn't reach O.J. for pickup",
      "Restaurant workers confirmed Ron Goldman left at 9:50 PM",
      "Neighbors heard Nicole's dog barking around 10:15 PM",
      "Multiple witnesses saw O.J.'s Bronco near crime scene"
    ]
  },
  {
    title: "Vehicle & Timeline Evidence",
    icon: Car,
    items: [
      "Blood found throughout white Ford Bronco interior",
      "Carpet fibers in Bronco matched crime scene",
      "No solid alibi for 9:45 PM - 11:00 PM timeframe",
      "Flight to Chicago booked suddenly after murders",
      "Cell phone records show calls to Nicole hours before",
      "Bronco chase viewed by 95 million Americans"
    ]
  },
  {
    title: "Defense Strategy",
    icon: Scale,
    image: courtroomImage,
    items: [
      "Planted evidence theory - LAPD conspiracy",
      "Contaminated DNA samples due to poor handling",
      "Mark Fuhrman's racist past exposed",
      "Glove demonstration - 'If it doesn't fit, you must acquit'",
      "Chain of custody problems with evidence",
      "Racial tensions and LAPD credibility issues"
    ]
  },
  {
    title: "Controversial Aspects",
    icon: AlertTriangle,
    items: [
      "Jury deliberated only 4 hours for double murder",
      "Racial divide in public opinion on verdict",
      "Civil trial later found O.J. liable for wrongful deaths",
      "Evidence handling criticized by experts",
      "Media circus overshadowed legal proceedings",
      "Case exposed deep racial tensions in America"
    ]
  }
];

const Evidence = () => {
  return (
    <section className="py-20 px-4 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
            The Evidence
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive analysis of the evidence that shaped the prosecution's case and the defense's strategy
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {evidenceItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-dark-surface/80 border-gold/20 backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
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
                <div className="space-y-3">
                  {item.items.map((evidence, evidenceIndex) => (
                    <div key={evidenceIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed text-sm">{evidence}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-dark-elevated border-red-500/20">
            <CardHeader>
              <CardTitle className="text-red-400 font-serif text-xl flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Prosecution Case
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed">
                The prosecution presented what they believed was overwhelming evidence: DNA evidence linking O.J. to the crime scene, 
                a history of domestic violence, and no solid alibi. They argued that O.J. committed the murders in a jealous rage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-elevated border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-blue-400 font-serif text-xl flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Defense Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed">
                The 'Dream Team' defense successfully shifted focus from the evidence to police misconduct, racial bias, and contamination. 
                They convinced the jury that O.J. was framed by a corrupt LAPD.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Evidence;