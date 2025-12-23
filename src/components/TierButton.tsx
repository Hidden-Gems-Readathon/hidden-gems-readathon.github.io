import { useState } from 'react';

interface TierButtonProps {
  tier: number;
  title: string;
  subtitle: string;
  urls: string[];
  icon: React.ReactNode;
}

const TierButton = ({ tier, title, subtitle, urls, icon }: TierButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    window.open(randomUrl, '_blank');
    
    setTimeout(() => setIsPressed(false), 200);
  };

  const tierColors = {
    1: 'from-stone via-stone-light to-stone',
    2: 'from-copper via-copper-glow to-copper',
    3: 'from-gold via-amber-400 to-gold',
  };

  const tierGlows = {
    1: 'shadow-[0_0_30px_rgba(139,119,101,0.4)]',
    2: 'shadow-[0_0_40px_rgba(184,115,51,0.5)]',
    3: 'shadow-[0_0_50px_rgba(212,175,55,0.6)]',
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group w-full max-w-sm mx-auto
        transition-all duration-500 ease-out
        ${isHovered ? 'transform -translate-y-3 scale-105' : ''}
        ${isPressed ? 'scale-95' : ''}
      `}
    >
      {/* Stone tablet base */}
      <div
        className={`
          relative overflow-hidden rounded-lg p-6 md:p-8
          bg-gradient-to-b ${tierColors[tier as keyof typeof tierColors]}
          border-2 border-stone-light/50
          transition-all duration-500
          ${isHovered ? tierGlows[tier as keyof typeof tierGlows] : 'shadow-lg'}
        `}
      >
        {/* Carved texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
        
        {/* Highlight edge */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-3">
          {/* Icon */}
          <div className={`
            inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20
            rounded-full bg-parchment/20 border border-parchment/30
            transition-all duration-500
            ${isHovered ? 'scale-110 rotate-12' : ''}
          `}>
            <span className="text-3xl md:text-4xl">{icon}</span>
          </div>

          {/* Tier label */}
          <div className="text-parchment/70 text-sm font-display tracking-widest uppercase">
            Tier {tier}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-parchment font-bold tracking-wide">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-parchment/80 text-sm md:text-base font-body">
            {subtitle}
          </p>

          {/* Click prompt */}
          <div className={`
            mt-4 py-2 px-4 rounded-md
            bg-parchment/10 border border-parchment/20
            text-parchment/60 text-xs font-display tracking-wider uppercase
            transition-all duration-300
            ${isHovered ? 'bg-parchment/20 text-parchment/90' : ''}
          `}>
            Click to Excavate
          </div>
        </div>

        {/* Animated glow ring */}
        {isHovered && (
          <div className="absolute inset-0 rounded-lg animate-pulse pointer-events-none">
            <div className="absolute inset-0 rounded-lg border-2 border-parchment/30" />
          </div>
        )}
      </div>
    </button>
  );
};

export default TierButton;
