
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
      style={{ ...bgStyle, paddingTop: '80px', minHeight: '60vh' }}
    >
      <div className="absolute inset-0 bg-light opacity-60 sm:opacity-70"></div>
      {/* Added By Bhushan on 15_01_2025 - Fixed navbar overlap by adjusting container positioning */}
      {/* Added By Bhushan on 15_01_2025 - Improved mobile responsiveness and reduced height */}
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          {title}
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-[#211da6e8] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;