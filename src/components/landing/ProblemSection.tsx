
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

export default ProblemSection;
