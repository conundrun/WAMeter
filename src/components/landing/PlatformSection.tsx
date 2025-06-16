
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, TrendingUp, Shield, Users, Brain } from 'lucide-react';

const PlatformSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: 'wameter',
      name: 'WAMETER™ Device',
      color: '#2E5BBA',
      icon: Cpu,
      title: 'Replace Senses with Sensors',
      features: [
        '₱20K vs ₱800K lab equipment',
        '15 minutes vs 4 weeks results',
        '±0.06 Aw accuracy certified',
        'Works anywhere, anytime'
      ]
    },
    {
      id: 'assure',
      name: 'ASSURE™ Dashboard',
      color: '#8E44AD',
      icon: TrendingUp,
      title: 'Turn Data into Compliance',
      features: [
        'Real-time monitoring',
        'Export documentation',
        'Quality trends analysis',
        'Audit-ready logs'
      ]
    },
    {
      id: 'calibrate',
      name: 'CALIBRATE™ Service',
      color: '#2E5BBA',
      icon: Shield,
      title: 'Trust, Maintained Forever',
      features: [
        'Auto-calibration',
        'Standards compliance',
        'Scheduled maintenance',
        'Precision guarantee'
      ]
    },
    {
      id: 'clusters',
      name: 'CLUSTERS™ Network',
      color: '#17A2B8',
      icon: Users,
      title: '500 MSMEs Share One Device',
      features: [
        'Federated deployment',
        'Cost sharing model',
        'Community access',
        'Shared infrastructure'
      ]
    },
    {
      id: 'predict',
      name: 'PREDICT™ AI',
      color: '#F39C12',
      icon: Brain,
      title: 'Prevent Problems Before They Happen',
      features: [
        'Spoilage forecasting',
        'Risk alerts system',
        'Pattern recognition',
        'Automated decisions'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Exceltra: <span className="text-[#2E5BBA]">Science Replaces Guesswork</span> at Every Step
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five integrated layers of scientific certainty, developed by government scientists, 
            validated by national authorities, trusted by exporters across ASEAN.
          </p>
        </div>

        {/* Layer Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {layers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <Button
                key={layer.id}
                onClick={() => setActiveLayer(index)}
                style={{ 
                  backgroundColor: activeLayer === index ? layer.color : 'transparent',
                  color: activeLayer === index ? 'white' : layer.color,
                  borderColor: layer.color
                }}
                variant="outline"
                className="px-6 py-3 transition-all duration-300"
              >
                <IconComponent className="mr-2 h-5 w-5" />
                {layer.name}
              </Button>
            );
          })}
        </div>

        {/* Active Layer Display */}
        <Card className="max-w-4xl mx-auto shadow-2xl">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ backgroundColor: layers[activeLayer].color }}
              >
                {React.createElement(layers[activeLayer].icon, { 
                  className: "h-10 w-10 text-white" 
                })}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {layers[activeLayer].name}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {layers[activeLayer].title}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {layers[activeLayer].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: layers[activeLayer].color }}
                  ></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg"
                style={{ backgroundColor: layers[activeLayer].color }}
                className="text-white px-8 py-4"
              >
                Explore {layers[activeLayer].name}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlatformSection;
