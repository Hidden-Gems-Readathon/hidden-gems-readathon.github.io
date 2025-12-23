import Header from '@/components/Header';
import RulesSection from '@/components/RulesSection';
import RewardTiers from '@/components/RewardTiers';
import Footer from '@/components/Footer';
import DustParticles from '@/components/DustParticles';
import FlashlightEffect from '@/components/FlashlightEffect';

const Index = () => {
  return (
    <div className="min-h-screen parchment-bg relative overflow-x-hidden">
      {/* Atmospheric effects */}
      {/*<DustParticles />*/}
      {/*<FlashlightEffect />*/}

      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(44,36,22,0.15)_100%)]" />

      {/* Main content */}
      <div className="relative z-20">
        <Header />
        <main className="container mx-auto">
          <RulesSection />
          <RewardTiers />
        </main>
        <Footer />
      </div>

      {/* Bottom aged edge effect */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-charcoal/10 to-transparent pointer-events-none z-30" />
    </div>
  );
};

export default Index;
