
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-light p-8 rounded-lg shadow-md hover:shadow-accent/20 transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/30">
      <div className="text-accent mb-4">{React.cloneElement(service.icon, { className: "h-12 w-12" })}</div>
      <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-muted">{service.description}</p>
    </div>
  );
};

export default ServiceCard;