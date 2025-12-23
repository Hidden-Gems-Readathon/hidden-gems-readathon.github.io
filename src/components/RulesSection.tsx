import { BookOpen, Clock, Layers, BookMarked } from 'lucide-react';

const rules = [
  {
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
    text: "The book must be published for at least a month, allowing time for ratings to accumulate. If you read it earlier, check the ratings after a month or any later date to keep things fair and promote lesser-known authors.",
  },
  {
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Rating Tiers",
    tiers: [
      { label: "Tier 1: Field Find", range: "3,000 – 5,000 ratings" },
      { label: "Tier 2: Rare Relic", range: "1,000 – 3,000 ratings" },
      { label: "Tier 3: Legendary Artifact", range: "Under 1,000 ratings" },
    ],
  },
  {
    icon: <BookMarked className="w-5 h-5 md:w-6 md:h-6" />,
    text: 'For manga: use the "Completed" stat from AniList instead of Goodreads ratings.',
  },
];

const RulesSection = () => {
  return (
    <section className="relative py-12 md:py-16">
      {/* Decorative border top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-copper to-transparent" />

      <div className="max-w-3xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-copper" />
            <h2 className="font-display text-2xl md:text-4xl text-foreground tracking-wide">
              Excavation Guidelines
            </h2>
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-copper transform scale-x-[-1]" />
          </div>
          {/*<div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-copper/50 to-transparent" />*/}
        </div>

        {/* Rules list */}
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-5 md:p-6 transition-all duration-300 hover:bg-card/80 hover:border-copper/30 hover:shadow-lg">
                {/* Rule number */}
                {/*<div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-copper flex items-center justify-center text-primary-foreground font-display text-sm md:text-base font-bold shadow-md">*/}
                {/*  {rule.icon}*/}
                {/*</div>*/}

                <div className="flex items-center gap-4 md:Fpl-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-parchment-dark/50 flex items-center justify-center text-copper transition-all duration-300 group-hover:bg-copper/20 group-hover:scale-110">
                    {rule.icon}
                  </div>

                  <div className="flex-1">
                    {rule.title && (
                      <h3 className="font-display text-lg md:text-xl text-foreground mb-3">
                        {rule.title}
                      </h3>
                    )}

                    {rule.text && (
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body h-full">
                        {rule.text}
                      </p>
                    )}

                    {rule.tiers && (
                      <div className="space-y-2">
                        {rule.tiers.map((tier, tierIndex) => (
                          <div
                            key={tierIndex}
                            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-2 border-b border-border/30 last:border-0"
                          >
                            <span className="font-display text-sm md:text-base text-copper">
                              {tier.label}:
                            </span>
                            <span className="text-muted-foreground text-sm md:text-base font-body">
                              {tier.range}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative border bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-copper to-transparent" />
    </section>
  );
};

export default RulesSection;
