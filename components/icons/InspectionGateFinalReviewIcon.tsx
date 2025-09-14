import React from 'react';

const InspectionGateFinalReviewIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 mx-auto text-black" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 15.44L8.41 15l-1.06 1.06 2.54 2.54 5.66-5.66-1.06-1.06z" />
    <path d="M12 11.5l-1.22 2.48-2.78.41 2 1.95-.47 2.77L12 17.87l2.47 1.24-.47-2.77 2-1.95-2.78-.41z" />
  </svg>
);

export default InspectionGateFinalReviewIcon;
