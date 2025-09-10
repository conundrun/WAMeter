
import React from 'react';

interface AppLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const AppLogo: React.FC<AppLogoProps> = ({ size = 'md', withText = true }) => {
  const logoSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className={`${logoSizes[size]} flex items-center justify-center rounded-md bg-primary text-primary-foreground font-bold`}>
        <span>EX</span>
      </div>
      {withText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold leading-none`}>ASSURE</span>
          <span className="text-xs text-muted-foreground">by Exceltra</span>
        </div>
      )}
    </div>
  );
};

export default AppLogo;
