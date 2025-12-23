import { Compass, Gem } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative py-12 md:py-20 text-center overflow-hidden">
      {/* Decorative compass corners */}
      <Compass className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 text-copper/30 animate-spin" style={{ animationDuration: '30s' }} />
      <Compass className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 text-copper/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

      {/* Main title section */}
      <div className="relative z-20 px-4">
        {/* Gem icon */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-copper/20 to-gold/10 border-2 border-copper/40 shadow-lg animate-float">
            <Gem className="w-10 h-10 md:w-12 md:h-12 text-gold" />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wider mb-4 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Hidden Gems
          <span className="block text-copper mt-2">Readathon</span>
        </h1>

        {/* Decorative line */}
        <div 
          className="flex items-center justify-center gap-4 my-6 md:my-8 animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-copper" />
          <div className="w-2 h-2 rotate-45 bg-copper" />
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-copper" />
        </div>

        {/* Description */}
        <div 
          className="max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Start your literary excavation to dig up forgotten treasures - books with{' '}
            <span className="text-copper font-semibold">5,000 or fewer ratings</span>{' '}
            waiting to be discovered.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            For each book you read, you'll receive a <span className="text-copper font-semibold">random artifact</span> to add to your personal excavation site.
            Awards rotate each quarter, with special limited finds available during mini-events. 
            Dust off your reading glasses and start digging!
          </p>
        </div>

        {/* Scroll indicator */}
        {/*<div */}
        {/*  className="mt-10 md:mt-14 animate-fade-in"*/}
        {/*  style={{ animationDelay: '600ms' }}*/}
        {/*>*/}
        {/*  <div className="inline-flex flex-col items-center text-muted-foreground/50 hover:text-copper transition-colors duration-300">*/}
        {/*    <span className="text-xs font-display tracking-widest uppercase mb-2">Scroll to explore</span>*/}
        {/*    <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">*/}
        {/*      <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};

export default Header;
