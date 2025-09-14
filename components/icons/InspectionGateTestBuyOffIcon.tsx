import React from 'react';

const InspectionGateTestBuyOffIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 mx-auto text-black" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm5.09-7.54L9.02 10.4l-1.06 1.06 3.13 3.13 5.66-5.66-1.06-1.06z"/>
  </svg>
);

export default InspectionGateTestBuyOffIcon;
