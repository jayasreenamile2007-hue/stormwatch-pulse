import { 
  Cloud, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ExternalLink,
  Shield,
  AlertTriangle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="weather-gradient p-2 rounded-lg">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-weather-primary">StormWatch Pulse</span>
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Your trusted source for real-time weather alerts and disaster warnings. 
              Keeping communities safe with accurate, timely information.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-weather-accent/20 rounded-full flex items-center justify-center text-weather-primary hover:bg-weather-primary hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'Weather Updates',
                'Active Alerts',
                'Safety Tips',
                'Emergency Preparedness',
                'Weather Maps',
                'Historical Data'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-weather-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Resources */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Emergency Resources</h3>
            <ul className="space-y-2">
              {[
                { label: 'Emergency Services', number: '911' },
                { label: 'Non-Emergency', number: '311' },
                { label: 'Weather Service', number: '1-800-XXX-XXXX' },
                { label: 'Disaster Relief', number: '1-800-XXX-XXXX' }
              ].map((contact) => (
                <li key={contact.label} className="flex items-center justify-between">
                  <span className="text-text-secondary">{contact.label}</span>
                  <a 
                    href={`tel:${contact.number}`}
                    className="text-weather-primary hover:text-weather-primary-light font-medium"
                  >
                    {contact.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-weather-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-text-secondary">support@stormwatchpulse.com</div>
                  <div className="text-text-muted text-sm">General inquiries</div>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-weather-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-text-secondary">1-800-WEATHER</div>
                  <div className="text-text-muted text-sm">24/7 Support line</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-weather-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-text-secondary">National Weather Center</div>
                  <div className="text-text-muted text-sm">Norman, OK 73072</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Alert Banner */}
        <div className="mt-8 p-4 bg-alert-high/10 border border-alert-high/20 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-3 md:mb-0">
              <AlertTriangle className="h-6 w-6 text-alert-high mr-3" />
              <div>
                <div className="font-semibold text-text-primary">Emergency Hotlines</div>
                <div className="text-text-secondary text-sm">Available 24/7 for immediate assistance</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:911"
                className="px-4 py-2 bg-alert-high text-white rounded-lg hover:bg-alert-critical transition-colors font-semibold text-center"
              >
                Call 911 - Emergency
              </a>
              <a
                href="tel:311"
                className="px-4 py-2 border border-alert-high text-alert-high rounded-lg hover:bg-alert-high/10 transition-colors font-semibold text-center"
              >
                Call 311 - Non-Emergency
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0">
            © 2024 StormWatch Pulse. All rights reserved. Weather data provided by NOAA and international partners.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-text-muted hover:text-weather-primary transition-colors flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-weather-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-muted hover:text-weather-primary transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-text-muted hover:text-weather-primary transition-colors flex items-center">
              <ExternalLink className="h-4 w-4 mr-1" />
              API Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;