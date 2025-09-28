import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Scale, AlertTriangle } from "lucide-react";

const timelineEvents = [
  {
    date: "1977",
    title: "O.J. and Nicole Meet",
    description: "O.J. Simpson meets Nicole Brown while she's working as a waitress in Los Angeles. They begin dating despite O.J. being married.",
    icon: Users,
    category: "relationship"
  },
  {
    date: "1985",
    title: "Marriage",
    description: "O.J. and Nicole marry after his divorce from Marguerite Whitley. They appear to be a glamorous celebrity couple.",
    icon: Users,
    category: "relationship"
  },
  {
    date: "1989-1992",
    title: "Domestic Violence Reports",
    description: "Multiple incidents of domestic violence are reported. Nicole calls police several times due to O.J.'s abusive behavior.",
    icon: AlertTriangle,
    category: "violence"
  },
  {
    date: "1992",
    title: "Divorce Filed",
    description: "Nicole files for divorce after 7 years of marriage, citing irreconcilable differences and seeking restraining order.",
    icon: Scale,
    category: "legal"
  },
  {
    date: "June 12, 1994",
    title: "The Murders",
    description: "Nicole Brown Simpson and Ronald Goldman are found murdered outside Nicole's Brentwood home. Both victims suffered multiple stab wounds.",
    icon: AlertTriangle,
    category: "crime"
  },
  {
    date: "June 17, 1994",
    title: "The Chase",
    description: "O.J. Simpson leads police on a low-speed chase in a white Ford Bronco, watched by 95 million viewers on live television.",
    icon: Calendar,
    category: "legal"
  },
  {
    date: "October 3, 1995",
    title: "The Verdict",
    description: "After deliberating for less than 4 hours, the jury finds O.J. Simpson not guilty of all charges in the criminal trial.",
    icon: Scale,
    category: "verdict"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "relationship": return "bg-blue-500/20 border-blue-500/30";
    case "violence": return "bg-red-500/20 border-red-500/30";
    case "legal": return "bg-gold/20 border-gold/30";
    case "crime": return "bg-red-600/20 border-red-600/30";
    case "verdict": return "bg-green-500/20 border-green-500/30";
    default: return "bg-muted border-border";
  }
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
            Timeline of Events
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From the beginning of their relationship to the shocking verdict that divided America
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px bg-gold/30 h-full" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-start animate-slide-in-left`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gold rounded-full border-4 border-dark-surface flex items-center justify-center shadow-gold">
                  <event.icon className="w-4 h-4 text-dark-bg" />
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-8'} md:w-1/2`}>
                  <Card className={`${getCategoryColor(event.category)} backdrop-blur-sm hover:shadow-elevated transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="text-gold font-semibold">{event.date}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-3 text-text-primary">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;