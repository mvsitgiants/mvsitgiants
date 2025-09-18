
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div
      className="relative bg-secondary bg-cover bg-center"
      style={{ ...bgStyle, paddingTop: '80px', minHeight: '50vh' }}
    >
      <div className="absolute inset-0 bg-light opacity-60 sm:opacity-70"></div>
      {/* Enhanced Mobile Responsiveness */}
      <div className="relative max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-primary leading-tight">
          {title}
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#211da6e8] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;