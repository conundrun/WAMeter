
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, Globe } from 'lucide-react';

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

export default ContactSection;
