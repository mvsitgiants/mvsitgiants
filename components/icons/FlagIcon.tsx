import React from 'react';

const FlagIcon: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`relative ${className} pointer-events-none`}>
    <div className="absolute bottom-0 right-0 transform -rotate-12">
        {/* Pole */}
        <div className="w-1 h-24 bg-gray-700 absolute bottom-0 right-1/2"></div>
        {/* Flag */}
        <div className="w-24 h-14 bg-blue-900 absolute bottom-16 right-1/2 mr-1 flex items-center justify-center">
            {/* Lightbulb */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        </div>
        {/* Text */}
        <div className="absolute bottom-5 right-10 text-xs font-bold text-blue-900">
            <span className="block -mb-1">WE'RE</span>
            <span className="block">PART</span>
        </div>
         <div className="absolute -bottom-1 -right-4 text-xs font-bold text-blue-900">
            OF YOUR TEAM!
        </div>
    </div>
  </div>
);

export default FlagIcon;