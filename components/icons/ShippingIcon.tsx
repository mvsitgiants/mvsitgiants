import React from 'react';

const ShippingIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 mx-auto text-black" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-1.47-4.66L15.42 13h-5.9c-.55 0-1-.45-1-1s.45-1 1-1h6.18c.38 0 .72.22.89.55l3.28 6.56c.14.28.06.62-.16.82s-.56.24-.84.09L15.53 15z" />
    <path d="M8.5 11H3V6h5.5L10 8.5 8.5 11zM6.62 9H5v1h1.78l.42-1zM3 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2z" />
    <path d="M15 6h-3V3h3c1.66 0 3 1.34 3 3s-1.34 3-3 3h-1.2l-1.4-3H15V4.5h-1.5V6z"/>
  </svg>
);

export default ShippingIcon;
