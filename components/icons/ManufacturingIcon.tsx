import React from 'react';

const ManufacturingIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 mx-auto text-black" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    <path d="M22 10.5V9c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H7C5.9 3 5 3.9 5 5v2H4c-1.1 0-2 .9-2 2v1.5c0 .83.67 1.5 1.5 1.5S3 11.33 3 10.5V9c0-.55.45-1 1-1h1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v3h1c.55 0 1 .45 1 1v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5z"/>
    <path d="M20 14h-1.34c-.42-1.15-1.52-2-2.8-2s-2.37.85-2.8 2H7.14c-.42-1.15-1.52-2-2.8-2s-2.37.85-2.8 2H1v6h22v-6h-3zm-9 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
);

export default ManufacturingIcon;
