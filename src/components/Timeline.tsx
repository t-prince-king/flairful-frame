import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Scale, AlertTriangle } from "lucide-react";

const timelineEvents = [
  {
    date: "1977",
    title: "O.J. and Nicole Meet",
    description: "O.J. Simpson meets Nicole Brown while she's working as a waitress at a nightclub in Los Angeles. They begin dating even though O.J. is still married to Marguerite Whitley. Their relationship would span nearly two decades.",
    icon: Users,
    category: "relationship"
  },
  {
    date: "1979",
    title: "O.J.'s First Divorce",
    description: "O.J. divorces his first wife Marguerite Whitley, paving the way for his relationship with Nicole to become more serious.",
    icon: Scale,
    category: "legal"
  },
  {
    date: "1985",
    title: "Marriage",
    description: "O.J. and Nicole marry after his divorce. They appear to be a glamorous celebrity couple, living a wealthy lifestyle in Brentwood. Nicole becomes part of Hollywood's elite social circle.",
    icon: Users,
    category: "relationship"
  },
  {
    date: "1988-1992",
    title: "Pattern of Domestic Violence",
    description: "Multiple documented incidents of domestic violence occur. Nicole calls police several times, reporting O.J.'s controlling and jealous behavior. Friends witness bruises and aggressive confrontations.",
    icon: AlertTriangle,
    category: "violence"
  },
  {
    date: "1992",
    title: "Divorce Filed",
    description: "Nicole files for divorce after 7 years of marriage, citing irreconcilable differences. She seeks a restraining order due to O.J.'s continued abusive behavior and threats.",
    icon: Scale,
    category: "legal"
  },
  {
    date: "1992-1994",
    title: "Post-Divorce Period",
    description: "Nicole begins dating other men, including Denis Pape. O.J. reportedly becomes increasingly jealous and continues to harass Nicole despite their divorce.",
    icon: Users,
    category: "relationship"
  },
  {
    date: "June 12, 1994",
    title: "The Murders",
    description: "Nicole Brown Simpson and Ronald Goldman are found brutally murdered outside Nicole's Brentwood condo. Both victims suffered multiple fatal stab wounds in what appeared to be a crime of passion.",
    icon: AlertTriangle,
    category: "crime"
  },
  {
    date: "June 13-16, 1994",
    title: "Investigation Begins",
    description: "LAPD discovers blood evidence at O.J.'s Rockingham estate. A trail of blood leads from his white Bronco to his front door. O.J. becomes the prime suspect.",
    icon: AlertTriangle,
    category: "crime"
  },
  {
    date: "June 17, 1994",
    title: "The Bronco Chase",
    description: "O.J. Simpson leads police on a dramatic low-speed chase in a white Ford Bronco driven by Al Cowlings. 95 million viewers watch the surreal chase live on television.",
    icon: Calendar,
    category: "legal"
  },
  {
    date: "January 1995",
    title: "Trial Begins",
    description: "The 'Trial of the Century' begins with Johnnie Cochran leading O.J.'s 'Dream Team' defense against prosecutors Marcia Clark and Christopher Darden.",
    icon: Scale,
    category: "legal"
  },
  {
    date: "June 1995",
    title: "Glove Evidence",
    description: "The infamous glove demonstration occurs when O.J. tries on the bloody gloves in court. Cochran's phrase 'If it doesn't fit, you must acquit' becomes legendary.",
    icon: Scale,
    category: "legal"
  },
  {
    date: "October 3, 1995",
    title: "The Verdict",
    description: "After deliberating for less than 4 hours, the predominantly African American jury finds O.J. Simpson not guilty of all criminal charges, dividing America along racial lines.",
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