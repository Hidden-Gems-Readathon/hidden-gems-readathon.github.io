import { MessageCircle, BookHeart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-10 md:py-14 mt-8 border-t border-border/30">
      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookHeart className="w-5 h-5 text-copper/60" />
          <span className="font-display text-sm md:text-base text-muted-foreground tracking-widest uppercase">
            Happy Reading, Explorer
          </span>
          <BookHeart className="w-5 h-5 text-copper/60" />
        </div>

        {/* Discord Link */}
        <div>
          <a
              href="https://discord.gg/bookishreality"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-copper/10 hover:bg-copper/20 border border-copper/30 hover:border-copper/50 rounded-lg text-copper hover:text-stone-light transition-all duration-300 font-display text-sm tracking-wide group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Join Our Discord Community</span>
          </a>
        </div>

        {/* Decorative compass rose */}
        <div className="mt-6 inline-flex items-center justify-center">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 border border-copper/30 rotate-45" />
            <div className="absolute inset-1 border border-copper/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-copper/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
