import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 'default', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8', 
    large: 'w-12 h-12'
  };

  const spinnerClass = sizeClasses[size] || sizeClasses.default;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <Loader2 className={`${spinnerClass} text-blue-400 animate-spin mx-auto mb-4`} />
          <p className="text-gray-300 text-lg">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <Loader2 className={`${spinnerClass} text-blue-400 animate-spin mx-auto mb-2`} />
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;