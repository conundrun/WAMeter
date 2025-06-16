
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, Globe, Award, Building2, University, Cpu, Users, TrendingUp, Shield } from 'lucide-react';

// Hero Section Component
const HeroSection: React.FC = () => {
  const [currentAward, setCurrentAward] = useState(0);
  
  const awards = [
    "🏆 StartupQC Silver Winner (Quezon City Government Innovation Program)",
    "💰 Untrod Capital Award (Multinational Deep Technology Investment)",
    "📱 PLDT Best Technology (Philippines' National Telecom Leader)",
    "🌏 Leave-A-Nest Finalist (International Deep Tech Commercialization)"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1B365D] via-[#2E5BBA] to-[#1B365D] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-[#8E44AD] rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-[#F39C12] rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Award Ticker */}
        <div className="mb-8 bg-black/20 rounded-lg p-4 backdrop-blur-sm">
          <div className="overflow-hidden">
            <div className="animate-fade-in text-center text-sm font-medium">
              {awards[currentAward]}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headlines and Trust Badges */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Replace Guesswork with 
                <span className="text-[#F39C12]"> Government-Grade</span> Science
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                The only food safety platform developed by the Philippine Department of Science and Technology. 
                Ateneo de Manila University's patented technology now replacing smell-and-taste testing across ASEAN.
              </p>
            </div>

            {/* Institutional Trust Stack */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in">
                <Building2 className="text-[#F39C12] h-8 w-8" />
                <div>
                  <div className="font-semibold">Philippine Department of Science and Technology</div>
                  <div className="text-sm text-blue-200">"National government's premier science funding agency"</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in">
                <University className="text-[#8E44AD] h-8 w-8" />
                <div>
                  <div className="font-semibold">Ateneo de Manila University</div>
                  <div className="text-sm text-blue-200">"#1 university in Philippines, produces presidents and justices"</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in">
                <Shield className="text-[#27AE60] h-8 w-8" />
                <div>
                  <div className="font-semibold">Philippine Coconut Authority</div>
                  <div className="text-sm text-blue-200">"Government body overseeing largest agricultural export"</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-fade-in">
                <Globe className="text-[#17A2B8] h-8 w-8" />
                <div>
                  <div className="font-semibold">USAID Research Origin</div>
                  <div className="text-sm text-blue-200">"US development agency funding breakthrough technologies"</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#F39C12] hover:bg-[#E67E22] text-white px-8 py-4 text-lg">
                See Science in Action
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B365D] px-8 py-4 text-lg">
                Calculate Your Savings
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B365D] px-8 py-4 text-lg">
                Meet the Scientists
              </Button>
            </div>
          </div>

          {/* Right: Visual Comparison */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">The Science vs Guesswork Moment</h3>
            </div>
            
            {/* Comparison Visual */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Traditional Testing */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">👁️👃👅</div>
                  <h4 className="font-bold text-red-800 mb-2">Traditional Testing</h4>
                  <div className="space-y-2 text-sm text-red-600">
                    <div>Visual Inspection</div>
                    <div>Smell Testing</div>
                    <div>Taste Analysis</div>
                  </div>
                  <Badge variant="destructive" className="mt-4">Subjective • Unreliable</Badge>
                </CardContent>
              </Card>

              {/* VS Divider */}
              <div className="text-center">
                <div className="text-4xl font-bold text-[#F39C12]">VS</div>
                <div className="text-sm text-blue-200 mt-2">Subjective vs Scientific</div>
              </div>

              {/* WAMETER Device */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🔬📊⚗️</div>
                  <h4 className="font-bold text-green-800 mb-2">WAMETER™ Device</h4>
                  <div className="space-y-2 text-sm text-green-600">
                    <div>Scientific Measurement</div>
                    <div>±0.06 Aw Accuracy</div>
                    <div>15 Minutes Results</div>
                  </div>
                  <Badge className="mt-4 bg-green-600">Government Certified</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Cost Comparison */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-4 text-center">Cost Reality Check</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">₱800K</div>
                    <div className="text-sm">Premium Lab Equipment</div>
                    <div className="text-xs text-red-200">+ ₱50K monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">₱20K</div>
                    <div className="text-sm">WAMETER Device</div>
                    <div className="text-xs text-green-200">One-time cost</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section Component
const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ASEAN's ₱667 Billion Food Industry 
            <span className="text-red-600"> Still Relies on This</span>
          </h2>
        </div>

        {/* Center Stage Spotlight */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-2xl border-4 border-red-200">
            <CardContent className="p-12 text-center">
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="text-6xl">👁️</div>
                  <h3 className="text-xl font-bold text-gray-800">VISUAL INSPECTION</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-6xl">👃</div>
                  <h3 className="text-xl font-bold text-gray-800">SMELL TESTING</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-6xl">👅</div>
                  <h3 className="text-xl font-bold text-gray-800">TASTE ANALYSIS</h3>
                </div>
              </div>
              <div className="space-y-4">
                <Badge variant="destructive" className="text-lg px-6 py-2">
                  Subjective • Unreliable • Unauditable
                </Badge>
                <div className="text-2xl font-bold text-red-600">
                  STILL THE INDUSTRY DEFAULT
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-red-600 mb-2">₱339M</div>
              <div className="text-lg font-semibold">Lost Annually</div>
              <div className="text-sm text-gray-600">To quality failures</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">97%</div>
              <div className="text-lg font-semibold">MSMEs Locked Out</div>
              <div className="text-sm text-gray-600">Can't afford ₱800K equipment</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-yellow-600 mb-2">50%</div>
              <div className="text-lg font-semibold">Crops Wasted</div>
              <div className="text-sm text-gray-600">Due to uncertainty</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">17%</div>
              <div className="text-lg font-semibold">Global Food Waste</div>
              <div className="text-sm text-gray-600">Quality control failures</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// 5-Layer Platform Section
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
      icon: TrendingUp,
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
          {layers.map((layer, index) => (
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
              <layer.icon className="mr-2 h-5 w-5" />
              {layer.name}
            </Button>
          ))}
        </div>

        {/* Active Layer Display */}
        <Card className="max-w-4xl mx-auto shadow-2xl">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ backgroundColor: layers[activeLayer].color }}
              >
                <layers[activeLayer].icon className="h-10 w-10 text-white" />
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

// Contact Section Component
const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1B365D] to-[#2E5BBA] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Replace Guesswork with Science?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the scientific revolution that's transforming ASEAN's food safety infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Leadership Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F39C12] to-[#E67E22] rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  CS
                </div>
                <h3 className="text-2xl font-bold mb-2">Crystelle Soriano, CEO</h3>
                <p className="text-blue-200 italic">"Commercializing Filipino innovation for ASEAN benefit"</p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:crystellesoriano@gmail.com"
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#F39C12]" />
                  <span>crystellesoriano@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+639774695788"
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#F39C12]" />
                  <span>+63 977 469 5788</span>
                </a>
                
                <a 
                  href="https://bit.ly/crystelleLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Globe className="h-5 w-5 text-[#F39C12]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get Started Today</CardTitle>
              <CardDescription className="text-blue-200">
                Choose your path to scientific food safety
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200"
                />
                <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="">Select Your Interest</option>
                  <option value="msme">MSME Manufacturer</option>
                  <option value="investor">Investment Opportunity</option>
                  <option value="government">Government Partnership</option>
                  <option value="research">Research Collaboration</option>
                </select>
                <textarea
                  placeholder="Tell us about your food safety challenges..."
                  rows={4}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200"
                ></textarea>
              </div>
              
              <Button size="lg" className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white">
                Start Your Scientific Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
const ExceltraLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <ContactSection />
    </div>
  );
};

export default ExceltraLanding;
