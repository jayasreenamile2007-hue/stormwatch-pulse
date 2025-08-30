import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow,
  Calendar
} from 'lucide-react';

// Mock weather data - would come from API
const currentWeather = {
  location: 'New York, NY',
  temperature: 72,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  airQuality: 'Good',
  visibility: '10 mi',
  feelsLike: 75,
  uvIndex: 6
};

const forecast = [
  { day: 'Today', high: 75, low: 60, condition: 'Partly Cloudy', icon: Sun },
  { day: 'Tomorrow', high: 78, low: 62, condition: 'Sunny', icon: Sun },
  { day: 'Wednesday', high: 71, low: 55, condition: 'Rainy', icon: CloudRain },
  { day: 'Thursday', high: 68, low: 52, condition: 'Cloudy', icon: Cloud },
  { day: 'Friday', high: 74, low: 58, condition: 'Partly Cloudy', icon: Sun },
  { day: 'Saturday', high: 76, low: 61, condition: 'Sunny', icon: Sun },
  { day: 'Sunday', high: 73, low: 57, condition: 'Cloudy', icon: Cloud }
];

const WeatherDisplay = () => {
  return (
    <section id="weather" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Current Weather Conditions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real-time weather data and detailed forecasts for your location
          </p>
        </div>

        {/* Current Weather Card */}
        <div className="weather-card p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Weather Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                {currentWeather.location}
              </h3>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="text-6xl font-bold text-weather-primary mr-4">
                  {currentWeather.temperature}°
                </div>
                <div>
                  <div className="text-xl text-text-secondary">{currentWeather.condition}</div>
                  <div className="text-text-muted">Feels like {currentWeather.feelsLike}°F</div>
                </div>
              </div>
            </div>

            {/* Weather Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Droplets, label: 'Humidity', value: `${currentWeather.humidity}%` },
                { icon: Wind, label: 'Wind Speed', value: `${currentWeather.windSpeed} mph` },
                { icon: Eye, label: 'Visibility', value: currentWeather.visibility },
                { icon: Sun, label: 'UV Index', value: currentWeather.uvIndex }
              ].map((item, index) => (
                <div key={index} className="bg-surface p-4 rounded-lg border border-border">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-5 w-5 text-weather-primary mr-2" />
                    <span className="text-sm text-text-muted">{item.label}</span>
                  </div>
                  <div className="text-lg font-semibold text-text-primary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Air Quality */}
          <div className="mt-6 p-4 bg-alert-low/10 border border-alert-low/20 rounded-lg">
            <div className="flex items-center">
              <Wind className="h-5 w-5 text-alert-low mr-2" />
              <span className="font-semibold text-alert-low">Air Quality: {currentWeather.airQuality}</span>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="weather-card p-8">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-weather-primary mr-3" />
            <h3 className="text-2xl font-bold text-text-primary">7-Day Forecast</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {forecast.map((day, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-surface border border-border hover:border-weather-primary/30 transition-colors">
                <div className="font-semibold text-text-primary mb-3">{day.day}</div>
                <div className="weather-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <day.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-text-muted mb-2">{day.condition}</div>
                <div className="space-y-1">
                  <div className="text-lg font-bold text-text-primary">{day.high}°</div>
                  <div className="text-sm text-text-muted">{day.low}°</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDisplay;