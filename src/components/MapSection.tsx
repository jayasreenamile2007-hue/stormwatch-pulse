import { MapPin, Layers, Maximize2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Interactive Weather Map
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Visualize real-time weather conditions and affected regions on our interactive map
          </p>
        </div>

        {/* Map Container */}
        <div className="weather-card p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map Controls */}
            <div className="lg:w-1/4 space-y-4">
              <div>
                <h3 className="font-semibold text-text-primary mb-3 flex items-center">
                  <Layers className="h-5 w-5 mr-2 text-weather-primary" />
                  Map Layers
                </h3>
                <div className="space-y-2">
                  {[
                    { name: 'Temperature', active: true },
                    { name: 'Precipitation', active: false },
                    { name: 'Wind Speed', active: false },
                    { name: 'Air Quality', active: false },
                    { name: 'Alert Zones', active: true },
                    { name: 'Radar', active: false }
                  ].map((layer) => (
                    <label key={layer.name} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={layer.active}
                        className="rounded border-border text-weather-primary focus:ring-weather-primary"
                      />
                      <span className="text-text-secondary">{layer.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-weather-primary" />
                  Quick Locations
                </h3>
                <div className="space-y-2">
                  {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'].map((city) => (
                    <Button
                      key={city}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left"
                    >
                      {city}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Display Area */}
            <div className="lg:w-3/4">
              <div className="relative bg-weather-accent/10 rounded-lg border-2 border-dashed border-weather-primary/30 aspect-video flex items-center justify-center">
                {/* Placeholder for actual map integration */}
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-weather-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-text-secondary mb-4 max-w-md mx-auto">
                    This area will display an interactive map showing real-time weather conditions, 
                    alert zones, and affected regions using Mapbox or OpenStreetMap integration.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-weather-primary/20 text-weather-primary rounded-full text-sm">
                      Temperature Overlay
                    </span>
                    <span className="px-3 py-1 bg-alert-high/20 text-alert-high rounded-full text-sm">
                      Alert Zones
                    </span>
                    <span className="px-3 py-1 bg-alert-medium/20 text-alert-medium rounded-full text-sm">
                      Wind Patterns
                    </span>
                  </div>
                </div>

                {/* Map Controls Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="sm" variant="outline" className="bg-surface-elevated">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-surface-elevated">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Map Legend */}
              <div className="mt-4 p-4 bg-surface rounded-lg border border-border">
                <h4 className="font-semibold text-text-primary mb-3">Map Legend</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-alert-high rounded mr-2"></div>
                    <span className="text-text-secondary">High Risk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-alert-medium rounded mr-2"></div>
                    <span className="text-text-secondary">Medium Risk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-alert-low rounded mr-2"></div>
                    <span className="text-text-secondary">Low Risk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-weather-primary rounded mr-2"></div>
                    <span className="text-text-secondary">Clear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: MapPin,
              title: 'Real-time Tracking',
              description: 'Live weather conditions and disaster zones updated every 5 minutes'
            },
            {
              icon: Layers,
              title: 'Multiple Layers',
              description: 'Temperature, precipitation, wind, air quality, and alert overlays'
            },
            {
              icon: Maximize2,
              title: 'Full Screen Mode',
              description: 'Expand the map to full screen for detailed analysis and monitoring'
            }
          ].map((feature, index) => (
            <div key={index} className="weather-card p-6 text-center">
              <div className="weather-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;