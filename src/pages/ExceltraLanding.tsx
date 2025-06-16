
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import PlatformSection from '@/components/landing/PlatformSection';
import ContactSection from '@/components/landing/ContactSection';

const ExceltraLanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#2E5BBA]">Exceltra</div>
          <Button 
            onClick={() => navigate('/login')}
            variant="outline"
            className="border-[#2E5BBA] text-[#2E5BBA] hover:bg-[#2E5BBA] hover:text-white"
          >
            Sign In to Dashboard
          </Button>
        </div>
      </header>
      
      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default ExceltraLanding;
