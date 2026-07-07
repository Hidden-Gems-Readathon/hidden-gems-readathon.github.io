import TierButton from './TierButton';
import { Pickaxe } from 'lucide-react';
import {
  tier1UrlsQ1,
  tier1UrlsQ2,
  tier1UrlsQ3,
  tier2UrlsQ1,
  tier2UrlsQ2,
  tier2UrlsQ3,
  tier3UrlsQ1,
  tier3UrlsQ2,
  tier3UrlsQ3
} from '@/lib/images';

const RewardTiers = () => {
  return (
    <section className="relative py-12 md:py-20 px-4">
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <Pickaxe className="w-6 h-6 md:w-8 md:h-8 text-copper" />
          <h2 className="font-display text-2xl md:text-4xl text-foreground tracking-wide">
            Claim Your Artifacts
          </h2>
          <Pickaxe className="w-6 h-6 md:w-8 md:h-8 text-copper transform scale-x-[-1]" />
        </div>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto">
          Select a tier to unearth a random treasure for your collection
        </p>
        {/*<div className="w-24 h-0.5 mx-auto mt-4 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />*/}
      </div>

      {/* Tier buttons grid */}
      {/* Tier buttons Q1 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <h3 className="font-display text-2xl md:text-4xl text-foreground tracking-wide">
            January - March
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <TierButton
            tier={1}
            title="Field Find"
            urls={tier1UrlsQ1}
            icon="🪨"
          />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
          <TierButton
            tier={2}
            title='Rare Relic'
            urls={tier2UrlsQ1}
            icon="💎"
          />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <TierButton
            tier={3}
            title="Legendary Artifact"
            urls={tier3UrlsQ1}
            icon="👑"
          />
        </div>
      </div>

      {/* Tier buttons Q2 */}

      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <h3 className="font-display text-2xl md:text-4xl text-foreground tracking-wide">
            April - June
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <TierButton
            tier={1}
            title="Field Find"
            urls={tier1UrlsQ2}
            icon="🪨"
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
          <TierButton
            tier={2}
            title='Rare Relic'
            urls={tier2UrlsQ2}
            icon="💎"
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <TierButton
            tier={3}
            title="Legendary Artifact"
            urls={tier3UrlsQ2}
            icon="👑"
          />
        </div>
      </div>

      {/* Tier buttons Q3 */}

      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <h3 className="font-display text-2xl md:text-4xl text-foreground tracking-wide">
            July - September
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <TierButton
              tier={1}
              title="Field Find"
              urls={tier1UrlsQ3}
              icon="🪨"
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
          <TierButton
              tier={2}
              title='Rare Relic'
              urls={tier2UrlsQ3}
              icon="💎"
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <TierButton
              tier={3}
              title="Legendary Artifact"
              urls={tier3UrlsQ3}
              icon="👑"
          />
        </div>
      </div>
    </section>
  );
};

export default RewardTiers;
