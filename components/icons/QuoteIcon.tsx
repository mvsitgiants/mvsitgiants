import React from 'react';

const QuoteIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
  </svg>
);

export default QuoteIcon;