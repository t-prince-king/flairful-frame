import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Briefcase } from "lucide-react";

const profiles = [
  {
    name: "Orenthal James Simpson",
    nickname: "The Juice",
    role: "Former NFL Star & Actor",
    description: "Professional football player who played for 11 seasons, primarily with the Buffalo Bills. Known for his charismatic personality and successful transition to acting and broadcasting.",
    details: [
      "Born July 9, 1947",
      "Heisman Trophy winner (1968)",
      "NFL Hall of Fame inductee",
      "Actor in films like 'The Naked Gun'"
    ],
    icon: User,
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    name: "Nicole Brown Simpson",
    role: "Second Wife",
    description: "German-American woman who became known primarily through her marriage to O.J. Simpson. Mother of two children with O.J.: Sydney and Justin.",
    details: [
      "Born May 19, 1959",
      "Married O.J. in 1985",
      "Mother of Sydney and Justin",
      "Worked as a waitress when they met"
    ],
    icon: Heart,
    color: "bg-pink-500/10 border-pink-500/20"
  },
  {
    name: "Ronald Goldman",
    role: "Victim & Friend",
    description: "Waiter at Mezzaluna restaurant who was returning sunglasses to Nicole Brown Simpson when he was murdered alongside her.",
    details: [
      "Born July 2, 1968",
      "Aspiring actor and model",
      "Worked at Mezzaluna restaurant",
      "Friend of Nicole Brown Simpson"
    ],
    icon: User,
    color: "bg-green-500/10 border-green-500/20"
  },
  {
    name: "Johnnie Cochran",
    role: "Lead Defense Attorney",
    description: "Charismatic defense attorney who became the lead counsel for O.J. Simpson's defense team, known as the 'Dream Team.'",
    details: [
      "Born October 2, 1937",
      "Famous for 'If it doesn't fit, you must acquit'",
      "Civil rights attorney",
      "Known for high-profile cases"
    ],
    icon: Briefcase,
    color: "bg-yellow-500/10 border-yellow-500/20"
  }
];

const CharacterProfiles = () => {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
            Key Figures
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The people at the center of one of the most controversial trials in American history
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className={`${profile.color} backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <profile.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-text-primary font-serif text-xl">
                      {profile.name}
                    </CardTitle>
                    {profile.nickname && (
                      <p className="text-gold text-sm font-medium">"{profile.nickname}"</p>
                    )}
                  </div>
                </div>
                <p className="text-gold font-medium">{profile.role}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {profile.description}
                </p>
                
                <div className="space-y-2">
                  {profile.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gold rounded-full" />
                      <span className="text-text-muted text-sm">{detail}</span>
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

export default CharacterProfiles;