import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WeatherDisplay from '@/components/WeatherDisplay';
import AlertsSection from '@/components/AlertsSection';
import MapSection from '@/components/MapSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WeatherDisplay />
      <AlertsSection />
      <MapSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Index;