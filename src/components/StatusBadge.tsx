
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'normal' | 'warning' | 'critical';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'normal':
        return 'Normal';
      case 'warning':
        return 'Warning';
      case 'critical':
        return 'Critical';
      default:
        return 'Unknown';
    }
  };
  
  return (
    <span className={cn(
      'inline-block text-xs font-medium py-1 px-2 rounded-full border',
      getStatusClasses(),
      className
    )}>
      {getStatusText()}
    </span>
  );
};

export default StatusBadge;
