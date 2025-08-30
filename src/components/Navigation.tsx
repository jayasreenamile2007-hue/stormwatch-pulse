import { useState } from 'react';
import { Cloud, Menu, X, AlertTriangle, Home, MapPin, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Weather Updates', href: '#weather', icon: Cloud },
    { name: 'Alerts', href: '#alerts', icon: AlertTriangle },
    { name: 'Safety Tips', href: '#safety', icon: Shield },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className="bg-surface-elevated border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="weather-gradient p-2 rounded-lg">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-weather-primary">StormWatch Pulse</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-text-secondary hover:text-weather-primary transition-colors duration-200 font-medium"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Emergency Button */}
          <div className="hidden md:block">
            <Button className="bg-alert-high hover:bg-alert-critical text-white font-semibold">
              Emergency: 911
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-text-secondary hover:text-weather-primary hover:bg-weather-accent/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-alert-high hover:bg-alert-critical text-white">
                  Emergency: 911
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;