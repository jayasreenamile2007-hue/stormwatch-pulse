import { useState } from 'react';
import { Bell, Mail, Phone, Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email && !phone) {
      toast({
        title: "Error",
        description: "Please provide either an email or phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Mock subscription - would integrate with backend
    setTimeout(() => {
      toast({
        title: "Subscription Successful!",
        description: "You'll receive instant alerts for your area",
      });
      setEmail('');
      setPhone('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Stay Informed with Instant Alerts
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Subscribe to receive real-time weather alerts and emergency notifications 
            directly to your email or phone
          </p>
        </div>

        {/* Subscription Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Zap,
              title: 'Instant Alerts',
              description: 'Get notified within seconds of severe weather warnings'
            },
            {
              icon: Shield,
              title: 'Multiple Channels',
              description: 'Receive alerts via email, SMS, and push notifications'
            },
            {
              icon: Bell,
              title: 'Customizable',
              description: 'Choose alert types and severity levels that matter to you'
            }
          ].map((benefit, index) => (
            <div key={index} className="weather-card p-6 text-center">
              <div className="weather-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{benefit.title}</h3>
              <p className="text-text-secondary text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Subscription Form */}
        <div className="weather-card p-8">
          <form onSubmit={handleSubscribe} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5" />
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5" />
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Alert Preferences */}
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Alert Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Severe Weather Warnings',
                  'Flood Alerts',
                  'Fire Danger',
                  'Air Quality',
                  'Earthquake Alerts',
                  'Winter Weather'
                ].map((alertType) => (
                  <label key={alertType} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-border text-weather-primary focus:ring-weather-primary"
                    />
                    <span className="text-text-secondary">{alertType}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="bg-surface p-4 rounded-lg border border-border">
              <label className="flex items-start space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-border text-weather-primary focus:ring-weather-primary"
                />
                <span className="text-sm text-text-secondary">
                  I agree to receive weather alerts and emergency notifications. 
                  You can unsubscribe at any time. Read our{' '}
                  <a href="#" className="text-weather-primary hover:underline">Privacy Policy</a>{' '}
                  and <a href="#" className="text-weather-primary hover:underline">Terms of Service</a>.
                </span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full weather-gradient hover:opacity-90 text-lg font-semibold py-3"
            >
              {isLoading ? (
                'Subscribing...'
              ) : (
                <>
                  <Bell className="h-5 w-5 mr-2" />
                  Subscribe to Alerts
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Features List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Real-time severe weather notifications',
            'Emergency alerts for your specific location',
            'Multi-channel delivery (email, SMS, push)',
            'Customizable alert preferences',
            'No spam - only critical weather information',
            'Free service with premium options available'
          ].map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-5 w-5 text-alert-low mr-3 flex-shrink-0" />
              <span className="text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;