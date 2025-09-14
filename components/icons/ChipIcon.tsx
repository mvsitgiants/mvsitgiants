
import React from 'react';
const ChipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l1.414 1.414m10.304 10.304l1.414 1.414M18.364 5.636l-1.414 1.414M6.05 18.364l-1.414 1.414M12 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
export default ChipIcon;
