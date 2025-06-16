
import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import PlatformSection from '@/components/landing/PlatformSection';
import ContactSection from '@/components/landing/ContactSection';

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
