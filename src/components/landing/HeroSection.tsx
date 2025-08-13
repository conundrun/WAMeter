import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, University, Shield, Globe } from 'lucide-react';
const HeroSection: React.FC = () => {
  const [currentAward, setCurrentAward] = useState(0);
  const awards = ["🏆 StartupQC Silver Winner (Quezon City Government Innovation Program)", "💰 Untrod Capital Award (Multinational Deep Technology Investment)", "📱 PLDT Best Technology (Philippines' National Telecom Leader)", "🌏 Leave-A-Nest Finalist (International Deep Tech Commercialization)"];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAward(prev => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return <section className="min-h-screen bg-gradient-to-br from-[#1B365D] via-[#2E5BBA] to-[#1B365D] text-white relative overflow-hidden">
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
                  <div className="text-sm text-blue-200">"US development funding breakthrough technologies"</div>
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
    </section>;
};
export default HeroSection;