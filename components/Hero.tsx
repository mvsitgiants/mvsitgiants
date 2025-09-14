
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
      style={{ ...bgStyle, paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}
    >
      <div className="absolute inset-0 bg-light opacity-70"></div>
      {/* Added By Bhushan on 15_01_2025 - Fixed navbar overlap by adjusting container positioning */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-[#211da6e8]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;