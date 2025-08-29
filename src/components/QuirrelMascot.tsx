import React from 'react';
import quirrelImage from '@/assets/quirrel-mascot.png';

interface QuirrelMascotProps {
  message?: string;
  animation?: 'bounce' | 'wiggle' | 'float' | 'none';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function QuirrelMascot({ 
  message, 
  animation = 'none', 
  size = 'md',
  className = ''
}: QuirrelMascotProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const animationClasses = {
    bounce: 'mascot-bounce',
    wiggle: 'mascot-wiggle',
    float: 'animate-float',
    none: ''
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className={`relative ${sizeClasses[size]} ${animationClasses[animation]}`}>
        <img 
          src={quirrelImage} 
          alt="Quirrel the Squirrel" 
          className="w-full h-full object-cover rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        
        {/* Glowing effect for special moments */}
        {animation === 'float' && (
          <div className="absolute inset-0 rounded-full animate-glow -z-10" />
        )}
      </div>
      
      {message && (
        <div className="relative max-w-xs">
          {/* Speech bubble */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/20 relative">
            <p className="text-sm font-medium text-foreground text-center">
              {message}
            </p>
            {/* Speech bubble tail */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-primary/20 rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
}