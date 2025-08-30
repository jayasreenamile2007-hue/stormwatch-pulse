import { AlertTriangle, Shield, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock alerts data - would come from government/weather APIs
const alerts = [
  {
    id: 1,
    type: 'High Wind Warning',
    severity: 'high',
    location: 'New York Metro Area',
    description: 'Sustained winds of 35-45 mph with gusts up to 65 mph expected. Secure loose objects and avoid travel if possible.',
    issueTime: '2 hours ago',
    validUntil: 'Tomorrow 6:00 AM',
    affectedPopulation: '8.4M people',
    safetyTips: [
      'Stay indoors and away from windows',
      'Secure outdoor furniture and decorations',
      'Avoid driving high-profile vehicles'
    ]
  },
  {
    id: 2,
    type: 'Flash Flood Watch',
    severity: 'medium',
    location: 'Hudson Valley',
    description: 'Heavy rainfall may cause rapid flooding of low-lying areas, streams, and urban areas with poor drainage.',
    issueTime: '4 hours ago',
    validUntil: 'Tonight 11:00 PM',
    affectedPopulation: '2.1M people',
    safetyTips: [
      'Do not drive through flooded roads',
      'Move to higher ground if necessary',
      'Monitor local weather updates'
    ]
  },
  {
    id: 3,
    type: 'Air Quality Alert',
    severity: 'low',
    location: 'Long Island',
    description: 'Moderate air quality due to elevated ozone levels. Sensitive individuals may experience minor symptoms.',
    issueTime: '6 hours ago',
    validUntil: 'Tonight 8:00 PM',
    affectedPopulation: '2.8M people',
    safetyTips: [
      'Limit outdoor activities if sensitive to air quality',
      'Keep windows closed during peak hours',
      'Use air conditioning with recirculation mode'
    ]
  }
];

const AlertsSection = () => {
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'alert-badge-high';
      case 'medium':
        return 'alert-badge-medium';
      case 'low':
        return 'alert-badge-low';
      default:
        return 'alert-badge-medium';
    }
  };

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-alert-high/30 bg-alert-high/5';
      case 'medium':
        return 'border-alert-medium/30 bg-alert-medium/5';
      case 'low':
        return 'border-alert-low/30 bg-alert-low/5';
      default:
        return 'border-alert-medium/30 bg-alert-medium/5';
    }
  };

  return (
    <section id="alerts" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Active Alerts & Warnings
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Stay informed about current weather emergencies and disaster warnings in your area
          </p>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { severity: 'high', count: 1, label: 'Critical Alerts', color: 'text-alert-high' },
            { severity: 'medium', count: 1, label: 'Warning Alerts', color: 'text-alert-medium' },
            { severity: 'low', count: 1, label: 'Advisory Alerts', color: 'text-alert-low' }
          ].map((stat, index) => (
            <div key={index} className="weather-card p-6 text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.count}</div>
              <div className="font-semibold text-text-primary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Alerts List */}
        <div className="space-y-6">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`weather-card p-6 border-l-4 ${getSeverityBorder(alert.severity)}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={getSeverityClass(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary">{alert.type}</h3>
                  </div>
                  
                  <div className="flex items-center text-text-muted mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{alert.location}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Issued {alert.issueTime}</span>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {alert.description}
                  </p>
                </div>

                <div className="lg:text-right">
                  <div className="flex items-center text-sm text-text-muted mb-2">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{alert.affectedPopulation} affected</span>
                  </div>
                  <div className="text-sm font-medium text-text-primary">
                    Valid until: {alert.validUntil}
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="bg-surface p-4 rounded-lg border border-border">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-weather-primary mr-2" />
                  <span className="font-semibold text-text-primary">Safety Instructions</span>
                </div>
                <ul className="space-y-2">
                  {alert.safetyTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-weather-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-text-secondary">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button variant="outline" size="sm" className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Details
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  View on Map
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <div className="mt-12 weather-card p-6 bg-alert-high/5 border-alert-high/20">
          <div className="text-center">
            <AlertTriangle className="h-8 w-8 text-alert-high mx-auto mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Emergency Situation?</h3>
            <p className="text-text-secondary mb-4">
              If you are in immediate danger, call emergency services immediately
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-alert-high hover:bg-alert-critical text-white font-bold">
                Call 911 - Emergency
              </Button>
              <Button variant="outline" className="border-alert-high text-alert-high hover:bg-alert-high/10">
                Non-Emergency: 311
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertsSection;