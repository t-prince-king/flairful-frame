import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Briefcase, Scale, AlertTriangle } from "lucide-react";

const profiles = [
  {
    name: "Orenthal James Simpson",
    nickname: "The Juice",
    role: "Former NFL Star & Actor",
    description: "Professional football player who played for 11 seasons, primarily with the Buffalo Bills. Known for his charismatic personality and successful transition to acting and broadcasting. Behind his public persona lay a pattern of controlling and violent behavior.",
    details: [
      "Born July 9, 1947 in San Francisco",
      "Heisman Trophy winner (1968) at USC",
      "NFL Hall of Fame inductee (1985)",
      "Actor in 'The Naked Gun' trilogy",
      "First African American to rush for 2,000 yards",
      "Spokesperson for Hertz rental cars"
    ],
    icon: User,
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    name: "Nicole Brown Simpson",
    role: "Second Wife & Victim",
    description: "German-American woman who became known through her marriage to O.J. Simpson. Mother of Sydney and Justin, she endured years of domestic abuse before her tragic murder at age 35.",
    details: [
      "Born May 19, 1959 in Frankfurt, Germany",
      "Moved to California as a child",
      "Married O.J. Simpson in 1985",
      "Mother of Sydney (1985) and Justin (1988)",
      "Worked as a waitress when they met",
      "Divorced O.J. in 1992 due to abuse"
    ],
    icon: Heart,
    color: "bg-pink-500/10 border-pink-500/20"
  },
  {
    name: "Ronald Goldman",
    role: "Victim & Friend",
    description: "Aspiring actor and waiter at Mezzaluna restaurant. He was returning Nicole's mother's sunglasses when he was brutally murdered alongside Nicole. His death shocked his family and the nation.",
    details: [
      "Born July 2, 1968 in Chicago",
      "Moved to Los Angeles to pursue acting",
      "Worked at Mezzaluna restaurant in Brentwood",
      "Friend of Nicole Brown Simpson",
      "Black belt in karate",
      "Murdered at age 25"
    ],
    icon: User,
    color: "bg-green-500/10 border-green-500/20"
  },
  {
    name: "Johnnie Cochran",
    role: "Lead Defense Attorney",
    description: "Charismatic civil rights attorney who became the lead counsel for O.J. Simpson's 'Dream Team.' Known for his theatrical courtroom style and ability to connect with juries, especially on issues of race.",
    details: [
      "Born October 2, 1937 in Shreveport, Louisiana",
      "Famous for 'If it doesn't fit, you must acquit'",
      "Civil rights attorney and activist",
      "Represented Geronimo Pratt and Reginald Denny",
      "Known for high-profile police brutality cases",
      "Died March 29, 2005"
    ],
    icon: Briefcase,
    color: "bg-yellow-500/10 border-yellow-500/20"
  },
  {
    name: "Marcia Clark",
    role: "Lead Prosecutor",
    description: "Experienced prosecutor who led the case against O.J. Simpson. Known for her aggressive style, she faced intense media scrutiny and became a symbol of the prosecution's challenges.",
    details: [
      "Born August 31, 1953",
      "UCLA Law School graduate",
      "Specialized in domestic violence cases",
      "Author and legal commentator",
      "Faced personal attacks during trial",
      "Wrote bestselling books about the case"
    ],
    icon: Scale,
    color: "bg-purple-500/10 border-purple-500/20"
  },
  {
    name: "Mark Fuhrman",
    role: "LAPD Detective",
    description: "Lead detective who found crucial evidence, including the bloody glove. His credibility was destroyed when defense revealed his history of racist statements, undermining the prosecution's case.",
    details: [
      "Born February 5, 1952",
      "LAPD detective for over 20 years",
      "Found the bloody glove at Rockingham",
      "History of racist statements exposed",
      "Pleaded no contest to perjury",
      "Retired from LAPD after trial"
    ],
    icon: AlertTriangle,
    color: "bg-red-500/10 border-red-500/20"
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