import TierButton from './TierButton';
import { Pickaxe } from 'lucide-react';

const tier1Urls = [
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Footprint_1.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Footprint_2.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Footprint_3.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Footprint_4.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Footprint_5.png"
];

const tier2Urls = [
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Amethyst_Geode.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Aquamarine_Geode.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Garnet_Geode.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Jasper_Geode.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Zircon_Geode.png"
];

const tier3Urls = [
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Amethyst.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Aquamarine.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Garnet.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Jasper.png",
  "https://xunqxuqeklnpgxisxffo.supabase.co/storage/v1/object/public/Hidden%20Gems/First%20Quarter/Zircon.png"
];

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <TierButton
            tier={1}
            title="Field Find"
            subtitle="3,000 – 5,000 ratings"
            urls={tier1Urls}
            icon="🪨"
          />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
          <TierButton
            tier={2}
            title="Rare Relic"
            subtitle="1,000 – 3,000 ratings"
            urls={tier2Urls}
            icon="💎"
          />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <TierButton
            tier={3}
            title="Legendary Artifact"
            subtitle="Under 1,000 ratings"
            urls={tier3Urls}
            icon="👑"
          />
        </div>
      </div>
    </section>
  );
};

export default RewardTiers;
