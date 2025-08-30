import { useState } from 'react';
import { Search, MapPin, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Mock search functionality - would integrate with weather API
      console.log('Searching for weather in:', searchQuery);
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Stay Alert, Stay
            <span className="text-weather-primary"> Safe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Get real-time weather updates and critical disaster alerts for your location. 
            Be prepared for severe weather conditions with instant notifications.
          </p>
        </div>

        {/* Search Section */}
        <div className="slide-up max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Enter city, state, or PIN code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-border focus:border-weather-primary rounded-xl bg-surface-elevated"
                />
              </div>
              <Button 
                type="submit"
                className="weather-gradient hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:shadow-weather"
              >
                <Search className="h-5 w-5 mr-2" />
                Get Weather
              </Button>
            </div>
          </form>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['New York', 'Los Angeles', 'Chicago', 'Miami', 'Seattle'].map((city) => (
              <Button
                key={city}
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery(city)}
                className="rounded-full hover:bg-weather-accent/20 border-weather-primary/30"
              >
                {city}
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { 
              icon: Thermometer, 
              label: 'Real-time Updates', 
              value: '24/7',
              description: 'Continuous monitoring'
            },
            { 
              icon: MapPin, 
              label: 'Locations Covered', 
              value: '10K+',
              description: 'Cities worldwide'
            },
            { 
              icon: Search, 
              label: 'Alert Types', 
              value: '15+',
              description: 'Disaster categories'
            }
          ].map((stat, index) => (
            <div key={index} className="weather-card p-6 text-center">
              <div className="weather-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-weather-primary mb-2">{stat.value}</div>
              <div className="font-semibold text-text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-text-muted">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;