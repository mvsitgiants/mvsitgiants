import React from 'react';

const InspectionGateDesignValidationIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 mx-auto text-black" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm5-1h2v-1h-2v1zm0-2h2v-1h-2v1zm0-2h2v-1h-2v1zm-4 4h2v-1H7v1zm0-2h2v-1H7v1zm0-2h2v-1H7v1zm0-2h2v-1H7v1zm0-2h2v-1H7v1zm4-1h2v-1h-2v1zm0-2h2v-1h-2v1z"/>
  </svg>
);

export default InspectionGateDesignValidationIcon;
